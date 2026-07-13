import os
import re

path = os.path.expanduser('~/ReviBF/js/script.js')
if not os.path.exists(path):
    path = '/home/linux/ReviBF/js/script.js'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# ========== 1. REMPLACER SERIES_BAC : ne garder que A4 et D ==========
old_series = """const SERIES_BAC = [
  { lettre:'A4', nom:'Lettres & Sciences Humaines',   couleur:'#6b3d9a' },
  { lettre:'D',  nom:'Sciences de la Vie',             couleur:'#1B6B3A' },
  { lettre:'C',  nom:'Mathématiques & Sciences Phy.', couleur:'#1a6b8a' },
  { lettre:'A1', nom:'Philosophie & Lettres',          couleur:'#C0392B' },
  { lettre:'B',  nom:'Sciences Économiques',           couleur:'#e67e22' },
  { lettre:'E',  nom:'Mathématiques & Technologie',   couleur:'#2c3e50' },
];"""

new_series = """const SERIES_BAC = [
  { lettre:'A4', nom:'Lettres & Sciences Humaines',   couleur:'#6b3d9a' },
  { lettre:'D',  nom:'Sciences de la Vie',             couleur:'#1B6B3A' },
];"""

if old_series in content:
    content = content.replace(old_series, new_series)
    print("OK: SERIES_BAC reduit a A4 et D")
else:
    print("ATTENTION: SERIES_BAC non trouve tel quel")

# ========== 2. REMPLACER DETAIL_SERIES : enrichir A4 et D, retirer les autres ==========
old_detail_start = content.find("const DETAIL_SERIES = {")
old_detail_end = content.find("\n};", old_detail_start) + 3

new_detail = '''const DETAIL_SERIES = {
  A4: {
    description: 'Serie axee sur les humanites, la philosophie et les langues. Ideale pour les eleves passionnes de litterature, d\\'histoire et de reflexion.',
    principales: [
      { nom:'Philosophie',          coeff:4 },
      { nom:'Francais',             coeff:4 },
      { nom:'Histoire-Geographie',  coeff:3 },
      { nom:'Anglais (LV1)',        coeff:3 },
      { nom:'Langue vivante 2',     coeff:2 },
    ],
    secondaires: [
      { nom:'Mathematiques', coeff:2 },
      { nom:'SVT',           coeff:1 },
      { nom:'EPS',           coeff:1 },
    ],
    programme: [
      { matiere:'Philosophie', chapitres:['La conscience et l\\'inconscient','La liberte et le determinisme','L\\'Etat et le pouvoir politique','La morale et le devoir','Le bonheur et le sens de la vie','La verite et la science'] },
      { matiere:'Francais', chapitres:['Le commentaire de texte litteraire','La dissertation litteraire','Les mouvements litteraires (Romantisme, Realisme, Negritude)','L\\'argumentation et les figures de style','L\\'analyse de l\\'image et du discours'] },
      { matiere:'Histoire-Geographie', chapitres:['Les grandes puissances mondiales','La decolonisation de l\\'Afrique','Les organisations internationales (ONU, UA)','La mondialisation et ses enjeux','Le Burkina Faso dans le contexte regional'] },
      { matiere:'Anglais', chapitres:['Grammar: tenses and modal verbs','Reading comprehension','Essay writing','Civilisation des pays anglophones'] },
    ],
    debouches: 'Droit, Lettres, Sciences politiques, Journalisme, Diplomatie, Enseignement, Sciences humaines.'
  },
  D: {
    description: 'Serie axee sur les sciences de la nature et de la vie. Recommandee pour les eleves visant la medecine, la biologie ou l\\'agronomie.',
    principales: [
      { nom:'SVT',            coeff:5 },
      { nom:'Mathematiques',  coeff:4 },
      { nom:'Physique-Chimie',coeff:4 },
      { nom:'Francais',       coeff:3 },
    ],
    secondaires: [
      { nom:'Anglais',      coeff:2 },
      { nom:'Histoire-Geo', coeff:2 },
      { nom:'Philosophie',  coeff:2 },
      { nom:'EPS',          coeff:1 },
    ],
    programme: [
      { matiere:'SVT', chapitres:['La genetique et l\\'heredite','Le systeme nerveux et hormonal','La reproduction humaine','L\\'ecologie et les ecosystemes','L\\'immunologie et les defenses de l\\'organisme','L\\'evolution des especes'] },
      { matiere:'Mathematiques', chapitres:['Les fonctions numeriques et leurs derivees','Les suites numeriques','Les probabilites et statistiques','La geometrie dans l\\'espace','Les equations differentielles simples'] },
      { matiere:'Physique-Chimie', chapitres:['La mecanique du point','L\\'electricite et les circuits','Les reactions acide-base','La chimie organique de base','L\\'optique geometrique'] },
      { matiere:'Francais', chapitres:['Le commentaire de texte','La dissertation','Les textes argumentatifs scientifiques'] },
    ],
    debouches: 'Medecine, Pharmacie, Biologie, Agronomie, Sciences infirmieres, Veterinaire, Recherche scientifique.'
  }
};'''

if old_detail_start != -1 and old_detail_end != -1:
    content = content[:old_detail_start] + new_detail + content[old_detail_end:]
    print("OK: DETAIL_SERIES remplace et enrichi")
else:
    print("ATTENTION: DETAIL_SERIES non localise")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fichier sauvegarde:", path)
