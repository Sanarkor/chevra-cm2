# 🐐 Chèvra — révisions CM2

Petit jeu éducatif pour réviser le programme de **CM2 (cycle 3)** et commencer celui de **6e** avec Chèvra, la petite chèvre du dessin, qui encourage : français, maths, histoire, géographie, sciences et anglais.

👉 **Jouer en ligne :** https://sanarkor.github.io/chevra-cm2/

## Utilisation

- **Sur ordinateur ou tablette :** ouvrir le lien ci-dessus, ou télécharger `index.html` et l'ouvrir dans le navigateur (double-clic).
- **Sur téléphone :** ouvrir le lien, puis « Ajouter à l'écran d'accueil » pour l'avoir comme une appli (icône et manifeste PWA inclus).
- Au premier lancement, **Chèvra demande le prénom du joueur** (modifiable ensuite dans « Moi »).
- Le jeu tient dans **un seul fichier** (`index.html`), plus un dossier `icons/`, un manifeste et un petit service worker pour l'icône d'accueil. Une fois la page ouverte, elle fonctionne **sans Internet** (musique et sons sont générés par le navigateur).
- La progression (étoiles, pièces, badges, accessoires, série de jours, prénom) est enregistrée **uniquement dans le navigateur** (localStorage). Rien n'est envoyé nulle part. Changer d'appareil ou de navigateur = nouvelle partie.

## Ce qu'on y trouve

- **6 îles** (matières), des thèmes et 3 niveaux par thème, 8 types de défis : QCM, vrai/faux, texte à trous, classement par glisser-déposer, paires à relier, remise en ordre, dictée, calcul mental chronométré. Le niveau **moyen** vise la fin du CM2, le niveau **difficile** prépare la 6e. Les questions du programme officiel de 6e portent un badge **6e**.
- **Défi du jour** : 5 questions de 5 matières, les mêmes toute la journée, avec bonus.
- Les **niveaux des îles** se rejouent avec des questions différentes à chaque fois (tirées dans un vivier plus large, en évitant celles des 1 à 2 dernières parties).
- **Mode Aventure** (⛵) : une partie aussi longue que tes cœurs. Avant de partir, tu choisis **Facile** (3 vies en plus, arrêt à la 4e erreur), **Moyen** (1 vie en plus) ou **Difficile** (aucune vie en plus, la première erreur termine). Les questions deviennent plus corsées en cours de route (et commencent plus haut en Moyen et Difficile). Un **record** est gardé pour chaque niveau. Des **badges d'aventure** (séries de 10/25/50/100, scores en Difficile, records battus, les 3 niveaux, séries parfaites par matière) débloquent des accessoires exclusifs et parfois des pièces.
- **Défi aléatoire** (🎲, rejouable à volonté) : on choisit les matières (toutes, une ou plusieurs), le nombre de questions (5/10/15/20), la difficulté (facile, moyen, difficile ou mélangé) et un **mode chrono** facultatif. Questions tirées au hasard, tous types mélangés, sans doublon. Un **record** est gardé pour chaque réglage. Pièces : 1 par bonne réponse, **30 au maximum par jour** (pour que les niveaux restent la meilleure source de pièces). Les questions ratées partent dans la révision.
- **Révision intelligente** : les questions ratées reviennent après 1, 3, 7 puis 14 jours.
- **Mes progrès** (📈, accès libre) : temps de jeu, progrès par matière, points à travailler, questions les plus ratées, remise à zéro (avec confirmation).
- **Garde-robe de Chèvra** : une soixantaine d'accessoires rangés par rayon (tête, oreilles & cornes, visage, cou, corps & dos, pattes & queue, objets, décors), présentés en grille verticale sur téléphone et tablette (sans glisser sur le côté), avec un aperçu de Chèvra collé en haut. Chaque accessoire occupe une ou plusieurs **places** (oreille gauche, oreille droite, corne gauche, haut de tête, yeux, cou, dos…). On peut tout combiner tant que deux accessoires ne prennent pas la même place ; sinon, le nouveau remplace l'ancien. Certains s'achètent, d'autres sont des **récompenses** (badges, séries de jours, records, exploits du mode Aventure…). Chèvra est le **dessin original** (une seule pose ; les humeurs se voient par un petit rebond, une inclinaison, des paillettes, une larme ou une bulle « ? »). Le sac, le collier et la clochette font partie du dessin de base — un essai pour les retirer proprement n'était pas assez net, ils restent donc sur la chèvre. Les autres récompenses (y compris les versions « wardrobe » du sac et du collier, qui se gagnent en jouant et ne sont pas équipées automatiquement) s'affichent par-dessus.
- **Musique douce** (🎵, groove lo-fi original un peu farfelu, générée par le navigateur, aucun fichier, aucune chanson copiée) : désactivée par défaut, bouton à côté du bouton son, indépendante des bruitages, baissée pendant la dictée, en pause quand l'onglet est caché. De temps en temps, un petit « bêêêê » synthétique se glisse dans le morceau.
- Réglages : sons, musique, police facile à lire (dyslexie), réduction des animations.

## Ajouter des questions

1. Ouvrir `index.html` dans un éditeur de texte.
2. Chercher le bloc **`const DATA = {`** au début du premier `<script>` (un commentaire explique tous les champs juste au-dessus).
3. Repérer la matière puis le thème (`themes: [ { id: "grammaire", ... questions: [ ... ] } ]`).
4. **Copier une ligne existante** du même type, la modifier, et garder la **virgule** en fin de ligne.

Exemples :

```js
{ type: "qcm", niveau: 1, question: "Combien font 6 × 7 ?", choix: ["42", "36", "48", "49"], reponse: 0, explication: "6 × 7 = 42." },
{ type: "vraifaux", niveau: 2, question: "La Seine se jette dans la Manche.", reponse: true, explication: "Elle se jette dans la Manche au Havre." },
{ type: "trou", niveau: 1, question: "Nous ___ à l'école.", choix: ["allons", "allez", "vont"], reponse: 0, explication: "Aller au présent : nous allons." },
{ type: "classer", niveau: 1, question: "Classe ces mots.", categories: ["Nom", "Verbe"], elements: [["maison", 0], ["courir", 1]], explication: "..." },
{ type: "relier", niveau: 2, question: "Relie.", paires: [["one", "un"], ["two", "deux"], ["three", "trois"], ["four", "quatre"]], explication: "..." },
{ type: "ordre", niveau: 2, question: "Range ces dates.", elements: ["1789", "1804", "1848"], style: "frise", explication: "..." },
{ type: "dictee", niveau: 2, question: "Écris le mot entendu.", reponse: "toujours", ecoute: true, langue: "fr-FR", explication: "..." },
{ type: "calcul", niveau: 1, question: "8 × 9", reponse: 72, explication: "8 × 9 = 72." },
```

À retenir :

- `niveau` : 1 = facile, 2 = moyen (fin de CM2), 3 = difficile (vers la 6e). Une question du programme de 6e peut aussi porter `sixieme: true` (badge « 6e »).
- `qcm` / `trou` : `reponse` est le **numéro** de la bonne réponse dans `choix` (0 = la première). Les choix sont mélangés automatiquement.
- `ordre` : écrire les éléments **dans le bon ordre**, le jeu les mélange.
- Chaque question a un identifiant calculé automatiquement : en ajouter ne casse pas la progression existante. Les nouvelles questions apparaissent aussi dans le défi aléatoire.
- Après modification, recharger la page. Si l'écran reste blanc, il manque sûrement une virgule ou un guillemet.
