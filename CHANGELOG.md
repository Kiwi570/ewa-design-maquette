# Ce qui a changé

## v2 · 23 novembre 2026

Revue complète du site, page par page, puis dernier audit complet. Comparé fichier par fichier avec la v1.

**Partout**
- Tous les titres de section ont maintenant leur mot en italique orange, comme les ouvertures : la typographie est la même d'une page à l'autre (`donnees/textes/fr.json`, sources des 6 pages).
- Le curseur prend la forme du « | » du logo : une petite barre orange qui accompagne la flèche et se couche en trait sous ce qui se clique (ordinateur seulement, `assets/css/site.css`).
- Un fil dans la marge (grands écrans) : la barre du logo se remplit avec la lecture et un folio donne le numéro de la section, sur toutes les pages.
- Le titre d'ouverture de chaque page intérieure est écrit par la barre orange, qui passe sur sa dernière ligne (« 2012 » sur L'atelier).
- Loupe dans les trois visionneuses (estampes, planches de luminaires, presse) : un clic sur l'image l'agrandit, on l'explore en déplaçant la souris ou le doigt ; bouton « Loupe », Échap pour sortir. Le grossissement suit la définition réelle du fichier pour rester net (`assets/js/site.js`).

**Accueil**
- Le premier écran répond à la souris : l'estampe, le croquis et le titre glissent chacun d'une amplitude propre, puis s'arrêtent quand la souris s'arrête.
- Sur téléphone, l'estampe d'ouverture est plus grande (environ deux tiers de la largeur) et le croquis s'étire à sa hauteur.
- Formats 30, 60, 90 cm : l'œuvre se manipule, on tire son coin orange (au doigt aussi) et elle se pose sur le format réel le plus proche ; des cotes d'architecte, horizontale et verticale, la suivent.
- Design : quatre planches de luminaires de la Collection 2027 comblent le vide sous le kiosque et mènent à la page Design & sculpture.
- Expositions : la liste sèche devient six photos d'accrochages réels (Paris, New York, Cologne, Berlin, Venise, Zurich) avec lieu et dates, puis le ruban des galeries partenaires.

**Estampes**
- Loupe dans la visionneuse et phrase d'aide sous le titre de l'œuvre.

**L'atelier**
- Métiers : une vignette par métier, qui se soulève au survol.
- Expositions refaites : six photos d'accrochages (Dubaï, Zoug, La Grenade, Palma, Miami, Bordeaux), l'agenda 2023, 2024 et 2025 année par année, et le ruban des galeries. Les puces des éditions ARTBOXY sont remplacées par cet agenda.

**Design & sculpture**
- Les huit planches de la Collection 2027 sont montrées entières sur fond blanc (elles étaient recadrées) et se soulèvent au survol.

**Contact**
- Après l'envoi, la confirmation sort comme un tirage, sous la ligne de lumière de la tête d'impression.
- La phrase « Politique de confidentialité : à compléter » sous le formulaire est retirée (la politique reste à fournir, voir le README).

**Images** : 12 photos d'accrochages ajoutées (11 du programme ARTBOXY, 2023 à 2025, et la Maison de la Nature et de l'Environnement de Bordeaux). Les lieux et les dates viennent des bandes de légende des photos fournies. 117 images au total, dont 6 illustrations générées.

**Audit** : dernier audit complet (29 min) à 0 échec. Grille wouahou complète (le point « l'intro devient la page » est assuré par l'intro propre du projet, déclaré dans `_audit/config.json`). Safari reste à vérifier sur le Mac.

## v1 · 20 novembre 2026

Première version de la maquette, direction « Art | chitecture » :
- **6 pages et la 404** : accueil, estampes (catalogue de 38 œuvres sur 5 séries, filtres, visionneuse, demande de tirage), architecture (globe des concours, habitat autonome, éco-quartiers), design et sculpture (kiosques, intérieurs, luminaires, sculptures), l'atelier (parcours, expositions, presse), contact (demande en quatre étapes).
- **Identité** : papier de galerie, encre et barre orange tirées du logo ART | CHITECTURE ; titres en Jost, texte en DM Sans ; estampes jamais recadrées.
- **Mouvement** : intro où la barre du logo ouvre la page, voile de transition qui balaie l'écran, estampes qui s'impriment, carrés de 30, 60 et 90 cm, trame de 4 × 4 m qui grandit, globe qui tourne d'escale en escale.
- **Images** : 97 images du site actuel, 6 illustrations générées (table d'impression, table d'atelier, quatre supports).
