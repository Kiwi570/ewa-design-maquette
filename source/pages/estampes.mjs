/* Estampes : l'œuvre en majesté, le principe, le catalogue filtrable avec sa visionneuse, les supports, les ventes. */
import { html } from '../../outils/gabarit.mjs';
import { estampe, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'estampes', fichier: 'estampes', imagePartage: 'chez-vente-4-960.webp' };

export default (c) => {
  const E = c.donnees.estampes;
  const total = E.series.reduce((n, s) => n + s.oeuvres.length, 0);
  return html`
<section class="ouv-majeste ecran" id="debut">
  <div class="majeste-texte">
    <p class="surtitre ouv-entree">${c.t('estampes.ouv.surtitre')}</p>
    <h1 data-grille="typo"><span class="t-masque l"><span class="t-mot">${c.t('estampes.ouv.titre1')}</span></span><span class="t-masque l"><span class="t-mot">${c.t('estampes.ouv.titre2')}</span></span><span class="t-masque l"><span class="t-mot">${c.t('estampes.ouv.titre3')}</span></span></h1>
    <p class="majeste-edition ouv-entree masque-ecran-tres-bas"><b>${c.t('estampes.ouv.edition')}</b><span>${c.t('estampes.ouv.editionTexte')}</span></p>
    <p class="ouv-entree masque-ecran-bas">${c.t('estampes.ouv.texte')}</p>
    <p class="split-actions ouv-entree"><a class="bouton" href="#catalogue" data-action-principale data-sans-transition data-survol="magnetique">${c.t('estampes.ouv.action')}</a></p>
    <p class="ouv-entree"><span class="split-info" data-info-cle>${c.t('estampes.ouv.info')}</span></p>
  </div>
  <div class="majeste-oeuvre">
    ${estampe(c, { nom: 'impulsions-f', alt: c.s('estampes.ouv.legende'), priorite: true, sizes: '(max-width: 760px) 78vw, 640px', attrs: 'data-iris-centre data-tirage data-effet="tirage-ouverture"' })}
    <p class="legende masque-ecran-bas">${c.t('estampes.ouv.legende')}</p>
  </div>
</section>

<section class="section section--pierre" id="principe">
  <div class="conteneur principe-grille">
    <div>
      <p class="surtitre">${c.t('estampes.principe.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.tb('estampes.principe.titre')}</h2>
      <ol class="etapes3" data-anime="cascade">
        ${[1, 2, 3].map((n) => html`<li><span class="n">0${n}</span><h3>${c.t(`estampes.principe.e${n}t`)}</h3><p>${c.t(`estampes.principe.e${n}`)}</p></li>`)}
      </ol>
    </div>
    ${c.media({ nom: 'chez-vente-8', alt: c.s('estampes.principe.alt'), classe: 'principe-media', sizes: '(max-width: 860px) 100vw, 30vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="section" id="catalogue">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('estampes.catalogue.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.tb('estampes.catalogue.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('estampes.catalogue.texte')}<br><b>${E.commun}</b></p>
    </div>
    <div role="group" aria-label="${c.s('estampes.catalogue.filtres')}"><ul class="filtres" data-filtres>
      <li><button type="button" data-filtre="toutes" aria-pressed="true">${c.t('estampes.catalogue.toutes')}<span>${total}</span></button></li>
      ${E.series.map((s) => html`<li><button type="button" data-filtre="${s.cle}" aria-pressed="false">${s.nom}<span>${s.oeuvres.length}</span></button></li>`)}
    </ul></div>
    <ul class="catalogue-grille" data-catalogue data-anime="cascade">
      ${E.series.flatMap((s) => s.oeuvres.map(([nom, code]) => html`<li class="fiche" data-serie="${s.cle}">
        <button type="button" class="fiche-bouton" data-oeuvre="${nom}" data-titre="${s.nom}${s.annee ? ' ' + s.annee : ''} ${code}" data-formats="${s.formats.join(' · ')}" data-image="/assets/images/${nom}-1600.webp" aria-haspopup="dialog">
          ${estampe(c, { nom, alt: `${s.nom}${s.annee ? ' ' + s.annee : ''} ${code}`, sizes: '(max-width: 560px) 90vw, 300px', attrs: 'data-tirage' })}
          <span class="fiche-nom">${s.nom} <span>${code}</span></span>
          <span class="fiche-format">${s.format}${s.annee ? ' · ' + s.annee : ''}</span>
        </button>
      </li>`))}
    </ul>
  </div>
</section>

<div class="visionneuse" data-visionneuse role="dialog" aria-modal="true" aria-label="${c.s('commun.visionneuse')}" data-recouvrement hidden>
  <div class="vis-commandes">
    <button type="button" data-vis-prec aria-label="${c.s('commun.precedent')}">←</button>
    <button type="button" data-vis-suiv aria-label="${c.s('commun.suivant')}">→</button>
    <button type="button" class="vis-loupe-bouton" data-vis-loupe aria-pressed="false">${c.t('commun.loupe')}</button>
    <button type="button" class="vis-fermer" data-vis-fermer>${c.t('estampes.catalogue.fermer')}</button>
  </div>
  <div class="vis-boite">
    <div class="vis-image"><img data-vis-img src="/assets/images/impulsions-i-a-960.webp" alt="" width="1600" height="1600"></div>
    <div class="vis-infos">
      <h2 data-vis-titre tabindex="-1">Impulsions</h2>
      <p class="vis-astuce">${c.t('estampes.catalogue.loupe')}</p>
      <dl>
        <div><dt>${c.t('estampes.catalogue.formats')}</dt><dd data-vis-formats></dd></div>
        <div><dt>${c.t('estampes.catalogue.supports')}</dt><dd>${c.t('estampes.catalogue.supportsListe')}</dd></div>
        <div><dt>${c.t('estampes.catalogue.edition')}</dt><dd>${c.t('estampes.catalogue.editionValeur')}</dd></div>
        <div><dt>${c.t('estampes.catalogue.prix')}</dt><dd>${c.t('estampes.catalogue.prixValeur')}</dd></div>
      </dl>
      <a class="bouton" data-vis-demander href="${c.url('contact', 'demande', 'sujet=estampe')}" data-libelle="${c.libelle('contact')}">${c.t('estampes.catalogue.demander')}</a>
    </div>
  </div>
</div>

<section class="section section--pierre" id="supports">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('estampes.supports.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.tb('estampes.supports.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('estampes.supports.texte')}</p>
    </div>
    <ul class="supports-grille" data-anime="cascade">
      ${E.supports.map((s) => html`<li data-survol="incline">${c.media({ nom: s.image, alt: s.nom, sizes: '(max-width: 480px) 100vw, (max-width: 960px) 50vw, 25vw' })}<h3>${s.nom}</h3><p>${s.texte}</p></li>`)}
    </ul>
  </div>
</section>

<section class="section" id="ventes">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('estampes.ventes.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.tb('estampes.ventes.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('estampes.ventes.texte')}</p>
    </div>
    <ul class="ventes-grille" data-anime="cascade">
      ${E.ventes.map((v) => html`<li>${c.media({ nom: v.image, alt: `${v.texte}, ${v.lieu}, ${v.annee}`, sizes: '(max-width: 860px) 50vw, 25vw', attrs: 'data-fx="vitesse"' })}<p><b>${v.lieu} · ${v.annee}</b>${v.texte}</p></li>`)}
    </ul>
  </div>
</section>

${appel(c, {
  image: 'impulsions-i-b', alt: c.s('estampes.fin.alt'), titre: c.tb('estampes.fin.titre'), texte: c.t('estampes.fin.texte'),
  actions: [c.lien('contact', { ancre: 'demande', params: 'sujet=estampe', classe: 'bouton', texte: c.t('estampes.fin.action'), attrs: 'data-survol="magnetique"' })],
})}
`;
};
