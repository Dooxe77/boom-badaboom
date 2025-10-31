export default [
  {
    name: "Coup d'oeil gourmand",
    type: "Action",
    effect:
      "Regardez secrètement la main d'un joueur et volez une carte au choix",
    quantity: 4,
    image: "/action_coupDOeilGourmand.png",
  },
  {
    name: "Accident de cuisine",
    type: "Action",
    effect: "Un joueur de votre choix passe complètement son prochain tour",
    quantity: 3,
    image: "/action_accidentDeCuisine.png",
  },
  {
    name: "Recette Improvisée",
    type: "Action",
    effect:
      "Un joueur de votre choix doit jouer une carte au hasard de sa main",
    quantity: 2,
    image: "/action_recetteImprovisee.png",
  },
  {
    name: "Four élargi",
    type: "Action",
    effect: "Augmentez la capacité du four d'une valeur mystère",
    quantity: 2,
    image: "/action_fourElargi.png",
  },
  {
    name: "Four rétréci",
    type: "Action",
    effect: "Diminuez la capacité du four d'une valeur mystère",
    quantity: 2,
    image: "/action_fourRetreci.png",
  },
  {
    name: "Récupération d'ingrédient",
    type: "Action",
    effect: "Reprenez une carte au choix dans la défausse",
    quantity: 2,
    image: "/action_recuperationDIngredient.png",
  },
  {
    name: "Échange de Tablier",
    type: "Action",
    effect: "Échangez votre main avec celle d'un joueur de ton choix",
    quantity: 2,
    image: "/action_echangeDeTablier.png",
  },
  {
    name: "Inspection du frigo",
    type: "Action",
    effect: "Regardez les 3 prochaines cartes de la pioche et changez l'ordre",
    quantity: 2,
    image: "/action_inspectionDuFrigo.png",
  },
  {
    name: "Pincée de hasard",
    type: "Action",
    effect:
      "Piochez une carte de valeur aléatoire et modifiez la taille du gâteau : 1 ou 2 = +3 / 3 = 0 / 4 ou 5 = -3",
    quantity: 2,
    image: "/action_pinceeDeHasard.png",
  },
  {
    name: "Changement de toque",
    type: "Action",
    effect: "Échangez votre carte Rôle avec celle face cachée",
    quantity: 2,
    image: "/action_changementDeToque.png",
  },
  {
    name: "Nettoyage complet",
    type: "Action",
    effect: "Défaussez votre main et piochez 5 cartes",
    quantity: 2,
    image: "/action_nettoyageComplet.png",
  },
  {
    name: "Remixage total",
    type: "Action",
    effect:
      "Mélangez toutes les cartes en main avec la défausse. Redistribuez 5 cartes par joueur",
    quantity: 1,
    image: "/action_remixageTotal.png",
  },
  {
    name: "Sablé du destin",
    type: "Action",
    effect:
      "Piochez la carte du dessus de la pioche et appliquez-la immédiatement",
    quantity: 2,
    image: "/action_sableDuDestin.png",
  },
  {
    name: "Choix du chef",
    type: "Action",
    effect:
      "Choisissez une carte dans la pioche, ajoutez-la immédiatement à votre main, puis mélangez la pioche",
    quantity: 2,
    image: "/action_choixChef.png",
  },
];
