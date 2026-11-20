# Rapport d’audit

Projet : `ewa-design-maquette` · 20/11/2026 23:08:24 · 2 min · 5 page(s) · audit standard ciblé sur /,/404,/architecture,/atelier,/estampes (étapes : fichiers, mesures)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261120-220628-standard-cible-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (55), balayage (4)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-211023-rapide-cible | rapide | /,/estampes,/architecture,/design-sculpture,/atelier,/contact | toutes | 85 | 35 | 1 | échecs |
| 20261120-213700-standard | standard | toutes | toutes | 22 | 43 | 1 | échecs |
| 20261120-220213-standard-cible-partiel | standard | /,/404,/architecture,/atelier,/contact,/design-sculpture,/estampes | fichiers, mesures | 14 | 6 | 0 | échecs |
| **20261120-220628-standard-cible-partiel** (celle-ci) | standard | /,/404,/architecture,/atelier,/estampes | fichiers, mesures | 2 | 5 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/atelier` — section#debut > div.annee-texte > p.ouv-entree:nth-of-type(4) > span.split-info « Prestataire de formation en cycles supérieurs » _(844×390 normal)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/atelier` — section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » — avec section#debut > div.annee-texte > h1.ouv-entree « Eco Workshop Art, à Bordeaux » _(320×568 normal, 320×568 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (4)

- **section sans visuel** — `/` — section#expositions « EXPOSITIONS Montrées de Zurich à Miami Les estampe » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/atelier` — section#metiers « UN ATELIER, QUATRE MÉTIERS Ce que l'on peut demand » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/atelier` — section#parcours « LE PARCOURS De Paris-Malaquais à Bordeaux Collabor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/atelier` — section#expositions « EXPOSITIONS Les éditions ARTBOXY Le programme ARTB » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 83 min de travail pour 115 min de budget, 53 min d’attente de l’utilisateur.
- Journal : « analyse, bibliothèque et questions » 26 min pour 20 prévues.
- Audit standard : étapes lourdes sur /, /architecture, /atelier, /estampes.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/atelier --seulement=fichiers,mesures
```
