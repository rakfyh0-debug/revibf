#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Patch DuoFaso – Design inspiré de Duolingo, sobre et professionnel.
Applique un thème vert/jaune, coins ronds, ombres douces, streak, barre de progression.
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

print("🎨 Application du patch DuoFaso...")

# 1. CSS : variables, styles globaux
css_replacements = [
    # Palette
    (r'--vert:\s*#[0-9A-Fa-f]+;', '--vert: #0E3B1F;'),
    (r'--or:\s*#[0-9A-Fa-f]+;', '--or: #FFC800;'),
    (r'--creme:\s*#[0-9A-Fa-f]+;', '--creme: #FAFAFA;'),
    (r'--encre:\s*#[0-9A-Fa-f]+;', '--encre: #1A1A1A;'),
    (r'--gris:\s*#[0-9A-Fa-f]+;', '--gris: #555555;'),
    (r'--rayon:\s*\d+px;', '--rayon: 16px;'),
    (r'--ombre:\s*[^;]+;', '--ombre: 0 6px 20px rgba(0,0,0,0.08);'),

    # Header
    (r'(#navbar\s*\{[^}]*?)background:[^;]*;', r'\1background: linear-gradient(180deg, #0E3B1F 0%, #1A5C2A 100%);'),

    # Hero
    (r'(\.hero\s*\{[^}]*?)background:[^;]*;', r'\1background: linear-gradient(180deg, #0E3B1F 0%, #1A5C2A 100%);'),

    # Boutons principaux (btn)
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

    # Couleurs des boutons
    (r'\.btn-or\s*\{[^}]*\}', '.btn-or { background: #FFC800; color: #1A1A1A; }'),
    (r'\.btn-vert\s*\{[^}]*\}', '.btn-vert { background: var(--vert); color: #fff; }'),
    (r'\.btn-bleu\s*\{[^}]*\}', '.btn-bleu { background: var(--vert); color: #fff; }'),  # unifier avec vert
    (r'\.btn-outline\s*\{[^}]*\}', '.btn-outline { background: transparent; border: 2px solid var(--vert); color: var(--vert); }'),
    (r'\.btn-outline:hover\s*\{[^}]*\}', '.btn-outline:hover { background: var(--vert); color: #fff; }'),

    # Cartes (exam-card, matiere-card, etc.) arrondies avec ombre
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
    # Ajout d'effet hover sur les cartes
    (r'\.exam-card:hover\s*\{[^}]*\}', '.exam-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.15); }'),
    (r'\.matiere-card:hover\s*\{[^}]*\}', '.matiere-card:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.14); border-left-color: var(--or); }'),
]

print("   Modification de css/style.css...")
if apply_replacements('css/style.css', css_replacements):
    print("  ✔ style.css mis à jour")
else:
    print("  ⚠ Aucun changement dans style.css")

# 2. index.html : s'assurer que le lien Google Fonts est le bon
index_html = read('index.html')
new_font_link = 'https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@400;500;600&display=swap'
if 'Nunito' not in index_html or 'Inter' not in index_html:
    index_html = re.sub(r'<link[^>]*fonts\.googleapis\.com[^>]*>', f'<link href="{new_font_link}" rel="stylesheet">', index_html)
    write('index.html', index_html)
    print("  ✔ Lien Google Fonts mis à jour")
else:
    print("  ✔ Lien Google Fonts déjà correct")

# 3. js/script.js : ajouter le streak et la barre de progression dans pageAccueil()
script_js = read('js/script.js')

# Vérifier si le streak existe déjà
if 'Série de' not in script_js:
    # Insérer après la ligne contenant "Fiches, quiz interactifs et sujets"
    pattern = r"(<p>Fiches, quiz interactifs et sujets pour les élèves burkinabè en classe d\\'examen\.</p>')"
    streak_html = r"""\1 +
    '<div style="text-align:center; margin-top:1.5rem;"><span style="background:#FFC800; color:#1A1A1A; padding:0.4rem 1.2rem; border-radius:2rem; font-weight:700; font-size:0.9rem;">🔥 Série de 3 jours</span></div><div style="max-width:400px; margin:1rem auto;"><div style="background:#E0E0E0; border-radius:1rem; height:12px;"><div style="background:var(--vert); width:60%; height:100%; border-radius:1rem;"></div></div></div>'"""
    script_js = re.sub(pattern, streak_html, script_js, flags=re.DOTALL)
    write('js/script.js', script_js)
    print("  ✔ Streak et barre de progression ajoutés")
else:
    print("  ✔ Streak déjà présent")

# Ajouter la section progression sous le hero (comme dans DuoFaso)
if 'progress-section' not in script_js:
    # Chercher la fin du hero (</div>' +) et insérer après
    pattern = r"(</div></div>' \+)\s*\n\s*'<div class=\"stats\">'"
    progress_html = r"""\1
    '<div class="progress-section"><h3>📊 Ta progression</h3><div class="progress-bar"><div class="progress-fill" style="width:60%"></div></div><p style="font-size:0.9rem; color:#888;">60% du programme BEPC révisé</p></div>' +
    '<div class="stats">'"""
    script_js = re.sub(pattern, progress_html, script_js, flags=re.DOTALL)
    if re.sub != script_js:
        write('js/script.js', script_js)
        print("  ✔ Section progression ajoutée")
    else:
        print("  ⚠ Impossible d'ajouter la section progression (motif non trouvé)")
else:
    print("  ✔ Section progression déjà présente")

# Ajouter les styles de la progress-section dans style.css
style_css = read('css/style.css')
if '.progress-section' not in style_css:
    progress_css = """
/* PROGRESS SECTION (DuoFaso) */
.progress-section {
  padding: 2rem 1.5rem;
  max-width: 600px;
  margin: -2rem auto 0;
  background: var(--carte);
  border-radius: 1.5rem;
  box-shadow: var(--ombre);
  position: relative;
  z-index: 1;
}
.progress-bar {
  height: 12px;
  background: #E5E5E5;
  border-radius: 1rem;
  margin: 1rem 0;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--vert) 0%, #2D7A4A 100%);
  border-radius: 1rem;
  transition: width 0.5s ease;
}
"""
    style_css += progress_css
    write('css/style.css', style_css)
    print("  ✔ Styles progress-section ajoutés")
else:
    print("  ✔ Styles progress-section déjà présents")

print("\n✅ Patch DuoFaso appliqué avec succès.")
