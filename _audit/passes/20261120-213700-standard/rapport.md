# Rapport d’audit

Projet : `ewa-design-maquette` · 20/11/2026 23:00:24 · 23 min · 7 page(s) · audit standard

## Résumé

- Statut : **22 échec(s)**
- Passe : `20261120-213700-standard` · version ?v=1
- Échecs : **22**
- À regarder : **43**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), tient dans l’écran (5), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (13), souris immobile (7), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en barre |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-211023-rapide-cible | rapide | /,/estampes,/architecture,/design-sculpture,/atelier,/contact | toutes | 85 | 35 | 1 | échecs |
| **20261120-213700-standard** (celle-ci) | standard | toutes | toutes | 22 | 43 | 1 | échecs |

## Échecs

### textes qui se chevauchent (10)

- **textes qui se chevauchent** — `/` — section#debut > div.split-titre:nth-of-type(3) > p.surtitre.ouv-entree « EWA DESIGN · BORDEAUX » — avec div.split-titre:nth-of-type(3) > h1.titre-split > span.t-masque:nth-of-type(1) > span.t-mot.t-art « ART » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/` — section#debut > div.split-titre:nth-of-type(3) > p.surtitre.ouv-entree « EWA DESIGN · BORDEAUX » — avec div.split-titre:nth-of-type(3) > h1.titre-split > span.t-masque:nth-of-type(3) > span.t-mot « CHITECTURE » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/atelier` — section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » — avec section#debut > div.annee-texte > p.surtitre.ouv-entree:nth-of-type(1) « L'ATELIER EWA » _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/atelier` — section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » — avec section#debut > div.annee-texte > h1.ouv-entree « Eco Workshop Art, à Bordeaux » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — nav > ul > li:nth-of-type(1) > a « Estampes » — avec section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/atelier` — nav > ul > li:nth-of-type(2) > a « Architecture » — avec section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/atelier` — nav > ul > li:nth-of-type(3) > a « Design & sculpture » — avec section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/design-sculpture` — div > h1 > span.t-masque.l:nth-of-type(1) > span.t-mot « La forme » — avec div > h1 > span.t-masque.l:nth-of-type(2) > span.t-mot « et la lumière » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/estampes` — div.majeste-texte:nth-of-type(1) > h1 > span.t-masque.l:nth-of-type(3) > span.t-mot « tirées pour vous » — avec section#debut > div.majeste-texte:nth-of-type(1) > p.majeste-edition.ouv-entree:nth-of-type(2) > b « 1/30 » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/estampes` — section#debut > div.majeste-texte:nth-of-type(1) > p.majeste-edition.ouv-entree:nth-of-type(2) > b « 1/30 » — avec section#debut > div.majeste-texte:nth-of-type(1) > p.ouv-entree.masque-ecran-bas:nth-of-type(3) « Impulsions, Combo, Empreintes, Splash, Vibration n » _(1920×1080 normal)_

### zone tactile sous 44 px (3)

- **zone tactile sous 44 px** — `/404` — div > p.ouv-entree:nth-of-type(4) > span.split-info > a:nth-of-type(1) « Architecture » — 94 × 24 px _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/404` — div > p.ouv-entree:nth-of-type(4) > span.split-info > a:nth-of-type(2) « L'atelier » — 58 × 24 px _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/404` — div > p.ouv-entree:nth-of-type(4) > span.split-info > a:nth-of-type(3) « Contact » — 60 × 24 px _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### contraste insuffisant (7)

- **contraste insuffisant** — `/architecture` — li#concours-1 > p.gi__n:nth-of-type(1) > b « 01 » — 2.96:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/architecture` — li#concours-2 > p.gi__n:nth-of-type(1) > b « 02 » — 2.96:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/architecture` — li#concours-3 > p.gi__n:nth-of-type(1) > b « 03 » — 2.96:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/architecture` — li#concours-4 > p.gi__n:nth-of-type(1) > b « 04 » — 2.96:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/architecture` — li#concours-5 > p.gi__n:nth-of-type(1) > b « 05 » — 2.96:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/architecture` — li#concours-6 > p.gi__n:nth-of-type(1) > b « 06 » — 2.96:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **contraste insuffisant** — `/architecture` — li#concours-7 > p.gi__n:nth-of-type(1) > b « 07 » — 2.96:1 (minimum 3:1) _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansWebgl)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/architecture` — #concours-1 > .gi__n > b ; #concours-2 > .gi__n > b ; #concours-3 > .gi__n > b — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/contact` — div > dl.lettre-infos.ouv-entree > div:nth-of-type(2) > dd « ewa_design@yahoo.com » _(320×568 normal, 320×568 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (5)

- **section sans visuel** — `/` — section#expositions « EXPOSITIONS Montrées de Zurich à Miami Les estampe » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/atelier` — section#metiers « UN ATELIER, QUATRE MÉTIERS Ce que l'on peut demand » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/atelier` — section#parcours « LE PARCOURS De Paris-Malaquais à Bordeaux Collabor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/atelier` — section#expositions « EXPOSITIONS Les éditions ARTBOXY Le programme ARTB » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE En quatre étapes Le formulaire est u » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (29)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#demarche > div.conteneur.demarche-grille > figure.media.demarche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini.fx-fini > li:nth-of-type(1) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini.fx-fini > li:nth-of-type(2) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini.fx-fini > li:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini.fx-fini > li:nth-of-type(4) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini > li:nth-of-type(1) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini > li:nth-of-type(2) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini > li:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini > li:nth-of-type(4) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — div.gi__corps.conteneur:nth-of-type(2) > div.gi__scene > div.gi__globe > p.gi__compteur « Escale 6 / 7 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-1 > p.gi__n:nth-of-type(1) > span « Bordeaux · France » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-2 > p.gi__n:nth-of-type(1) > span « Tampere · Finlande » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-3 > p.gi__n:nth-of-type(1) > span « Essaouira · Maroc » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-4 > p.gi__n:nth-of-type(1) > span « Lagos · Nigeria » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-5 > p.gi__n:nth-of-type(1) > span « Karatu · Tanzanie » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-6 > p.gi__n:nth-of-type(1) > span « La Pointe du Bout · Martinique » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-7 > p.gi__n:nth-of-type(1) > span « Chan Chan · Pérou » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — section#debut > figure.media.annee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.lettre-infos.ouv-entree > div:nth-of-type(2) > dt « RÉPONSE PAR E-MAIL » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOTRE DEMANDE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/design-sculpture` — table.kiosques-table > thead > tr > th:nth-of-type(2) « SURFACE TOTALE » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/estampes` — ul.supports-grille.fx-fini > li:nth-of-type(1) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/estampes` — ul.supports-grille.fx-fini > li:nth-of-type(2) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/estampes` — ul.supports-grille.fx-fini > li:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/estampes` — ul.supports-grille.fx-fini > li:nth-of-type(4) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- … et 4 autres (rapport.json)

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/design-sculpture` — écran différent à la même position après rechargement (4.1 %), voir comparaisons/rechargement-design-sculpture-*.png _(1366×768)_

### effet qui ne bouge pas au défilement (2)

- **effet qui ne bouge pas au défilement** — `/` — section#series.section.section--pierre — series : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_
- **effet qui ne bouge pas au défilement** — `/` — figure.media.estampe — tirage : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 83 min de travail pour 115 min de budget, 53 min d’attente de l’utilisateur.
- Journal : « analyse, bibliothèque et questions » 26 min pour 20 prévues.
- Audit standard : étapes lourdes sur /, /architecture, /atelier, /contact, /design-sculpture, /estampes.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2509 ms depuis le premier octet
- Ouverture /architecture (1366×768) : 2505 ms depuis le premier octet
- film de l'ouverture /architecture 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /atelier (1366×768) : 2484 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2556 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /design-sculpture (1366×768) : 2523 ms depuis le premier octet
- Ouverture /estampes (1366×768) : 2566 ms depuis le premier octet
- film de l'ouverture /estampes 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2497 ms depuis le premier octet
- Ouverture /architecture (390×844) : 2490 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2480 ms depuis le premier octet
- Ouverture /contact (390×844) : 2565 ms depuis le premier octet
- Ouverture /design-sculpture (390×844) : 2505 ms depuis le premier octet
- film de l'ouverture /design-sculpture 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /estampes (390×844) : 2539 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 547 images d’intro, 19 de voile et 177 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /architecture : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /design-sculpture : aucune section épinglée ou plein écran.
- Tient dans l'écran /estampes : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 484, tâche la plus longue 0 ms
- Fluidité /architecture 1366×768 (molette) : 3 % d'images lentes sur 441, tâche la plus longue 155 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 116, tâche la plus longue 0 ms
- Fluidité /design-sculpture 1366×768 (molette) : 0 % d'images lentes sur 353, tâche la plus longue 0 ms
- Fluidité /estampes 1366×768 (molette) : 1 % d'images lentes sur 451, tâche la plus longue 52 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Fluidité /architecture 390×844 (doigt) : 0 % d'images lentes sur 1406, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /design-sculpture 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /estampes 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Vitesse / : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /architecture : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.24 s de calcul au chargement (téléphone ralenti).
- Vitesse /design-sculpture : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /estampes : 0.33 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/architecture,/atelier,/contact,/design-sculpture,/estampes --seulement=fichiers,mesures
```
