/* Contact : l'adresse e-mail en très grand, puis la demande en quatre étapes (module formulaire-par-etapes, simulée). */
import { html, brut } from '../../outils/gabarit.mjs';
import { estampe } from '../gabarits/composants.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'chez-vente-3-960.webp', css: ['formulaire.css'] };

const icones = {
  estampe: '<rect x="7" y="7" width="18" height="18"/><path d="M7 21l6-6 4 4 3-3 5 5"/>',
  architecture: '<path d="M5 26h22M8 26V12l8-6 8 6v14M13 26v-7h6v7"/>',
  design: '<path d="M16 4v6M10 10h12l-3 9h-6z"/><path d="M13 23h6M16 19v4"/>',
  exposition: '<rect x="5" y="6" width="22" height="16"/><path d="M11 26h10M16 22v4"/>',
};

export default (c) => {
  const F = (k) => c.t(`contact.form.${k}`);
  const E = c.donnees.estampes;
  return html`
<section class="ouv-lettre ecran" id="debut">
  <div>
    <p class="surtitre ouv-entree">${c.t('contact.ouv.surtitre')}</p>
    <h1 data-grille="typo"><span class="t-masque l"><span class="t-mot">${c.t('contact.ouv.titre')}</span></span></h1>
    <p class="chapeau ouv-entree masque-ecran-bas">${c.t('contact.ouv.texte')}</p>
    <a class="lettre-email ouv-entree" href="mailto:${c.site.contact.email}" data-info-cle>${c.site.contact.email}</a>
    <span class="lettre-email-ligne" aria-hidden="true"></span>
    <dl class="lettre-infos ouv-entree">
      <div><dt>${c.t('contact.ouv.ville')}</dt><dd>${c.site.contact.ville}</dd></div>
      <div><dt>${c.t('contact.ouv.info')}</dt><dd>${c.site.contact.email}</dd></div>
    </dl>
    <p class="split-actions ouv-entree"><a class="bouton" href="#demande" data-action-principale data-sans-transition>${c.t('contact.ouv.action')}</a></p>
  </div>
  ${estampe(c, { nom: 'splash-a', alt: c.s('contact.ouv.alt'), priorite: true, classe: 'lettre-oeuvre', sizes: '(max-width: 760px) 240px, 460px', attrs: 'data-iris-centre data-tirage data-effet="tirage-ouverture"' })}
</section>

<section class="section section--pierre fpe" id="demande" data-module="formulaire-par-etapes">
  <div class="conteneur form-grille">
    <div>
      <p class="surtitre">${F('surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.tb('contact.form.titre')}</h2>
      <p class="chapeau" data-anime>${F('texte')}</p>
    </div>
    <div class="fpe__carton" data-anime>
      <form class="fpe__form" action="#" method="post" novalidate>
        <div class="fpe__progression">
          <ol class="fpe__reperes" aria-label="Progression"></ol>
          <div class="fpe__barre" aria-hidden="true"><span></span></div>
          <p class="fpe__etat" aria-live="polite"></p>
        </div>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape1')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${F('q1')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="Objet">
            ${[['estampe', 1], ['architecture', 2], ['design', 3], ['exposition', 4]].map(([v, n], i) => html`<label class="fpe__carte"><input type="radio" name="objet" value="${v}"${i === 0 ? ' required' : ''}>
              <svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true">${brut(icones[v])}</svg>
              <span class="fpe__carte-titre">${F(`o${n}`)}</span><span class="fpe__carte-texte">${F(`o${n}t`)}</span></label>`)}
          </div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape2')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${F('q2')}</h3></legend>
          <div class="fpe__champ"><label for="f-oeuvre">${F('oeuvre')}</label><input id="f-oeuvre" name="oeuvre" data-libelle="Œuvre"></div>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="f-format">${F('format')}</label><select id="f-format" name="format" data-libelle="Format"><option value="">${F('formatChoix')}</option>${['30 × 30 cm', '60 × 60 cm', '90 × 90 cm', '105 × 70 cm', '50 × 115 cm'].map((f) => html`<option>${f}</option>`)}</select></div>
            <div class="fpe__champ"><label for="f-support">${F('support')}</label><select id="f-support" name="support" data-libelle="Support"><option value="">${F('supportChoix')}</option>${E.supports.map((s) => html`<option>${s.nom}</option>`)}</select></div>
          </div>
          <div class="fpe__champ"><label for="f-message">${F('message')} <i aria-hidden="true">*</i></label><textarea id="f-message" name="message" rows="5" minlength="10" required data-libelle="Message"></textarea></div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape3')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${F('q3')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="f-nom">${F('nom')} <i aria-hidden="true">*</i></label><input id="f-nom" name="nom" autocomplete="name" required data-libelle="Nom"></div>
            <div class="fpe__champ"><label for="f-email">${F('email')} <i aria-hidden="true">*</i></label><input id="f-email" name="email" type="email" autocomplete="email" required data-libelle="E-mail"></div>
            <div class="fpe__champ"><label for="f-tel">${F('telephone')}</label><input id="f-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{8,20}" data-libelle="Téléphone"></div>
          </div>
          <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-libelle="Accord" data-hors-recap><span class="fpe__choix-texte">${F('accord')} <i aria-hidden="true">*</i></span></label>
          <p class="mention-donnees">${F('rgpd')}</p>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape4')}" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre">${F('q4')}</h3></legend>
          <div class="fpe__recap"><p>…</p></div>
        </fieldset>
        <div class="fpe__nav">
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${F('retour')}</button>
          <button class="fpe__bouton" type="button" data-suivant data-retour="${c.s('contact.form.q4')}">${F('continuer')}</button>
          <button class="fpe__bouton" type="submit">${F('envoyer')}</button>
        </div>
      </form>
      <div class="fpe__fin" data-grille="retour" hidden>
        <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
        <h3>${F('merci')}</h3>
        <p data-resume></p>
        <p data-message-envoi>${F('simule')}</p>
        <div class="fpe__fin-actions">
          <a class="fpe__bouton" href="mailto:${c.site.contact.email}" data-mailto hidden>E-mail</a>
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${F('nouvelle')}</button>
        </div>
      </div>
    </div>
  </div>
</section>
`;
};
