import os
import re

home = os.path.expanduser('~')
script_path = os.path.join(home, 'ReviBF', 'js', 'script.js')

with open(script_path, 'r', encoding='utf-8') as f:
    content = f.read()

# ========== Ajouter ANNALES_BAC_REELLES apres ANNALES_BAC ==========
data_block = '''
const ANNALES_BAC_REELLES = {
  A4: {
    maths: [
      { label:'Sujet et corrige Maths 2024', fichier:'annales/bac/a4/maths/sujet_corrige_2024.pdf' },
      { label:'Maths Blanc National 2025', fichier:'annales/bac/a4/maths/blanc_national_2025.pdf' },
      { label:'Maths Probable 2025', fichier:'annales/bac/a4/maths/sujet_probable_2025.pdf' },
    ],
    philosophie: [
      { label:'Sujet Philosophie 2024', fichier:'annales/bac/a4/philosophie/sujet_2024.pdf' },
      { label:'Prepa Philosophie 2024', fichier:'annales/bac/a4/philosophie/prepa_2024.pdf' },
    ],
    francais: [
      { label:'Sujet Francais 2014 (Remplacement)', fichier:'annales/bac/a4/francais/sujet_2014_remplacement.pdf' },
      { label:'Sujet Francais 2014 (2eme Tour)', fichier:'annales/bac/a4/francais/sujet_2014_tour2.pdf' },
      { label:'Sujet Francais 2016 (2eme Tour)', fichier:'annales/bac/a4/francais/sujet_2016_tour2.pdf' },
    ],
    histoire: [
      { label:'Histoire-Geo 2024 (2nd Tour)', fichier:'annales/bac/a4/histoire/sujet_2024_tour2.pdf' },
    ],
    anglais: [
      { label:'Sujet Anglais 2017', fichier:'annales/bac/a4/anglais/sujet_2017.pdf' },
    ],
  },
  D: {
    maths: [
      { label:'Maths 2025 (1er Tour)', fichier:'annales/bac/d/maths/sujet_2025_tour1.pdf' },
      { label:'Maths Blanc National 2025', fichier:'annales/bac/d/maths/blanc_national_2025.pdf' },
      { label:'Maths Blanc National 2026', fichier:'annales/bac/d/maths/blanc_national_2026.pdf' },
      { label:'Maths Probable 2025', fichier:'annales/bac/d/maths/sujet_probable_2025.pdf' },
    ],
    physique: [
      { label:'Physique-Chimie Blanc National 2026', fichier:'annales/bac/d/physique/blanc_national_2026.pdf' },
    ],
    svt: [
      { label:'SVT 2014 (1er Tour)', fichier:'annales/bac/d/svt/sujet_2014_tour1.pdf' },
      { label:'SVT 2016 (1er Tour)', fichier:'annales/bac/d/svt/sujet_2016_tour1.pdf' },
      { label:'SVT 2017 (1er Tour)', fichier:'annales/bac/d/svt/sujet_2017_tour1.pdf' },
      { label:'SVT 2024 (2nd Tour)', fichier:'annales/bac/d/svt/sujet_2024_tour2.pdf' },
    ],
    francais: [
      { label:'Francais 2024 (Series C-D)', fichier:'annales/bac/d/francais/sujet_2024_serie_cd.pdf' },
    ],
  }
};

'''

marker = "function pageAnnalesBAC() {"
if marker in content and "ANNALES_BAC_REELLES" not in content:
    content = content.replace(marker, data_block + marker)
    print("OK: ANNALES_BAC_REELLES ajoute")
else:
    print("INFO: deja present ou marker introuvable")

# ========== Remplacer le corps de pageAnnalesBAC pour utiliser les vrais fichiers ==========
old_func_start = content.find("function pageAnnalesBAC() {")
old_func_end = content.find("\n}\n", old_func_start) + 3
old_func = content[old_func_start:old_func_end]

new_func = '''function pageAnnalesBAC() {
  var lettre = (etat.serieSelectionnee || etat.params || 'A4');
  if (lettre !== 'A4' && lettre !== 'D') lettre = 'A4';
  var data = ANNALES_BAC_REELLES[lettre];
  var noms = { maths:'Mathematiques', svt:'SVT', physique:'Physique-Chimie', francais:'Francais', anglais:'Anglais', histoire:'Histoire-Geo', philosophie:'Philosophie' };

  var html = '<div class="section-title">Annales BAC -- Serie ' + lettre + '</div>';
  html += '<div class="tab-bar" style="padding:0 0 1rem 0;border-bottom:none">' +
    '<button class="tab-btn ' + (lettre==='A4'?'bac-active':'') + '" onclick="etat.serieSelectionnee=\\'A4\\';rendrePage()">Serie A4</button>' +
    '<button class="tab-btn ' + (lettre==='D'?'bac-active':'') + '" onclick="etat.serieSelectionnee=\\'D\\';rendrePage()">Serie D</button>' +
  '</div>';

  if (!data) {
    html += '<p>Aucune annale disponible pour cette serie.</p>';
    return html;
  }

  Object.keys(data).forEach(function(matiere) {
    var liste = data[matiere];
    if (!liste || liste.length === 0) return;
    html += '<div style="margin-bottom:1.8rem">';
    html += '<h3 style="font-family:Lexend,sans-serif;font-size:1rem;font-weight:700;margin-bottom:.8rem;color:var(--bleu)">' + (noms[matiere] || matiere) + '</h3>';
    html += '<div class="annale-grid">';
    liste.forEach(function(a) {
      html += '<div class="annale-card">' +
        '<h3>' + a.label + '</h3>' +
        '<div class="annale-btns">' +
          '<a class="btn btn-bleu btn-sm" href="' + a.fichier + '" target="_blank">Ouvrir le PDF</a>' +
        '</div></div>';
    });
    html += '</div></div>';
  });

  return html;
}
'''

content = content[:old_func_start] + new_func + content[old_func_end:]
print("OK: pageAnnalesBAC remplace pour utiliser les vrais fichiers")

with open(script_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Termine.")
