import os
import re

home = os.path.expanduser('~')
script_path = os.path.join(home, 'ReviBF', 'js', 'script.js')

with open(script_path, 'r', encoding='utf-8') as f:
    content = f.read()

# ========== 1. Ajouter une fonction utilitaire de melange (Fisher-Yates) ==========
helper = '''function melangerOptions(question) {
  // Cree un tableau [0,1,2,3...] puis le melange, en gardant la trace
  // de la nouvelle position de la bonne reponse.
  var indices = question.opts.map(function(_, i) { return i; });
  for (var i = indices.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = indices[i];
    indices[i] = indices[j];
    indices[j] = tmp;
  }
  var nouvellesOpts = indices.map(function(idx) { return question.opts[idx]; });
  var nouvelleRep = indices.indexOf(question.rep);
  return { q: question.q, opts: nouvellesOpts, rep: nouvelleRep, expl: question.expl };
}

'''

marker = "function afficherQuestion(data, idx) {"
if marker in content and "function melangerOptions" not in content:
    content = content.replace(marker, helper + marker)
    print("OK: fonction melangerOptions ajoutee")
else:
    print("INFO: deja presente ou marker introuvable")

# ========== 2. Modifier afficherQuestion pour utiliser la version melangee ==========
old_line = "  var q = data.questions[idx];"
new_line = "  var q = melangerOptions(data.questions[idx]);"

if old_line in content:
    content = content.replace(old_line, new_line)
    print("OK: afficherQuestion utilise maintenant melangerOptions")
else:
    print("ATTENTION: ligne 'var q = data.questions[idx];' non trouvee")

# ========== 3. Modifier repondre() pour utiliser la meme question melangee ==========
# Probleme : repondre() relit data.questions[etat.quizIdx] qui n'est PAS melange.
# Solution : on stocke la question melangee courante dans une variable globale
# au moment de l'affichage, et repondre() l'utilise directement.

old_afficher_end = "  q.opts.forEach(function(o,i){ html += '<button class=\"quiz-opt\" onclick=\"repondre('+i+')\">'+o+'</button>'; });"
new_afficher_end = "  window.__questionActuelle = q;\n  q.opts.forEach(function(o,i){ html += '<button class=\"quiz-opt\" onclick=\"repondre('+i+')\">'+o+'</button>'; });"

if old_afficher_end in content:
    content = content.replace(old_afficher_end, new_afficher_end)
    print("OK: question melangee stockee dans window.__questionActuelle")
else:
    print("ATTENTION: ligne d'affichage des options non trouvee")

old_repondre_line = "  var q    = d.questions[etat.quizIdx];"
new_repondre_line = "  var q    = window.__questionActuelle || d.questions[etat.quizIdx];"

if old_repondre_line in content:
    content = content.replace(old_repondre_line, new_repondre_line)
    print("OK: repondre() utilise la question melangee stockee")
else:
    print("ATTENTION: ligne 'var q = d.questions[etat.quizIdx];' non trouvee dans repondre()")

with open(script_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Termine.")
