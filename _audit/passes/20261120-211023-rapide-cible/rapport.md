# Rapport d’audit

Projet : `ewa-design-maquette` · 20/11/2026 22:31:59 · 22 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/estampes,/architecture,/design-sculpture,/atelier,/contact

## Résumé

- Statut : **85 échec(s)**
- Passe : `20261120-211023-rapide-cible` · version ?v=1
- Échecs : **85**
- À regarder : **35**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (36), films d’ouverture (12), films de transition (12), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), tient dans l’écran (2), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (13), souris immobile (7), vitesse (6), captures (1)

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

## Échecs

### image de partage (6)

- **image de partage** — `architecture.html` — fichier introuvable : /assets/partage/architecture-fr.jpg
- **image de partage** — `atelier.html` — fichier introuvable : /assets/partage/atelier-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `design-sculpture.html` — fichier introuvable : /assets/partage/design-sculpture-fr.jpg
- **image de partage** — `estampes.html` — fichier introuvable : /assets/partage/estampes-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg

### lien mort (1)

- **lien mort** — `contact.html` — href="#"

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.split-texte:nth-of-type(4) > p.split-info-ligne.ouv-entree:nth-of-type(3) > span.split-info « Estampes 1/30 · certificat d'authenticité » _(844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/atelier` — section#debut > div.annee-texte > p.ouv-entree.masque-ecran-tres-bas:nth-of-type(4) > span.split-info « Prestataire de formation en cycles supérieurs » _(844×390 normal, 320×568 sansJs)_

### texte coupé (2)

- **texte coupé** — `/` — div.series-fenetre:nth-of-type(2) > ul.series-piste > li.serie-carte:nth-of-type(4) > p « 15 estampes · 105 × 70 cm » — coupé par section#series > div.series-fenetre:nth-of-type(2) « Impulsions 2026 19 estampes · 90 × 90 cm Voir la s » _(1366×768 normal)_
- **texte coupé** — `/` — div.series-fenetre:nth-of-type(2) > ul.series-piste > li.serie-carte:nth-of-type(3) > p « 15 estampes · Format sur demande » — coupé par section#series > div.series-fenetre:nth-of-type(2) « Impulsions 2026 19 estampes · 90 × 90 cm Voir la s » _(844×390 normal)_

### contraste insuffisant (8)

- **contraste insuffisant** — `/` — div.conteneur.formats-grille > div.gig-scene:nth-of-type(1) > span.gig-cote:nth-of-type(3) > span « 1,70 m » — 3.32:1 (minimum 4.5:1) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/architecture` — li#concours-1 > p.gi__n:nth-of-type(1) > b « 01 » — 2.96:1 (minimum 3:1) _(390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/architecture` — li#concours-2 > p.gi__n:nth-of-type(1) > b « 02 » — 2.96:1 (minimum 3:1) _(390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/architecture` — li#concours-3 > p.gi__n:nth-of-type(1) > b « 03 » — 2.96:1 (minimum 3:1) _(390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/architecture` — li#concours-4 > p.gi__n:nth-of-type(1) > b « 04 » — 2.96:1 (minimum 3:1) _(390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/architecture` — li#concours-5 > p.gi__n:nth-of-type(1) > b « 05 » — 2.96:1 (minimum 3:1) _(390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **contraste insuffisant** — `/architecture` — li#concours-6 > p.gi__n:nth-of-type(1) > b « 06 » — 2.96:1 (minimum 3:1) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/architecture` — li#concours-7 > p.gi__n:nth-of-type(1) > b « 07 » — 2.96:1 (minimum 3:1) _(390×844 normal, 390×844 sansWebgl, 844×390 normal)_

### textes qui se chevauchent (37)

- **textes qui se chevauchent** — `/architecture` — div:nth-of-type(1) > h1 > span.t-masque.l:nth-of-type(1) > span.t-mot « DESSINER » — avec div:nth-of-type(1) > h1 > span.t-masque.l:nth-of-type(2) > span.t-mot « POUR UN CLIMAT » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/architecture` — section#debut > div.bande-tete > div:nth-of-type(1) > p.surtitre.ouv-entree « ARCHITECTURE · CONCOURS ET HABITAT » — avec div:nth-of-type(1) > h1 > span.t-masque.l:nth-of-type(1) > span.t-mot « DESSINER » _(1366×768 normal)_
- **textes qui se chevauchent** — `/architecture` — li#concours-1 > p.gi__n:nth-of-type(1) > b « 01 » — avec li#concours-1 > h3 « Institut d'études politiques LAURÉAT » _(1366×768 normal)_
- **textes qui se chevauchent** — `/architecture` — li#concours-2 > p.gi__n:nth-of-type(1) > b « 02 » — avec li#concours-2 > h3 « EUROPAN 10, un éco-quartier » _(1366×768 normal)_
- **textes qui se chevauchent** — `/architecture` — li#concours-3 > p.gi__n:nth-of-type(1) > b « 03 » — avec li#concours-3 > h3 « Villas de la station Mogador » _(1366×768 normal)_
- **textes qui se chevauchent** — `/architecture` — li#concours-4 > p.gi__n:nth-of-type(1) > b « 04 » — avec li#concours-4 > h3 « Makoko, la Venise flottante » _(1366×768 normal)_
- **textes qui se chevauchent** — `/architecture` — li#concours-5 > p.gi__n:nth-of-type(1) > b « 05 » — avec li#concours-5 > h3 « Une maison pour la famille Jorejick » _(1366×768 normal)_
- **textes qui se chevauchent** — `/architecture` — li#concours-6 > p.gi__n:nth-of-type(1) > b « 06 » — avec li#concours-6 > h3 « Un hôtel 5 étoiles et sa permaculture NON RETENU » _(1366×768 normal)_
- **textes qui se chevauchent** — `/architecture` — li#concours-7 > p.gi__n:nth-of-type(1) > b « 07 » — avec li#concours-7 > h3 « Concours international ARQUITECTUM » _(1366×768 normal)_
- **textes qui se chevauchent** — `/atelier` — section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » — avec section#debut > div.annee-texte > p.surtitre.ouv-entree:nth-of-type(1) « L'ATELIER EWA » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » — avec section#debut > div.annee-texte > h1.ouv-entree « Eco Workshop Art, à Bordeaux » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs)_
- **textes qui se chevauchent** — `/atelier` — p.annee-grand > span.t-masque > span.t-mot > span « 12 » — avec section#debut > div.annee-texte > p.surtitre.ouv-entree:nth-of-type(1) « L'ATELIER EWA » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — p.annee-grand > span.t-masque > span.t-mot > span « 12 » — avec section#debut > div.annee-texte > h1.ouv-entree « Eco Workshop Art, à Bordeaux » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise.fx-fini > li:nth-of-type(1) > span.annee « 2005 » — avec ol.frise.fx-fini > li:nth-of-type(1) > div > h3 « Villes indiennes » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise.fx-fini > li:nth-of-type(2) > span.annee « 2007 » — avec ol.frise.fx-fini > li:nth-of-type(2) > div > h3 « Diplôme d'architecte DPLG » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise.fx-fini > li:nth-of-type(3) > span.annee « 2012 » — avec ol.frise.fx-fini > li:nth-of-type(3) > div > h3 « Création d'EWA Design » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise.fx-fini > li:nth-of-type(4) > span.annee « 2022 » — avec ol.frise.fx-fini > li:nth-of-type(4) > div > h3 « Luxembourg Art Prize » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise.fx-fini > li:nth-of-type(5) > span.annee « 2023 – 2025 » — avec ol.frise.fx-fini > li:nth-of-type(5) > div > h3 « Expositions ARTBOXY » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise.fx-fini > li:nth-of-type(6) > span.annee « 2024 – 2025 » — avec ol.frise.fx-fini > li:nth-of-type(6) > div > h3 « Formateur à MJM Graphic Design » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise.fx-fini > li:nth-of-type(7) > span.annee « 2025 » — avec ol.frise.fx-fini > li:nth-of-type(7) > div > h3 « Luxembourg Art Prize » _(390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise > li:nth-of-type(1) > span.annee « 2005 » — avec ol.frise > li:nth-of-type(1) > div > h3 « Villes indiennes » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise > li:nth-of-type(2) > span.annee « 2007 » — avec ol.frise > li:nth-of-type(2) > div > h3 « Diplôme d'architecte DPLG » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise > li:nth-of-type(3) > span.annee « 2012 » — avec ol.frise > li:nth-of-type(3) > div > h3 « Création d'EWA Design » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise > li:nth-of-type(4) > span.annee « 2022 » — avec ol.frise > li:nth-of-type(4) > div > h3 « Luxembourg Art Prize » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise > li:nth-of-type(5) > span.annee « 2023 – 2025 » — avec ol.frise > li:nth-of-type(5) > div > h3 « Expositions ARTBOXY » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise > li:nth-of-type(6) > span.annee « 2024 – 2025 » — avec ol.frise > li:nth-of-type(6) > div > h3 « Formateur à MJM Graphic Design » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — div.conteneur > ol.frise > li:nth-of-type(7) > span.annee « 2025 » — avec ol.frise > li:nth-of-type(7) > div > h3 « Luxembourg Art Prize » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — div > h1 > span.t-masque.l > span.t-mot « Écrire à l'atelier » — avec section#debut > div > a.lettre-email.ouv-entree « ewa_design@yahoo.com » _(844×390 normal, 1366×768 normal)_
- **textes qui se chevauchent** — `/design-sculpture` — div > h1 > span.t-masque.l:nth-of-type(1) > span.t-mot « La forme » — avec div > h1 > span.t-masque.l:nth-of-type(2) > span.t-mot « et la lumière » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/design-sculpture` — section#debut > div > p.surtitre.ouv-entree:nth-of-type(1) « DESIGN & SCULPTURE » — avec div > h1 > span.t-masque.l:nth-of-type(1) > span.t-mot « La forme » _(1366×768 normal)_
- **textes qui se chevauchent** — `/estampes` — div.majeste-texte:nth-of-type(1) > h1 > span.t-masque.l:nth-of-type(3) > span.t-mot « tirées pour vous » — avec section#debut > div.majeste-texte:nth-of-type(1) > p.majeste-edition.ouv-entree:nth-of-type(2) > b « 1/30 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/estampes` — div > ol.etapes3.fx-fini > li:nth-of-type(1) > span.n « 01 » — avec div > ol.etapes3.fx-fini > li:nth-of-type(1) > h3 « L'œuvre » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/estampes` — div > ol.etapes3.fx-fini > li:nth-of-type(2) > span.n « 02 » — avec div > ol.etapes3.fx-fini > li:nth-of-type(2) > h3 « Le format et le support » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/estampes` — div > ol.etapes3.fx-fini > li:nth-of-type(3) > span.n « 03 » — avec div > ol.etapes3.fx-fini > li:nth-of-type(3) > h3 « Le tirage » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/estampes` — div > ol.etapes3 > li:nth-of-type(1) > span.n « 01 » — avec div > ol.etapes3 > li:nth-of-type(1) > h3 « L'œuvre » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/estampes` — div > ol.etapes3 > li:nth-of-type(2) > span.n « 02 » — avec div > ol.etapes3 > li:nth-of-type(2) > h3 « Le format et le support » _(390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/estampes` — div > ol.etapes3 > li:nth-of-type(3) > span.n « 03 » — avec div > ol.etapes3 > li:nth-of-type(3) > h3 « Le tirage » _(390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/architecture` — #concours-1 > .gi__n > b ; #concours-2 > .gi__n > b ; #concours-3 > .gi__n > b — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/architecture` — #concours-6 > .gi__n > b — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/contact` — section#debut > div > a.lettre-email.ouv-entree « ewa_design@yahoo.com » — 358 × 30 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/contact` — section#debut > div > p.split-actions.ouv-entree:nth-of-type(3) > a.bouton « Préparer ma demande » _(320×568 sansJs)_

### photo faible affichée en grand (6)

- **photo faible affichée en grand** — `/estampes` — button.fiche-bouton > figure.media.estampe > picture > img « Vibration nature 2025 A1 » — vibration-a1 (4/5, faible, 86 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/estampes` — button.fiche-bouton > figure.media.estampe > picture > img « Vibration nature 2025 B1 » — vibration-b1 (4/5, faible, 86 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/estampes` — button.fiche-bouton > figure.media.estampe > picture > img « Vibration nature 2025 G1 » — vibration-g1 (4/5, faible, 86 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/estampes` — button.fiche-bouton > figure.media.estampe > picture > img « Vibration nature 2025 J1 » — vibration-j1 (4/5, faible, 86 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/estampes` — button.fiche-bouton > figure.media.estampe > picture > img « Vibration nature 2025 K1 » — vibration-k1 (4/5, faible, 86 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/estampes` — button.fiche-bouton > figure.media.estampe > picture > img « Vibration nature 2025 N1 » — vibration-n1 (4/5, faible, 86 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### accessibilité (axe) : listitem (1)

- **accessibilité (axe) : listitem** — `/estampes` — .filtres > li:nth-child(1) ; .filtres > li:nth-child(2) ; .filtres > li:nth-child(3) — <li> elements must be contained in a <ul> or <ol> _(1366×768 normal, 390×844 normal)_

### bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile (6)

- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/estampes` — bande en rgb(224, 88, 43) à côté du voile en rgb(20, 20, 20), sur 4 image(s) sur 4 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/estampes` — bande en rgb(224, 88, 43) à côté du voile en rgb(20, 20, 20), sur 4 image(s) sur 4 (films/bords-voile-architecture-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/estampes` — bande en rgb(224, 88, 43) à côté du voile en rgb(20, 20, 20), sur 2 image(s) sur 2 (films/bords-voile-atelier-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/estampes` — bande en rgb(224, 88, 43) à côté du voile en rgb(20, 20, 20), sur 3 image(s) sur 3 (films/bords-voile-contact-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/estampes` — bande en rgb(224, 88, 43) à côté du voile en rgb(20, 20, 20), sur 2 image(s) sur 2 (films/bords-voile-design-sculpture-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/architecture` — bande en rgb(224, 88, 43) à côté du voile en rgb(20, 20, 20), sur 2 image(s) sur 2 (films/bords-voile-estampes-1366.png) _(1366×768 barre de défilement classique (15 px))_

### erreur de console ou ressource (3)

- **erreur de console ou ressource** — `/atelier` — ressource 404 : /assets/images/presse-nogent-960.webp _(1366×768 liens)_
- **erreur de console ou ressource** — `/atelier` — console : Failed to load resource: the server responded with a status of 404 (Not Found) _(1366×768 liens)_
- **erreur de console ou ressource** — `/atelier` — ressource 404 : /assets/images/presse-caue-960.webp _(1366×768 liens)_

### ne tient pas dans l’écran (3)

- **ne tient pas dans l’écran** — `/` — section#architecture > div > p.archi-mots « DU PÉROU À LA FINLANDE » — coupé en bas de 4 px (à 4 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#architecture > div > p.archi-mots « DU PÉROU À LA FINLANDE » — coupé en bas de 4 px (à 50 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#architecture > div > p.archi-mots « DU PÉROU À LA FINLANDE » — coupé en bas de 4 px (à 96 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_

### vitesse (6)

- **vitesse** — `/` — image de plus de 300 Ko dans le premier écran : images/logo-encre.png (342 Ko) _(390×844 téléphone ralenti (processeur ÷4, réseau 4G))_
- **vitesse** — `/architecture` — image de plus de 300 Ko dans le premier écran : images/logo-encre.png (342 Ko) _(390×844 téléphone ralenti (processeur ÷4, réseau 4G))_
- **vitesse** — `/atelier` — image de plus de 300 Ko dans le premier écran : images/logo-encre.png (342 Ko) _(390×844 téléphone ralenti (processeur ÷4, réseau 4G))_
- **vitesse** — `/contact` — image de plus de 300 Ko dans le premier écran : images/logo-encre.png (342 Ko) _(390×844 téléphone ralenti (processeur ÷4, réseau 4G))_
- **vitesse** — `/design-sculpture` — image de plus de 300 Ko dans le premier écran : images/logo-encre.png (342 Ko) _(390×844 téléphone ralenti (processeur ÷4, réseau 4G))_
- **vitesse** — `/estampes` — image de plus de 300 Ko dans le premier écran : images/logo-encre.png (342 Ko) _(390×844 téléphone ralenti (processeur ÷4, réseau 4G))_

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

### texte de contenu sous 13 px (ordinateur) (21)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#demarche > div.conteneur.demarche-grille > figure.media.demarche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini.fx-fini > li:nth-of-type(1) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini.fx-fini > li:nth-of-type(2) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini.fx-fini > li:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.supports-mini.fx-fini > li:nth-of-type(4) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — div.gi__corps.conteneur:nth-of-type(2) > div.gi__scene > div.gi__globe > p.gi__compteur « Escale 6 / 7 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-1 > p.gi__n:nth-of-type(1) > span « Bordeaux · France » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-2 > p.gi__n:nth-of-type(1) > span « Tampere · Finlande » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-3 > p.gi__n:nth-of-type(1) > span « Essaouira · Maroc » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-4 > p.gi__n:nth-of-type(1) > span « Lagos · Nigeria » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-5 > p.gi__n:nth-of-type(1) > span « Karatu · Tanzanie » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-6 > p.gi__n:nth-of-type(1) > span « La Pointe du Bout · Martinique » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/architecture` — li#concours-7 > p.gi__n:nth-of-type(1) > span « Chan Chan · Pérou » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — section#debut > figure.media.annee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div > dl.lettre-infos.ouv-entree > div:nth-of-type(2) > dt « RÉPONSE PAR E-MAIL » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOTRE DEMANDE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/design-sculpture` — table.kiosques-table > thead > tr > th:nth-of-type(2) « SURFACE TOTALE » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/estampes` — ul.supports-grille.fx-fini > li:nth-of-type(1) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/estampes` — ul.supports-grille.fx-fini > li:nth-of-type(2) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/estampes` — ul.supports-grille.fx-fini > li:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/estampes` — ul.supports-grille.fx-fini > li:nth-of-type(4) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (5)

- **section sans visuel** — `/` — section#expositions « EXPOSITIONS Montrées de Zurich à Miami Les estampe » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/atelier` — section#metiers « UN ATELIER, QUATRE MÉTIERS Ce que l'on peut demand » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/atelier` — section#parcours « LE PARCOURS De Paris-Malaquais à Bordeaux Collabor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/atelier` — section#expositions « EXPOSITIONS Les éditions ARTBOXY Le programme ARTB » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE En quatre étapes Le formulaire est u » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

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
- Journal v1 : 4 étape(s) notée(s), 56 min de travail pour 75 min de budget, 22 min d’attente de l’utilisateur.
- Journal : « analyse, bibliothèque et questions » 26 min pour 20 prévues.
- Audit rapide : étapes lourdes sur /, /architecture, /atelier, /contact, /design-sculpture, /estampes.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2509 ms depuis le premier octet
- Ouverture /architecture (1366×768) : 2514 ms depuis le premier octet
- Ouverture /atelier (1366×768) : 2459 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2555 ms depuis le premier octet
- Ouverture /design-sculpture (1366×768) : 2505 ms depuis le premier octet
- Ouverture /estampes (1366×768) : 2598 ms depuis le premier octet
- film de l'ouverture /estampes 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2505 ms depuis le premier octet
- Ouverture /architecture (390×844) : 2540 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2483 ms depuis le premier octet
- Ouverture /contact (390×844) : 2574 ms depuis le premier octet
- Ouverture /design-sculpture (390×844) : 2530 ms depuis le premier octet
- Ouverture /estampes (390×844) : 2573 ms depuis le premier octet
- Bords de l’écran : 480 images d’intro, 17 de voile et 155 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /architecture : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /design-sculpture : aucune section épinglée ou plein écran.
- Tient dans l'écran /estampes : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 475, tâche la plus longue 0 ms
- Fluidité /architecture 1366×768 (molette) : 1 % d'images lentes sur 453, tâche la plus longue 155 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 282, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 113, tâche la plus longue 0 ms
- Fluidité /design-sculpture 1366×768 (molette) : 0 % d'images lentes sur 333, tâche la plus longue 0 ms
- Fluidité /estampes 1366×768 (molette) : 0 % d'images lentes sur 430, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /architecture 390×844 (doigt) : 0 % d'images lentes sur 1403, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /design-sculpture 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /estampes 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Vitesse / : 0.77 s de calcul au chargement (téléphone ralenti).
- Vitesse /architecture : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /design-sculpture : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /estampes : 0.41 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,bords,parcours,ecran,vitesse
```
