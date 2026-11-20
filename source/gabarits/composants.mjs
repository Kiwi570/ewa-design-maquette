/* Composants partagés par les pages EWA Design : estampe (jamais recadrée), logo de galerie, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { dimensions } from '../../outils/dimensions.mjs';
import { existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

/** Estampe : figure .media.estampe, image entière (object-fit: contain), ombre de tirage. */
export const estampe = (c, o) => c.media({ ...o, classe: `estampe ${o.classe || ''}` });

/** Plus grande variante produite d'une image (pour la visionneuse). */
export function plusGrande(nom) {
  const d = join(racine, 'assets/images', dirname(nom)); const base = nom.split('/').pop();
  const ws = existsSync(d) ? readdirSync(d).map((f) => f.match(new RegExp(`^${base}-(\\d+)\\.webp$`))).filter(Boolean).map((m) => +m[1]) : [];
  return `/assets/images/${nom}-${ws.length ? Math.max(...ws) : 960}.webp`;
}

/** Logo de galerie en image, avec ses vraies dimensions. */
export function logo(c, nom, alt, cache = false) {
  const f = `assets/images/${nom}-240.webp`;
  const d = existsSync(join(racine, f)) ? dimensions(join(racine, f)) : { largeur: 240, hauteur: 120 };
  return html`<span class="logo-galerie"${cache ? brut(' aria-hidden="true"') : ''}><img src="/${f}" alt="${cache ? '' : alt}" width="${d.largeur}" height="${d.hauteur}" loading="lazy" decoding="async"></span>`;
}

/** Appel final commun à toutes les pages : fond d'encre, une estampe ou une image, titre, actions, e-mail. */
export function appel(c, { id = 'fin', image, alt, titre, texte, actions = [], estampeImage = true }) {
  const media = estampeImage
    ? estampe(c, { nom: image, alt, sizes: '(max-width: 860px) 70vw, 520px', classe: 'appel-media', attrs: 'data-tirage' })
    : c.media({ nom: image, alt, sizes: '(max-width: 860px) 100vw, 50vw', classe: 'appel-media', attrs: 'data-anime="rideau"' });
  return html`<section class="appel" id="${id}">
  <div class="conteneur appel-grille">
    ${media}
    <div>
      <h2 class="titre-section" data-anime="lignes">${titre}</h2>
      <p data-anime>${texte}</p>
      <p class="appel-actions" data-anime>${actions}</p>
      <span class="appel-email">${c.site.contact.email}</span>
    </div>
  </div>
</section>`;
}
