import os

home = os.path.expanduser('~')
script_path = os.path.join(home, 'ReviBF', 'js', 'script.js')

with open(script_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Corriger pageQuiz() BEPC
old_q = "  return '<div class=\"page-header\"><h1>'+(d?d.titre:'Quiz')+'</h1><p>5 questions · Réponds puis découvre l\\'explication</p></div>' +"
new_q = "  var nb = d ? d.questions.length : 0;\n  return '<div class=\"page-header\"><h1>'+(d?d.titre:'Quiz')+'</h1><p>'+nb+' questions · Réponds puis découvre l\\'explication</p></div>' +"

if old_q in content:
    content = content.replace(old_q, new_q)
    print("OK: pageQuiz() corrige")
else:
    print("ATTENTION: pageQuiz() non trouvee")

# Corriger pageQuizCulture()
old_c = "  return '<div class=\"page-header cult-header\"><h1>'+(d?d.titre:'Quiz Culture')+'</h1><p>5 questions · Réponds puis découvre l\\'explication</p></div>' +"
new_c = "  var nb = d ? d.questions.length : 0;\n  return '<div class=\"page-header cult-header\"><h1>'+(d?d.titre:'Quiz Culture')+'</h1><p>'+nb+' questions · Réponds puis découvre l\\'explication</p></div>' +"

if old_c in content:
    content = content.replace(old_c, new_c)
    print("OK: pageQuizCulture() corrigee")
else:
    print("ATTENTION: pageQuizCulture() non trouvee")

# Corriger la carte BEPC "5 questions" fixe
old_carte = "'<div class=\"matiere-sub\">5 questions · BEPC</div></div>';"
new_carte = "'<div class=\"matiere-sub\">'+(QUIZ_DATA[m.id]?QUIZ_DATA[m.id].questions.length:5)+' questions · BEPC</div></div>';"

if old_carte in content:
    content = content.replace(old_carte, new_carte)
    print("OK: carte BEPC corrigee")
else:
    print("ATTENTION: carte BEPC non trouvee")

with open(script_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Termine.")
