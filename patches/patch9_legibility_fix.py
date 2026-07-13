#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re, os, sys

def read(p):
    with open(p, "r", encoding="utf-8") as f:
        return f.read()

def write(p, c):
    with open(p, "w", encoding="utf-8") as f:
        f.write(c)
    print(f"  ✔ écrit : {p}")

def must_exist(p):
    if not os.path.isfile(p):
        print(f"  ✘ introuvable : {p}")
        sys.exit(1)

for p in ["css/style.css", "index.html", "js/script.js"]:
    must_exist(p)

print("1/3 — Unification de la police (Nunito partout, plus de Quicksand)…")
targets = ["css/style.css", "css/design_pro.css", "css/hero_photo.css",
           "css/visuel_extra.css", "css/app_nav.css", "js/script.js"]
for path in targets:
    if not os.path.isfile(path):
        continue
    c = read(path)
    orig = c
    c = re.sub(r"'Quicksand',?\s*sans-serif", "'Nunito', sans-serif", c)
    c = re.sub(r"Quicksand,sans-serif", "Nunito,sans-serif", c)
    if c != orig:
        write(path, c)

style_css = read("css/style.css")
style_css = re.sub(
    r"font-family:\s*'[^']*',\s*sans-serif;(\s*/\*.*?\*/)?\s*\n(\s*background:\s*var\(--creme\);)",
    "font-family: 'Nunito', sans-serif;\n\\2",
    style_css, count=1
)
write("css/style.css", style_css)

index_html = read("index.html")
new_link = ('<link href="https://fonts.googleapis.com/css2?'
            'family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>')
index_html, n = re.subn(
    r'<link href="https://fonts\.googleapis\.com/css2\?family=[^"]*"\s*rel="stylesheet"\s*/?>',
    new_link, index_html, count=1
)
print("  ✔ lien Google Fonts simplifié (une seule famille)" if n else "  ⚠ lien non trouvé")
write("index.html", index_html)

print("2/3 — Correction du contraste (--creme trop proche du blanc des cartes)…")
style_css = read("css/style.css")
style_css = re.sub(r"--creme:\s*#[0-9A-Fa-f]{3,8};", "--creme: #F6F6F2;", style_css, count=1)
style_css = re.sub(r"--gris:\s*#[0-9A-Fa-f]{3,8};", "--gris: #5B5B5B;", style_css, count=1)
write("css/style.css", style_css)

print("3/3 — Verrouillage du texte sur fonds clairs (sécurité contraste)…")
safety_css = """

/* ── PATCH v9 : sécurité de contraste — texte toujours lisible ── */
.btn-secondary, .btn-blanc, .btn-outline {
  color: var(--encre) !important;
}
.hero p, .hero-badge, .streak {
  opacity: 1 !important;
}
.stat-lb, .matiere-sub, .culture-sub, .serie-nom {
  color: var(--gris);
}
"""
visuel = read("css/visuel_extra.css")
if "PATCH v9" not in visuel:
    with open("css/visuel_extra.css", "a", encoding="utf-8") as f:
        f.write(safety_css)
    print("  ✔ règles de sécurité ajoutées")
else:
    print("  → déjà appliqué")

print("\n✅ Patch v9 appliqué.")
print("   Teste et dis-moi PRÉCISÉMENT quel texte reste invisible (page + élément)")
print("   si ça persiste — capture d'écran idéale pour cibler le bon sélecteur CSS.")
