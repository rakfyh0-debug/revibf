import os

path = os.path.expanduser('~/ReviBF/js/script.js')
if not os.path.exists(path):
    path = '/home/linux/ReviBF/js/script.js'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# ========== Remplacer rendreSerieDetail pour ajouter Programme + Conseils ==========
old_func_start = content.find("function rendreSerieDetail() {")
old_func_end = content.find("\n}\n", old_func_start) + 3

new_func = '''function rendreSerieDetail() {
  var app = document.getElementById('app');
  var lettre = etat.params;
  var d = DETAIL_SERIES[lettre];
  var s = SERIES_BAC.find(function(x){return x.lettre===lettre;});
  if (!d || !s) { app.innerHTML='<div class="page-section"><p>Serie introuvable.</p></div>'; return; }
  setBreadcrumb('Accueil > BAC > Serie '+lettre);
  var html = '<div class="page-header bac-header"><h1>Serie '+lettre+' -- '+s.nom+'</h1><p>'+d.description+'</p></div>';
  html += '<div class="page-section"><div class="serie-detail">';

  html += '<h2>Matieres principales</h2><div class="matieres-list">';
  d.principales.forEach(function(m){ html += '<div class="matiere-row">'+m.nom+'<span class="coeff-badge">Coeff. '+m.coeff+'</span></div>'; });
  html += '</div>';

  html += '<h2>Matieres secondaires</h2><div class="matieres-list">';
  d.secondaires.forEach(function(m){ html += '<div class="matiere-row">'+m.nom+'<span class="coeff-badge" style="background:#aaa">Coeff. '+m.coeff+'</span></div>'; });
  html += '</div>';

  if (d.programme) {
    html += '<h2>Programme par matiere</h2>';
    d.programme.forEach(function(p) {
      html += '<div style="margin-bottom:1rem"><div style="font-family:Lexend,sans-serif;font-weight:700;font-size:.95rem;color:var(--bleu);margin-bottom:.5rem">'+p.matiere+'</div><ul style="padding-left:1.2rem">';
      p.chapitres.forEach(function(ch) { html += '<li style="font-size:.88rem;margin-bottom:.3rem">'+ch+'</li>'; });
      html += '</ul></div>';
    });
  }

  if (typeof CONSEILS_SERIES !== 'undefined' && CONSEILS_SERIES[lettre]) {
    html += '<h2>Conseils de revision</h2><div class="alerte" style="background:#eaf5ee;border-left-color:var(--vert);color:#1B6B3A">';
    html += '<ul style="padding-left:1.2rem;margin:0">';
    CONSEILS_SERIES[lettre].forEach(function(c) { html += '<li style="margin-bottom:.4rem">'+c+'</li>'; });
    html += '</ul></div>';
  }

  if (d.debouches) {
    html += '<h2>Debouches possibles</h2><p style="font-size:.9rem;color:var(--gris)">'+d.debouches+'</p>';
  }

  html += '<div style="display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.5rem">' +
    '<button class="btn btn-bleu" onclick="afficherPage(\\'annales-bac\\')">Voir les annales</button>' +
    '<button class="btn btn-outline" onclick="retour()">Changer de serie</button>' +
  '</div></div></div>';
  app.innerHTML = html;
}
'''

if old_func_start != -1 and old_func_end != -1:
    content = content[:old_func_start] + new_func + content[old_func_end:]
    print("OK: rendreSerieDetail remplace")
else:
    print("ATTENTION: rendreSerieDetail non trouve")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Sauvegarde OK")
