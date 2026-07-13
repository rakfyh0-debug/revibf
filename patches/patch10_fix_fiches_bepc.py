path = "js/script.js"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

def block(a, b):
    return lines[a-1:b]  # lignes a a b, 1-indexees, inclusives

opening        = block(999, 1001)   # function pageCorrigesBEPC() { ... html += ...
fiches_matiere = block(1002, 1025)  # function pageFichesMatiere(...) { ... } complet
corriges_tail  = block(1027, 1040)  # var corriges ... return html;
fiches_bepc    = block(1041, 1061)  # function pageFichesBEPC() { ... } complet
rest           = lines[1062:]       # a partir de la ligne 1063 (on saute la ligne 1062, l'accolade en trop)

new_lines = []
new_lines += lines[:998]        # lignes 1 a 998 inchangees
new_lines += opening
new_lines += corriges_tail
new_lines.append("}\n")
new_lines.append("\n")
new_lines += fiches_matiere
new_lines.append("\n")
new_lines += fiches_bepc
new_lines.append("\n")
new_lines += rest

with open(path, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print("Patch applique avec succes.")
