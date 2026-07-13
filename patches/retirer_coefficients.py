import os

home = os.path.expanduser('~')
script_path = os.path.join(home, 'ReviBF', 'js', 'script.js')

with open(script_path, 'r', encoding='utf-8') as f:
    content = f.read()

old_p = "  d.principales.forEach(function(m){ html += '<div class=\"matiere-row\">'+m.nom+'<span class=\"coeff-badge\">Coeff. '+m.coeff+'</span></div>'; });"
new_p = "  d.principales.forEach(function(m){ html += '<div class=\"matiere-row\">'+m.nom+'</div>'; });"

old_s = "  d.secondaires.forEach(function(m){ html += '<div class=\"matiere-row\">'+m.nom+'<span class=\"coeff-badge\" style=\"background:#aaa\">Coeff. '+m.coeff+'</span></div>'; });"
new_s = "  d.secondaires.forEach(function(m){ html += '<div class=\"matiere-row\">'+m.nom+'</div>'; });"

if old_p in content:
    content = content.replace(old_p, new_p)
    print("OK: coefficients retires des matieres principales")
else:
    print("ATTENTION: bloc principales non trouve")

if old_s in content:
    content = content.replace(old_s, new_s)
    print("OK: coefficients retires des matieres secondaires")
else:
    print("ATTENTION: bloc secondaires non trouve")

with open(script_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Termine.")
