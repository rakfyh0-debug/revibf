import os

path = os.path.expanduser('~/ReviBF/js/script.js')
if not os.path.exists(path):
    path = '/home/linux/ReviBF/js/script.js'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# ========== Ajouter CONSEILS_SERIES apres DETAIL_SERIES ==========
marker = "const ANNALES_BEPC = ["
conseils_block = '''const CONSEILS_SERIES = {
  A4: [
    'Lis regulierement des oeuvres litteraires africaines et classiques pour enrichir ta culture generale.',
    'Entraine-toi a la dissertation philosophique chaque semaine, meme sur des sujets simples.',
    'Apprends par coeur 10 a 15 citations de philosophes pour illustrer tes copies.',
    'Travaille ton expression ecrite : la qualite du francais compte beaucoup dans cette serie.',
    'Ne neglige pas les Mathematiques et la SVT : elles ont un coefficient plus faible mais peuvent faire la difference.',
    'Suis l\\'actualite internationale pour le Histoire-Geographie et la culture generale.'
  ],
  D: [
    'Maitrise parfaitement les formules de Mathematiques et de Physique-Chimie : elles reviennent souvent.',
    'Fais des fiches de SVT par chapitre avec des schemas annotes.',
    'Entraine-toi sur les annales des 3 dernieres annees en conditions chronometrees.',
    'Travaille la methode de resolution de problemes : presentation claire, etapes logiques.',
    'Le Francais a un coefficient non negligeable : ne le delaisse pas au profit des sciences.',
    'Revise tes bases de chimie organique, souvent source d\\'erreurs au Bac.'
  ]
};

'''

if marker in content and "CONSEILS_SERIES" not in content:
    content = content.replace(marker, conseils_block + marker)
    print("OK: CONSEILS_SERIES ajoute")
else:
    print("INFO: CONSEILS_SERIES deja present ou marker introuvable")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Sauvegarde OK")
