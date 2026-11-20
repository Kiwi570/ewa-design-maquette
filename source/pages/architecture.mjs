/* Architecture : grand titre puis bande panoramique, les concours sur le globe (module globe-itineraire),
   l'habitat autonome, les éco-quartiers, le parti pris du non-photoréalisme. */
import { html } from '../../outils/gabarit.mjs';
import { appel } from '../gabarits/composants.mjs';

export const page = { cle: 'architecture', fichier: 'architecture', imagePartage: 'archi-cotier-1280.webp', css: ['globe.css'] };

export default (c) => {
  const A = c.donnees.archi;
  return html`
<section class="ouv-bande ecran conteneur" id="debut">
  <div class="bande-tete">
    <div>
      <p class="surtitre ouv-entree">${c.t('architecture.ouv.surtitre')}</p>
      <h1><span class="t-masque l"><span class="t-mot">${c.t('architecture.ouv.titre1')}</span></span><span class="t-masque l"><span class="t-mot">${c.t('architecture.ouv.titre2')}</span></span></h1>
    </div>
    <div>
      <p class="ouv-entree masque-ecran-bas">${c.t('architecture.ouv.texte')}</p>
      <p class="bande-actions ouv-entree">
        ${c.lien('contact', { ancre: 'demande', params: 'sujet=architecture', classe: 'bouton', texte: c.t('architecture.ouv.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
        <span class="split-info" data-info-cle>${c.t('architecture.ouv.info')}</span>
      </p>
    </div>
  </div>
  ${c.media({ nom: 'archi-cotier', alt: c.s('architecture.ouv.alt'), priorite: true, classe: 'bande-media ouv-media-rideau', cadrage: '54% 50%', sizes: '100vw', attrs: 'data-iris-centre data-effet="bande"' })}
</section>

<section class="gi section section--pierre" id="concours" data-module="globe-itineraire">
  <div class="gi__tete conteneur">
    <p class="surtitre">${c.t('architecture.concours.surtitre')}</p>
    <h2 class="gi__titre titre-section" data-anime="lignes">${c.t('architecture.concours.titre')}</h2>
    <p class="gi__intro chapeau">${c.t('architecture.concours.texte')}</p>
  </div>
  <div class="gi__corps conteneur">
    <div class="gi__scene" data-effet="globe">
      <div class="gi__globe">
        <canvas class="gi__toile" aria-hidden="true"></canvas>
        <p class="gi__compteur" aria-hidden="true">${c.t('architecture.concours.etape')} <b data-gi-n>1</b> / <span data-gi-total>${A.concours.length}</span></p>
      </div>
      <nav class="gi__nav" aria-label="${c.s('architecture.concours.region')}"></nav>
    </div>
    <ol class="gi__etapes" aria-label="${c.s('architecture.concours.region')}">
      ${A.concours.map((e, i) => html`<li class="gi__etape" id="concours-${i + 1}" data-lat="${e.lat}" data-lon="${e.lon}">
        <p class="gi__n"><b>${String(i + 1).padStart(2, '0')}</b><span>${e.lieu}</span></p>
        <h3>${e.titre}${e.statut ? html` <span class="gi-statut">${e.statut}</span>` : ''}</h3>
        ${e.image ? c.media({ nom: e.image, alt: e.titre, sizes: '(max-width: 900px) 90vw, 420px' }) : ''}
        <p>${e.texte}</p>
      </li>`)}
    </ol>
  </div>
</section>

<section class="section" id="habitat">
  <div class="conteneur">
    <div class="habitat-grille">
      <div>
        <p class="surtitre">${c.t('architecture.habitat.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('architecture.habitat.titre')}</h2>
        <p class="chapeau" data-anime>${c.t('architecture.habitat.texte')}</p>
        <ul class="principes" data-anime="cascade">
          ${A.principes.map((p) => html`<li><h3>${p.titre}</h3><p>${p.texte}</p></li>`)}
        </ul>
      </div>
      <figure class="habitat-figure" style="margin:0">
        ${c.media({ nom: 'habitat-coupe', alt: c.s('architecture.habitat.coupe'), classe: 'habitat-coupe', sizes: '(max-width: 860px) 100vw, 50vw', attrs: 'data-fx="zoom"' })}
        <figcaption class="legende">${c.t('architecture.habitat.coupe')}</figcaption>
      </figure>
    </div>
    <div class="habitat-galerie">
      ${c.media({ nom: 'habitat-lisiere', alt: 'Habitat autonome en bois en lisière de forêt', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe"' })}
      ${c.media({ nom: 'habitat-groupe', alt: 'Trois modules d\'habitat autonome reliés par une serre', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="14"' })}
    </div>
    <div class="tableau-cadre" tabindex="0" role="region" aria-label="${c.s('architecture.habitat.tableau')}">
      <table class="tableau-modeles" data-anime>
        <caption>${c.t('architecture.habitat.tableau')}</caption>
        <thead><tr><th scope="col">${c.t('architecture.habitat.modele')}</th><th scope="col">${c.t('architecture.habitat.occupants')}</th><th scope="col">${c.t('architecture.habitat.surface')}</th><th scope="col">${c.t('architecture.habitat.energie')}</th><th scope="col">${c.t('architecture.habitat.legumes')}</th></tr></thead>
        <tbody>${A.modeles.map((m) => html`<tr><th scope="row">${m.nom}</th><td>${m.occupants}</td><td>${m.surface} m²</td><td>${m.panneaux} m² · ${m.kwh} kWh</td><td>${m.legumes}</td></tr>`)}</tbody>
      </table>
    </div>
    <p class="trame-note">${c.t('architecture.habitat.note')}</p>
  </div>
</section>

<section class="section section--pierre" id="urbanisme">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('architecture.urba.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('architecture.urba.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('architecture.urba.texte')}</p>
    </div>
    <ul class="urba-grille" data-anime="cascade">
      ${A.urbanisme.map((u, i) => html`<li>${c.media({ nom: u.image, alt: u.titre, sizes: '(max-width: 860px) 100vw, 40vw', attrs: 'data-fx="vitesse"' })}<h3>${u.titre}</h3><p>${u.texte}</p></li>`)}
    </ul>
  </div>
</section>

<section class="section" id="esquisse">
  <div class="conteneur esquisse-grille">
    <div>
      <p class="surtitre">${c.t('architecture.esquisse.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('architecture.esquisse.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('architecture.esquisse.texte')}</p>
    </div>
    <div>
      ${c.media({ nom: 'croquis-villa-couleurs', alt: 'Villa contemporaine au bord d\'une piscine, croquis aux couleurs d\'estampe', classe: 'esquisse-grand', sizes: '(max-width: 860px) 100vw, 55vw', attrs: 'data-fx="onde"' })}
      <div class="esquisse-paire">
        <figure style="margin:0">${c.media({ nom: 'croquis-villa-encre', alt: 'Villa contemporaine dessinée à l\'encre, en noir et blanc', sizes: '(max-width: 860px) 50vw, 27vw', attrs: 'data-anime="rideau"' })}<figcaption class="legende">${c.t('architecture.esquisse.l2')}</figcaption></figure>
        <figure style="margin:0">${c.media({ nom: 'archi-rubans', alt: 'Croquis aquarellé d\'un complexe sportif en rubans fluides', sizes: '(max-width: 860px) 50vw, 27vw', cadrage: '50% 45%', attrs: 'data-anime="rideau"' })}<figcaption class="legende">${c.t('architecture.esquisse.l1')}</figcaption></figure>
      </div>
    </div>
  </div>
</section>

${appel(c, {
  image: 'croquis-art-chitecture', alt: c.s('architecture.fin.alt'), titre: c.t('architecture.fin.titre'), texte: c.t('architecture.fin.texte'), estampeImage: false,
  actions: [c.lien('contact', { ancre: 'demande', params: 'sujet=architecture', classe: 'bouton', texte: c.t('architecture.fin.action'), attrs: 'data-survol="magnetique"' })],
})}
`;
};
