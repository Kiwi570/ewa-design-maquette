/* Accueil EWA Design : l'écran coupé par la barre du logo (ART | CHITECTURE), puis la démarche, les séries,
   les formats gigognes, l'architecture en plein écran, la trame de l'habitat autonome, le design, les expositions. */
import { html } from '../../outils/gabarit.mjs';
import { estampe, appel, logo } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'archi-rubans-1440.webp' };

export default (c) => {
  const E = c.donnees.estampes, A = c.donnees.archi, AT = c.donnees.atelier;
  const m0 = A.modeles[A.modeles.length - 1];
  /* Trame de 5 × 4 cases de 4 m : ordre de remplissage qui garde une maison compacte, la serre au centre. */
  const ordre = [7, 6, 8, 12, 2, 11, 13, 1, 3, 17, 16, 18, 5, 9, 10, 14, 0, 4, 15, 19];
  const cases = Array.from({ length: 20 }, (_, i) => ({ x: (i % 5) * 20, y: Math.floor(i / 5) * 20, rang: ordre.indexOf(i) }));
  return html`
<section class="ouv-split ecran" id="debut">
  <div class="split-art">
    ${estampe(c, { nom: 'impulsions-i-a', alt: c.s('accueil.ouv.legendeArt'), priorite: true, sizes: '(max-width: 760px) 46vw, 520px', attrs: 'data-iris-centre data-tirage data-effet="tirage-ouverture"' })}
    <p class="legende masque-ecran-bas">${c.t('accueil.ouv.legendeArt')}</p>
  </div>
  <span class="split-barre" data-effet="barre" aria-hidden="true"></span>
  <div class="split-chi">
    ${c.media({ nom: 'archi-rubans', alt: c.s('accueil.ouv.legendeChi'), classe: 'ouv-media-rideau', sizes: '(max-width: 760px) 46vw, 56vw', cadrage: '50% 45%', attrs: 'data-effet="split-chi" data-boucle-css' })}
    <p class="legende masque-ecran-bas">${c.t('accueil.ouv.legendeChi')}</p>
  </div>
  <div class="split-titre">
    <p class="surtitre ouv-entree masque-ecran-tres-bas">${c.t('accueil.ouv.surtitre')}</p>
    <h1 class="titre-split"><span class="t-masque"><span class="t-mot t-art">${c.t('accueil.ouv.art')}</span></span><span class="t-barre" aria-hidden="true"></span><span class="t-masque"><span class="t-mot">${c.t('accueil.ouv.chi')}</span></span></h1>
  </div>
  <div class="split-texte">
    <p class="ouv-entree masque-ecran-petit">${c.t('accueil.ouv.texte')}</p>
    <p class="split-actions ouv-entree">
      ${c.lien('estampes', { ancre: 'catalogue', classe: 'bouton', texte: c.t('accueil.ouv.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('architecture', { classe: 'bouton bouton--contour masque-ecran-tres-bas', texte: c.t('accueil.ouv.second') })}
    </p>
    <p class="split-info-ligne ouv-entree"><span class="split-info" data-info-cle>${c.t('accueil.ouv.info')}</span></p>
  </div>
</section>

<section class="section" id="demarche">
  <div class="conteneur demarche-grille">
    <div>
      <p class="surtitre">${c.t('accueil.demarche.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.demarche.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('accueil.demarche.texte')}</p>
      <ol class="engagements" data-anime="cascade">
        ${[1, 2, 3].map((n) => html`<li><span class="n">0${n}</span><h3>${c.t(`accueil.demarche.e${n}t`)}</h3><p>${c.t(`accueil.demarche.e${n}`)}</p></li>`)}
      </ol>
    </div>
    ${c.media({ nom: 'grok/atelier-tirage', alt: c.s('accueil.demarche.alt'), classe: 'demarche-media', cadrage: '55% 50%', sizes: '(max-width: 860px) 100vw, 45vw', attrs: 'data-fx="parallaxe"' })}
  </div>
</section>

<section class="section section--pierre series" id="series" data-effet="series">
  <div class="conteneur tete-section">
    <div>
      <p class="surtitre">${c.t('accueil.series.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.series.titre')}</h2>
    </div>
    <p class="chapeau" data-anime>${c.t('accueil.series.texte')}<br><b>${E.commun}</b></p>
  </div>
  <div class="series-fenetre" tabindex="0" role="region" aria-label="${c.s('accueil.series.region')}">
    <ul class="series-piste" data-series-piste data-galerie>
      ${E.series.map((s, i) => html`<li class="serie-carte">
        ${estampe(c, { nom: s.oeuvres[i === 0 ? 5 : 0][0], alt: `${s.nom} ${s.annee}`, sizes: '(max-width: 760px) 74vw, 380px', attrs: `data-tirage style="--delai:${(i % 3) * 0.12}s"` })}
        <h3>${s.nom} <span>${s.annee}</span></h3>
        <p>${s.nombre} · ${s.format}</p>
        ${c.lien('estampes', { ancre: 'catalogue', params: `serie=${s.cle}`, classe: 'lien-fleche', texte: c.t('accueil.series.voir') })}
      </li>`)}
    </ul>
  </div>
  <p class="conteneur series-pied">${c.lien('estampes', { ancre: 'catalogue', classe: 'bouton', texte: c.t('accueil.series.tout') })}</p>
</section>

<section class="section" id="formats">
  <div class="conteneur formats-grille">
    <div class="gig-scene" data-effet="gigogne" role="img" aria-label="${c.s('accueil.formats.schema')}">
      <span class="gig-mur"></span><span class="gig-sol"></span>
      <span class="gig-cote"><span>${c.t('accueil.formats.silhouette')}</span></span>
      <svg class="gig-silhouette" viewBox="0 0 44 170" aria-hidden="true"><circle cx="22" cy="11" r="10" fill="currentColor"/><path fill="currentColor" d="M9 25h26c3.3 0 6 2.7 6 6v46c0 2.2-1.8 4-4 4s-4-1.8-4-4V40h-1v124c0 3.3-2.7 6-6 6s-5-2.7-5-6V96h-2v68c0 3.3-2.2 6-5 6s-6-2.7-6-6V40h-1v37c0 2.2-1.8 4-4 4s-4-1.8-4-4V31c0-3.3 2.7-6 6-6z"/></svg>
      <div class="gig-cadre">
        <span class="gig-repere gig-r90"><span>90</span></span>
        <span class="gig-repere gig-r60"><span>60</span></span>
        <span class="gig-repere gig-r30"><span>30</span></span>
        <div class="gig-oeuvre" data-gig-oeuvre>
          <img src="/assets/images/impulsions-g-960.webp" alt="" width="960" height="960" loading="lazy" decoding="async">
        </div>
      </div>
      <p class="gig-taille" aria-hidden="true"><b data-gig-taille>90</b> × <span data-gig-taille2>90</span> cm</p>
    </div>
    <div>
      <p class="surtitre">${c.t('accueil.formats.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.formats.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('accueil.formats.texte')}</p>
      <div class="choix-formats" role="group" aria-label="${c.s('accueil.formats.choix')}">
        ${[30, 60, 90].map((t) => html`<button type="button" data-gig-choix="${t}" aria-pressed="${t === 90 ? 'true' : 'false'}">${t} × ${t} cm</button>`)}
      </div>
      <p><b>${c.t('accueil.formats.supports')}</b></p>
      <ul class="supports-mini" data-anime="cascade">
        ${E.supports.map((s) => html`<li>${c.media({ nom: s.image, alt: s.nom, sizes: '120px' })}${s.nom}</li>`)}
      </ul>
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=estampe', classe: 'lien-fleche', texte: c.t('accueil.formats.lien') })}
    </div>
  </div>
</section>

<section class="archi-plein" id="architecture" data-fx="plein-ecran" data-fx-depart="inset(22% 26% 22% 26% round 0px)">
  <div data-collant>
    ${c.media({ nom: 'archi-cotier', alt: c.s('architecture.ouv.alt'), sizes: '100vw', cadrage: '54% 48%', attrs: 'data-fx-cible' })}
    <p class="archi-mots" aria-hidden="true"><span data-fx-ecarte="g">${c.t('accueil.archi.mot1')}</span><span data-fx-ecarte="d">${c.t('accueil.archi.mot2')}</span></p>
    <div class="archi-apres" data-fx-apres>
      <h2 class="titre-section">${c.t('accueil.archi.titre')}</h2>
      <p>${c.t('accueil.archi.texte')}</p>
      ${c.lien('architecture', { classe: 'lien-fleche', texte: c.t('accueil.archi.lien') })}
    </div>
  </div>
</section>

<section class="section section--pierre" id="trame">
  <div class="conteneur trame-grille">
    <div>
      <p class="surtitre">${c.t('accueil.trame.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.trame.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('accueil.trame.texte')}</p>
      ${c.media({ nom: 'habitat-prairie', alt: 'Habitat autonome en bois avec serre et panneaux solaires, dans une prairie avec des moutons', classe: 'trame-media', sizes: '(max-width: 860px) 100vw, 45vw', attrs: 'data-fx="zoom"' })}
    </div>
    <div data-trame data-modeles="${JSON.stringify(A.modeles)}">
      <p><b>${c.t('accueil.trame.modeles')}</b></p>
      <div class="trame-onglets" role="group" aria-label="${c.s('accueil.trame.modeles')}">
        ${A.modeles.map((m, i) => html`<button type="button" data-trame-choix="${i}" aria-pressed="${i === A.modeles.length - 1 ? 'true' : 'false'}">${m.nom}</button>`)}
      </div>
      <div class="trame-plan" data-effet="trame">
        <svg viewBox="-2 -2 104 84" role="img" aria-label="${c.s('accueil.trame.schema')}">
          ${cases.map((k) => html`<rect class="case" x="${k.x}" y="${k.y}" width="20" height="20"/>`)}
          ${cases.map((k) => html`<rect class="module${k.rang < m0.cases ? ' allume' : ''}${k.rang === 0 ? ' serre' : ''}" data-rang="${k.rang}" x="${k.x + 1}" y="${k.y + 1}" width="18" height="18"/>`)}
        </svg>
      </div>
      <dl class="trame-donnees">
        <div><dt>${c.t('accueil.trame.occupants')}</dt><dd data-trame-val="occupants">${m0.occupants}</dd></div>
        <div><dt>${c.t('accueil.trame.surface')}</dt><dd><span data-trame-val="surface">${m0.surface}</span> <small>m²</small></dd></div>
        <div><dt>${c.t('accueil.trame.panneaux')}</dt><dd><span data-trame-val="panneaux">${m0.panneaux}</span> <small>m²</small></dd></div>
        <div><dt>${c.t('accueil.trame.production')}</dt><dd><span data-trame-val="kwh">${m0.kwh}</span> <small>kWh</small></dd></div>
        <div><dt>${c.t('accueil.trame.legumes')}</dt><dd data-trame-val="legumes">${m0.legumes}</dd></div>
      </dl>
      <p class="trame-note">${c.t('accueil.trame.schema')}</p>
      ${c.lien('architecture', { ancre: 'habitat', classe: 'lien-fleche', texte: c.t('accueil.trame.lien') })}
    </div>
  </div>
</section>

<section class="section" id="design">
  <div class="conteneur">
    <p class="surtitre">${c.t('accueil.design.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.design.titre')}</h2>
    <div class="duo">
      <article class="duo-carte">
        ${c.media({ nom: 'kiosque-1', alt: 'Kiosque The Crêpe Café en noir et jaune dans une galerie marchande', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="vitesse"' })}
        <h3>${c.t('accueil.design.kiosqueT')}</h3>
        <p>${c.t('accueil.design.kiosque')}</p>
      </article>
      <article class="duo-carte">
        ${c.media({ nom: 'lustre-verre', alt: 'Lustre de plaques de verre colorées suspendu dans un hall', sizes: '(max-width: 760px) 100vw, 40vw', cadrage: '50% 40%', attrs: 'data-fx="parallaxe"' })}
        <h3>${c.t('accueil.design.sculptureT')}</h3>
        <p>${c.t('accueil.design.sculpture')}</p>
        ${c.lien('design-sculpture', { classe: 'lien-fleche', texte: c.t('accueil.design.lien') })}
      </article>
    </div>
  </div>
</section>

<section class="section section--pierre" id="expositions">
  <div class="conteneur">
    <div class="tete-section">
      <div>
        <p class="surtitre">${c.t('accueil.expos.surtitre')}</p>
        <h2 class="titre-section" data-anime="lignes">${c.t('accueil.expos.titre')}</h2>
      </div>
      <p class="chapeau" data-anime>${c.t('accueil.expos.texte')}</p>
    </div>
    <ul class="expos-liste" data-anime="cascade">
      ${[1, 2, 3].map((n) => html`<li><span class="lieu">${c.t(`accueil.expos.l${n}`)}</span><span class="annee">${c.t(`accueil.expos.a${n}`)}</span></li>`)}
    </ul>
    <p class="galeries-titre" style="margin-top:clamp(36px,5vw,64px)">${c.t('accueil.expos.galeries')}</p>
    <div class="galeries" style="margin-top:0">
      <div class="galeries-ruban" id="ruban-galeries" data-boucle-css data-ruban>
        <div class="galeries-piste">
          ${[...AT.galeries, ...AT.galeries].map(([n, a], i) => logo(c, n, a, i >= AT.galeries.length))}
        </div>
      </div>
      <button type="button" class="ruban-pause" data-pause-pour="ruban-galeries" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button>
    </div>
    <p style="margin-top:32px">${c.lien('atelier', { ancre: 'expositions', classe: 'lien-fleche', texte: c.t('accueil.expos.lien') })}</p>
  </div>
</section>

${appel(c, {
  id: 'fin', image: 'impulsions-f', alt: c.s('accueil.fin.alt'), titre: c.t('accueil.fin.titre'), texte: c.t('accueil.fin.texte'),
  actions: [
    c.lien('estampes', { ancre: 'catalogue', classe: 'bouton', texte: c.t('accueil.fin.estampe'), attrs: 'data-survol="magnetique"' }),
    c.lien('contact', { ancre: 'demande', params: 'sujet=architecture', classe: 'bouton bouton--contour', texte: c.t('accueil.fin.projet') }),
  ],
})}
`;
};
