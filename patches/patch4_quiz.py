import os

path = os.path.expanduser('~/ReviBF/js/script.js')
if not os.path.exists(path):
    path = '/home/linux/ReviBF/js/script.js'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

marker = "const METHODOLOGIE_BEPC = ["

quiz_bac_block = '''const QUIZ_BAC_A4 = {
  titre: 'Quiz Serie A4 -- Philosophie & Litterature',
  questions: [
    { q: "Selon Descartes, quelle est la premiere certitude philosophique ?", opts: ["Dieu existe","Je pense donc je suis","Le monde est materiel","L\\'ame est immortelle"], rep: 1, expl: "Le cogito de Descartes : 'Je pense, donc je suis' est le point de depart indubitable de sa philosophie." },
    { q: "Qu\\'est-ce que le determinisme en philosophie ?", opts: ["La liberte totale de l\\'individu","L\\'idee que tout evenement a une cause necessaire","Le hasard absolu","La croyance religieuse"], rep: 1, expl: "Le determinisme soutient que tout phenomene, y compris les actions humaines, est le resultat de causes anterieures necessaires." },
    { q: "Quel mouvement litteraire valorise la nature et les sentiments au 19e siecle ?", opts: ["Le classicisme","Le romantisme","Le naturalisme","Le symbolisme"], rep: 1, expl: "Le romantisme (debut 19e siecle) valorise l\\'expression des sentiments, la nature et l\\'individu face a la societe." },
    { q: "Qu\\'est-ce que la negritude en litterature africaine ?", opts: ["Un style d\\'ecriture experimental","Un mouvement de revalorisation de la culture noire","Un genre theatral","Une technique poetique"], rep: 1, expl: "La negritude, portee par Senghor, Cesaire et Damas, valorise l\\'identite et la culture africaine face a la colonisation." },
    { q: "Qu\\'est-ce que l\\'Etat selon les theories du contrat social ?", opts: ["Une institution divine","Le resultat d\\'un accord entre individus pour vivre ensemble","Une domination naturelle","Un heritage familial"], rep: 1, expl: "Pour Hobbes, Locke et Rousseau, l\\'Etat nait d\\'un contrat social ou les individus renoncent a certains droits pour la securite collective." },
    { q: "Quelle est la difference entre la morale et le droit ?", opts: ["Il n\\'y en a aucune","La morale est interieure, le droit est impose par la societe","Le droit n\\'existe pas","La morale vient toujours de la religion"], rep: 1, expl: "La morale releve de la conscience individuelle, tandis que le droit est un ensemble de regles imposees et sanctionnees par la societe." },
    { q: "Dans 'L\\'Etranger' de Camus, quel concept philosophique est central ?", opts: ["Le determinisme","L\\'absurde","Le devoir kantien","Le contrat social"], rep: 1, expl: "Camus developpe la philosophie de l\\'absurde : le sentiment que la vie n\\'a pas de sens objectif preetabli." },
    { q: "Qu\\'est-ce qu\\'un syllogisme en logique ?", opts: ["Une figure de style","Un raisonnement deductif a partir de deux premisses","Un type de poeme","Une regle de grammaire"], rep: 1, expl: "Le syllogisme est un raisonnement logique : de deux premisses (majeure et mineure) on tire une conclusion necessaire." },
    { q: "Quel auteur a ecrit 'Le Prince', traite sur le pouvoir politique ?", opts: ["Aristote","Machiavel","Rousseau","Montesquieu"], rep: 1, expl: "Machiavel, dans 'Le Prince' (1532), analyse les strategies du pouvoir politique de maniere pragmatique." },
    { q: "Qu\\'est-ce que la dissertation philosophique exige avant tout ?", opts: ["Une opinion personnelle sans argument","Une analyse rigoureuse du sujet avec une problematique","Un resume de cours","Une liste de citations"], rep: 1, expl: "La dissertation philosophique exige l\\'analyse du sujet, la construction d\\'une problematique et un raisonnement argumente." },
  ]
};

const QUIZ_BAC_D = {
  titre: 'Quiz Serie D -- Sciences Renforcees',
  questions: [
    { q: "Quel est le role de l\\'ADN polymerase ?", opts: ["Digerer les proteines","Synthetiser un nouveau brin d\\'ADN","Produire de l\\'energie","Transporter l\\'oxygene"], rep: 1, expl: "L\\'ADN polymerase est l\\'enzyme qui synthetise un nouveau brin d\\'ADN lors de la replication." },
    { q: "Quelle est la derivee de f(x) = 3x2 + 2x ?", opts: ["6x + 2","3x + 2","6x2","3x2 + 2"], rep: 0, expl: "La derivee de 3x2 est 6x, et celle de 2x est 2. Donc f\\'(x) = 6x + 2." },
    { q: "Qu\\'est-ce que la meiose produit chez l\\'humain ?", opts: ["Des cellules somatiques","Des gametes (spermatozoides ou ovules)","Des globules rouges","Des neurones"], rep: 1, expl: "La meiose est une division cellulaire qui produit les gametes, avec la moitie du nombre de chromosomes (23 au lieu de 46)." },
    { q: "Quelle loi relie tension, resistance et intensite ?", opts: ["La loi de Newton","La loi d\\'Ohm","La loi de Coulomb","La loi de Joule"], rep: 1, expl: "La loi d\\'Ohm : U = R x I, relie la tension (U), la resistance (R) et l\\'intensite du courant (I)." },
    { q: "Qu\\'est-ce qu\\'un anticorps ?", opts: ["Un type de globule rouge","Une proteine du systeme immunitaire qui neutralise les antigenes","Un neurotransmetteur","Une hormone digestive"], rep: 1, expl: "Les anticorps sont des proteines produites par les lymphocytes B pour neutraliser les agents pathogenes (antigenes)." },
    { q: "Quelle est la formule de l\\'energie cinetique ?", opts: ["Ec = mgh","Ec = (1/2)mv2","Ec = mc2","Ec = Fd"], rep: 1, expl: "L\\'energie cinetique d\\'un objet en mouvement est Ec = (1/2) x masse x vitesse au carre." },
    { q: "Quel organe regule la glycemie en secretant l\\'insuline ?", opts: ["Le foie","Le pancreas","Le rein","La thyroide"], rep: 1, expl: "Le pancreas secrete l\\'insuline (qui abaisse la glycemie) et le glucagon (qui l\\'augmente)." },
    { q: "Que represente le discriminant negatif (Delta < 0) pour une equation du second degre ?", opts: ["Deux solutions reelles distinctes","Une solution double","Aucune solution reelle","Une infinite de solutions"], rep: 2, expl: "Si Delta < 0, l\\'equation n\\'a pas de solution dans l\\'ensemble des nombres reels." },
    { q: "Qu\\'est-ce qu\\'un acide selon la chimie ?", opts: ["Une substance qui liberere des ions OH-","Une substance qui libere des ions H+","Un metal pur","Un gaz noble"], rep: 1, expl: "Un acide est une substance qui, en solution, libere des ions H+ (protons)." },
    { q: "Quel est le role des stomates chez les plantes ?", opts: ["Stocker l\\'eau","Permettre les echanges gazeux (CO2, O2, vapeur d\\'eau)","Produire le pollen","Ancrer la plante au sol"], rep: 1, expl: "Les stomates, situes sur les feuilles, regulent les echanges gazeux necessaires a la photosynthese et la transpiration." },
  ]
};

'''

if marker in content and "QUIZ_BAC_A4" not in content:
    content = content.replace(marker, quiz_bac_block + marker)
    print("OK: QUIZ_BAC_A4 et QUIZ_BAC_D ajoutes")
else:
    print("INFO: deja present ou marker introuvable")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Sauvegarde OK")
