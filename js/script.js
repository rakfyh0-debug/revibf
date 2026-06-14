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
  { lettre:'C',  nom:'Mathématiques & Sciences Phy.', couleur:'#1a6b8a' },
  { lettre:'A1', nom:'Philosophie & Lettres',          couleur:'#C0392B' },
  { lettre:'B',  nom:'Sciences Économiques',           couleur:'#e67e22' },
  { lettre:'E',  nom:'Mathématiques & Technologie',   couleur:'#2c3e50' },
];

const DETAIL_SERIES = {
  A4: {
    description:'Série axée sur les humanités, la philosophie et les langues.',
    principales:[
      {nom:'Philosophie',         coeff:4},
      {nom:'Français',            coeff:4},
      {nom:'Histoire-Géographie', coeff:3},
      {nom:'Anglais (LV1)',       coeff:3},
      {nom:'Langue vivante 2',    coeff:2},
    ],
    secondaires:[
      {nom:'Mathématiques', coeff:2},
      {nom:'SVT',           coeff:1},
      {nom:'EPS',           coeff:1},
    ]
  },
  D: {
    description:'Série axée sur les sciences de la nature et de la vie.',
    principales:[
      {nom:'SVT',            coeff:5},
      {nom:'Mathématiques',  coeff:4},
      {nom:'Physique-Chimie',coeff:4},
      {nom:'Français',       coeff:3},
    ],
    secondaires:[
      {nom:'Anglais',      coeff:2},
      {nom:'Histoire-Géo', coeff:2},
      {nom:'Philosophie',  coeff:2},
      {nom:'EPS',          coeff:1},
    ]
  },
  C: {
    description:'Série axée sur les mathématiques et la physique.',
    principales:[
      {nom:'Mathématiques',  coeff:6},
      {nom:'Physique-Chimie',coeff:5},
      {nom:'Français',       coeff:3},
    ],
    secondaires:[
      {nom:'SVT',          coeff:2},
      {nom:'Anglais',      coeff:2},
      {nom:'Histoire-Géo', coeff:2},
      {nom:'Philosophie',  coeff:2},
      {nom:'EPS',          coeff:1},
    ]
  },
  A1: {
    description:'Série philosophie et lettres classiques.',
    principales:[
      {nom:'Philosophie',         coeff:5},
      {nom:'Français',            coeff:5},
      {nom:'Anglais (LV1)',       coeff:3},
      {nom:'Histoire-Géographie', coeff:3},
    ],
    secondaires:[
      {nom:'Mathématiques', coeff:2},
      {nom:'EPS',           coeff:1},
    ]
  },
  B: {
    description:'Série économique et sociale.',
    principales:[
      {nom:'Économie',            coeff:5},
      {nom:'Mathématiques',       coeff:4},
      {nom:'Français',            coeff:3},
      {nom:'Histoire-Géographie', coeff:3},
    ],
    secondaires:[
      {nom:'Anglais',     coeff:2},
      {nom:'Philosophie', coeff:2},
      {nom:'EPS',         coeff:1},
    ]
  },
  E: {
    description:'Série mathématiques et technologie.',
    principales:[
      {nom:'Mathématiques',         coeff:6},
      {nom:'Sciences Technologiques',coeff:5},
      {nom:'Physique-Chimie',        coeff:4},
    ],
    secondaires:[
      {nom:'Français', coeff:3},
      {nom:'Anglais',  coeff:2},
      {nom:'EPS',      coeff:1},
    ]
  }
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

function contenuAnnalesBEPC() {
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
  if (!d || !s) { app.innerHTML='<div class="page-section"><p>Série introuvable.</p></div>'; return; }
  setBreadcrumb('Accueil › BAC › Série '+lettre);
  var html = '<div class="page-header bac-header"><h1>Série '+lettre+' — '+s.nom+'</h1><p>'+d.description+'</p></div>';
  html += '<div class="page-section"><div class="serie-detail">';
  html += '<h2>📌 Matières principales</h2><div class="matieres-list">';
  d.principales.forEach(function(m){ html += '<div class="matiere-row">'+m.nom+'<span class="coeff-badge">Coeff. '+m.coeff+'</span></div>'; });
  html += '</div><h2>📎 Matières secondaires</h2><div class="matieres-list">';
  d.secondaires.forEach(function(m){ html += '<div class="matiere-row">'+m.nom+'<span class="coeff-badge" style="background:#aaa">Coeff. '+m.coeff+'</span></div>'; });
  html += '</div><div style="display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.5rem">' +
    '<button class="btn btn-bleu" onclick="afficherPage(\'annales-bac\')">📄 Voir les annales</button>' +
    '<button class="btn btn-outline" onclick="retour()">← Changer de série</button>' +
  '</div></div></div>';
  app.innerHTML = html;
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
  return '<div class="section-title">🗂️ Catégories thématiques</div><div class="culture-grid">' +
    cultureCard('🏺','Histoire & Géographie','Burkina Faso · Afrique · Capitales · Fleuves',"afficherPage('culture-quiz','culture_histoire')") +
    cultureCard('🔬','Sciences & Inventions','Découvertes · Espace · Physique · Biologie',"afficherPage('culture-quiz','culture_sciences')") +
    cultureCard('📚','Arts & Littérature','Auteurs · Œuvres · Courants littéraires',"alert('Bientôt disponible !')") +
    cultureCard('🌐','Monde Contemporain','Géopolitique · ONU · Organisations africaines',"alert('Bientôt disponible !')") +
  '</div>';
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
  var d = QUIZ_DATA[etat.params];
  return '<div class="page-header cult-header"><h1>'+(d?d.titre:'Quiz Culture')+'</h1><p>5 questions · Réponds puis découvre l\'explication</p></div>' +
    '<div class="page-section">'+buildQuiz(etat.params)+'</div>';
}

function buildQuiz(id) {
  var d = QUIZ_DATA[id];
  if (!d) return '<p>Quiz introuvable.</p>';
  etat.quizActif = id; etat.quizIdx = 0; etat.quizScore = 0; etat.quizRepondu = false;
  return afficherQuestion(d, 0);
}

function afficherQuestion(data, idx) {
  var q = data.questions[idx];
  var total = data.questions.length;
  var html = '<div class="quiz-wrap" id="qwrap">' +
    '<div class="quiz-titre">'+data.titre+' — Question '+(idx+1)+'/'+total+'</div>' +
    '<div class="score-bar"><div class="score-fill" id="sfill" style="width:'+(idx/total*100)+'%"></div></div>' +
    '<div class="quiz-question">'+q.q+'</div>' +
    '<div class="quiz-options" id="qopts">';
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

function repondre(choix) {
  if (etat.quizRepondu) return;
  etat.quizRepondu = true;
  var d    = QUIZ_DATA[etat.quizActif];
  var q    = d.questions[etat.quizIdx];
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
  var data = QUIZ_DATA[etat.quizActif];
  var wrap = document.getElementById('qwrap');
  var tmp  = document.createElement('div');
  tmp.innerHTML = afficherQuestion(data, etat.quizIdx);
  wrap.innerHTML = tmp.querySelector('#qwrap').innerHTML;
}

function resultat() {
  var d    = QUIZ_DATA[etat.quizActif];
  var total= d.questions.length;
  var pct  = Math.round(etat.quizScore/total*100);
  var m    = pct>=80?'🏆 Excellent !':pct>=60?'👍 Bien !':pct>=40?'📖 Revois tes fiches.':'💪 Courage, réessaie !';
  var res  = document.getElementById('qres');
  res.style.display='block';
  res.textContent='Score : '+etat.quizScore+'/'+total+' ('+pct+'%) — '+m;
  document.getElementById('qnav').innerHTML=
    '<button class="btn btn-vert" onclick="buildQuizRefaire()">🔄 Recommencer</button>' +
    '<button class="btn btn-outline" onclick="retour()">↩ Retour</button>';
}

function buildQuizRefaire() {
  etat.quizIdx=0; etat.quizScore=0; etat.quizRepondu=false;
  var data = QUIZ_DATA[etat.quizActif];
  var wrap = document.getElementById('qwrap');
  var tmp  = document.createElement('div');
  tmp.innerHTML = afficherQuestion(data, 0);
  wrap.innerHTML = tmp.querySelector('#qwrap').innerHTML;
}

document.addEventListener('DOMContentLoaded', function(){ afficherPage('accueil'); });
