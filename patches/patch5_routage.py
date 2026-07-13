import os

path = os.path.expanduser('~/ReviBF/js/script.js')
if not os.path.exists(path):
    path = '/home/linux/ReviBF/js/script.js'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Ajouter le bouton Quiz de la serie dans rendreSerieDetail
old_btns = """  html += '<div style="display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.5rem">' +
    '<button class="btn btn-bleu" onclick="afficherPage(\\'annales-bac\\')">Voir les annales</button>' +
    '<button class="btn btn-outline" onclick="retour()">Changer de serie</button>' +
  '</div></div></div>';"""

new_btns = """  html += '<div style="display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.5rem">' +
    '<button class="btn btn-or" onclick="afficherPage(\\'quiz-serie\\',\\''+lettre+'\\')">Quiz de la serie</button>' +
    '<button class="btn btn-bleu" onclick="afficherPage(\\'annales-bac\\')">Voir les annales</button>' +
    '<button class="btn btn-outline" onclick="retour()">Changer de serie</button>' +
  '</div></div></div>';"""

if old_btns in content:
    content = content.replace(old_btns, new_btns)
    print("OK: bouton Quiz de la serie ajoute")
else:
    print("ATTENTION: bloc boutons non trouve")

# 2. Ajouter le cas 'quiz-serie' dans le router rendrePage()
old_router_case = "    case 'serie-detail': rendreSerieDetail();                              break;"
new_router_case = """    case 'serie-detail': rendreSerieDetail();                              break;
    case 'quiz-serie':   setBreadcrumb('Accueil > BAC > Quiz Serie ' + etat.params); app.innerHTML = pageQuizSerie(); break;"""

if old_router_case in content:
    content = content.replace(old_router_case, new_router_case)
    print("OK: route quiz-serie ajoutee")
else:
    print("ATTENTION: route non trouvee")

# 3. Ajouter la fonction pageQuizSerie juste apres rendreSerieDetail
marker_func = "function pageAnnalesBAC() {"
new_func = """function pageQuizSerie() {
  var lettre = etat.params;
  var quizMap = { A4: 'QUIZ_BAC_A4', D: 'QUIZ_BAC_D' };
  var quizVarName = quizMap[lettre];
  var quizObj = quizVarName === 'QUIZ_BAC_A4' ? (typeof QUIZ_BAC_A4 !== 'undefined' ? QUIZ_BAC_A4 : null) : (typeof QUIZ_BAC_D !== 'undefined' ? QUIZ_BAC_D : null);
  if (!quizObj) return '<div class="page-section"><p>Quiz non disponible pour cette serie.</p></div>';

  etat.quizActif = 'BAC_' + lettre;
  etat.quizIdx = 0; etat.quizScore = 0; etat.quizRepondu = false;
  window['__quizBacActuel'] = quizObj;

  return '<div class="page-header bac-header"><h1>'+quizObj.titre+'</h1><p>10 questions specifiques a la serie '+lettre+'</p></div>' +
    '<div class="page-section">' + afficherQuestion(quizObj, 0) + '</div>';
}

"""

if marker_func in content and "function pageQuizSerie()" not in content:
    content = content.replace(marker_func, new_func + marker_func)
    print("OK: fonction pageQuizSerie ajoutee")
else:
    print("INFO: deja present ou marker introuvable")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Sauvegarde OK")
