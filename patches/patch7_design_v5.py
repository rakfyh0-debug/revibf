#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
import sys
import os

def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def write(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  ✔ écrit : {path}")

def must_exist(path):
    if not os.path.isfile(path):
        print(f"  ✘ introuvable : {path} — lance ce script depuis la racine du projet.")
        sys.exit(1)

print("1/5 — Vérification des fichiers…")
for p in ["css/style.css", "css/visuel_extra.css", "index.html", "js/script.js"]:
    must_exist(p)

print("2/5 — Mise à jour de la palette (:root dans css/style.css)…")
style_css = read("css/style.css")
palette_swaps = {
    "--vert:   #1B6B3A;": "--vert:   #14663F;",
    "--or:     #F5A623;": "--or:     #D99A2B;",
    "--rouge:  #C0392B;": "--rouge:  #A8362B;",
    "--creme:  #FDF8F0;": "--creme:  #F7F4EC;",
    "--encre:  #1A1A2E;": "--encre:  #1A1D1B;",
    "--gris:   #5C5C7A;": "--gris:   #63685F;",
    "--rayon:  12px;":    "--rayon:  14px;",
}
n_changed = 0
for old, new in palette_swaps.items():
    if old in style_css:
        style_css = style_css.replace(old, new)
        n_changed += 1
    else:
        print(f"  ⚠ ligne non trouvée (déjà modifiée ou différente) : {old.strip()}")
write("css/style.css", style_css)
print(f"  → {n_changed}/{len(palette_swaps)} variables mises à jour")

print("3/5 — Remplacement des polices (Lexend→Manrope, Noto Sans→Inter)…")
font_swaps = [
    (r"'Lexend',\s*sans-serif", "'Manrope', sans-serif"),
    (r"Lexend,sans-serif", "Manrope,sans-serif"),
    (r"'Noto Sans',\s*sans-serif", "'Inter', sans-serif"),
]
for path in ["css/style.css", "css/design_pro.css", "css/hero_photo.css",
             "css/visuel_extra.css", "js/script.js"]:
    if not os.path.isfile(path):
        continue
    content = read(path)
    original = content
    for pattern, repl in font_swaps:
        content = re.sub(pattern, repl, content)
    if content != original:
        write(path, content)

index_html = read("index.html")
old_font_link = ('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;800'
                  '&family=Noto+Sans:wght@400;500&display=swap')
new_font_link = ('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800'
                  '&family=Inter:wght@400;500;600&display=swap')
if old_font_link in index_html:
    index_html = index_html.replace(old_font_link, new_font_link)
    print("  ✔ lien Google Fonts mis à jour")
else:
    print("  ⚠ lien Google Fonts non trouvé tel quel — à vérifier manuellement")

print("4/5 — Neutralisation des animations en boucle infinie…")
visuel_extra = read("css/visuel_extra.css")
kill_loops = """

/* ── PATCH v5 : neutralisation des animations en boucle (confiance > gadget) ── */
.hero-badge { animation: none; }
.score-fill::after { animation: none; display: none; }
.badge-new { animation: none; opacity: 1; }
"""
if "PATCH v5 : neutralisation" not in visuel_extra:
    visuel_extra += kill_loops
    write("css/visuel_extra.css", visuel_extra)
else:
    print("  → déjà appliqué, ignoré")

print("5/5 — Ajout de la barre d'onglets façon application (mobile)…")
app_nav_css = """/* APP TABBAR — RéviBF (patch v5) */
main#app { padding-bottom: 0; }
.app-tabbar {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 300;
  display: none;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(14px);
  border-top: 1px solid #E9ECE6;
  padding: 6px 6px calc(6px + env(safe-area-inset-bottom));
}
.app-tab {
  flex: 1; display: flex; flex-direction: column; align-items: center; gap: 3px;
  padding: 6px 2px; border-radius: 10px; background: transparent; border: none;
  cursor: pointer; color: var(--gris); font-family: 'Inter', sans-serif;
  transition: color .15s ease, transform .1s ease;
}
.app-tab svg { width: 20px; height: 20px; }
.app-tab span { font-size: 0.62rem; font-weight: 600; }
.app-tab.active { color: var(--vert); }
.app-tab:active { transform: scale(0.9); }
@media (max-width: 640px) {
  .app-tabbar { display: flex; }
  main#app { padding-bottom: 74px; }
  footer { padding-bottom: calc(1.8rem + 74px); }
}
body.dark .app-tabbar { background: rgba(18,18,24,0.92); border-top-color: #2a2a3a; }
body.dark .app-tab { color: #999; }
body.dark .app-tab.active { color: var(--vert); }
@media (prefers-reduced-motion: reduce) { .app-tab { transition: none; } }
"""
write("css/app_nav.css", app_nav_css)

if 'css/app_nav.css' not in index_html:
    index_html = index_html.replace(
        '<link rel="manifest" href="./manifest.json">',
        '<link rel="stylesheet" href="css/app_nav.css"/>\n<link rel="manifest" href="./manifest.json">'
    )
    print("  ✔ <link> vers css/app_nav.css ajouté")

tabbar_html = """
<nav class="app-tabbar" id="app-tabbar">
  <button class="app-tab" data-page="accueil" onclick="afficherPage('accueil')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/></svg>
    <span>Accueil</span>
  </button>
  <button class="app-tab" data-page="bepc" onclick="afficherPage('bepc')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>
    <span>BEPC</span>
  </button>
  <button class="app-tab" data-page="bac" onclick="afficherPage('bac')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 10L12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>
    <span>BAC</span>
  </button>
  <button class="app-tab" data-page="culture" onclick="afficherPage('culture')">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z"/></svg>
    <span>Culture</span>
  </button>
</nav>
"""
if 'id="app-tabbar"' not in index_html:
    index_html = index_html.replace(
        '<main id="app"></main>',
        '<main id="app"></main>\n' + tabbar_html
    )
    print("  ✔ markup de la tabbar injecté après <main id=\"app\">")
write("index.html", index_html)

script_js = read("js/script.js")
sync_call = "  var app = document.getElementById('app');\n  syncTabbar();"
if "syncTabbar();" not in script_js:
    script_js = script_js.replace(
        "  var app = document.getElementById('app');",
        sync_call,
        1
    )
    print("  ✔ appel syncTabbar() ajouté dans rendrePage()")

sync_fn = """

var __TABBAR_MAP__ = {
  accueil: 'accueil',
  bepc: 'bepc', 'annales-bepc': 'bepc', 'corriges-bepc': 'bepc', quiz: 'bepc',
  bac: 'bac', 'annales-bac': 'bac', 'corriges-bac': 'bac',
  'serie-detail': 'bac', 'quiz-serie': 'bac',
  culture: 'culture', 'culture-quiz': 'culture', 'culture-quiz-jour': 'culture'
};
function syncTabbar() {
  var cible = __TABBAR_MAP__[etat.page] || null;
  document.querySelectorAll('.app-tab').forEach(function(t) {
    t.classList.toggle('active', t.dataset.page === cible);
  });
}
"""
if "__TABBAR_MAP__" not in script_js:
    script_js += sync_fn
    print("  ✔ fonction syncTabbar() ajoutée en fin de fichier")

write("js/script.js", script_js)

print("\n✅ Patch appliqué.")
