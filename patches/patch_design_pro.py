import os
import re

home = os.path.expanduser('~')
index_path = os.path.join(home, 'ReviBF', 'index.html')
script_path = os.path.join(home, 'ReviBF', 'js', 'script.js')

# ========== 1. Lier design_pro.css et sons.js dans index.html ==========
with open(index_path, 'r', encoding='utf-8') as f:
    html = f.read()

marker_css = '<link rel="stylesheet" href="css/visuel_extra.css"/>'
if marker_css in html:
    new_css = marker_css + '\n  <link rel="stylesheet" href="css/design_pro.css"/>'
    html = html.replace(marker_css, new_css)
    print("OK: design_pro.css lie")
else:
    marker_css2 = '<link rel="stylesheet" href="css/style.css"/>'
    if marker_css2 in html and 'design_pro.css' not in html:
        html = html.replace(marker_css2, marker_css2 + '\n  <link rel="stylesheet" href="css/design_pro.css"/>')
        print("OK: design_pro.css lie (fallback)")
    else:
        print("INFO: design_pro.css deja present ou marker introuvable")

marker_js = '<script src="js/confettis.js"></script>'
if marker_js in html:
    new_js = marker_js + '\n<script src="js/sons.js"></script>'
    html = html.replace(marker_js, new_js)
    print("OK: sons.js lie")
else:
    marker_js2 = '<script src="js/script.js"></script>'
    if marker_js2 in html and 'sons.js' not in html:
        html = html.replace(marker_js2, '<script src="js/sons.js"></script>\n' + marker_js2)
        print("OK: sons.js lie (fallback)")
    else:
        print("INFO: sons.js deja present ou marker introuvable")

# Ajouter le bouton son dans la navbar
marker_burger = '<button class="burger" onclick="toggleMenu()">☰</button>'
bouton_son = '<button class="son-toggle" id="son-toggle" onclick="toggleSon()" title="Activer/Couper le son">🔊</button>\n    ' + marker_burger
if marker_burger in html and 'son-toggle' not in html:
    html = html.replace(marker_burger, bouton_son)
    print("OK: bouton son ajoute dans la navbar")
else:
    print("INFO: bouton son deja present ou marker introuvable")

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(html)

# ========== 2. Ajouter la logique son + icones SVG dans script.js ==========
with open(script_path, 'r', encoding='utf-8') as f:
    js = f.read()

# --- Variable globale et fonction toggleSon ---
toggle_son_code = '''var __sonActif = true;

function toggleSon() {
  __sonActif = !__sonActif;
  var btn = document.getElementById('son-toggle');
  if (btn) {
    btn.textContent = __sonActif ? '🔊' : '🔇';
    btn.classList.toggle('muted', !__sonActif);
  }
}

'''

marker_etat = "let etat = {"
if marker_etat in js and "toggleSon" not in js:
    js = js.replace(marker_etat, toggle_son_code + marker_etat)
    print("OK: toggleSon ajoute")
else:
    print("INFO: toggleSon deja present ou marker introuvable")

# --- Jouer le son dans repondre() ---
old_correct = "  if (choix === q.rep) {\n    opts[choix].classList.add('correct');"
new_correct = "  if (choix === q.rep) {\n    if (__sonActif && typeof jouerSonBonneReponse === 'function') jouerSonBonneReponse();\n    opts[choix].classList.add('correct');"

if old_correct in js:
    js = js.replace(old_correct, new_correct)
    print("OK: son bonne reponse ajoute")
else:
    print("ATTENTION: bloc 'choix === q.rep' non trouve")

old_incorrect = "  } else {\n    opts[choix].classList.add('incorrect');"
new_incorrect = "  } else {\n    if (__sonActif && typeof jouerSonMauvaiseReponse === 'function') jouerSonMauvaiseReponse();\n    opts[choix].classList.add('incorrect');"

if old_incorrect in js:
    js = js.replace(old_incorrect, new_incorrect)
    print("OK: son mauvaise reponse ajoute")
else:
    print("ATTENTION: bloc else incorrect non trouve")

# --- Jouer le son de victoire en plus des confettis ---
old_confetti_trigger = "if (typeof lancerConfettis === 'function') lancerConfettis();"
new_confetti_trigger = "if (typeof lancerConfettis === 'function') lancerConfettis();\n      if (__sonActif && typeof jouerSonVictoire === 'function') jouerSonVictoire();"

if old_confetti_trigger in js:
    js = js.replace(old_confetti_trigger, new_confetti_trigger)
    print("OK: son victoire ajoute")
else:
    print("INFO: declencheur confettis non trouve (normal si patch confettis pas encore applique)")

# --- Petit son de clic sur les onglets (tab-btn) via changerTab ---
old_changer_tab = "function changerTab(ctx, id) {\n  etat.tabActif[ctx] = id;"
new_changer_tab = "function changerTab(ctx, id) {\n  if (__sonActif && typeof jouerSonClic === 'function') jouerSonClic();\n  etat.tabActif[ctx] = id;"

if old_changer_tab in js:
    js = js.replace(old_changer_tab, new_changer_tab)
    print("OK: son clic onglets ajoute")
else:
    print("INFO: fonction changerTab non trouvee telle quelle")

# --- Remplacer les icones emoji des 3 cartes principales par des SVG ---
svg_bepc = '''<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="14" width="44" height="38" rx="3" fill="#fff" opacity="0.15"/><path d="M12 20c0-3.3 2.7-6 6-6h12v36H18c-3.3 0-6-2.7-6-6V20z" fill="#fff" opacity="0.9"/><path d="M52 20c0-3.3-2.7-6-6-6H34v36h12c3.3 0 6-2.7 6-6V20z" fill="#fff" opacity="0.7"/><line x1="32" y1="16" x2="32" y2="50" stroke="#1B6B3A" stroke-width="1.5"/></svg>'''

svg_bac = '''<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 12L8 24l24 12 24-12-24-12z" fill="#fff" opacity="0.9"/><path d="M16 28v12c0 2 7 8 16 8s16-6 16-8V28" stroke="#fff" stroke-width="2.5" opacity="0.7"/><circle cx="52" cy="26" r="2" fill="#fff"/><line x1="52" y1="26" x2="52" y2="40" stroke="#fff" stroke-width="2"/></svg>'''

svg_culture = '''<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="20" fill="#fff" opacity="0.15"/><circle cx="32" cy="32" r="20" stroke="#fff" stroke-width="2" opacity="0.9"/><path d="M12 32c4-6 10-10 20-10s16 4 20 10" stroke="#fff" stroke-width="1.5" opacity="0.6" fill="none"/><path d="M12 32c4 6 10 10 20 10s16-4 20-10" stroke="#fff" stroke-width="1.5" opacity="0.6" fill="none"/><line x1="32" y1="12" x2="32" y2="52" stroke="#fff" stroke-width="1.5" opacity="0.6"/></svg>'''

old_examcard_fn = '''function examCard(cls, emoji, titre, desc, page) {
  return '<div class="exam-card '+cls+'" data-emoji="'+emoji+'" onclick="afficherPage(\\''+page+'\\')">' +
    '<h2>'+titre+'</h2><p>'+desc+'</p>' +
    '<button class="btn btn-or btn-sm">Commencer →</button></div>';
}'''

new_examcard_fn = '''var ICONES_SVG_CARTES = {
  'BEPC': `''' + svg_bepc + '''`,
  'BAC': `''' + svg_bac + '''`,
  'Culture Générale': `''' + svg_culture + '''`
};

function examCard(cls, emoji, titre, desc, page) {
  var svgIcon = ICONES_SVG_CARTES[titre] || '';
  var iconHtml = svgIcon ? '<div class="exam-card-icon">'+svgIcon+'</div>' : '';
  var clsFinal = svgIcon ? cls + ' has-svg-icon' : cls;
  return '<div class="exam-card '+clsFinal+'" data-emoji="'+emoji+'" onclick="afficherPage(\\''+page+'\\')">' +
    iconHtml +
    '<h2>'+titre+'</h2><p>'+desc+'</p>' +
    '<button class="btn btn-or btn-sm">Commencer →</button></div>';
}'''

if old_examcard_fn in js:
    js = js.replace(old_examcard_fn, new_examcard_fn)
    print("OK: icones SVG ajoutees aux cartes principales")
else:
    print("ATTENTION: fonction examCard non trouvee telle quelle (recherche alternative)")
    # Recherche plus souple par regex si l'espacement differe
    pattern = re.compile(r"function examCard\(cls, emoji, titre, desc, page\) \{.*?\n\}", re.DOTALL)
    if pattern.search(js):
        js = pattern.sub(new_examcard_fn, js, count=1)
        print("OK: icones SVG ajoutees (methode regex)")
    else:
        print("ECHEC: impossible de localiser examCard()")

with open(script_path, 'w', encoding='utf-8') as f:
    f.write(js)

print("Termine.")
