# Rapport d’audit

Projet : `ewa-design-maquette` · 20/11/2026 23:18:08 · 8 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **10 échec(s)**
- Passe : `20261120-221033-complet-partiel` · version ?v=1
- Échecs : **10**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : mesures (273), balayage (6), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-211023-rapide-cible | rapide | /,/estampes,/architecture,/design-sculpture,/atelier,/contact | toutes | 85 | 35 | 1 | échecs |
| 20261120-213700-standard | standard | toutes | toutes | 22 | 43 | 1 | échecs |
| 20261120-220213-standard-cible-partiel | standard | /,/404,/architecture,/atelier,/contact,/design-sculpture,/estampes | fichiers, mesures | 14 | 6 | 0 | échecs |
| 20261120-220628-standard-cible-partiel | standard | /,/404,/architecture,/atelier,/estampes | fichiers, mesures | 2 | 5 | 0 | échecs |
| 20261120-220837-standard-cible-partiel | standard | /,/atelier | fichiers, mesures | 1 | 5 | 0 | échecs |
| 20261120-220938-standard-cible-partiel | standard | /,/atelier | fichiers, mesures | 0 | 5 | 0 | complet |
| **20261120-221033-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 10 | 5 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.split-texte:nth-of-type(4) > p.split-info-ligne.ouv-entree:nth-of-type(3) > span.split-info « Estampes 1/30 · certificat d'authenticité » _(1000×560 normal, 1000×560 sansWebgl, 1000×560 sansJs)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — div.conteneur.formats-grille > div:nth-of-type(2) > div.choix-formats > button:nth-of-type(2) « 60 × 60 cm » — 3.00:1 (minimum 4.5:1) _(2560×1440 sansWebgl)_
- **contraste insuffisant** — `/` — div.conteneur.formats-grille > div:nth-of-type(2) > div.choix-formats > button:nth-of-type(3) « 90 × 90 cm » — 3.00:1 (minimum 4.5:1) _(2560×1440 sansWebgl)_

### textes qui se chevauchent (5)

- **textes qui se chevauchent** — `/atelier` — nav > ul > li:nth-of-type(1) > a « Estampes » — avec section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » _(1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_
- **textes qui se chevauchent** — `/atelier` — nav > ul > li:nth-of-type(2) > a « Architecture » — avec section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » _(1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_
- **textes qui se chevauchent** — `/atelier` — nav > ul > li:nth-of-type(3) > a « Design & sculpture » — avec section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » _(1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_
- **textes qui se chevauchent** — `/atelier` — nav > ul > li:nth-of-type(4) > a « L'atelier » — avec section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » _(1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_
- **textes qui se chevauchent** — `/atelier` — nav > ul > li:nth-of-type(5) > a « Contact » — avec section#debut > p.annee-grand > span.t-masque > span.t-mot « 2012 » _(1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, 2560×1440 sansJs)_

### texte coupé (2)

- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere.est-actif:nth-of-type(1) > span.fpe__nom:nth-of-type(2) « Votre demande » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1000×560 normal, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (5)

- **section sans visuel** — `/` — section#expositions « EXPOSITIONS Montrées de Zurich à Miami Les estampe » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/atelier` — section#metiers « UN ATELIER, QUATRE MÉTIERS Ce que l'on peut demand » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/atelier` — section#parcours « LE PARCOURS De Paris-Malaquais à Bordeaux Collabor » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/atelier` — section#expositions « EXPOSITIONS Les éditions ARTBOXY Le programme ARTB » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE En quatre étapes Le formulaire est u » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /architecture : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /design-sculpture : aucune section épinglée ou plein écran.
- Tient dans l'écran /estampes : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/atelier,/contact --seulement=fichiers,mesures
```
