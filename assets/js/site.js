/* Effets propres à EWA Design. Le socle gère l'ouverture, les transitions, l'en-tête, le menu, les boucles,
   les mesures et la bibliothèque d'effets. Ici : l'intro « ART | CHITECTURE » qui devient la page (la barre du logo
   monte, glisse jusqu'à l'objet de la page puis l'écran s'ouvre de part et d'autre), l'entrée des ouvertures,
   la barre de l'accueil, le tirage des estampes, les séries qui glissent, les carrés gigognes, la trame de l'habitat,
   la frise, les filtres et la visionneuse du catalogue, le globe des concours et le formulaire par étapes.
   Chaque effet propre porte data-effet="nom-du-plan". */
import { demarrer, quand, suivre, lacher, rafraichir, bloquerDefilement, debloquerDefilement } from './socle/index.js?v=2';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ordi = () => window.matchMedia('(min-width: 761px)').matches;

/* ---------- Ouverture de chaque page ---------- */
function centreX() {
  const barre = $('.split-barre');
  const el = barre && barre.offsetParent ? barre : $('[data-iris-centre]');
  if (!el) return innerWidth / 2;
  const r = el.getBoundingClientRect();
  return Math.min(Math.max(r.left + r.width / 2, 40), (document.documentElement.clientWidth || innerWidth) - 40);
}
const pans = (x, d, W) => `polygon(0px 0px, ${Math.max(0, x - d)}px 0px, ${Math.max(0, x - d)}px 100%, ${Math.min(W, x + d)}px 100%, ${Math.min(W, x + d)}px 0px, ${W}px 0px, ${W}px 100%, 0px 100%)`;

/* Titre qui fait l'événement : sur les pages intérieures, la barre du logo passe sur la dernière ligne du titre
   d'ouverture et l'écrit derrière elle (sur l'accueil, la barre coupe déjà ART | CHITECTURE). */
function balayage() {
  const h = $('#debut [data-grille~="typo"]:not(.titre-split)');
  const m = h && $$('.t-masque', h).pop();
  const mot = m && $('.t-mot', m);
  if (!mot) return null;
  let trait = $('.t-trait', m);
  if (!trait) { trait = document.createElement('span'); trait.className = 't-trait'; trait.setAttribute('aria-hidden', 'true'); m.append(trait); }
  return { mot, trait };
}

/* Entrée du premier écran, partagée par l'intro et l'arrivée sous le voile. */
function entree(tl, t) {
  const bal = balayage();
  if (bal) {
    tl.fromTo(bal.mot, { y: 0, yPercent: 0, clipPath: 'inset(-0.2em 100% -0.25em -0.1em)' }, { clipPath: 'inset(-0.2em -0.1em -0.25em -0.1em)', duration: 0.7, ease: 'power3.inOut' }, t + 0.15)
      .fromTo(bal.trait, { x: () => bal.mot.offsetLeft, opacity: 1 }, { x: () => bal.mot.offsetLeft + bal.mot.offsetWidth, duration: 0.7, ease: 'power3.inOut' }, t + 0.15)
      .to(bal.trait, { opacity: 0, duration: 0.25 }, t + 0.85);
  }
  const mots = $$('#debut .t-mot').filter((m) => !bal || m !== bal.mot);
  if (mots.length) tl.fromTo(mots, { y: 0, yPercent: 105 }, { y: 0, yPercent: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out' }, t);
  const barre = $('.split-barre');
  if (barre) tl.fromTo(barre, { scaleY: 0 }, { scaleY: 1, duration: 0.7, ease: 'power3.inOut' }, Math.max(0, t - 0.1));
  const rideaux = $$('#debut .ouv-media-rideau');
  if (rideaux.length) tl.fromTo(rideaux, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.85, ease: 'power3.inOut' }, t);
  const textes = $$('#debut .ouv-entree');
  if (textes.length) tl.fromTo(textes, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }, t + 0.15);
  const ligne = $('.lettre-email-ligne');
  if (ligne) tl.fromTo(ligne, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power3.inOut' }, t + 0.25);
  /* L'estampe d'ouverture s'imprime (animation CSS lancée hors de la timeline, sans l'allonger). */
  tl.call(() => $$('#debut [data-tirage]').forEach(tirer), null, t);
}

function jouer() {
  if (!gsap) return null;
  const panneau = $('[data-ouverture]');
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const b = $('.ouv-barre');
  tl.fromTo('.ouv-ewa', { opacity: 0, y: -8, xPercent: -50 }, { opacity: 1, y: 0, xPercent: -50, duration: 0.35 }, 0.05)
    .fromTo(b, { scaleY: 0 }, { scaleY: 1, duration: 0.3 }, 0)
    .fromTo('.ouv-art', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45 }, 0.1)
    .fromTo('.ouv-chi', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45 }, 0.1)
    .to('.ouv-art', { x: -80, opacity: 0, duration: 0.3, ease: 'power2.in' }, 0.68)
    .to('.ouv-chi', { x: 80, opacity: 0, duration: 0.3, ease: 'power2.in' }, 0.68)
    .to('.ouv-ewa', { opacity: 0, duration: 0.25 }, 0.68);
  /* La barre du logo monte sur toute la hauteur, puis glisse jusqu'à l'objet d'ouverture de la page. */
  if (b && panneau) {
    const rb = b.getBoundingClientRect();
    const tx = centreX();
    const W = document.documentElement.clientWidth || innerWidth;
    tl.to(b, { scaleY: () => (innerHeight * 1.04) / Math.max(1, rb.height), duration: 0.4, ease: 'power3.inOut' }, 0.72)
      .to(b, { x: tx - (rb.left + rb.width / 2), duration: 0.35, ease: 'power3.inOut' }, 1.06);
    /* L'écran s'ouvre de part et d'autre de la barre : la page apparaît derrière. */
    const o = { d: 0 };
    tl.to(o, { d: Math.max(tx, W - tx) + 4, duration: 0.65, ease: 'power3.inOut', onUpdate: () => { panneau.style.clipPath = pans(tx, o.d, W); } }, 1.42)
      .to(b, { opacity: 0, duration: 0.2 }, 1.85);
  }
  entree(tl, 1.48);
  return tl;
}

function arrivee() {
  if (!gsap) return;
  entree(gsap.timeline(), 0.12);
}

function etatFinal() {
  if (!gsap) return;
  gsap.set('#debut .t-mot', { y: 0, yPercent: 0, clipPath: 'none' });
  gsap.set('#debut .t-trait', { opacity: 0 });
  gsap.set('.split-barre', { scaleY: 1 });
  gsap.set('#debut .ouv-media-rideau', { clipPath: 'inset(0 0% 0 0)' });
  gsap.set('#debut .ouv-entree', { opacity: 1, y: 0 });
  gsap.set('.lettre-email-ligne', { scaleX: 1 });
  $$('[data-tirage]').forEach((el) => el.classList.add('tire', 'tire-fini'));
  gigogneFinal && gigogneFinal();
  trameFinal && trameFinal();
}

/* Au défilement, l'ouverture se sépare : l'art part à gauche, l'architecture à droite, la barre descend.
   Sur les autres pages, l'objet d'ouverture glisse doucement. Propriétés distinctes de l'entrée (x et y seulement). */
function sortieOuverture() {
  const debut = $('#debut');
  if (!debut || !gsap || !ST) return;
  const st = { trigger: debut, start: 'top top', end: 'bottom top', scrub: 0.4 };
  const art = $('.split-art'), chi = $('.split-chi'), barre = $('.split-barre');
  if (art && chi) {
    gsap.to(art, { xPercent: -6, ease: 'none', scrollTrigger: st });
    gsap.to(chi, { xPercent: 5, ease: 'none', scrollTrigger: { ...st } });
    gsap.to(barre, { y: () => innerHeight * 0.12, ease: 'none', scrollTrigger: { ...st } });
    return;
  }
  const objet = $('#debut [data-iris-centre]');
  if (objet) gsap.to(objet, { y: () => -innerHeight * 0.06, ease: 'none', scrollTrigger: st });
}

/* Architecture en plein écran : les mots s'effacent quand la légende arrive. */
function initArchiMots() {
  const sec = $('#architecture[data-fx="plein-ecran"]');
  if (!sec || !gsap || !ST) return;
  gsap.fromTo($$('[data-fx-ecarte]', sec), { opacity: 1 }, { opacity: 0, ease: 'none', immediateRender: false, scrollTrigger: { trigger: sec, start: () => `top+=${sec.offsetHeight * 0.45} top`, end: () => `top+=${sec.offsetHeight * 0.62} top`, scrub: true, invalidateOnRefresh: true } });
}

/* ---------- Tirage : l'estampe sort de haut en bas sous une ligne de lumière ---------- */
function tirer(el) {
  if (el.classList.contains('tire')) return;
  el.style.setProperty('--tirage-h', `${Math.round(el.getBoundingClientRect().height)}px`);
  el.classList.add('tire');
  const d = parseFloat(getComputedStyle(el).getPropertyValue('--delai')) || 0;
  setTimeout(() => el.classList.add('tire-fini'), (1.6 + d) * 1000);
}
function initTirage() {
  const els = $$('[data-tirage]').filter((el) => !el.closest('#debut'));
  if (!els.length) return;
  els.forEach((el) => { if (!el.dataset.effet) el.dataset.effet = 'tirage'; });
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting && e.intersectionRatio > 0.12) { tirer(e.target); io.unobserve(e.target); }
  }), { threshold: [0, 0.12, 0.3] });
  els.forEach((el) => io.observe(el));
}

/* ---------- Séries : la rangée glisse au défilement sur ordinateur ---------- */
function initSeries() {
  const section = $('#series'), piste = $('[data-series-piste]'), fen = $('.series-fenetre');
  if (!section || !piste || !gsap || !ST) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    fen.removeAttribute('tabindex'); fen.removeAttribute('role');
    const max = () => Math.max(0, piste.scrollWidth - fen.clientWidth);
    const tw = gsap.to(piste, { x: () => -max(), ease: 'none', scrollTrigger: { trigger: section, start: 'top 75%', end: 'bottom 25%', scrub: 0.6, invalidateOnRefresh: true } });
    /* Au clavier, la carte qui reçoit le focus est ramenée dans la fenêtre. */
    const surFocus = (e) => {
      const carte = e.target.closest('.serie-carte'); const s = tw.scrollTrigger;
      if (!carte || !s || !max()) return;
      const cible = Math.min(max(), Math.max(0, carte.offsetLeft - (fen.clientWidth - carte.offsetWidth) / 2));
      scrollTo({ top: s.start + (cible / max()) * (s.end - s.start), behavior: 'auto' });
    };
    piste.addEventListener('focusin', surFocus);
    return () => { piste.removeEventListener('focusin', surFocus); fen.setAttribute('tabindex', '0'); fen.setAttribute('role', 'region'); };
  });
}

/* ---------- Gigogne : 30, 60 puis 90 cm ---------- */
let gigogneFinal = null;
function initGigogne() {
  const scene = $('[data-effet="gigogne"]');
  if (!scene || !gsap) return;
  const oeuvre = $('[data-gig-oeuvre]', scene), t1 = $('[data-gig-taille]', scene), t2 = $('[data-gig-taille2]', scene);
  const boutons = $$('[data-gig-choix]');
  const etat = { s: 30 };
  /* L'étiquette ne montre que les vrais formats (30, 60, 90), jamais une taille intermédiaire. */
  const poser = () => {
    const s = etat.s < 45 ? 30 : etat.s < 75 ? 60 : 90;
    oeuvre.parentElement.style.setProperty('--gig-echelle', (etat.s / 90).toFixed(4));
    if (t1.textContent !== String(s)) { t1.textContent = s; t2.textContent = s; $$('[data-gig-cote]', scene).forEach((x) => { x.textContent = s; }); }
  };
  const presser = (v) => boutons.forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.gigChoix === v)));
  let auto = null;
  const vers = (v, duree = 0.7) => gsap.to(etat, { s: v, duration: duree, ease: 'power3.inOut', onUpdate: poser });
  gigogneFinal = () => { if (auto) auto.kill(); etat.s = 90; poser(); presser(90); };
  poser(); presser(30);
  auto = gsap.timeline({ paused: true })
    .add(vers(60, 0.8), 0.3).call(() => presser(60), null, 1.1)
    .add(vers(90, 0.8), 1.6).call(() => presser(90), null, 2.4);
  if (ST) ST.create({ trigger: scene, start: 'top 72%', once: true, onEnter: () => auto.play() });
  boutons.forEach((b) => b.addEventListener('click', () => {
    if (auto) auto.kill();
    const v = +b.dataset.gigChoix; presser(v); vers(v);
  }));
  /* Effet signature qui se manipule : on tire le coin orange (ou l'œuvre, à la souris) ; au lâcher, l'œuvre
     se pose sur le format réel le plus proche. Les boutons restent la voie du clavier. */
  const cadre = oeuvre.parentElement, poignee = $('[data-gig-poignee]', scene);
  const proche = (x) => (x < 45 ? 30 : x < 75 ? 60 : 90);
  let prise = null;
  const prendre = (e) => {
    if (e.button > 0) return;
    if (auto) auto.kill();
    gsap.killTweensOf(etat);
    const r = cadre.getBoundingClientRect();
    prise = { cx: r.left + r.width / 2, cy: r.top + r.height / 2, demi: r.width / 2, id: e.pointerId, el: e.currentTarget };
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    scene.classList.add('gig-prise');
    e.preventDefault();
  };
  const tirerCoin = (e) => {
    if (!prise || e.pointerId !== prise.id) return;
    const d = Math.max(Math.abs(e.clientX - prise.cx), Math.abs(e.clientY - prise.cy));
    etat.s = Math.min(96, Math.max(22, (d / prise.demi) * 90));
    poser(); presser(proche(etat.s));
  };
  const lacherCoin = () => {
    if (!prise) return;
    prise = null; scene.classList.remove('gig-prise');
    const v = proche(etat.s); presser(v); vers(v, 0.45);
  };
  [poignee, oeuvre].forEach((el) => {
    if (!el) return;
    el.addEventListener('pointerdown', (e) => { if (el === oeuvre && e.pointerType !== 'mouse') return; prendre(e); });
    el.addEventListener('pointermove', tirerCoin);
    el.addEventListener('pointerup', lacherCoin);
    el.addEventListener('pointercancel', lacherCoin);
    el.addEventListener('lostpointercapture', lacherCoin);
  });
}

/* ---------- Fil dans la marge : la barre du logo descend avec la lecture, le folio donne la section ---------- */
function initFil() {
  const fil = $('[data-grille~="fil"]'), plein = $('[data-fil-plein]'), n = $('[data-fil-n]');
  if (!fil || !plein) return;
  const sections = $$('#contenu > section');
  let dernier = '';
  const maj = () => {
    const H = document.documentElement.scrollHeight - innerHeight;
    plein.style.transform = `scaleY(${H > 0 ? Math.min(1, Math.max(0, scrollY / H)).toFixed(4) : 0})`;
    let i = 0;
    sections.forEach((s, k) => { if (s.getBoundingClientRect().top < innerHeight * 0.5) i = k; });
    const t = String(i + 1).padStart(2, '0');
    if (t !== dernier) { dernier = t; n.textContent = t; }
    fil.classList.toggle('fil-sombre', !!(sections[i] && sections[i].matches('.section--encre, .appel')));
  };
  addEventListener('scroll', maj, { passive: true });
  addEventListener('resize', maj);
  maj();
}

/* ---------- Trame : la maison grandit, de M 001 à M 009 ---------- */
let trameFinal = null;
function initTrame() {
  const bloc = $('[data-trame]');
  if (!bloc) return;
  const modeles = JSON.parse(bloc.dataset.modeles || '[]');
  const rects = $$('.module', bloc), boutons = $$('[data-trame-choix]', bloc), dl = $('.trame-donnees', bloc);
  const val = (k) => $(`[data-trame-val="${k}"]`, bloc);
  const montrer = (i) => {
    const m = modeles[i]; if (!m) return;
    rects.forEach((r) => {
      const rang = +r.dataset.rang;
      r.classList.toggle('allume', rang < m.cases);
      r.style.transitionDelay = `${Math.max(0, rang - 1) * 25}ms`;
    });
    ['occupants', 'surface', 'panneaux', 'kwh', 'legumes'].forEach((k) => { const v = val(k); if (v) v.textContent = m[k]; });
    boutons.forEach((b, k) => b.setAttribute('aria-pressed', String(k === i)));
  };
  let minuterie = null, i = 0;
  const arreter = () => { clearInterval(minuterie); minuterie = null; };
  trameFinal = () => { arreter(); montrer(modeles.length - 1); };
  montrer(0);
  if (ST) ST.create({ trigger: $('.trame-plan', bloc), start: 'top 75%', once: true, onEnter: () => {
    i = 0; montrer(0);
    minuterie = setInterval(() => { i += 1; montrer(i); if (i >= modeles.length - 1) arreter(); }, 750);
  } });
  boutons.forEach((b, k) => b.addEventListener('click', () => { arreter(); dl.setAttribute('aria-live', 'polite'); montrer(k); }));
}

/* ---------- Frise du parcours : la barre orange descend avec la lecture ---------- */
function initFrise() {
  const frise = $('.frise');
  if (!frise || !ST) return;
  frise.style.setProperty('--frise', '0');
  ST.create({ trigger: frise, start: 'top 75%', end: 'bottom 55%', scrub: true, onUpdate: (s) => frise.style.setProperty('--frise', s.progress.toFixed(3)) });
}

/* ---------- Catalogue : filtres gardés dans l'adresse ---------- */
function initFiltres() {
  const zone = $('[data-filtres]'), grille = $('[data-catalogue]');
  if (!zone || !grille) return;
  const boutons = $$('[data-filtre]', zone), fiches = $$('.fiche', grille);
  const appliquer = (f, anime = true) => {
    const faire = () => {
      fiches.forEach((li) => { li.hidden = f !== 'toutes' && li.dataset.serie !== f; });
      boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === f)));
      fiches.filter((li) => !li.hidden).forEach((li) => { const t = $('[data-tirage]', li); if (t) { t.classList.add('tire', 'tire-fini'); } });
      grille.classList.remove('filtre-en-cours');
      rafraichir && rafraichir();
    };
    if (!anime) return faire();
    grille.classList.add('filtre-en-cours');
    setTimeout(faire, 280);
  };
  const p = new URLSearchParams(location.search).get('serie');
  if (p && boutons.some((b) => b.dataset.filtre === p)) appliquer(p, false);
  boutons.forEach((b) => b.addEventListener('click', () => {
    const f = b.dataset.filtre;
    const u = new URL(location.href);
    if (f === 'toutes') u.searchParams.delete('serie'); else u.searchParams.set('serie', f);
    history.replaceState(history.state, '', u);
    const haut = grille.getBoundingClientRect().top;
    appliquer(f);
    /* La galerie a pu raccourcir : on revient à son début si elle est passée au-dessus de l'écran. */
    setTimeout(() => { if (haut < 0) scrollTo({ top: scrollY + zone.getBoundingClientRect().top - 120 }); }, 320);
  }));
}

/* ---------- Visionneuse : estampes, planches de luminaires, presse ---------- */
function initVisionneuse() {
  const v = $('[data-visionneuse]');
  if (!v) return;
  const img = $('[data-vis-img]', v), titre = $('[data-vis-titre]', v), formats = $('[data-vis-formats]', v), texte = $('[data-vis-texte]', v), demander = $('[data-vis-demander]', v);
  const items = () => $$('[data-oeuvre], [data-planche]').filter((b) => !b.closest('[hidden]'));
  let courant = null, retour = null;
  const remplir = (b) => {
    courant = b;
    img.src = b.dataset.image; img.alt = b.dataset.titre;
    titre.textContent = b.dataset.titre;
    if (formats) formats.textContent = b.dataset.formats || '';
    if (texte) texte.textContent = b.dataset.texte || '';
    if (demander) {
      const u = new URL(demander.href, location.href);
      u.searchParams.set('sujet', 'estampe'); u.searchParams.set('oeuvre', b.dataset.titre);
      demander.href = u.pathname + u.search + u.hash;
    }
  };
  const ouvrir = (b) => {
    retour = document.activeElement; remplir(b);
    v.hidden = false; requestAnimationFrame(() => v.classList.add('ouverte'));
    suivre(v); bloquerDefilement('visionneuse');
    if (b.dataset.oeuvre) { const u = new URL(location.href); u.searchParams.set('oeuvre', b.dataset.oeuvre); history.replaceState(history.state, '', u); }
    setTimeout(() => titre.focus({ preventScroll: true }), 60);
  };
  const fermer = () => {
    if (v.hidden) return;
    sansLoupe();
    v.classList.remove('ouverte');
    const u = new URL(location.href); if (u.searchParams.has('oeuvre')) { u.searchParams.delete('oeuvre'); history.replaceState(history.state, '', u); }
    setTimeout(() => { v.hidden = true; lacher(v); debloquerDefilement('visionneuse'); }, 300);
    if (retour && retour.focus) retour.focus({ preventScroll: true });
  };
  /* Loupe : un clic sur l'image (ou le bouton) l'agrandit 2,6 fois sous le pointeur ; on explore en déplaçant la souris ou le doigt. */
  const boutonLoupe = $('[data-vis-loupe]', v), zone = $('.vis-image', v);
  let loupe = null;
  const viser = (x, y) => {
    if (!loupe) return;
    const r = loupe.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (x - r.left) / r.width)), py = Math.min(1, Math.max(0, (y - r.top) / r.height));
    loupe.style.backgroundPosition = `${(px * 100).toFixed(2)}% ${(py * 100).toFixed(2)}%`;
  };
  const sansLoupe = () => {
    if (!loupe) return;
    loupe.remove(); loupe = null;
    if (boutonLoupe) boutonLoupe.setAttribute('aria-pressed', 'false');
    v.classList.remove('loupe-active');
  };
  const avecLoupe = (x, y) => {
    sansLoupe();
    loupe = document.createElement('div');
    loupe.className = 'vis-loupe'; loupe.setAttribute('aria-hidden', 'true');
    /* Grossissement réglé sur la vraie définition du fichier (jamais plus de 2,6 fois) pour rester net. */
    const f = Math.max(1.6, Math.min(2.6, (img.naturalWidth || 1600) / Math.max(1, img.offsetWidth)));
    Object.assign(loupe.style, { left: `${img.offsetLeft}px`, top: `${img.offsetTop}px`, width: `${img.offsetWidth}px`, height: `${img.offsetHeight}px`, backgroundImage: `url("${img.currentSrc || img.src}")`, backgroundSize: `${(f * 100).toFixed(0)}% ${(f * 100).toFixed(0)}%` });
    zone.append(loupe);
    loupe.addEventListener('pointermove', (e) => viser(e.clientX, e.clientY));
    loupe.addEventListener('click', sansLoupe);
    if (boutonLoupe) boutonLoupe.setAttribute('aria-pressed', 'true');
    v.classList.add('loupe-active');
    if (x == null) loupe.style.backgroundPosition = '50% 50%'; else viser(x, y);
  };
  if (zone) zone.style.position = 'relative';
  img.addEventListener('click', (e) => avecLoupe(e.clientX, e.clientY));
  if (boutonLoupe) boutonLoupe.addEventListener('click', () => (loupe ? sansLoupe() : avecLoupe()));
  addEventListener('resize', sansLoupe);
  const pas = (d) => { sansLoupe(); const l = items(); const i = l.indexOf(courant); if (i < 0) return; remplir(l[(i + d + l.length) % l.length]); };
  $$('[data-oeuvre], [data-planche]').forEach((b) => b.addEventListener('click', () => ouvrir(b)));
  $('[data-vis-fermer]', v).addEventListener('click', fermer);
  $('[data-vis-prec]', v).addEventListener('click', () => pas(-1));
  $('[data-vis-suiv]', v).addEventListener('click', () => pas(1));
  v.addEventListener('click', (e) => { if (e.target === v || e.target.classList.contains('vis-boite')) fermer(); });
  document.addEventListener('keydown', (e) => {
    if (v.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); if (loupe) sansLoupe(); else fermer(); }
    else if (e.key === 'ArrowRight') pas(1);
    else if (e.key === 'ArrowLeft') pas(-1);
    else if (e.key === 'Tab') {
      const f = $$('button, a[href], [tabindex="-1"]', v).filter((x) => x.offsetParent !== null);
      const premier = f[0], dernier = f[f.length - 1];
      if (e.shiftKey && document.activeElement === premier) { e.preventDefault(); dernier.focus(); }
      else if (!e.shiftKey && document.activeElement === dernier) { e.preventDefault(); premier.focus(); }
    }
  });
  /* Lien direct vers une œuvre : ?oeuvre=nom. */
  const p = new URLSearchParams(location.search).get('oeuvre');
  if (p) quand('pret', () => { const b = $(`[data-oeuvre="${CSS.escape(p)}"]`); if (b) ouvrir(b); });
}

/* ---------- Souris : l'ouverture répond au pointeur (ordinateur seulement) ---------- */
const sourisFine = () => matchMedia('(hover: hover) and (pointer: fine)').matches;
/* Chaque plan glisse d'une amplitude propre (propriété « translate », distincte des transformations de GSAP).
   Quand la souris s'arrête, le mouvement s'amortit puis la boucle s'éteint : rien ne bouge au repos. */
function initSouris() {
  const debut = $('#debut.ouv-split');
  if (!debut || !sourisFine()) return;
  const plans = [
    [$('.split-art .estampe', debut), -16, -12],
    [$('.split-chi .media img', debut), 14, 10],
    [$('.titre-split', debut), 7, 5],
    [$('.split-texte', debut), -4, -3],
  ].filter(([el]) => el);
  const chi = $('.split-chi .media img', debut);
  if (chi) chi.style.scale = '1.06';
  const cible = { x: 0, y: 0 }, pos = { x: 0, y: 0 };
  let tourne = false;
  const pas = () => {
    pos.x += (cible.x - pos.x) * 0.08; pos.y += (cible.y - pos.y) * 0.08;
    plans.forEach(([el, ax, ay]) => { el.style.translate = `${(pos.x * ax).toFixed(2)}px ${(pos.y * ay).toFixed(2)}px`; });
    if (Math.abs(cible.x - pos.x) + Math.abs(cible.y - pos.y) > 0.002) requestAnimationFrame(pas); else tourne = false;
  };
  const lancer = () => { if (!tourne) { tourne = true; requestAnimationFrame(pas); } };
  debut.addEventListener('pointermove', (e) => {
    const r = debut.getBoundingClientRect();
    cible.x = ((e.clientX - r.left) / r.width - 0.5) * 2; cible.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    lancer();
  });
  debut.addEventListener('pointerleave', () => { cible.x = 0; cible.y = 0; lancer(); });
}

/* ---------- Modules : globe des concours, formulaire par étapes ---------- */
function initModules() {
  const globe = $('[data-module="globe-itineraire"]');
  if (globe) quand('pret', () => import('./modules/globe/module.js?v=2').then((m) => m.init(globe, { lecture: 0.5 })).then(() => rafraichir && rafraichir()).catch((e) => console.warn('[globe]', e)));
  const form = $('[data-module="formulaire-par-etapes"]');
  if (form) {
    /* Préremplissage depuis l'adresse : ?sujet=estampe&oeuvre=… (boutons des autres pages et de la visionneuse). */
    const p = new URLSearchParams(location.search);
    const sujet = p.get('sujet'), oeuvre = p.get('oeuvre');
    if (sujet) { const r = $(`input[name="objet"][value="${CSS.escape(sujet)}"]`, form); if (r) r.checked = true; }
    if (oeuvre) { const c = $('#f-oeuvre', form); if (c) c.value = oeuvre; }
    import('./modules/formulaire/module.js?v=2').then((m) => m.init(form, { mailto: '' })).catch((e) => console.warn('[formulaire]', e));
    form.addEventListener('formulaire:envoye', () => { const f = $('.fpe__fin', form); if (f) f.classList.add('fpe__fin--imprime'); });
    form.addEventListener('formulaire:envoye', () => setTimeout(() => { const f = $('.fpe__fin', form); if (f) f.scrollIntoView({ block: 'center' }); }, 120));
  }
}

demarrer({
  preparer() {
    sortieOuverture();
    initArchiMots();
    initTirage();
    initSeries();
    initGigogne();
    initTrame();
    initFrise();
    initFiltres();
    initVisionneuse();
    initModules();
    initSouris();
    initFil();
  },
  jouer,
  etatFinal,
  arrivee,
});
