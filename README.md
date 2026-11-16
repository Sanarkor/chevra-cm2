# 🐐 Chèvra — révisions CM2

Petit jeu éducatif pour réviser le programme de **CM2 (cycle 3)** avec Chèvra, une petite chèvre qui encourage : français, maths, histoire, géographie, sciences et anglais.

👉 **Jouer en ligne :** https://sanarkor.github.io/chevra-cm2/

## Utilisation

- **Sur ordinateur ou tablette :** ouvrir le lien ci-dessus, ou télécharger `index.html` et l'ouvrir dans le navigateur (double-clic).
- **Sur téléphone :** ouvrir le lien, puis « Ajouter à l'écran d'accueil » pour l'avoir comme une appli.
- Tout est dans **un seul fichier** (`index.html`) : il fonctionne **sans Internet** une fois ouvert, sans police ni image externe.
- La progression (étoiles, pièces, badges, série de jours) est enregistrée **uniquement dans le navigateur** (localStorage). Rien n'est envoyé nulle part. Changer d'appareil ou de navigateur = nouvelle partie.
- **Espace parents** (petit calcul pour y entrer) : statistiques par matière, questions à revoir, réglages, remise à zéro.

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

- `niveau` : 1 = facile, 2 = moyen, 3 = difficile.
- `qcm` / `trou` : `reponse` est le **numéro** de la bonne réponse dans `choix` (0 = la première). Les choix sont mélangés automatiquement.
- `ordre` : écrire les éléments **dans le bon ordre**, le jeu les mélange.
- Chaque question a un identifiant calculé automatiquement : en ajouter ne casse pas la progression existante.
- Après modification, recharger la page. Si l'écran reste blanc, il manque sûrement une virgule ou un guillemet.
