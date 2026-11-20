/* Parcours propres à EWA Design : filtres du catalogue (adresse gardée), visionneuse (focus, Échap, flèches,
   lien direct ?oeuvre=), carrés gigognes et trame (boutons), formulaire par étapes prérempli depuis l'adresse. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  for (const taille of ['390×844', '1366×768']) {
    const { ctx, page } = await contexte({ taille: T(taille) });
    try {
      /* Filtres : seule la série choisie reste, l'adresse garde le filtre, « Toutes » remet tout. */
      await page.goto(BASE + '/estampes', { waitUntil: 'load' });
      await attendrePret(page);
      await page.locator('[data-filtre="splash"]').scrollIntoViewIfNeeded();
      await page.locator('[data-filtre="splash"]').click();
      await attendre(600);
      const f = await page.evaluate(() => ({
        visibles: [...document.querySelectorAll('.fiche')].filter((li) => !li.hidden).map((li) => li.dataset.serie),
        url: location.search,
      }));
      if (!f.visibles.length || f.visibles.some((s) => s !== 'splash')) R.echec('filtres', `après « Splash » : ${f.visibles.join(', ')}`, { page: '/estampes', taille });
      if (!/serie=splash/.test(f.url)) R.echec('filtres', 'le filtre n’est pas gardé dans l’adresse', { page: '/estampes', taille });
      await page.locator('[data-filtre="toutes"]').click();
      await attendre(600);
      const n = await page.evaluate(() => [...document.querySelectorAll('.fiche')].filter((li) => !li.hidden).length);
      if (n < 30) R.echec('filtres', `« Toutes » ne remet que ${n} œuvres`, { page: '/estampes', taille });

      /* Visionneuse : ouverture au clic, focus dedans, flèche droite change l'œuvre, Échap ferme et rend le focus. */
      const premier = page.locator('[data-oeuvre]').first();
      await premier.scrollIntoViewIfNeeded();
      await premier.click();
      await attendre(500);
      const v1 = await page.evaluate(() => ({ ouverte: !document.querySelector('[data-visionneuse]').hidden, titre: document.querySelector('[data-vis-titre]').textContent, focus: !!document.activeElement.closest('[data-visionneuse]'), lien: document.querySelector('[data-vis-demander]').getAttribute('href') }));
      if (!v1.ouverte) R.echec('visionneuse', 'ne s’ouvre pas au clic', { page: '/estampes', taille });
      if (!v1.focus) R.echec('visionneuse', 'le focus n’est pas dans la visionneuse', { page: '/estampes', taille });
      if (!/oeuvre=/.test(v1.lien)) R.echec('visionneuse', '« Demander ce tirage » ne transmet pas l’œuvre', { page: '/estampes', taille });
      await page.keyboard.press('ArrowRight');
      await attendre(200);
      const t2 = await page.evaluate(() => document.querySelector('[data-vis-titre]').textContent);
      if (t2 === v1.titre) R.echec('visionneuse', 'la flèche droite ne change pas d’œuvre', { page: '/estampes', taille });
      await page.keyboard.press('Escape');
      await attendre(500);
      const v2 = await page.evaluate(() => ({ cachee: document.querySelector('[data-visionneuse]').hidden, focus: document.activeElement && document.activeElement.matches('[data-oeuvre]') }));
      if (!v2.cachee) R.echec('visionneuse', 'Échap ne la ferme pas', { page: '/estampes', taille });
      if (!v2.focus) R.regarder('visionneuse', 'le focus ne revient pas sur l’œuvre', { page: '/estampes', taille });

      /* Lien direct vers une œuvre. */
      await page.goto(BASE + '/estampes?oeuvre=splash-a', { waitUntil: 'load' });
      await attendrePret(page);
      await attendre(400);
      const d = await page.evaluate(() => ({ ouverte: !document.querySelector('[data-visionneuse]').hidden, titre: document.querySelector('[data-vis-titre]').textContent }));
      if (!d.ouverte || !/Splash/.test(d.titre)) R.echec('visionneuse', 'le lien ?oeuvre=splash-a n’ouvre pas l’œuvre', { page: '/estampes', taille });

      /* Accueil : boutons des formats et de la trame. */
      await page.goto(BASE + '/', { waitUntil: 'load' });
      await attendrePret(page);
      await page.locator('[data-gig-choix="60"]').scrollIntoViewIfNeeded();
      await attendre(2800);
      await page.locator('[data-gig-choix="60"]').click();
      await attendre(900);
      const g = await page.evaluate(() => ({ t: document.querySelector('[data-gig-taille]').textContent, p: document.querySelector('[data-gig-choix="60"]').getAttribute('aria-pressed') }));
      if (g.t !== '60' || g.p !== 'true') R.echec('gigogne', `bouton 60 : taille ${g.t}, pressé ${g.p}`, { page: '/', taille });
      await page.locator('[data-trame-choix="1"]').scrollIntoViewIfNeeded();
      await attendre(4200);
      await page.locator('[data-trame-choix="1"]').click();
      await attendre(700);
      const tr = await page.evaluate(() => ({ allumes: document.querySelectorAll('.trame-plan .module.allume').length, surface: document.querySelector('[data-trame-val="surface"]').textContent }));
      if (tr.allumes !== 8 || tr.surface !== '135') R.echec('trame', `M 004 : ${tr.allumes} cases, ${tr.surface} m²`, { page: '/', taille });

      /* Contact prérempli depuis la visionneuse. */
      await page.goto(BASE + '/contact?sujet=estampe&oeuvre=Splash%20A#demande', { waitUntil: 'load' });
      await attendrePret(page);
      await attendre(600);
      const c = await page.evaluate(() => ({ sujet: (document.querySelector('input[name="objet"]:checked') || {}).value, oeuvre: document.querySelector('#f-oeuvre').value }));
      if (c.sujet !== 'estampe' || c.oeuvre !== 'Splash A') R.echec('formulaire', `prérempli : objet ${c.sujet}, œuvre ${c.oeuvre}`, { page: '/contact', taille });
      /* Étape suivante sans message : erreur à côté du champ, pas d'avancée. */
      await page.locator('[data-suivant]').click();
      await attendre(500);
      await page.locator('[data-suivant]').click();
      await attendre(500);
      const e = await page.evaluate(() => document.querySelector('#f-message').getAttribute('aria-invalid'));
      if (e !== 'true') R.echec('formulaire', 'le message vide n’est pas signalé', { page: '/contact', taille });
    } finally { await ctx.close(); }
  }
}
