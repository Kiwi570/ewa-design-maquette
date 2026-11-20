/* Design & sculpture : le lustre en portrait à gauche, le titre à droite ; kiosques, intérieurs, planches des luminaires, sculptures. */
import { html } from '../../outils/gabarit.mjs';
import { appel, plusGrande } from '../gabarits/composants.mjs';

export const page = { cle: 'design-sculpture', fichier: 'design-sculpture', imagePartage: 'lustre-verre-1280.webp' };

export default (c) => {
  const D = c.donnees.design;
  return html`
<section class="ouv-portrait ecran" id="debut">
  ${c.media({ nom: 'lustre-verre', alt: 'Lustre de plaques de verre colorées suspendu dans un hall', priorite: true, classe: 'portrait-media ouv-media-rideau', cadrage: '50% 45%', sizes: '(max-width: 760px) 80vw, 40vw', attrs: 'data-iris-centre data-effet="portrait"' })}
  <div>
    <p class="surtitre ouv-entree">${c.t('design.ouv.surtitre')}</p>
    <h1><span class="t-masque l"><span class="t-mot">${c.t('design.ouv.titre1')}</span></span><span class="t-masque l"><span class="t-mot">${c.t('design.ouv.titre2')}</span></span></h1>
    <p class="chapeau ouv-entree masque-ecran-bas">${c.t('design.ouv.texte')}</p>
    <p class="split-actions ouv-entree">${c.lien('contact', { ancre: 'demande', params: 'sujet=design', classe: 'bouton', texte: c.t('design.ouv.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="ouv-entree"><span class="split-info" data-info-cle>${c.t('design.ouv.info')}</span></p>
  </div>
</section>

<section class="section section--pierre" id="commercial">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('design.commercial.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('design.commercial.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('design.commercial.texte')}</p>
    </div>
    <div class="kiosques-grille">
      <div>
        ${c.media({ nom: 'kiosque-1', alt: 'Kiosque The Crêpe Café en noir et jaune dans une galerie marchande', classe: 'kiosque-grand', sizes: '(max-width: 860px) 100vw, 60vw', attrs: 'data-fx="parallaxe"' })}
        <div class="kiosque-paire">
          ${c.media({ nom: 'kiosque-2', alt: 'Comptoir du kiosque The Crêpe Café et sa zone de consommation', sizes: '(max-width: 860px) 60vw, 35vw', attrs: 'data-anime="rideau"' })}
          ${c.media({ nom: 'kiosque-3', alt: 'Vue plongeante sur la cuisine et le comptoir d\'un kiosque', sizes: '(max-width: 860px) 40vw, 22vw', attrs: 'data-anime="rideau"' })}
        </div>
      </div>
      <table class="kiosques-table" data-anime>
        <thead><tr><th scope="col">${c.t('design.commercial.mall')}</th><th scope="col">${c.t('design.commercial.total')}</th><th scope="col">${c.t('design.commercial.kiosque')}</th></tr></thead>
        <tbody>${D.kiosques.map((k) => html`<tr><th scope="row">${k.nom}</th><td><span data-compteur="${k.total}">${k.total}</span> <small>m²</small></td><td><span data-compteur="${k.kiosque}">${k.kiosque}</span> <small>m²</small></td></tr>`)}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="section" id="interieur">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('design.interieur.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('design.interieur.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('design.interieur.texte')}</p>
    </div>
    <div class="interieurs">
      ${c.media({ nom: 'interieur-salon', alt: 'Salon aux formes organiques sous un grand plafond courbe', sizes: '(max-width: 760px) 100vw, 60vw', attrs: 'data-fx="parallaxe"' })}
      ${c.media({ nom: 'interieur-banquette', alt: 'Banquette blanche organique éclairée par le bas', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="vitesse"' })}
      ${c.media({ nom: 'interieur-riad', alt: 'Lanterne de laiton sous une coupole de plâtre sculpté', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="vitesse"' })}
    </div>
  </div>
</section>

<section class="section section--pierre" id="luminaires">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('design.luminaires.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('design.luminaires.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('design.luminaires.texte')}</p>
    </div>
    <ul class="planches" data-anime="cascade">
      ${D.luminaires.map((l) => html`<li><button type="button" class="planche-bouton" data-planche data-image="${plusGrande(l.image)}" data-titre="${l.nom}" data-texte="${l.texte}" aria-haspopup="dialog" aria-label="${c.s('design.luminaires.ouvrir')} ${l.nom}">
        ${c.media({ nom: l.image, alt: '', sizes: '(max-width: 860px) 50vw, 25vw' })}
        <b>${l.nom}</b><span>${l.texte}</span>
      </button></li>`)}
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
    <div class="vis-image"><img data-vis-img src="/assets/images/lum-ondoring-960.webp" alt="" width="1199" height="1312"></div>
    <div class="vis-infos"><h2 data-vis-titre tabindex="-1">Ondoring</h2><p data-vis-texte></p>
      <a class="bouton" href="${c.url('contact', 'demande', 'sujet=design')}" data-libelle="${c.libelle('contact')}">${c.t('design.fin.action')}</a></div>
  </div>
</div>

<section class="section" id="sculptures">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('design.sculptures.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('design.sculptures.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('design.sculptures.texte')}</p>
    </div>
    <div class="sculptures-grille">
      <figure style="margin:0">${c.media({ nom: 'sculpture-corten', alt: 'Sculpture d\'acier Corten aux ailes effilées sur un rond-point planté', classe: 'sculpture-grand', sizes: '(max-width: 760px) 100vw, 62vw', attrs: 'data-fx="zoom"' })}<figcaption class="legende">${c.t('design.sculptures.l1')}</figcaption></figure>
      <div class="sculpture-col">
        ${c.media({ nom: 'sculpture-corten-2', alt: 'Sculpture d\'acier Corten en rubans tendus', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-fx="parallaxe"' })}
        <figure style="margin:0">${c.media({ nom: 'installation-lumiere', alt: 'Installation murale lumineuse de verre coloré dans un hall', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-anime="rideau"' })}<figcaption class="legende">${c.t('design.sculptures.l2')}</figcaption></figure>
      </div>
    </div>
  </div>
</section>

${appel(c, {
  image: 'interieur-sombre', alt: 'Salle de bain sombre aux niches lumineuses et baignoire noire', titre: c.t('design.fin.titre'), texte: c.t('design.fin.texte'), estampeImage: false,
  actions: [c.lien('contact', { ancre: 'demande', params: 'sujet=design', classe: 'bouton', texte: c.t('design.fin.action'), attrs: 'data-survol="magnetique"' })],
})}
`;
};
