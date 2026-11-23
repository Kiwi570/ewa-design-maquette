# Rapport d’audit

Projet : `ewa-design-maquette` · 23/11/2026 15:42:08 · 29 min · 7 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261123-141320-complet` · version ?v=2
- Échecs : **0**
- À regarder : **4**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), parcours du projet (1), tient dans l’écran (8), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (13), souris immobile (7), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | — dispensé | L'intro finit déjà sur la page sans versObjet : la barre du logo monte, glisse jusqu'à la barre d'ouverture (accueil) ou l'objet data-iris-centre, puis le panneau s'ouvre de part et d'autre d'elle (jouer() dans assets/js/site.js). |
| 3. La transition reprend le motif | ✓ présent | voile en barre |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 6 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 6 page(s) |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-133507-complet | complet | toutes | toutes | 0 | 11 | 1 | complet |
| **20261123-141320-complet** (celle-ci) | complet | toutes | toutes | 0 | 4 | 1 | complet |

## Échecs

Aucun.

## À regarder

### section sans visuel (2)

- **section sans visuel** — `/atelier` — section#parcours « LE PARCOURS De Paris-Malaquais à Bordeaux Collabor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE En quatre étapes Le formulaire est u » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

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

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 12 min de travail pour 80 min de budget, 0 min d’attente de l’utilisateur.
- Grille wouahou : point « 2. L’intro devient la page » dispensé (config.json) : L'intro finit déjà sur la page sans versObjet : la barre du logo monte, glisse jusqu'à la barre d'ouverture (accueil) ou l'objet data-iris-centre, puis le panneau s'ouvre de part et d'autre d'elle (jouer() dans assets/js/site.js)..
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2546 ms depuis le premier octet
- Ouverture /architecture (1366×768) : 2778 ms depuis le premier octet
- film de l'ouverture /architecture 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /atelier (1366×768) : 2734 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2701 ms depuis le premier octet
- Ouverture /design-sculpture (1366×768) : 2754 ms depuis le premier octet
- Ouverture /estampes (1366×768) : 2792 ms depuis le premier octet
- Ouverture / (390×844) : 2515 ms depuis le premier octet
- Ouverture /architecture (390×844) : 2752 ms depuis le premier octet
- film de l'ouverture /architecture 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /atelier (390×844) : 2786 ms depuis le premier octet
- Ouverture /contact (390×844) : 2725 ms depuis le premier octet
- Ouverture /design-sculpture (390×844) : 2790 ms depuis le premier octet
- film de l'ouverture /design-sculpture 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /estampes (390×844) : 2761 ms depuis le premier octet
- Bords de l’écran : 549 images d’intro, 22 de voile et 174 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /architecture : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /design-sculpture : aucune section épinglée ou plein écran.
- Tient dans l'écran /estampes : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 493, tâche la plus longue 0 ms
- Fluidité /architecture 1366×768 (molette) : 2 % d'images lentes sur 448, tâche la plus longue 173 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 334, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 131, tâche la plus longue 0 ms
- Fluidité /design-sculpture 1366×768 (molette) : 0 % d'images lentes sur 321, tâche la plus longue 0 ms
- Fluidité /estampes 1366×768 (molette) : 0 % d'images lentes sur 435, tâche la plus longue 55 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1359, tâche la plus longue 0 ms
- Fluidité /architecture 390×844 (doigt) : 0 % d'images lentes sur 1406, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /design-sculpture 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /estampes 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Vitesse / : 0.48 s de calcul au chargement (téléphone ralenti).
- Vitesse /architecture : 0.50 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /design-sculpture : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /estampes : 0.33 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
