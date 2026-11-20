/* L'atelier : « 2012 » en très grand, les métiers, le parcours en frise, les éditions ARTBOXY, la presse. */
import { html } from '../../outils/gabarit.mjs';
import { appel, logo, plusGrande } from '../gabarits/composants.mjs';

export const page = { cle: 'atelier', fichier: 'atelier', imagePartage: 'croquis-villa-couleurs-1280.webp' };

export default (c) => {
  const T = c.donnees.atelier;
  return html`
<section class="ouv-annee ecran" id="debut">
  <p class="annee-grand" aria-hidden="true"><span class="t-masque"><span class="t-mot" data-annee>2012</span></span></p>
  <div class="annee-texte">
    <p class="surtitre ouv-entree">${c.t('atelier.ouv.surtitre')}</p>
    <h1 class="ouv-entree">${c.t('atelier.ouv.titre')}</h1>
    <p class="chapeau ouv-entree masque-ecran-bas">${c.t('atelier.ouv.texte')}</p>
    <p class="split-actions ouv-entree">${c.lien('contact', { ancre: 'demande', params: 'sujet=exposition', classe: 'bouton', texte: c.t('atelier.ouv.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="ouv-entree"><span class="split-info" data-info-cle>${c.t('atelier.ouv.info')}</span></p>
  </div>
  ${c.media({ nom: 'grok/atelier-table', alt: c.s('atelier.ouv.alt'), priorite: true, classe: 'annee-media ouv-media-rideau', cadrage: '50% 55%', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-iris-centre data-effet="table"' })}
</section>

<section class="section section--encre" id="metiers">
  <div class="conteneur">
    <p class="surtitre">${c.t('atelier.metiers.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('atelier.metiers.titre')}</h2>
    <ul class="metiers-liste" data-anime="cascade">
      ${T.metiers.map((m) => html`<li>${c.lien(m.page, { ancre: m.ancre || '', texte: html`<b>${m.nom}</b><span>${m.texte}</span><i aria-hidden="true">→</i>` })}</li>`)}
    </ul>
  </div>
</section>

<section class="section" id="parcours">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('atelier.parcours.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('atelier.parcours.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('atelier.parcours.collab')}</p>
    </div>
    <ol class="frise" data-effet="frise" data-anime="cascade">
      ${T.parcours.map((p) => html`<li><span class="annee">${p.annee}</span><div><h3>${p.titre}</h3><p>${p.texte}</p></div></li>`)}
    </ol>
  </div>
</section>

<section class="section section--pierre" id="expositions">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('atelier.expos.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('atelier.expos.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('atelier.expos.texte')}</p>
    </div>
    <ul class="editions" data-anime="cascade">${T.editions.map((e) => html`<li>${e}</li>`)}</ul>
    <p class="galeries-titre" style="color:var(--texte-doux);margin-top:clamp(36px,5vw,64px)">${c.t('atelier.expos.galeries')}</p>
    <div class="galeries" style="margin-top:0">
      <div class="galeries-ruban" id="ruban-galeries-atelier" data-boucle-css data-ruban>
        <div class="galeries-piste">${[...T.galeries, ...T.galeries].map(([n, a], i) => logo(c, n, a, i >= T.galeries.length))}</div>
      </div>
      <button type="button" class="ruban-pause" data-pause-pour="ruban-galeries-atelier" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button>
    </div>
  </div>
</section>

<section class="section" id="presse">
  <div class="conteneur">
    <p class="surtitre">${c.t('atelier.presse.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('atelier.presse.titre')}</h2>
    <ul class="presse-grille" data-anime="cascade">
      ${T.presse.map((p) => html`<li><button type="button" class="planche-bouton" data-planche data-image="${plusGrande(p.image)}" data-titre="${p.titre}" data-texte="${p.texte}" aria-haspopup="dialog" aria-label="${c.s('atelier.presse.ouvrir')} : ${p.titre}">
        ${c.media({ nom: p.image, alt: '', sizes: '(max-width: 960px) 45vw, 20vw' })}<b>${p.titre}</b><span>${p.texte}</span></button></li>`)}
    </ul>
  </div>
</section>

<div class="visionneuse" data-visionneuse role="dialog" aria-modal="true" aria-label="${c.s('commun.visionneuse')}" data-recouvrement hidden>
  <div class="vis-commandes">
    <button type="button" data-vis-prec aria-label="${c.s('commun.precedent')}">←</button>
    <button type="button" data-vis-suiv aria-label="${c.s('commun.suivant')}">→</button>
    <button type="button" class="vis-fermer" data-vis-fermer>${c.t('commun.fermer')}</button>
  </div>
  <div class="vis-boite">
    <div class="vis-image"><img data-vis-img src="/assets/images/presse-accrochages-960.webp" alt="" width="960" height="1225"></div>
    <div class="vis-infos"><h2 data-vis-titre tabindex="-1">Accrochages</h2><p data-vis-texte></p></div>
  </div>
</div>

${appel(c, {
  image: 'splash-b', alt: 'Splash B, estampe en noir et blanc', titre: c.t('atelier.fin.titre'), texte: c.t('atelier.fin.texte'),
  actions: [c.lien('contact', { ancre: 'demande', params: 'sujet=exposition', classe: 'bouton', texte: c.t('atelier.fin.action'), attrs: 'data-survol="magnetique"' })],
})}
`;
};
