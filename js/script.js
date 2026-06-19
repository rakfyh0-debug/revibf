const MATIERES_BEPC = [
  { icon:'➗', nom:'Mathématiques',   sub:'Algèbre · Géométrie · Calcul',         id:'maths'   },
  { icon:'⚡', nom:'Physique-Chimie', sub:'Mécanique · Électricité · Chimie',     id:'physique' },
  { icon:'🌿', nom:'SVT',             sub:'Biologie · Géologie · Écologie',       id:'svt'     },
  { icon:'✍️', nom:'Français',        sub:'Grammaire · Littérature · Expression', id:'francais'},
  { icon:'🗣️', nom:'Anglais',         sub:'Grammar · Vocabulary · Tenses',        id:'anglais' },
  { icon:'🏺', nom:'Histoire-Géo',    sub:'Burkina Faso · Afrique · Monde',       id:'histoire'},
];

const SERIES_BAC = [
  { lettre:'A4', nom:'Lettres & Sciences Humaines',   couleur:'#6b3d9a' },
  { lettre:'D',  nom:'Sciences de la Vie',             couleur:'#1B6B3A' },
];

const DETAIL_SERIES = {
  A4: {
    description: 'Serie axee sur les humanites, la philosophie et les langues. Ideale pour les eleves passionnes de litterature, d\'histoire et de reflexion.',
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
      { matiere:'Philosophie', chapitres:['La conscience et l\'inconscient','La liberte et le determinisme','L\'Etat et le pouvoir politique','La morale et le devoir','Le bonheur et le sens de la vie','La verite et la science'] },
      { matiere:'Francais', chapitres:['Le commentaire de texte litteraire','La dissertation litteraire','Les mouvements litteraires (Romantisme, Realisme, Negritude)','L\'argumentation et les figures de style','L\'analyse de l\'image et du discours'] },
      { matiere:'Histoire-Geographie', chapitres:['Les grandes puissances mondiales','La decolonisation de l\'Afrique','Les organisations internationales (ONU, UA)','La mondialisation et ses enjeux','Le Burkina Faso dans le contexte regional'] },
      { matiere:'Anglais', chapitres:['Grammar: tenses and modal verbs','Reading comprehension','Essay writing','Civilisation des pays anglophones'] },
    ],
    debouches: 'Droit, Lettres, Sciences politiques, Journalisme, Diplomatie, Enseignement, Sciences humaines.'
  },
  D: {
    description: 'Serie axee sur les sciences de la nature et de la vie. Recommandee pour les eleves visant la medecine, la biologie ou l\'agronomie.',
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
      { matiere:'SVT', chapitres:['La genetique et l\'heredite','Le systeme nerveux et hormonal','La reproduction humaine','L\'ecologie et les ecosystemes','L\'immunologie et les defenses de l\'organisme','L\'evolution des especes'] },
      { matiere:'Mathematiques', chapitres:['Les fonctions numeriques et leurs derivees','Les suites numeriques','Les probabilites et statistiques','La geometrie dans l\'espace','Les equations differentielles simples'] },
      { matiere:'Physique-Chimie', chapitres:['La mecanique du point','L\'electricite et les circuits','Les reactions acide-base','La chimie organique de base','L\'optique geometrique'] },
      { matiere:'Francais', chapitres:['Le commentaire de texte','La dissertation','Les textes argumentatifs scientifiques'] },
    ],
    debouches: 'Medecine, Pharmacie, Biologie, Agronomie, Sciences infirmieres, Veterinaire, Recherche scientifique.'
  }
};

const CONSEILS_SERIES = {
  A4: [
    'Lis regulierement des oeuvres litteraires africaines et classiques pour enrichir ta culture generale.',
    'Entraine-toi a la dissertation philosophique chaque semaine, meme sur des sujets simples.',
    'Apprends par coeur 10 a 15 citations de philosophes pour illustrer tes copies.',
    'Travaille ton expression ecrite : la qualite du francais compte beaucoup dans cette serie.',
    'Ne neglige pas les Mathematiques et la SVT : elles ont un coefficient plus faible mais peuvent faire la difference.',
    'Suis l\'actualite internationale pour le Histoire-Geographie et la culture generale.'
  ],
  D: [
    'Maitrise parfaitement les formules de Mathematiques et de Physique-Chimie : elles reviennent souvent.',
    'Fais des fiches de SVT par chapitre avec des schemas annotes.',
    'Entraine-toi sur les annales des 3 dernieres annees en conditions chronometrees.',
    'Travaille la methode de resolution de problemes : presentation claire, etapes logiques.',
    'Le Francais a un coefficient non negligeable : ne le delaisse pas au profit des sciences.',
    'Revise tes bases de chimie organique, souvent source d\'erreurs au Bac.'
  ]
};

const ANNALES_BEPC = [
  {annee:'2023', matiere:'Mathématiques',   sujet:'Sujet officiel BEPC 2023 — Maths',    difficulte:'Moyen'   },
  {annee:'2023', matiere:'Français',        sujet:'Sujet officiel BEPC 2023 — Français', difficulte:'Moyen'   },
  {annee:'2023', matiere:'SVT',             sujet:'Sujet officiel BEPC 2023 — SVT',      difficulte:'Facile'  },
  {annee:'2023', matiere:'Physique-Chimie', sujet:'Sujet officiel BEPC 2023 — PC',       difficulte:'Difficile'},
  {annee:'2022', matiere:'Mathématiques',   sujet:'Sujet officiel BEPC 2022 — Maths',    difficulte:'Difficile'},
  {annee:'2022', matiere:'Français',        sujet:'Sujet officiel BEPC 2022 — Français', difficulte:'Moyen'   },
  {annee:'2022', matiere:'Histoire-Géo',    sujet:'Sujet officiel BEPC 2022 — HG',       difficulte:'Facile'  },
  {annee:'2021', matiere:'Mathématiques',   sujet:'Sujet officiel BEPC 2021 — Maths',    difficulte:'Moyen'   },
];

const ANNALES_BAC = [
  {annee:'2023', matiere:'Philosophie',    serie:'A4/A1', sujet:'Dissertation — Le bonheur est-il affaire privée ?', difficulte:'Difficile'},
  {annee:'2023', matiere:'Mathématiques',  serie:'C/D',   sujet:'Sujet BAC 2023 — Maths Série C',                   difficulte:'Difficile'},
  {annee:'2023', matiere:'SVT',            serie:'D',     sujet:'Sujet BAC 2023 — SVT Série D',                     difficulte:'Moyen'   },
  {annee:'2022', matiere:'Français',       serie:'Toutes',sujet:'Sujet BAC 2022 — Commentaire de texte',            difficulte:'Moyen'   },
  {annee:'2022', matiere:'Physique-Chimie',serie:'C',     sujet:'Sujet BAC 2022 — PC Série C',                      difficulte:'Difficile'},
  {annee:'2021', matiere:'Histoire-Géo',   serie:'Toutes',sujet:'Sujet BAC 2021 — HG',                              difficulte:'Facile'  },
];

const CITATIONS = [
  {texte:'Je pense, donc je suis.',                                                          auteur:'René Descartes',   theme:'Philosophie — Doute méthodique'},
  {texte:'L\'homme est un animal politique.',                                                auteur:'Aristote',         theme:'Philosophie politique'},
  {texte:'La liberté des uns s\'arrête là où commence celle des autres.',                   auteur:'John Stuart Mill',  theme:'Liberté & Droit'},
  {texte:'L\'ignorance est la nuit de l\'esprit, mais une nuit sans lune et sans étoiles.',auteur:'Confucius',         theme:'Éducation'},
  {texte:'La culture, c\'est ce qui reste quand on a tout oublié.',                        auteur:'Édouard Herriot',   theme:'Culture générale'},
  {texte:'Un peuple qui oublie son passé est condamné à le revivre.',                       auteur:'Winston Churchill', theme:'Histoire'},
  {texte:'La vérité est en marche et rien ne l\'arrêtera.',                                auteur:'Émile Zola',        theme:'Justice & Vérité'},
  {texte:'Chaque génération doit découvrir sa mission, la remplir ou la trahir.',          auteur:'Frantz Fanon',      theme:'Afrique & Décolonisation'},
];

const QUIZ_DATA = {
  maths:{
    titre:'➗ Quiz Mathématiques — BEPC',
    questions:[
      {q:"Quelle est l'aire d'un cercle de rayon 5 cm ?",    opts:["25π cm²","10π cm²","5π cm²","50π cm²"],                                       rep:0, expl:"Aire = π × r² = π × 5² = 25π cm²."},
      {q:"Quelle est la valeur de √144 ?",                    opts:["11","12","13","14"],                                                            rep:1, expl:"12 × 12 = 144, donc √144 = 12."},
      {q:"Les solutions de x² − 5x + 6 = 0 sont :",          opts:["x=2 et x=3","x=1 et x=6","x=−2 et x=−3","x=2 et x=−3"],                       rep:0, expl:"Δ = 25−24 = 1. x₁ = 3, x₂ = 2."},
      {q:"Combien vaut 3³ ?",                                  opts:["9","18","27","81"],                                                             rep:2, expl:"3³ = 3×3×3 = 27."},
      {q:"En développant (a+b)², on obtient :",               opts:["a²+b²","a²+ab+b²","a²+2ab+b²","2a+2b"],                                        rep:2, expl:"(a+b)² = a²+2ab+b² — identité remarquable."},
    ]
  },
  svt:{
    titre:'🌿 Quiz SVT — BEPC',
    questions:[
      {q:"Quel gaz les plantes absorbent-elles lors de la photosynthèse ?", opts:["O₂","CO₂","N₂","H₂O"],                                           rep:1, expl:"Les plantes absorbent le CO₂ et rejettent de l'O₂."},
      {q:"Dans quelle structure se déroule la photosynthèse ?",             opts:["Mitochondrie","Noyau","Chloroplaste","Ribosome"],                   rep:2, expl:"Le chloroplaste contient la chlorophylle nécessaire."},
      {q:"Base complémentaire de l'Adénine (A) dans l'ADN :",              opts:["Cytosine (C)","Guanine (G)","Thymine (T)","Uracile (U)"],           rep:2, expl:"Dans l'ADN : A−T et C−G sont les paires complémentaires."},
      {q:"Quel organe produit la bile ?",                                   opts:["L'estomac","Le foie","Le pancréas","Le rein"],                      rep:1, expl:"Le foie produit la bile, stockée dans la vésicule biliaire."},
      {q:"Combien de paires de chromosomes possède la cellule humaine ?",  opts:["23 paires","22 paires","46 paires","24 paires"],                    rep:0, expl:"23 paires soit 46 chromosomes au total."},
    ]
  },
  physique:{
    titre:'⚡ Quiz Physique-Chimie — BEPC',
    questions:[
      {q:"Si U = 12 V et R = 4 Ω, quelle est l'intensité I ?",   opts:["3 A","8 A","48 A","16 A"],                                                  rep:0, expl:"Loi d'Ohm : I = U ÷ R = 12 ÷ 4 = 3 A."},
      {q:"Quel est le symbole chimique de l'or ?",                opts:["Or","Ag","Au","Fe"],                                                          rep:2, expl:"L'or = Au (latin Aurum)."},
      {q:"Une solution de pH = 3 est :",                          opts:["Neutre","Basique","Acide","Saline"],                                          rep:2, expl:"pH < 7 → acide ; pH = 7 → neutre ; pH > 7 → basique."},
      {q:"Unité de mesure de la force en physique :",             opts:["Joule (J)","Watt (W)","Newton (N)","Pascal (Pa)"],                            rep:2, expl:"La force se mesure en newton (N)."},
      {q:"Formule chimique du dioxyde de carbone :",              opts:["CO","CO₂","C₂O","HCO₃"],                                                     rep:1, expl:"CO₂ : un atome de carbone lié à deux atomes d'oxygène."},
    ]
  },
  histoire:{
    titre:'🏺 Quiz Histoire-Géographie — BEPC',
    questions:[
      {q:"En quelle année la Haute-Volta est-elle devenue le Burkina Faso ?", opts:["1960","1975","1984","1987"],                                      rep:2, expl:"Le 4 août 1984, Thomas Sankara rebaptise le pays."},
      {q:"En quelle année la Haute-Volta a-t-elle obtenu son indépendance ?", opts:["1958","1960","1962","1945"],                                      rep:1, expl:"Indépendance le 5 août 1960."},
      {q:"La conférence de Berlin (1884-1885) a organisé :",                  opts:["La paix après la 1ère GM","Le partage colonial de l'Afrique","La création de l'ONU","L'abolition de l'esclavage"], rep:1, expl:"Berlin 1884-1885 : partage de l'Afrique entre puissances européennes."},
      {q:"Quelle est la capitale du Burkina Faso ?",                          opts:["Bobo-Dioulasso","Koudougou","Ouagadougou","Banfora"],              rep:2, expl:"Ouagadougou est la capitale politique et administrative."},
      {q:"Quel est le plus long fleuve du Burkina Faso ?",                    opts:["Le Niger","Le Mouhoun (Volta Noire)","La Comoé","Le Nakambé"],     rep:1, expl:"Le Mouhoun (Volta Noire) est le plus long fleuve du Burkina Faso."},
    ]
  },
  francais:{
    titre:'✍️ Quiz Français — BEPC',
    questions:[
      {q:"Nature grammaticale de « rapidement » ?",                          opts:["Adjectif qualificatif","Adverbe","Verbe","Nom commun"],             rep:1, expl:"Adverbe de manière formé sur l'adjectif « rapide »."},
      {q:"Laquelle utilise le subjonctif correctement ?",                    opts:["Je veux qu'il vient.","Il faut que tu fasses tes devoirs.","Bien qu'il a de la chance.","Pour qu'elle réussit."], rep:1, expl:"Après « il faut que », le subjonctif est obligatoire."},
      {q:"Qu'est-ce qu'une métaphore ?",                                     opts:["Comparaison avec « comme »","Exagération","Image sans outil comparatif","Répétition d'un mot"], rep:2, expl:"La métaphore compare sans outil comparatif."},
      {q:"Pluriel irrégulier de « œil » :",                                  opts:["Des œils","Des œillets","Des yeux","Des oeils"],                    rep:2, expl:"Le pluriel de « œil » est « yeux »."},
      {q:"Dans « Les livres que j'ai achetés », pourquoi -s à « achetés » ?",opts:["Sujet pluriel","COD placé avant avoir","Auxiliaire être","Erreur"], rep:1, expl:"Avec avoir, accord avec le COD placé AVANT le verbe."},
    ]
  },
  anglais:{
    titre:'🗣️ Quiz Anglais — BEPC',
    questions:[
      {q:"Which sentence is in the passive voice?",                           opts:["She reads books.","Books are read by her.","She is reading.","She has read."],         rep:1, expl:"Passive = to be + past participle."},
      {q:"Complete: 'He ___ to school every day.'",                           opts:["go","goes","is going","went"],                                                         rep:1, expl:"Habitual action → simple present. He/she/it → verb+s."},
      {q:"Past participle of 'write' :",                                      opts:["Wrote","Written","Writed","Writ"],                                                      rep:1, expl:"Write → wrote → written. Irregular verb."},
      {q:"Correct comparative: 'This exercise is ___ than that.' (difficult)",opts:["More difficult","Difficulter","Most difficult","More difficultly"],                     rep:0, expl:"Long adjectives: more + adjective + than."},
      {q:"2nd conditional: 'If I ___ rich, I ___ a school.'",                 opts:["am / will build","was / would build","were / would build","be / would build"],         rep:2, expl:"If + past simple (were) + would + base verb."},
    ]
  },
  culture_histoire:{
    titre:'🏺 Quiz — Histoire & Géographie Afrique',
    questions:[
      {q:"Quelle est la monnaie utilisée au Burkina Faso ?",                  opts:["Le naira","Le franc CFA (XOF)","Le cedi","Le dalasi"],                                 rep:1, expl:"Le Burkina utilise le franc CFA de l'UEMOA (XOF)."},
      {q:"Quel pays africain n'a jamais été colonisé ?",                     opts:["Le Ghana","L'Éthiopie","Le Sénégal","Le Nigeria"],                                     rep:1, expl:"L'Éthiopie n'a jamais été colonisée (victoire d'Adoua 1896)."},
      {q:"Où se trouve le mont Kilimandjaro ?",                               opts:["Kenya","Tanzanie","Ouganda","Rwanda"],                                                  rep:1, expl:"Le Kilimandjaro (5895 m) se trouve en Tanzanie."},
      {q:"Quel fleuve est le plus long du monde ?",                           opts:["L'Amazone","Le Congo","Le Nil","Le Niger"],                                             rep:2, expl:"Le Nil (6 650 km) est le fleuve le plus long du monde."},
      {q:"En quelle année l'Union Africaine a-t-elle été fondée ?",          opts:["1963","1991","2002","2010"],                                                             rep:2, expl:"L'UA a été fondée en 2002 à Durban, succédant à l'OUA."},
    ]
  },
  culture_sciences:{
    titre:'🔬 Quiz — Sciences & Inventions',
    questions:[
      {q:"Qui a découvert la pénicilline ?",                                  opts:["Louis Pasteur","Alexander Fleming","Marie Curie","Albert Einstein"],                    rep:1, expl:"Alexander Fleming a découvert la pénicilline en 1928."},
      {q:"Quelle planète est la plus proche du Soleil ?",                    opts:["Vénus","Terre","Mercure","Mars"],                                                        rep:2, expl:"Mercure est la planète la plus proche du Soleil."},
      {q:"À quelle vitesse la lumière se déplace-t-elle dans le vide ?",     opts:["150 000 km/s","300 000 km/s","500 000 km/s","1 000 000 km/s"],                          rep:1, expl:"La lumière se déplace à environ 300 000 km/s."},
      {q:"Élément chimique le plus abondant dans l'atmosphère terrestre ?",  opts:["L'oxygène","L'argon","L'azote","Le dioxyde de carbone"],                                rep:2, expl:"L'azote (N₂) représente environ 78 % de l'atmosphère."},
      {q:"Qui a formulé la théorie de la relativité ?",                      opts:["Isaac Newton","Niels Bohr","Albert Einstein","Max Planck"],                              rep:2, expl:"Albert Einstein : relativité restreinte (1905) et générale (1915)."},
    ]
  }
};

const QUIZ_BAC_A4 = {
  titre: 'Quiz Serie A4 -- Philosophie & Litterature',
  questions: [
    { q: "Selon Descartes, quelle est la premiere certitude philosophique ?", opts: ["Dieu existe","Le monde est materiel","Je pense donc je suis","L\'ame est immortelle"], rep: 2, expl: "Le cogito de Descartes : 'Je pense, donc je suis' est le point de depart indubitable de sa philosophie." },
    { q: "Qu\'est-ce que le determinisme en philosophie ?", opts: ["La liberte totale de l\'individu","Le hasard absolu","La croyance religieuse","L\'idee que tout evenement a une cause necessaire"], rep: 3, expl: "Le determinisme soutient que tout phenomene, y compris les actions humaines, est le resultat de causes anterieures necessaires." },
    { q: "Quel mouvement litteraire valorise la nature et les sentiments au 19e siecle ?", opts: ["Le classicisme","Le naturalisme","Le romantisme","Le symbolisme"], rep: 2, expl: "Le romantisme (debut 19e siecle) valorise l\'expression des sentiments, la nature et l\'individu face a la societe." },
    { q: "Qu\'est-ce que la negritude en litterature africaine ?", opts: ["Un style d\'ecriture experimental","Un genre theatral","Une technique poetique","Un mouvement de revalorisation de la culture noire"], rep: 3, expl: "La negritude, portee par Senghor, Cesaire et Damas, valorise l\'identite et la culture africaine face a la colonisation." },
    { q: "Qu\'est-ce que l\'Etat selon les theories du contrat social ?", opts: ["Une institution divine","Une domination naturelle","Le resultat d\'un accord entre individus pour vivre ensemble","Un heritage familial"], rep: 2, expl: "Pour Hobbes, Locke et Rousseau, l\'Etat nait d\'un contrat social ou les individus renoncent a certains droits pour la securite collective." },
    { q: "Quelle est la difference entre la morale et le droit ?", opts: ["Il n\'y en a aucune","Le droit n\'existe pas","La morale vient toujours de la religion","La morale est interieure, le droit est impose par la societe"], rep: 3, expl: "La morale releve de la conscience individuelle, tandis que le droit est un ensemble de regles imposees et sanctionnees par la societe." },
    { q: "Dans 'L\'Etranger' de Camus, quel concept philosophique est central ?", opts: ["Le determinisme","Le devoir kantien","Le contrat social","L\'absurde"], rep: 3, expl: "Camus developpe la philosophie de l\'absurde : le sentiment que la vie n\'a pas de sens objectif preetabli." },
    { q: "Qu\'est-ce qu\'un syllogisme en logique ?", opts: ["Une figure de style","Un type de poeme","Une regle de grammaire","Un raisonnement deductif a partir de deux premisses"], rep: 3, expl: "Le syllogisme est un raisonnement logique : de deux premisses (majeure et mineure) on tire une conclusion necessaire." },
    { q: "Quel auteur a ecrit 'Le Prince', traite sur le pouvoir politique ?", opts: ["Aristote","Rousseau","Montesquieu","Machiavel"], rep: 3, expl: "Machiavel, dans 'Le Prince' (1532), analyse les strategies du pouvoir politique de maniere pragmatique." },
    { q: "Qu\'est-ce que la dissertation philosophique exige avant tout ?", opts: ["Une opinion personnelle sans argument","Un resume de cours","Une liste de citations","Une analyse rigoureuse du sujet avec une problematique"], rep: 3, expl: "La dissertation philosophique exige l\'analyse du sujet, la construction d\'une problematique et un raisonnement argumente." },
  ]
};

const QUIZ_BAC_D = {
  titre: 'Quiz Serie D -- Sciences Renforcees',
  questions: [
    { q: "Quel est le role de l\'ADN polymerase ?", opts: ["Digerer les proteines","Produire de l\'energie","Synthetiser un nouveau brin d\'ADN","Transporter l\'oxygene"], rep: 2, expl: "L\'ADN polymerase est l\'enzyme qui synthetise un nouveau brin d\'ADN lors de la replication." },
    { q: "Quelle est la derivee de f(x) = 3x2 + 2x ?", opts: ["6x + 2","3x + 2","6x2","3x2 + 2"], rep: 0, expl: "La derivee de 3x2 est 6x, et celle de 2x est 2. Donc f\'(x) = 6x + 2." },
    { q: "Qu\'est-ce que la meiose produit chez l\'humain ?", opts: ["Des cellules somatiques","Des globules rouges","Des neurones","Des gametes (spermatozoides ou ovules)"], rep: 3, expl: "La meiose est une division cellulaire qui produit les gametes, avec la moitie du nombre de chromosomes (23 au lieu de 46)." },
    { q: "Quelle loi relie tension, resistance et intensite ?", opts: ["La loi de Newton","La loi de Coulomb","La loi de Joule","La loi d\'Ohm"], rep: 3, expl: "La loi d\'Ohm : U = R x I, relie la tension (U), la resistance (R) et l\'intensite du courant (I)." },
    { q: "Qu\'est-ce qu\'un anticorps ?", opts: ["Un type de globule rouge","Un neurotransmetteur","Une hormone digestive","Une proteine du systeme immunitaire qui neutralise les antigenes"], rep: 3, expl: "Les anticorps sont des proteines produites par les lymphocytes B pour neutraliser les agents pathogenes (antigenes)." },
    { q: "Quelle est la formule de l\'energie cinetique ?", opts: ["Ec = mgh","Ec = mc2","Ec = Fd","Ec = (1/2)mv2"], rep: 3, expl: "L\'energie cinetique d\'un objet en mouvement est Ec = (1/2) x masse x vitesse au carre." },
    { q: "Quel organe regule la glycemie en secretant l\'insuline ?", opts: ["Le foie","Le rein","La thyroide","Le pancreas"], rep: 3, expl: "Le pancreas secrete l\'insuline (qui abaisse la glycemie) et le glucagon (qui l\'augmente)." },
    { q: "Que represente le discriminant negatif (Delta < 0) pour une equation du second degre ?", opts: ["Deux solutions reelles distinctes","Une solution double","Aucune solution reelle","Une infinite de solutions"], rep: 2, expl: "Si Delta < 0, l\'equation n\'a pas de solution dans l\'ensemble des nombres reels." },
    { q: "Qu\'est-ce qu\'un acide selon la chimie ?", opts: ["Une substance qui libere des ions OH-","Un metal pur","Un gaz noble","Une substance qui libere des ions H+"], rep: 3, expl: "Un acide est une substance qui, en solution, libere des ions H+ (protons)." },
    { q: "Quel est le role des stomates chez les plantes ?", opts: ["Stocker l\'eau","Produire le pollen","Ancrer la plante au sol","Permettre les echanges gazeux (CO2, O2, vapeur d\'eau)"], rep: 3, expl: "Les stomates, situes sur les feuilles, regulent les echanges gazeux necessaires a la photosynthese et la transpiration." },
  ]
};

const METHODOLOGIE_BEPC = [
  {
    titre:'✍️ Comment rédiger un résumé de texte', couleur:'#6b3d9a',
    etapes:[
      'Lire le texte une première fois pour comprendre le thème général.',
      'Relire en soulignant les idées principales (1 idée par paragraphe).',
      'Identifier la thèse de l\'auteur : que cherche-t-il à démontrer ?',
      'Rédiger en utilisant TES propres mots (ne pas copier le texte).',
      'Respecter le nombre de mots demandé (±10%) et l\'ordre des idées.',
      'Relire pour éliminer les fautes et vérifier la cohérence.',
    ]
  },
  {
    titre:'➗ Comment résoudre un problème de maths', couleur:'#1B6B3A',
    etapes:[
      'Lire l\'énoncé DEUX fois. Identifier les données et ce qu\'on cherche.',
      'Faire un schéma ou tableau si possible.',
      'Choisir la formule ou méthode adaptée.',
      'Poser les calculs étape par étape, sans sauter de ligne.',
      'Vérifier le résultat : est-il logique ? (unité, ordre de grandeur)',
      'Rédiger la conclusion en répondant à la question posée.',
    ]
  },
  {
    titre:'🔬 Comment répondre à une question de SVT', couleur:'#4a7c59',
    etapes:[
      'Repérer les mots-clés de la question (comparer, expliquer, justifier…).',
      'Observer attentivement les schémas ou tableaux fournis.',
      'Répondre en utilisant le vocabulaire scientifique précis.',
      'Justifier chaque affirmation par une observation ou une connaissance.',
      'Structurer : définition → observation → explication → conclusion.',
      'Ne pas inventer : rédige ce que tu sais du sujet.',
    ]
  },
  {
    titre:'🏺 Comment traiter un sujet d\'Histoire-Géo', couleur:'#7a4a1e',
    etapes:[
      'Analyser le sujet : période, espace géographique, acteurs.',
      'Délimiter le sujet dans le temps et l\'espace.',
      'Faire un plan en 2 ou 3 parties avec des sous-parties.',
      'Rédiger une introduction avec contexte, problématique et plan.',
      'Utiliser des dates, des noms de lieux et de personnages précis.',
      'Conclure en répondant à la problématique.',
    ]
  },
];

const METHODOLOGIE_BAC = [
  {
    titre:'📝 La Dissertation Philosophique', couleur:'#6b3d9a',
    etapes:[
      'ANALYSER le sujet : définir chaque terme. Ne jamais commencer sans cette étape.',
      'PROBLÉMATISER : trouver le paradoxe caché dans la question.',
      'CONSTRUIRE LE PLAN : thèse → antithèse → synthèse.',
      'INTRODUCTION : accroche → définitions → problématique → plan.',
      'DÉVELOPPEMENT : 1 idée par paragraphe, illustrée par un auteur ou exemple.',
      'CONCLUSION : bilan + réponse à la problématique + ouverture.',
    ]
  },
  {
    titre:'📖 Le Commentaire de Texte', couleur:'#C0392B',
    etapes:[
      'Lire le texte 3 fois : survol → compréhension → analyse fine.',
      'Identifier : auteur, œuvre, date, genre, registre, thème.',
      'Dégager la thèse ou l\'idée centrale du texte.',
      'Repérer les procédés stylistiques et leur effet.',
      'Plan en 2 parties : forme/structure + fond/idées.',
      'Chaque observation citée (courte citation) puis analysée.',
    ]
  },
  {
    titre:'⚗️ Résolution Physique-Chimie BAC', couleur:'#1a6b8a',
    etapes:[
      'Identifier le type de problème : mécanique, électricité, chimie…',
      'Lister les données avec leurs unités. Convertir si nécessaire.',
      'Écrire les lois applicables avant tout calcul.',
      'Poser les équations littérales AVANT de substituer les valeurs.',
      'Calculer avec les bons chiffres significatifs.',
      'Vérifier l\'homogénéité des unités et le sens physique du résultat.',
    ]
  },
];

let etat = {
  page:'accueil', historique:[], params:null,
  quizActif:null, quizIdx:0, quizScore:0, quizRepondu:false,
  tabActif:{}
};

function afficherPage(page, params) {
  etat.historique.push({page:etat.page, params:etat.params});
  etat.page   = page;
  etat.params = params || null;
  rendrePage();
  window.scrollTo({top:0, behavior:'smooth'});
}

function retour() {
  if (etat.historique.length > 0) {
    var d = etat.historique.pop();
    etat.page   = d.page;
    etat.params = d.params;
    rendrePage();
    window.scrollTo({top:0, behavior:'smooth'});
  }
}

function toggleMenu() {
  document.querySelector('#nav-links').classList.toggle('open');
}

function setBreadcrumb(texte) {
  var bc = document.getElementById('breadcrumb');
  if (texte) {
    bc.style.display = 'block';
    document.getElementById('breadcrumb-text').textContent = texte;
  } else {
    bc.style.display = 'none';
  }
}

function changerTab(ctx, id) {
  etat.tabActif[ctx] = id;
  rendrePage();
}

function rendrePage() {
  var app = document.getElementById('app');
  switch(etat.page) {
    case 'accueil':      setBreadcrumb(null);                              app.innerHTML = pageAccueil();       break;
    case 'bepc':         setBreadcrumb('Accueil › BEPC');                  app.innerHTML = pageBEPC();          break;
    case 'bac':          setBreadcrumb('Accueil › BAC');                   app.innerHTML = pageBAC();           break;
    case 'culture':      setBreadcrumb('Accueil › Culture Générale');      app.innerHTML = pageCulture();       break;
    case 'quiz':         setBreadcrumb('Accueil › BEPC › Quiz');           app.innerHTML = pageQuiz();          break;
    case 'culture-quiz': setBreadcrumb('Accueil › Culture › Quiz');        app.innerHTML = pageQuizCulture();   break;
    case 'annales-bepc': setBreadcrumb('Accueil › BEPC › Annales');        app.innerHTML = pageAnnalesBEPC();   break;
    case 'annales-bac':  setBreadcrumb('Accueil › BAC › Annales');         app.innerHTML = pageAnnalesBAC();    break;
    case 'serie-detail': rendreSerieDetail();                              break;
    case 'quiz-serie':   setBreadcrumb('Accueil > BAC > Quiz Serie ' + etat.params); app.innerHTML = pageQuizSerie(); break;
    case 'quiz-serie':   setBreadcrumb('Accueil > BAC > Quiz Serie ' + etat.params); app.innerHTML = pageQuizSerie(); break;
    case 'quiz-serie':   setBreadcrumb('Accueil > BAC > Quiz Serie ' + etat.params); app.innerHTML = pageQuizSerie(); break;
    default:             app.innerHTML = pageAccueil();
  }
}

function pageAccueil() {
  return '<div class="hero">' +
    '<div class="hero-badge">🇧🇫 Burkina Faso · BEPC · BAC · Culture</div>' +
    '<h1>Révise mieux,<br>réussis tes <em>examens</em></h1>' +
    '<p>Fiches, quiz interactifs et annales pour les élèves burkinabè en classe d\'examen.</p>' +
    '<div class="btn-group">' +
      '<button class="btn btn-or"    onclick="afficherPage(\'bepc\')">Préparer le BEPC</button>' +
      '<button class="btn btn-blanc" onclick="afficherPage(\'bac\')">Préparer le BAC</button>' +
    '</div></div>' +
  '<div class="stats">' +
    stat('6','Matières BEPC') + stat('6','Séries BAC') + stat('30+','Questions quiz') + stat('100%','Gratuit') +
  '</div>' +
  '<div class="page-section"><div class="section-title">🎯 Que veux-tu faire ?</div>' +
  '<div class="exam-grid">' +
    examCard('card-bepc',  '📚','BEPC',            'Matières · Annales · Méthodologie · Quiz pour les élèves de 3ème.','bepc') +
    examCard('card-bac',   '🎓','BAC',             'Séries A4, D, C, B, E · Annales · Dissertations · Candidats libres.','bac') +
    examCard('card-culture','🌍','Culture Générale','Quiz du jour · Histoire africaine · Sciences · Littérature.','culture') +
  '</div></div>';
}

function stat(nb, lb) {
  return '<div class="stat"><div class="stat-nb">'+nb+'</div><div class="stat-lb">'+lb+'</div></div>';
}

function examCard(cls, emoji, titre, desc, page) {
  return '<div class="exam-card '+cls+'" data-emoji="'+emoji+'" onclick="afficherPage(\''+page+'\')">' +
    '<h2>'+titre+'</h2><p>'+desc+'</p>' +
    '<button class="btn btn-or btn-sm">Commencer →</button></div>';
}

function pageBEPC() {
  var actif = etat.tabActif['bepc'] || 'matieres';
  var html = '<div class="page-header"><h1>📚 Espace BEPC — Classe de 3ème</h1><p>Tout ce qu\'il te faut pour réussir ton BEPC</p></div>';
  html += '<div class="tab-bar">' +
    tb('matieres','📖 Matières',    actif,'bepc') +
    tb('annales', '📄 Annales',     actif,'bepc') +
    tb('methodo', '💡 Méthodologie',actif,'bepc') +
    tb('quiz',    '🎯 Quiz',        actif,'bepc') +
  '</div><div class="page-section">';
  if (actif==='matieres') html += grilleMatieres();
  if (actif==='annales')  html += contenuAnnalesBEPC();
  if (actif==='methodo')  html += grilleMethodo(METHODOLOGIE_BEPC);
  if (actif==='quiz')     html += grilleQuizBepc();
  return html + '</div>';
}

function tb(id, label, actif, ctx) {
  var cl = actif===id ? 'tab-btn active' : 'tab-btn';
  return '<button class="'+cl+'" onclick="changerTab(\''+ctx+'\',\''+id+'\')">'+label+'</button>';
}

function tb2(id, label, actif, ctx) {
  var cl = actif===id ? 'tab-btn bac-active' : 'tab-btn';
  return '<button class="'+cl+'" onclick="changerTab(\''+ctx+'\',\''+id+'\')">'+label+'</button>';
}

function tb3(id, label, actif, ctx) {
  var cl = actif===id ? 'tab-btn cult-active' : 'tab-btn';
  return '<button class="'+cl+'" onclick="changerTab(\''+ctx+'\',\''+id+'\')">'+label+'</button>';
}

function grilleMatieres() {
  var html = '<div class="section-title">📖 Matières du BEPC</div><div class="matiere-grid">';
  MATIERES_BEPC.forEach(function(m) {
    html += '<div class="matiere-card" onclick="afficherPage(\'quiz\',\''+m.id+'\')">' +
      '<div class="matiere-icon">'+m.icon+'</div>' +
      '<div class="matiere-nom">'+m.nom+'</div>' +
      '<div class="matiere-sub">'+m.sub+'</div></div>';
  });
  return html + '</div>';
}

function grilleQuizBepc() {
  var html = '<div class="section-title">🎯 Choisir un quiz par matière</div><div class="matiere-grid">';
  MATIERES_BEPC.forEach(function(m) {
    html += '<div class="matiere-card" onclick="afficherPage(\'quiz\',\''+m.id+'\')">' +
      '<div class="matiere-icon">'+m.icon+'</div>' +
      '<div class="matiere-nom">'+m.nom+'</div>' +
      '<div class="matiere-sub">5 questions · BEPC</div></div>';
  });
  return html + '</div>';
}

function grilleMethodo(liste) {
  var html = '<div class="section-title">💡 Méthodologie</div><div class="methodo-grid">';
  liste.forEach(function(m) {
    html += '<div class="methodo-card"><div class="methodo-header" style="background:'+m.couleur+'">'+m.titre+'</div><div class="methodo-body"><ol>';
    m.etapes.forEach(function(e){ html += '<li>'+e+'</li>'; });
    html += '</ol></div></div>';
  });
  return html + '</div>';
}

function contenuAnnalesBEPC_old() {
  var html = '<div class="section-title">📄 Annales BEPC</div>';
  html += '<div class="alerte">📥 Ajoute les PDF dans un dossier <code>annales/</code> pour activer les téléchargements.</div>';
  html += '<div class="annale-grid">';
  ANNALES_BEPC.forEach(function(a) {
    var c = a.difficulte==='Difficile'?'#C0392B':a.difficulte==='Moyen'?'#e67e22':'#1B6B3A';
    html += '<div class="annale-card"><h3>'+a.annee+' — '+a.matiere+'</h3><p>'+a.sujet+'</p>' +
      '<span style="font-size:.75rem;font-weight:700;color:'+c+'">● '+a.difficulte+'</span>' +
      '<div class="annale-btns">' +
        '<button class="btn btn-vert btn-sm" onclick="alert(\'PDF à venir.\')">📥 Sujet</button>' +
        '<button class="btn btn-outline btn-sm" onclick="alert(\'Corrigé à venir.\')">✅ Corrigé</button>' +
      '</div></div>';
  });
  return html + '</div>';
}

function pageBAC() {
  var actif = etat.tabActif['bac'] || 'series';
  var html = '<div class="page-header bac-header"><h1>🎓 Espace BAC</h1><p>Choisir ta série et accéder aux ressources adaptées</p></div>';
  html += '<div class="tab-bar">' +
    tb2('series',   '🎓 Séries',            actif,'bac') +
    tb2('annales',  '📄 Annales',           actif,'bac') +
    tb2('methodo',  '💡 Méthodologie',      actif,'bac') +
    tb2('candidats','🧑 Candidats Libres',   actif,'bac') +
    tb2('citations','📜 Citations',          actif,'bac') +
  '</div><div class="page-section">';
  if (actif==='series')    html += grilleSeries();
  if (actif==='annales')   html += pageAnnalesBAC();
  if (actif==='methodo')   html += grilleMethodo(METHODOLOGIE_BAC);
  if (actif==='candidats') html += contenuCandidats();
  if (actif==='citations') html += grilleCitations();
  return html + '</div>';
}

function grilleSeries() {
  var html = '<div class="section-title">🎓 Choisir ta série</div>';
  html += '<div class="alerte">💡 Clique sur ta série pour voir les matières et coefficients.</div>';
  html += '<div class="series-grid">';
  SERIES_BAC.forEach(function(s) {
    html += '<div class="serie-card" onclick="afficherPage(\'serie-detail\',\''+s.lettre+'\')" style="border-top-color:'+s.couleur+'">' +
      '<div class="serie-lettre" style="color:'+s.couleur+'">Série '+s.lettre+'</div>' +
      '<div class="serie-nom">'+s.nom+'</div></div>';
  });
  return html + '</div>';
}

function rendreSerieDetail() {
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
    '<button class="btn btn-or" onclick="afficherPage(\'quiz-serie\',\''+lettre+'\')">Quiz de la serie</button>' +
    '<button class="btn btn-bleu" onclick="afficherPage(\'annales-bac\')">Voir les annales</button>' +
    '<button class="btn btn-outline" onclick="retour()">Changer de serie</button>' +
  '</div></div></div>';
  app.innerHTML = html;
}

function pageQuizSerie() {
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


function pageAnnalesBAC() {
  var html = '<div class="section-title">📄 Annales BAC</div>';
  html += '<div class="alerte">📥 Ajoute les PDF dans un dossier <code>annales/</code> pour activer les téléchargements.</div>';
  html += '<div class="annale-grid">';
  ANNALES_BAC.forEach(function(a) {
    var c = a.difficulte==='Difficile'?'#C0392B':a.difficulte==='Moyen'?'#e67e22':'#1B6B3A';
    html += '<div class="annale-card"><h3>'+a.annee+' — '+a.matiere+' <small style="color:var(--gris)">'+a.serie+'</small></h3><p>'+a.sujet+'</p>' +
      '<span style="font-size:.75rem;font-weight:700;color:'+c+'">● '+a.difficulte+'</span>' +
      '<div class="annale-btns">' +
        '<button class="btn btn-bleu btn-sm" onclick="alert(\'PDF à venir.\')">📥 Sujet</button>' +
        '<button class="btn btn-outline btn-sm" onclick="alert(\'Corrigé à venir.\')">✅ Corrigé</button>' +
      '</div></div>';
  });
  return html + '</div>';
}

function contenuCandidats() {
  return '<div class="section-title">🧑 Coin des Candidats Libres</div>' +
  '<div class="alerte">ℹ️ Vérifie toujours les dates officielles auprès du MENAPLN.</div>' +
  '<div class="info-cards">' +
    infoCard('📅 Calendrier administratif',[
      'Inscriptions au BAC : généralement <strong>janvier–mars</strong>',
      'Dépôt des dossiers : <strong>DRENA ou DREP</strong> de ta région',
      'Épreuves écrites : généralement <strong>mai–juin</strong>',
      'Résultats : <strong>juillet–août</strong>',
    ]) +
    infoCard('📁 Pièces du dossier',[
      'Extrait d\'acte de naissance',
      'Certificat de nationalité burkinabè',
      'Relevés de notes du lycée',
      'Photos d\'identité récentes',
      'Reçu de paiement des frais d\'inscription',
    ]) +
    infoCard('⚽ Gestion de l\'EPS',[
      'EPS <strong>obligatoire</strong> pour les moins de 30 ans',
      'Se déroule généralement avant les épreuves écrites',
      'Se rapprocher du lycée d\'affectation pour le lieu',
      'Note reportée sur le relevé final',
    ]) +
    infoCard('📅 Conseils d\'organisation',[
      'Planning de révision <strong>6 mois avant</strong> les épreuves',
      'Réviser 4 à 6 heures par jour les 2 derniers mois',
      'Prioriser les matières à fort coefficient de ta série',
      'Faire des annales en conditions réelles (minuterie)',
      'Rejoindre des groupes d\'étude même à distance',
    ]) +
  '</div>';
}

function infoCard(titre, items) {
  var html = '<div class="info-card"><h3>'+titre+'</h3><ul>';
  items.forEach(function(i){ html += '<li>'+i+'</li>'; });
  return html + '</ul></div>';
}

function grilleCitations() {
  var html = '<div class="section-title">📜 Citations à connaître</div>';
  html += '<div class="alerte">💡 Fréquemment demandées en Philosophie et Français (séries A4, A1, D).</div>';
  html += '<div class="citations-grid">';
  CITATIONS.forEach(function(c) {
    html += '<div class="citation-card">' +
      '<div class="citation-texte">« '+c.texte+' »</div>' +
      '<div class="citation-auteur">— '+c.auteur+'</div>' +
      '<div class="citation-theme">'+c.theme+'</div></div>';
  });
  return html + '</div>';
}

function pageCulture() {
  var actif = etat.tabActif['culture'] || 'categories';
  var html = '<div class="page-header cult-header"><h1>🌍 Culture Générale</h1><p>Apprends en t\'amusant</p></div>';
  html += '<div class="tab-bar">' +
    tb3('categories','🗂️ Thèmes',      actif,'culture') +
    tb3('quiz-jour', '⚡ Quiz du Jour', actif,'culture') +
  '</div><div class="page-section">';
  if (actif==='categories') html += grilleCategories();
  if (actif==='quiz-jour')  html += quizJour();
  return html + '</div>';
}

function grilleCategories() {
  var cartes = [
    {id:'culture_burkina', icon:'🇧🇫', nom:'Burkina Faso', sub:'Histoire · Culture · Traditions'},
    {id:'culture_afrique', icon:'🌍', nom:'Afrique', sub:'Histoire · Géographie · Leaders'},
    {id:'culture_sciences', icon:'🔬', nom:'Sciences', sub:'Découvertes · Espace · Biologie'},
    {id:'culture_svt_pc', icon:'⚗️', nom:'SVT & Physique-Chimie', sub:'Biologie · Chimie · Physique'},
    {id:'culture_arts', icon:'🎨', nom:'Arts & Philosophie', sub:'Littérature · Peinture · Penseurs'},
    {id:'culture_monde', icon:'🌐', nom:'Monde Contemporain', sub:'Géopolitique · ONU · Économie'},
    {id:'culture_maths_langues', icon:'➗', nom:'Maths & Langues', sub:'Calcul · Français · Anglais'},
    {id:'culture_divers', icon:'💡', nom:'Informatique & Divers', sub:'Tech · Écologie · Histoire'},
  ];
  var html = '<div class="section-title">🗂️ Catégories thématiques</div><div class="culture-grid">';
  cartes.forEach(function(c) {
    html += cultureCard(c.icon, c.nom, c.sub, "afficherPage('culture-quiz','"+c.id+"')");
  });
  return html + '</div>';
}

function cultureCard(icon, nom, sub, onclick) {
  return '<div class="culture-card" onclick="'+onclick+'">' +
    '<div class="culture-icon">'+icon+'</div>' +
    '<div class="culture-nom">'+nom+'</div>' +
    '<div class="culture-sub">'+sub+'</div></div>';
}

function quizJour() {
  var cles = Object.keys(QUIZ_DATA);
  var aleatoire = cles[Math.floor(Math.random() * cles.length)];
  etat.params = aleatoire;
  return '<div class="section-title">⚡ Quiz du Jour</div>' +
    '<div class="alerte">🎲 Un quiz aléatoire sélectionné pour toi !</div>' +
    buildQuiz(aleatoire);
}

function pageQuiz() {
  var d = QUIZ_DATA[etat.params];
  return '<div class="page-header"><h1>'+(d?d.titre:'Quiz')+'</h1><p>5 questions · Réponds puis découvre l\'explication</p></div>' +
    '<div class="page-section">'+buildQuiz(etat.params)+'</div>';
}

function pageQuizCulture() {
  var d = QUIZ_DATA[etat.params] || (typeof QUIZ_CULTURE !== 'undefined' ? QUIZ_CULTURE[etat.params] : undefined);
  return '<div class="page-header cult-header"><h1>'+(d?d.titre:'Quiz Culture')+'</h1><p>5 questions · Réponds puis découvre l\'explication</p></div>' +
    '<div class="page-section">'+buildQuiz(etat.params)+'</div>';
}

function buildQuiz(id) {
  var d = QUIZ_DATA[id] || (typeof QUIZ_CULTURE !== 'undefined' ? QUIZ_CULTURE[id] : undefined);
  if (!d) return '<p>Quiz introuvable.</p>';
  etat.quizActif = id; etat.quizIdx = 0; etat.quizScore = 0; etat.quizRepondu = false;
  return afficherQuestion(d, 0);
}

function melangerOptions(question) {
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

function afficherQuestion(data, idx) {
  var q = melangerOptions(data.questions[idx]);
  var total = data.questions.length;
  var html = '<div class="quiz-wrap" id="qwrap">' +
    '<div class="quiz-titre">'+data.titre+' — Question '+(idx+1)+'/'+total+'</div>' +
    '<div class="score-bar"><div class="score-fill" id="sfill" style="width:'+(idx/total*100)+'%"></div></div>' +
    '<div class="quiz-question">'+q.q+'</div>' +
    '<div class="quiz-options" id="qopts">';
  window.__questionActuelle = q;
  q.opts.forEach(function(o,i){ html += '<button class="quiz-opt" onclick="repondre('+i+')">'+o+'</button>'; });
  html += '</div><div class="quiz-feedback" id="qfb" style="display:none"></div>' +
    '<div class="quiz-nav" id="qnav" style="display:none">' +
      (idx+1<total
        ? '<button class="btn btn-vert" onclick="suivant()">Question suivante →</button>'
        : '<button class="btn btn-or"   onclick="resultat()">Voir mon score 🏆</button>') +
      '<button class="btn btn-outline" onclick="retour()">↩ Retour</button>' +
    '</div><div class="quiz-resultat" id="qres"></div></div>';
  return html;
}

function getQuizActuel() {
  if (etat.quizActif && etat.quizActif.indexOf('BAC_') === 0 && window.__quizBacActuel) {
    return window.__quizBacActuel;
  }
  return getQuizActuel();
}

function repondre(choix) {
  if (etat.quizRepondu) return;
  etat.quizRepondu = true;
  var d    = getQuizActuel();
  var q    = window.__questionActuelle || d.questions[etat.quizIdx];
  var opts = document.querySelectorAll('.quiz-opt');
  var fb   = document.getElementById('qfb');
  var total = d.questions.length;
  opts.forEach(function(b){ b.disabled=true; });
  if (choix===q.rep) {
    opts[choix].classList.add('correct');
    fb.className='quiz-feedback feedback-ok';
    fb.textContent='✅ Correct ! '+q.expl;
    etat.quizScore++;
  } else {
    opts[choix].classList.add('incorrect');
    opts[q.rep].classList.add('correct');
    fb.className='quiz-feedback feedback-ko';
    fb.textContent='❌ Pas tout à fait. '+q.expl;
  }
  fb.style.display='block';
  document.getElementById('qnav').style.display='flex';
  document.getElementById('sfill').style.width=((etat.quizIdx+1)/total*100)+'%';
}

function suivant() {
  etat.quizIdx++;
  etat.quizRepondu=false;
  var data = getQuizActuel();
  var wrap = document.getElementById('qwrap');
  var tmp  = document.createElement('div');
  tmp.innerHTML = afficherQuestion(data, etat.quizIdx);
  wrap.innerHTML = tmp.querySelector('#qwrap').innerHTML;
}

function resultat() {
  var d    = getQuizActuel();
  var total= d.questions.length;
  var pct  = Math.round(etat.quizScore/total*100);
  var m    = pct>=80?'🏆 Excellent !':pct>=60?'👍 Bien !':pct>=40?'📖 Revois tes fiches.':'💪 Courage, réessaie !';
  var res  = document.getElementById('qres');
  res.style.display='block';
  res.textContent='Score : '+etat.quizScore+'/'+total+' ('+pct+'%) — '+m;
  document.getElementById('qnav').innerHTML=
    '<button class="btn btn-vert" onclick="buildQuizRefaire()">🔄 Recommencer</button>' +
    '<button class="btn btn-outline" onclick="retour()">↩ Retour</button>';

    if (pct >= 80) {
      res.classList.add('excellent');
      if (typeof lancerConfettis === 'function') lancerConfettis();
    }}

function buildQuizRefaire() {
  etat.quizIdx=0; etat.quizScore=0; etat.quizRepondu=false;
  var data = getQuizActuel();
  var wrap = document.getElementById('qwrap');
  var tmp  = document.createElement('div');
  tmp.innerHTML = afficherQuestion(data, 0);
  wrap.innerHTML = tmp.querySelector('#qwrap').innerHTML;
}

document.addEventListener('DOMContentLoaded', function(){ afficherPage('accueil'); });

/* ── ANNALES REELLES BEPC ── */
const ANNALES_BEPC_REELLES = {
  maths: [
    { label:'Sujet Maths 2026 — 1er Tour',     fichier:'annales/bepc/maths/sujet_2026_tour1.pdf' },
    { label:'Sujet Maths 2025 — Probable',      fichier:'annales/bepc/maths/sujet_probable_2025.pdf' },
    { label:'Sujet Maths 2025 — Blanc National',fichier:'annales/bepc/maths/blanc_national_2025.pdf' },
    { label:'Sujet Maths 2025 — Blanc Kadiogo', fichier:'annales/bepc/maths/blanc_kadiogo_2025.pdf' },
    { label:'Sujet Maths 2024 — 2ème Tour',     fichier:'annales/bepc/maths/sujet_2024_tour2.pdf' },
  ],
  physique: [
    { label:'Sujet PC 2026 — 1er Tour',         fichier:'annales/bepc/physique/sujet_2026_tour1.pdf' },
    { label:'Sujet PC 2025 — Probable',         fichier:'annales/bepc/physique/sujet_probable_2025.pdf' },
    { label:'Sujet PC 2025 — Blanc AEEMB',      fichier:'annales/bepc/physique/blanc_aeemb_2025.pdf' },
    { label:'Prépa PC 2024',                    fichier:'annales/bepc/physique/prepa_2024.pdf' },
    { label:'Recueil PC 2010-2022',             fichier:'annales/bepc/physique/recueil_2010_2022.pdf' },
  ],
  svt: [
    { label:'Sujet SVT 2026 — 1er Tour',        fichier:'annales/bepc/svt/sujet_2026_tour1.pdf' },
    { label:'Sujet SVT 2025 — Probable',        fichier:'annales/bepc/svt/sujet_probable_2025.pdf' },
    { label:'Sujet SVT 2025 — Blanc',           fichier:'annales/bepc/svt/blanc_2025.pdf' },
  ],
  francais: [
    { label:'Sujet Français 2026 — 1er Tour',   fichier:'annales/bepc/francais/sujet_2026_tour1.pdf' },
    { label:'Sujet Français 2024 — 2ème Tour',  fichier:'annales/bepc/francais/sujet_2024_tour2.pdf' },
    { label:'Sujet Français 2025 — Blanc AEEMB',fichier:'annales/bepc/francais/blanc_aeemb_2025.pdf' },
    { label:'Étude de texte 2014',              fichier:'annales/bepc/francais/sujet_etude_texte_2014.pdf' },
  ],
  anglais: [
    { label:'Sujet Anglais 2026 — 1er Tour',    fichier:'annales/bepc/anglais/sujet_2026_tour1.pdf' },
    { label:'Sujet Anglais 2025 — Blanc',       fichier:'annales/bepc/anglais/blanc_2025.pdf' },
    { label:'Sujet Anglais — École Catholique p1', fichier:'annales/bepc/anglais/sujet_anglais_p1.pdf' },
    { label:'Sujet Anglais — École Catholique p2', fichier:'annales/bepc/anglais/sujet_anglais_p2.pdf' },
  ],
  histoire: [
    { label:'Sujet Histoire-Géo 2026 — 1er Tour', fichier:'annales/bepc/histoire/sujet_2026_tour1.pdf' },
  ],
};

function pageAnnalesBEPCReelles() {
  var html = '<div class="section-title">📄 Annales BEPC — Sujets réels</div>';
  var matieres = [
    { id:'maths',    icon:'➗', nom:'Mathématiques'   },
    { id:'physique', icon:'⚡', nom:'Physique-Chimie' },
    { id:'svt',      icon:'🌿', nom:'SVT'             },
    { id:'francais', icon:'✍️', nom:'Français'        },
    { id:'anglais',  icon:'🗣️', nom:'Anglais'         },
    { id:'histoire', icon:'🏺', nom:'Histoire-Géo'    },
  ];
  matieres.forEach(function(m) {
    var liste = ANNALES_BEPC_REELLES[m.id];
    if (!liste || liste.length === 0) return;
    html += '<div style="margin-bottom:2rem">';
    html += '<h3 style="font-family:Lexend,sans-serif;font-size:1rem;font-weight:700;margin-bottom:.8rem;color:var(--vert)">'+m.icon+' '+m.nom+'</h3>';
    html += '<div class="annale-grid">';
    liste.forEach(function(a) {
      html += '<div class="annale-card">' +
        '<h3>'+a.label+'</h3>' +
        '<div class="annale-btns">' +
          '<a class="btn btn-vert btn-sm" href="'+a.fichier+'" target="_blank">📥 Ouvrir le PDF</a>' +
        '</div></div>';
    });
    html += '</div></div>';
  });
  return html;
}

function contenuAnnalesBEPC() {
  return pageAnnalesBEPCReelles();
}
