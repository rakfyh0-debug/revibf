import os

home = os.path.expanduser('~')
index_path = os.path.join(home, 'ReviBF', 'index.html')
script_path = os.path.join(home, 'ReviBF', 'js', 'script.js')

# ========== 1. Lier visuel_extra.css dans index.html ==========
with open(index_path, 'r', encoding='utf-8') as f:
    html = f.read()

marker_css = '<link rel="stylesheet" href="css/style.css"/>'
new_css_link = marker_css + '\n  <link rel="stylesheet" href="css/visuel_extra.css"/>'

if marker_css in html and 'visuel_extra.css' not in html:
    html = html.replace(marker_css, new_css_link)
    print("OK: visuel_extra.css lie dans index.html")
else:
    print("INFO: deja present ou marker introuvable dans index.html")

marker_script = '<script src="js/script.js"></script>'
new_script_link = '<script src="js/confettis.js"></script>\n' + marker_script

if marker_script in html and 'confettis.js' not in html:
    html = html.replace(marker_script, new_script_link)
    print("OK: confettis.js lie dans index.html")
else:
    print("INFO: deja present ou marker introuvable")

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(html)

# ========== 2. Declencher les confettis dans resultat() ==========
with open(script_path, 'r', encoding='utf-8') as f:
    js = f.read()

old_resultat_start = js.find("function resultat() {")
old_resultat_end = js.find("\n}\n", old_resultat_start) + 3
old_block = js[old_resultat_start:old_resultat_end]

if "lancerConfettis" not in old_block:
    # On insere l'appel aux confettis juste apres le calcul du pourcentage,
    # et on ajoute la classe "excellent" sur le bloc resultat si pct >= 80
    new_block = old_block.replace(
        "var res  = document.getElementById('qres');\n  if (res) {\n    res.style.display='block';\n    res.textContent='Score : '+etat.quizScore+'/'+total+' ('+pct+'%) -- '+m;\n  }",
        "var res  = document.getElementById('qres');\n  if (res) {\n    res.style.display='block';\n    res.textContent='Score : '+etat.quizScore+'/'+total+' ('+pct+'%) -- '+m;\n    if (pct >= 80) {\n      res.classList.add('excellent');\n      if (typeof lancerConfettis === 'function') lancerConfettis();\n    }\n  }"
    )
    if new_block == old_block:
        # Le texte exact peut differer legerement (accents, espaces) -> tentative alternative
        # On cherche juste la ligne qui definit "var res" et on insere apres son bloc if
        idx_res = old_block.find("var res")
        idx_if_end = old_block.find("}", idx_res)
        if idx_res != -1 and idx_if_end != -1:
            insertion = "\n    if (pct >= 80) {\n      res.classList.add('excellent');\n      if (typeof lancerConfettis === 'function') lancerConfettis();\n    }"
            new_block = old_block[:idx_if_end] + insertion + old_block[idx_if_end:]
            print("OK: confettis ajoutes (methode alternative)")
        else:
            new_block = old_block
            print("ATTENTION: impossible de localiser le point d'insertion exact")
    else:
        print("OK: confettis ajoutes (methode directe)")

    js = js.replace(old_block, new_block)
else:
    print("INFO: confettis deja presents dans resultat()")

with open(script_path, 'w', encoding='utf-8') as f:
    f.write(js)

print("Termine.")
