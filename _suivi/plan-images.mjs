// Écrit plan-images.json (décision de Claude) : node _suivi/plan-images.mjs
import fs from 'node:fs';
import path from 'node:path';
const R = 'recu/ewa-design-recu/';
const rec = JSON.parse(fs.readFileSync(R + 'recuperation.json', 'utf8'));
const dims = Object.fromEntries(rec.images.map(i => [i.fichier, [i.largeur, i.hauteur]]));
const pgcd = (a, b) => (b ? pgcd(b, a % b) : a);
const ratioNatif = f => { const [w, h] = dims[f]; const g = pgcd(w, h); return `${w / g}:${h / g}`; };

const plan = [];
const art = (fichier, nom, alt, beaute = 4) => plan.push({ source: R + fichier, nom, role: 'galerie', ratio: ratioNatif(fichier), largeurs: [480, 960, 1600], alt, beaute, recadrer: false, mobile: false });
const img = (fichier, nom, role, alt, beaute, o = {}) => plan.push({ source: R + fichier, nom, role, alt, beaute, mobile: false, ...o });

// Logo EWA : fond rendu transparent (recu/logos), version sombre et version claire.
plan.push({ source: 'recu/logos/logo-encre.png', nom: 'logo', role: 'logo', alt: 'EWA Design, Art | chitecture', largeurs: [240, 480] });
plan.push({ source: 'recu/logos/logo-clair.png', nom: 'logo-clair', role: 'logo', alt: 'EWA Design, Art | chitecture', largeurs: [240, 480] });

// Estampes : jamais recadrées (ratio natif)
const imp = { 'serie-impulsions-90x90-2026-2.jpg': 'A', 'serie-impulsions-90x90-2026.jpg': 'G', 'serie-impulsions-90x90-2026-3.jpg': 'I-A', 'serie-impulsions-90x90-2026-4.jpg': 'I-B', 'serie-impulsions-90x90-2026-6.jpg': 'JA', 'serie-impulsions-90x90-2026-8.jpg': 'JC', 'serie-impulsions-90x90-2026-10.jpg': 'K1', 'serie-impulsions-90x90-2026-12.jpg': 'K3 bis', 'serie-impulsions-90x90-2026-11.jpg': 'L1', 'serie-impulsions-90x90-2026-13.jpg': 'L2', 'serie-impulsions-90x90-2026-17.jpg': 'D-2 bis', 'serie-impulsions-90x90-2026-18.jpg': 'F' };
for (const [f, c] of Object.entries(imp)) art(f, 'impulsions-' + c.toLowerCase().replace(/[^a-z0-9]+/g, '-'), `Impulsions 2026 ${c}, estampe numérique abstraite carrée`, 5);
const combo = { 'serie-combo-small-90x90.jpg': 'E', 'serie-combo-small-90x90-2.jpg': 'C', 'serie-combo-small-90x90-3.jpg': 'B', 'serie-combo-small-90x90-4.jpg': 'D', 'serie-combo-small-90x90-6.jpg': 'F', 'serie-combo-small-90x90-7.jpg': 'L', 'serie-combo-small-90x90-8.jpg': 'J', 'serie-combo-small-90x90-11.jpg': 'N' };
for (const [f, c] of Object.entries(combo)) art(f, 'combo-' + c.toLowerCase(), `Combo 2026 ${c}, estampe numérique abstraite carrée`, 4);
const empr = { 'serie-empreintes-2025-2.jpg': 'A', 'serie-empreintes-2025-b.jpg': 'B', 'serie-empreintes-2025-c.jpg': 'C', 'serie-empreintes-2025-h.jpg': 'H', 'serie-empreintes-2025-i.jpg': 'I', 'serie-empreintes-2025-j.jpg': 'J' };
for (const [f, c] of Object.entries(empr)) art(f, 'empreintes-' + c.toLowerCase(), `Empreintes 2025 ${c}, estampe numérique en bleus glacier`, 4);
const spl = { 'splash-105x70-web.jpg': 'A', 'splash-b-105x70-web.jpg': 'B', 'splash-e-105x70-web.jpg': 'E', 'splash-f-105x70-web.jpg': 'F', 'splash-h-105x70-web.jpg': 'H', 'splash-k-105x70-web.jpg': 'K' };
for (const [f, c] of Object.entries(spl)) art(f, 'splash-' + c.toLowerCase(), `Splash ${c}, estampe numérique en noir et blanc, 105 × 70 cm`, 4);
const vib = { 'serie-vibration-nature-2025-9.jpg': 'A1', 'serie-vibration-nature-2025.jpg': 'B1', 'serie-vibration-nature-2025-6.jpg': 'G1', 'serie-vibration-nature-2025-7.jpg': 'J1', 'serie-vibration-nature-2025-3.jpg': 'K1', 'serie-vibration-nature-2025-2.jpg': 'N1' };
for (const [f, c] of Object.entries(vib)) plan.push({ source: R + f, nom: 'vibration-' + c.toLowerCase(), role: 'galerie', ratio: ratioNatif(f), largeurs: [400, 800], alt: `Vibration nature 2025 ${c}, estampe verticale en ocres et olive`, beaute: 4, recadrer: false, mobile: false });

// Architecture
img('complexe-sportif-futuriste-rubans.png', 'archi-rubans', 'ouverture', 'Croquis aquarellé d\'un complexe sportif en rubans fluides, concours de Chan Chan au Pérou', 5, { ratio: '4:3', largeurs: [640, 960, 1440], cadrage: [50, 45] });
img('complexe-cotier-futuriste-rubans.png', 'archi-cotier', 'ouverture', 'Croquis d\'un complexe côtier en rubans au bord de l\'eau', 5, { ratio: '21:9', largeurs: [640, 1280, 1536], cadrage: [54, 48], mobile: '4:3' });
img('habitat-autonome-ewa-design-5.png', 'habitat-prairie', 'section-fond', 'Habitat autonome en bois avec serre et panneaux solaires, dans une prairie avec des moutons', 5, { ratio: '16:9', largeurs: [640, 1280, 1689] });
img('habitat-autonome-ewa-design-4.png', 'habitat-lisiere', 'galerie', 'Habitat autonome en bois en lisière de forêt', 4, { ratio: '16:9', largeurs: [640, 1280] });
img('habitat-autonome-ewa-design-6.png', 'habitat-groupe', 'galerie', 'Trois modules d\'habitat autonome reliés par une serre', 4, { ratio: '16:9', largeurs: [640, 1280] });
img('habitat-autonome-ewa-design-3.png', 'habitat-coupe', 'galerie', 'Coupe d\'un module d\'habitat autonome : serre verticale, récupération de l\'eau de pluie, géothermie', 4, { ratio: '1:1', largeurs: [480, 960, 1280] });
img('eco-quartier-ewa-design-5.png', 'eco-flottant', 'galerie', 'Maisons sur pilotis au bord d\'un lac, quartier écologique', 4, { ratio: '16:9', largeurs: [640, 1280] });
img('eco-quartier-ewa-design-3.png', 'eco-anneau', 'galerie', 'Île-jardin en anneau au large d\'une ville côtière', 4, { ratio: '16:9', largeurs: [640, 1280] });
img('urb-4.jpg', 'urb-plan', 'vignette', 'Plan masse d\'un quartier flottant en étoile sur la mer', 3, { ratio: '1:1', largeurs: [480, 960] });
img('art-chitecture.png', 'croquis-art-chitecture', 'galerie', 'Croquis aquarellé non photoréaliste d\'un ensemble de rubans de béton et de verre', 5, { ratio: '3:2', largeurs: [640, 1280, 1536] });
img('villa-contemporaine-couleurs-abstraites.png', 'croquis-villa-couleurs', 'galerie', 'Villa contemporaine au bord d\'une piscine, croquis aux couleurs d\'estampe', 5, { ratio: '3:2', largeurs: [640, 1280, 1536] });
img('villa-contemporaine-encre-lumiere.png', 'croquis-villa-encre', 'galerie', 'Villa contemporaine dessinée à l\'encre, en noir et blanc', 4, { ratio: '3:2', largeurs: [640, 1280] });
img('sthr.png', 'concours-terre', 'vignette', 'École en terre aux voûtes en chaînette, concours pour la Tanzanie', 4, { ratio: '4:3', largeurs: [480, 960] });
img('unknown-1.jpg', 'concours-karatu', 'vignette', 'Maisons à dômes sous un acacia, maison de la famille Jorejick à Karatu', 3, { ratio: '4:3', largeurs: [480, 800] });
img('unknown-2.jpg', 'concours-makoko', 'vignette', 'Habitat flottant sur la lagune de Makoko à Lagos', 3, { ratio: '4:3', largeurs: [480, 800] });
img('concours-ewa-design-16.png', 'concours-martinique', 'vignette', 'Presqu\'île de La Pointe du Bout en Martinique, site du concours d\'hôtel', 4, { ratio: '4:3', largeurs: [480, 960] });
img('concours-1-b.jpg', 'concours-iep', 'vignette', 'Plan du concours de l\'Institut d\'études politiques de Bordeaux', 2, { ratio: '4:3', largeurs: [480] });
img('tampere-2-3.jpg', 'concours-tampere', 'vignette', 'Maquette du quartier écologique EUROPAN 10 à Tampere', 2, { ratio: '4:3', largeurs: [480] });
img('hut-1-fichier-images.jpg', 'concours-glace', 'vignette', 'Labyrinthe de cylindres de glace teintée, Warming Huts 2021', 2, { ratio: '4:3', largeurs: [480] });
img('dteee.png', 'concours-chanchan', 'vignette', 'Perspective du concours de Chan Chan au Pérou', 4, { ratio: '4:3', largeurs: [480, 960] });

// Design et sculpture
img('design-commercial-ewa-design-3.png', 'kiosque-1', 'galerie', 'Kiosque The Crêpe Café en noir et jaune dans une galerie marchande', 4, { ratio: '16:10', largeurs: [640, 1280, 1600] });
img('design-commercial-ewa-design-2.png', 'kiosque-2', 'galerie', 'Comptoir du kiosque The Crêpe Café et sa zone de consommation', 4, { ratio: '16:10', largeurs: [640, 1280] });
img('design-commercial-ewa-design-4.png', 'kiosque-3', 'galerie', 'Vue plongeante sur la cuisine et le comptoir d\'un kiosque', 3, { ratio: '4:5', largeurs: [480, 960] });
img('design-interieur-ewa-design-11.jpg', 'interieur-salon', 'galerie', 'Salon aux formes organiques sous un grand plafond courbe', 4, { ratio: '16:10', largeurs: [640, 1280, 1536] });
img('design-interieur-ewa-design-7.png', 'interieur-banquette', 'galerie', 'Banquette blanche organique éclairée par le bas', 4, { ratio: '16:10', largeurs: [640, 1280] });
img('design-interieur-ewa-design-10.png', 'interieur-sombre', 'galerie', 'Salle de bain sombre aux niches lumineuses et baignoire noire', 4, { ratio: '4:3', largeurs: [640, 1280] });
img('design-interieur-ewa-design-4.png', 'interieur-riad', 'galerie', 'Lanterne de laiton sous une coupole de plâtre sculpté', 4, { ratio: '16:10', largeurs: [640, 1280] });
plan.push({ source: 'recu/agrandi/lustre-verre-suspendu-lobby.png', nom: 'lustre-verre', mobile: false, role: 'ouverture', alt: 'Lustre de plaques de verre colorées suspendu dans un hall', beaute: 5, ratio: '4:5', largeurs: [480, 960, 1280] }); (()=>0)('lustre-verre-suspendu-lobby.jpg', 'lustre-verre', 'ouverture', 'Lustre de plaques de verre colorées suspendu dans un hall', 5, { ratio: '4:5', largeurs: [480, 960, 1145] });
img('installation-abstraite-lumineuse-hall.jpg', 'installation-lumiere', 'galerie', 'Installation murale lumineuse de verre coloré dans un hall', 4, { ratio: '1:1', largeurs: [480, 960, 1199] });
img('sculpture-abstraite-acier-rouille.png', 'sculpture-corten', 'section-fond', 'Sculpture d\'acier Corten aux ailes effilées sur un rond-point planté', 5, { ratio: '3:2', largeurs: [640, 1280, 1536] });
img('sculpture-acier-corten-rond.png', 'sculpture-corten-2', 'galerie', 'Sculpture d\'acier Corten en rubans tendus', 4, { ratio: '3:2', largeurs: [640, 1280] });
for (const [f, n, a] of [['affiche-ondoring-design-organique.png', 'lum-ondoring', 'Planche Ondoring : luminaire organique en anneaux lumineux'], ['ewa-design-toroflux-sculpture.png', 'lum-toroflux', 'Planche Toroflux : sculpture lumineuse en tore'], ['affiche-ewa-design-selle.png', 'lum-saddeflux', 'Planche Saddeflux : lumière structurelle en selle'], ['planche-design-strates-bambou.png', 'lum-strates', 'Planche Strates : lampe en lamelles de bambou'], ['planche-design-lampe-blob.jpg', 'lum-blob', 'Planche de la lampe Blob'], ['planche-design-blue-note.png', 'lum-blue-note', 'Planche Blue Note : lampe sculpture lumineuse'], ['presentation-technique-cube-plexiglass.png', 'lum-cube', 'Planche technique du cube lumineux en plexiglas'], ['lave-suspension-lampe-sculpture.jpg', 'lum-lave', 'Planche Lave en suspension : lampe en matière volcanique']])
  plan.push({ source: R + f, nom: n, role: 'vignette', ratio: ratioNatif(f), largeurs: [480, 960, 1536], alt: a, beaute: 3, recadrer: false, mobile: false });

// Ventes et atelier (photos réelles)
img('vente-4.jpg', 'chez-vente-4', 'vignette', 'Estampe aux couleurs vives accrochée au-dessus d\'un buffet chez un collectionneur', 3, { ratio: '4:3', largeurs: [480, 960] });
img('vente-6.jpg', 'chez-vente-6', 'vignette', 'Six estampes Splash posées au sol, un chien assis devant', 3, { ratio: '4:3', largeurs: [480, 960] });
img('vente-3.jpg', 'chez-vente-3', 'vignette', 'Estampe encadrée posée dans un salon', 3, { ratio: '4:3', largeurs: [480, 960] });
img('vente-8.jpg', 'chez-vente-8', 'vignette', 'Tirage sur aluminium brossé posé contre un mur', 3, { ratio: '4:3', largeurs: [480, 960] });
img('vente-7.png', 'chez-vente-7', 'vignette', 'Estampes encadrées accrochées dans un espace d\'exposition', 3, { ratio: '4:3', largeurs: [480, 960] });
img('bor-2.jpg', 'chez-bor-2', 'vignette', 'Estampe encadrée au-dessus d\'une étagère, à Bordeaux', 3, { ratio: '4:3', largeurs: [480, 960] });

// Expositions et presse
img('e-w-design-france.jpg', 'presse-accrochages', 'vignette', 'Couverture du magazine Accrochages n° 274', 4, { ratio: ratioNatif('e-w-design-france.jpg'), largeurs: [480, 960], recadrer: false });
img('magazine-nogent-marne-ewa-6.png', 'presse-nogent', 'vignette', 'Couverture du magazine de Nogent-sur-Marne', 3, { ratio: ratioNatif('magazine-nogent-marne-ewa-6.png'), largeurs: [480, 745], recadrer: false });
img('habitat-leger-2.jpg', 'presse-caue', 'vignette', 'Affiche Petites Machines à Habiter, CAUE de la Sarthe', 2, { ratio: ratioNatif('habitat-leger-2.jpg'), largeurs: [480, 600], recadrer: false });
img('luxembourg-art-prize-ewa.png', 'expo-luxembourg', 'vignette', 'Certificat de mérite artistique du Luxembourg Art Prize', 3, { ratio: ratioNatif('luxembourg-art-prize-ewa.png'), largeurs: [480, 960], recadrer: false });
img('paris-malaquais-ewa-design-2.png', 'expo-malaquais', 'vignette', 'Affiche de l\'exposition Villes indiennes, école d\'architecture Paris-Malaquais, 2005', 3, { ratio: ratioNatif('paris-malaquais-ewa-design-2.png'), largeurs: [480, 960], recadrer: false });
for (const [f, n, a] of [['contact-ewa-design.png', 'galerie-swiss-art-expo', 'Swiss Art Expo'], ['contact-ewa-design-5.png', 'galerie-cipriarte', 'Cipriarte Venezia'], ['contact-ewa-design-6.png', 'galerie-andie-art', 'Andie Art'], ['contact-ewa-design-8.png', 'galerie-spectrum', 'Spectrum Miami'], ['contact-ewa-design-10.png', 'galerie-thomson', 'Thomson Gallery'], ['contact-ewa-design-12.png', 'galerie-andakulova', 'Andakulova Gallery'], ['contact-ewa-design-13.png', 'galerie-nicoleta', 'Nicoleta Gallery Berlin'], ['contact-ewa-design-14.jpg', 'galerie-artboxy', 'ARTBOXY'], ['contact-ewa-design-18.png', 'galerie-artexpo', 'Artexpo New York']])
  plan.push({ source: R + f, nom: n, role: 'vignette', ratio: ratioNatif(f), alt: a, beaute: 3, recadrer: false, mobile: false, largeurs: [240, 480] });


// Accrochages réels (programme ARTBOXY et salons) : bande de légende retirée, lieu et dates repris en texte.
for (const [f, n, a] of [
  ['e-w-design-france-35', 'expo-paris-2025', 'Estampe d\'EWA sur écran dans la salle d\'exposition du Carrousel du Louvre, à Paris'],
  ['e-w-design-france-57', 'expo-new-york-2025', 'Estampe d\'EWA exposée à Artexpo New York, entre deux œuvres d\'autres artistes'],
  ['e-w-design-france-43', 'expo-cologne-2025', 'Estampe d\'EWA sur un mur de palettes à Cologne Art Unframed'],
  ['nicoletta', 'expo-berlin-2025', 'Estampe verticale d\'EWA dans la Nicoleta Gallery, à Berlin'],
  ['e-w-design-france-24', 'expo-venise-2024', 'Estampe d\'EWA sur écran à la galerie Cipriarte, à Venise'],
  ['re-draw-02-4', 'expo-zurich-2023', 'Stand de la Swiss Art Expo à Zurich, avec une estampe d\'EWA'],
  ['e-w-design-france-46', 'expo-dubai-2025', 'Estampe d\'EWA dans le hall de l\'Andakulova Gallery, à Dubaï'],
  ['e-w-design-france-38', 'expo-zoug-2025', 'Estampe d\'EWA dans un espace de la Thomson Gallery, à Zoug'],
  ['e-w-design-france-40', 'expo-grenade-2025', 'Estampe verticale d\'EWA entre deux toiles à l\'Art Bar Gallery, à la Grenade'],
  ['e-w-design-france-49', 'expo-palma-2025', 'Estampe d\'EWA près d\'un mur de pierre à la Casa del Arte, à Palma'],
  ['re-draw-02-3', 'expo-miami-2023', 'Accrochage au Spectrum Miami Art Show avec une estampe d\'EWA']])
  plan.push({ source: `recu/expos/${f}.png`, nom: n, role: 'galerie', ratio: '3:2', largeurs: [640, 1280], alt: a, beaute: 4, mobile: false });
plan.push({ source: 'recu/ewa-design-recu/exposition-mne-bordeaux-ewa.jpg', nom: 'expo-mne-bordeaux', role: 'galerie', ratio: '3:2', largeurs: [640, 1280], alt: 'Public assis devant des estampes d\'EWA à la Maison de la Nature et de l\'Environnement de Bordeaux', beaute: 3, mobile: false });

// Images à créer avec Grok
const grok = (nom, ratio, page, emplacement, priorite, scene, o = {}) => plan.push({ source: `recu/grok-agrandi/${nom}.png`, nom: `grok/${nom}`, role: o.role || 'galerie', ratio, largeurs: o.largeurs || [640, 1280], page, emplacement, priorite, scene, alt: o.alt, beaute: 4, mobile: false, ...o.plus });
grok('atelier-tirage', '16:9', 'accueil et estampes', 'Manifeste « Pas de stock, pas de déchets » (accueil) et « Comment ça marche » (estampes)', 'indispensable',
  'a large-format fine-art inkjet printer in a calm, bright print studio, a long blank sheet of thick white cotton paper slowly coming out of it, a roll of natural recycled paper beside it, nothing printed on the paper', { role: 'section-fond', largeurs: [640, 1280, 1920], gabarit: 'scene-metier', alt: 'Imprimante grand format d\'où sort une feuille de papier coton encore vierge', plus: { gabarit: 'scene-metier', consigne_scene: 'A large-format fine-art inkjet printer in a calm, bright print studio, a long blank sheet of thick white cotton paper slowly coming out of it, a roll of natural recycled paper on a pale oak table beside it, nothing printed on the paper, wide composition with calm empty space on the left third.' } });
grok('atelier-table', '16:9', 'atelier', 'Ouverture de la page L\'atelier', 'indispensable',
  'an architect\'s work table seen from above at an angle, pale wooden scale models of simple modular houses, rolls of tracing paper, a steel ruler, watercolour pans and pencils, soft daylight from a tall window', { role: 'ouverture', largeurs: [640, 1280, 1920], alt: 'Table d\'atelier d\'architecte : maquettes de maisons modulaires en bois, calques, aquarelles', plus: { gabarit: 'scene-metier', consigne_scene: 'An architect\'s work table seen from above at a gentle angle, pale wooden scale models of simple modular timber houses, loose rolls of tracing paper, a steel ruler, a small tin of watercolour pans and pencils, soft daylight from a tall window on the left, no drawings visible on the paper, no people, no hands, calm empty space in the upper part of the frame.', zone_texte: 'haut' } });
for (const [n, s, a] of [
  ['support-plexi', 'a blank sheet of thick glossy clear acrylic glass leaning against a pale plaster wall, crisp reflections on its polished edge', 'Plaque de plexiglas brillant, support de tirage'],
  ['support-alu', 'a blank sheet of brushed aluminium composite panel leaning against a pale plaster wall, fine horizontal brushing catching the light', 'Plaque d\'aluminium brossé (Alu Dibond), support de tirage'],
  ['support-toile', 'a blank stretched canvas of matte natural linen on a wooden stretcher frame, seen slightly from the side so the stapled edge is visible', 'Toile mate tendue sur châssis, support de tirage'],
  ['support-papier', 'a stack of thick blank white cotton fine-art paper sheets with soft deckled edges on a pale oak table, macro detail of the paper grain', 'Papier coton Fine Art, support de tirage']])
  grok(n, '1:1', 'accueil et estampes', 'Les quatre supports (section « Du fichier au mur » et page Estampes)', 'conseillée', s, { role: 'vignette', largeurs: [480, 960], alt: a, plus: { gabarit: 'texture', consigne_scene: s[0].toUpperCase() + s.slice(1) + ', completely blank surface with nothing printed on it, minimal still life, soft daylight, no people, no hands.' } });

fs.writeFileSync('plan-images.json', JSON.stringify(plan, null, 1));
console.log(plan.length, 'entrées ;', plan.filter(p => p.source.includes('/grok/')).length, 'à créer avec Grok');
