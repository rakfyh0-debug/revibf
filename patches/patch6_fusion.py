import os

path = os.path.expanduser('~/ReviBF/js/script.js')
if not os.path.exists(path):
    path = '/home/linux/ReviBF/js/script.js'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fonction utilitaire pour recuperer le bon objet quiz selon le contexte
helper = '''function getQuizActuel() {
  if (etat.quizActif && etat.quizActif.indexOf('BAC_') === 0 && window.__quizBacActuel) {
    return window.__quizBacActuel;
  }
  return QUIZ_DATA[etat.quizActif] || (typeof QUIZ_CULTURE !== 'undefined' ? QUIZ_CULTURE[etat.quizActif] : undefined);
}

'''

marker = "function repondre(choix) {"
if marker in content and "function getQuizActuel()" not in content:
    content = content.replace(marker, helper + marker)
    print("OK: getQuizActuel ajoutee")

# Remplacer les recuperations directes par l'appel a getQuizActuel()
count = 0
# Remplacer toutes les occurrences de la recuperation directe par getQuizActuel()
old_pattern_1 = "QUIZ_DATA[etat.quizActif] || (typeof QUIZ_CULTURE !== 'undefined' ? QUIZ_CULTURE[etat.quizActif] : undefined)"
new_pattern_1 = "getQuizActuel()"
occ = content.count(old_pattern_1)
content = content.replace(old_pattern_1, new_pattern_1)
count += occ

print(f"OK: {count} remplacements effectues pour utiliser getQuizActuel()")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Sauvegarde OK")
