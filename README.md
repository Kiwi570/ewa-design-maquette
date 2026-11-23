# EWA Design · maquette v2

Maquette de présentation du futur site d'EWA Design (Eco Workshop Art, Bordeaux), direction « Art | chitecture ».
Adresse prévue : https://ewa-design-maquette.vercel.app · site actuel : https://www.ewa-design.org

## Pages

| Page | Ouverture | Contenu |
|---|---|---|
| Accueil `/` | L'écran coupé par la barre du logo : une estampe Impulsions à gauche, le croquis de Chan Chan à droite, qui répondent à la souris | Démarche « Pas de stock, pas de déchets », cinq séries, formats gigognes 30/60/90 cm à tirer au coin, architecture en plein écran, trame de l'habitat autonome, design et planches de luminaires, expositions en photos, appel final |
| Estampes `/estampes` | L'œuvre en majesté et « 1/30 » en très grand | Principe, catalogue filtrable (filtre gardé dans l'adresse `?serie=`), visionneuse (lien direct `?oeuvre=`), supports, ventes réelles |
| Architecture `/architecture` | Grand titre puis bande panoramique | Sept concours sur un globe, habitat autonome, éco-quartiers, non-photoréalisme |
| Design & sculpture `/design-sculpture` | Le lustre en portrait à gauche, le titre à droite | Kiosques The Crêpe Café (surfaces réelles), intérieurs, planches de la Collection 2027, sculptures |
| L'atelier `/atelier` | « 2012 » en très grand | Métiers en vignettes, parcours, accrochages en photos et agenda 2023 – 2025, galeries partenaires, presse et distinctions |
| Contact `/contact` | L'adresse e-mail en très grand | Demande en quatre étapes (simulée), préremplie depuis les autres pages |
| 404 | La coupe d'un module d'habitat autonome | Liens vers les pages |

Effets propres : `barre` (intro, ouverture, voile entre les pages, titre d'ouverture écrit par la barre, fil dans la marge, curseur), `tirage` (les estampes s'impriment sous une ligne de lumière), `gigogne` (30, 60, 90 cm à l'échelle d'une silhouette de 1,70 m, avec cotes ; le coin orange se tire), `trame` (la maison de 4 × 4 m grandit de M 001 à M 009). Modules de la bibliothèque : `globe-itineraire`, `formulaire-par-etapes`. Loupe dans les visionneuses ; la confirmation du formulaire sort comme un tirage.

## Ce que le client doit fournir (à compléter)

- **Mentions légales** : raison sociale (SARL EWA Design, capital 5 000 €, RCS Bordeaux, numéro à compléter), SIRET, adresse du siège, directeur de la publication, numéro de déclaration de prestataire de formation (DA-75331666733, à confirmer).
- **Hébergeur** : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 20 novembre 2026 dans les conditions publiées par Vercel).
- **Politique de confidentialité** (formulaire de contact).
- **Crédits des illustrations générées** : 6 images créées avec Grok (table d'impression, table d'atelier, quatre supports vierges). Garder la mention « Illustration générée » sur le site final.
- **Nom de l'architecte-artiste** : absent du site actuel, la maquette parle de « l'atelier ».
- **Téléphone et adresse postale** : absents du site actuel ; seul l'e-mail est affiché.

### Retiré ou remplacé faute d'information

- **Prix des estampes** : aucun prix sur le site actuel → « Prix sur demande » (Estampes, visionneuse).
- **Formats des séries Empreintes** : non indiqués → « Format sur demande ». Les formats 30 et 60 cm ne sont annoncés que pour Impulsions.
- **Année de la série Splash** : non indiquée, laissée vide.
- **Habitat autonome** : le site actuel donne deux surfaces pour M 001 (80 ou 150 m²) et M 004 (135 ou 96 m²). La maquette reprend celles du tableau (80 et 135 m²), à confirmer. La trame de l'accueil est un schéma indicatif (une case = 4 × 4 m).
- **Années des concours** : rarement données, non affichées.
- **Témoignage ARTBOXY** (retour de la responsable des conseillers artistes) : non repris faute du texte exact.
- **Séries photo** (textures, portraits, land art, street art), autres séries d'estampes (Square, 16/9, Fragments, Traces, Rythmes, Hommages, Noir et blanc), détail des 18 concours, pages Équipements et Analyses : non reprises, possibles dans une prochaine version.
- **Accrochages 2023 – 2025** : lieux et dates lus sur les bandes de légende des photos ARTBOXY fournies, à confirmer par le client. L'agenda de l'atelier est une sélection, pas la liste complète.
- **Formulaire** : la phrase « Politique de confidentialité : à compléter » est retirée du formulaire ; la politique reste à fournir (pied de page).

## Mise en ligne définitive : à retirer

- `noindex` : balise robots dans `source/gabarits/commun.mjs` et en-tête `X-Robots-Tag` dans `vercel.json`.
- Formulaire et visionneuse « Demander ce tirage » simulés : brancher un vrai envoi (ou un lien e-mail).
- Mentions « à compléter » du pied de page.

## Mettre à jour

Les textes sont dans `donnees/textes/fr.json`, les catalogues dans `donnees/*.json`. Après chaque modification : `node outils/generer.mjs`. Ne jamais modifier les pages HTML à la main.
