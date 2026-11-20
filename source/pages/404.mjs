/* Page 404 aux couleurs d'EWA : la coupe d'un module d'habitat autonome, « une pièce pas encore construite ». */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="page-404 ecran" id="debut">
  <div>
    <p class="surtitre ouv-entree">${c.t('page404.surtitre')}</p>
    <h1><span class="t-masque"><span class="t-mot">${c.t('page404.titre')}</span></span></h1>
    <p class="chapeau ouv-entree">${c.t('page404.texte')}</p>
    <p class="split-actions ouv-entree">${c.lien('accueil', { classe: 'bouton', texte: c.t('page404.accueil'), attrs: 'data-action-principale' })} ${c.lien('estampes', { classe: 'bouton bouton--contour' })}</p>
    <p class="ouv-entree"><span class="split-info" data-info-cle>${c.lien('architecture')} · ${c.lien('atelier')} · ${c.lien('contact')}</span></p>
  </div>
  ${c.media({ nom: 'habitat-coupe', alt: c.s('page404.alt'), priorite: true, classe: 'ouv-media-rideau', sizes: '(max-width: 760px) 80vw, 40vw', attrs: 'data-iris-centre data-effet="coupe"' })}
</section>
`;
