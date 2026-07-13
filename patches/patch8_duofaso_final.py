#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Patch DuoFaso – Design inspiré de Duolingo, sobre et professionnel.
Sans streak ni barre de progression (à ajouter plus tard avec un vrai compte).
Conserve la barre d'onglets mobile (app-tabbar) et la navigation desktop.
Applique : couleurs, dégradés, coins ronds, ombres douces, typographie Nunito.
"""
import re, os, sys

def read(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  ✔ {path} mis à jour")

def apply_replacements(filepath, replacements):
    content = read(filepath)
    original = content
    for pattern, repl in replacements:
        content = re.sub(pattern, repl, content, flags=re.MULTILINE)
    if content != original:
        write(filepath, content)
        return True
    return False

print("🎨 Application du patch DuoFaso (final)...")

# 1. CSS : variables, styles globaux
css_replacements = [
    # Palette (on garde le logo déjà en place)
    (r'--vert:\s*#[0-9A-Fa-f]+;', '--vert: #0E3B1F;'),
    (r'--or:\s*#[0-9A-Fa-f]+;', '--or: #FFC800;'),
    (r'--creme:\s*#[0-9A-Fa-f]+;', '--creme: #FAFAFA;'),
    (r'--encre:\s*#[0-9A-Fa-f]+;', '--encre: #1A1A1A;'),
    (r'--gris:\s*#[0-9A-Fa-f]+;', '--gris: #555555;'),
    (r'--rayon:\s*\d+px;', '--rayon: 16px;'),
    (r'--ombre:\s*[^;]+;', '--ombre: 0 6px 20px rgba(0,0,0,0.08);'),

    # Header (dégradé vert)
    (r'(#navbar\s*\{[^}]*?)background:[^;]*;', r'\1background: linear-gradient(180deg, #0E3B1F 0%, #1A5C2A 100%);'),

    # Hero (dégradé vert)
    (r'(\.hero\s*\{[^}]*?)background:[^;]*;', r'\1background: linear-gradient(180deg, #0E3B1F 0%, #1A5C2A 100%);'),

    # Boutons
    (r'\.btn\s*\{[^}]*\}', '''.btn {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 2rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  border: none;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 4px 0 rgba(0,0,0,0.1);
}'''),
    (r'\.btn:hover\s*\{[^}]*\}', '.btn:hover { transform: translateY(-2px); box-shadow: 0 6px 0 rgba(0,0,0,0.1); }'),
    (r'\.btn:active\s*\{[^}]*\}', '.btn:active { transform: translateY(2px); box-shadow: 0 2px 0 rgba(0,0,0,0.1); }'),
    (r'\.btn-or\s*\{[^}]*\}', '.btn-or { background: #FFC800; color: #1A1A1A; }'),
    (r'\.btn-vert\s*\{[^}]*\}', '.btn-vert { background: var(--vert); color: #fff; }'),
    (r'\.btn-bleu\s*\{[^}]*\}', '.btn-bleu { background: var(--vert); color: #fff; }'),
    (r'\.btn-outline\s*\{[^}]*\}', '.btn-outline { background: transparent; border: 2px solid var(--vert); color: var(--vert); }'),
    (r'\.btn-outline:hover\s*\{[^}]*\}', '.btn-outline:hover { background: var(--vert); color: #fff; }'),

    # Cartes arrondies avec ombre
    (r'\.exam-card\s*\{[^}]*\}', '''.exam-card {
  border-radius: 20px;
  padding: 2rem 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
  box-shadow: var(--ombre);
}'''),
    (r'\.matiere-card\s*\{[^}]*\}', '''.matiere-card {
  background: var(--carte);
  border-radius: var(--rayon);
  box-shadow: var(--ombre);
  padding: 1.2rem;
  cursor: pointer;
  border-left: 4px solid transparent;
  transition: transform .15s, box-shadow .15s, border-color .15s;
}'''),
    (r'\.annale-card\s*\{[^}]*\}', '''.annale-card {
  background: var(--carte);
  border-radius: var(--rayon);
  box-shadow: var(--ombre);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: .7rem;
}'''),
    (r'\.exam-card:hover\s*\{[^}]*\}', '.exam-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.15); }'),
    (r'\.matiere-card:hover\s*\{[^}]*\}', '.matiere-card:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.14); border-left-color: var(--or); }'),
]

print("   Modification de css/style.css...")
if apply_replacements('css/style.css', css_replacements):
    print("  ✔ style.css mis à jour")
else:
    print("  ⚠ Aucun changement dans style.css")

# 2. index.html : lien Google Fonts (Nunito)
index_html = read('index.html')
new_font_link = 'https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@400;500;600&display=swap'
if 'Nunito' not in index_html or 'Inter' not in index_html:
    index_html = re.sub(r'<link[^>]*fonts\.googleapis\.com[^>]*>', f'<link href="{new_font_link}" rel="stylesheet">', index_html)
    write('index.html', index_html)
    print("  ✔ Lien Google Fonts mis à jour")
else:
    print("  ✔ Lien Google Fonts déjà correct")

# 3. script.js : remplacer les polices Manrope par Nunito (si nécessaire)
script_js = read('js/script.js')
if 'Nunito' not in script_js:
    script_js = script_js.replace("'Manrope', sans-serif", "'Nunito', sans-serif")
    script_js = script_js.replace("Manrope,sans-serif", "Nunito,sans-serif")
    write('js/script.js', script_js)
    print("  ✔ Polices remplacées par Nunito dans script.js")
else:
    print("  ✔ Polices déjà Nunito")

print("\n✅ Patch DuoFaso (sans streak) appliqué avec succès.")
