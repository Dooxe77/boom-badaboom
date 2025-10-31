export interface Event {
  name: string;
  effect: string;
  image: string;
}

export const events: Event[] = [
  {
    name: "Échange d'Ingrédients",
    effect:
      "Tous les joueurs posent 1 carte face cachée au centre, mélangez, puis redistribuez aléatoirement",
    image: "/event_echangeDIngredients.png",
  },
  {
    name: "Four en panne",
    effect: "Personne ne pioche à la fin de son tour ce tour-ci",
    image: "/event_fourEnPanne.png",
  },
  {
    name: "Inventaire surprise",
    effect: "Tous les joueurs révèlent 1 carte au hasard de leur main",
    image: "/event_inventaireSurprise.png",
  },
  {
    name: "Cuisine ouverte",
    effect: "Pendant ce tour, toutes les cartes piochées doivent être révélées",
    image: "/event_cuisineOuverte.png",
  },
  {
    name: "Four déréglé",
    effect:
      "Les effets des cartes influant sur la piste sont inversés (les + deviennent des - et les - des +)",
    image: "/event_fourDeregle.png",
  },
  {
    name: "Éclaboussures",
    effect:
      "Si une carte refroidissement est jouée, le joueur dévoile une carte de la pioche et applique son effet immédiatement",
    image: "/event_eclaboussure.png",
  },
  {
    name: "Double intensité",
    effect:
      "Chaque carte chaleur/refroidissement 🌡️ compte double (Coup de Boost interdite ce tour)",
    image: "/event_doubleIntensite.png",
  },
  {
    name: "Maladresse",
    effect:
      "Ce tour, après avoir joué votre carte, défaussez immédiatement une autre carte de votre main au hasard",
    image: "/event_maladresse.png",
  },
  {
    name: "Panne d'électricité",
    effect: "Toutes les cartes actions 🔧 ⚡ sont interdites ce tour",
    image: "/event_panneDElectricite.png",
  },
  {
    name: "Service express",
    effect:
      "À son tour, chaque joueur pioche une carte et la joue immédiatement",
    image: "/event_serviceExpress.png",
  },
  {
    name: "Cuisine en désordre",
    effect:
      "L'ordre de jeu s'inverse pour le reste de ce tour. Le premier joueur jouera en dernier",
    image: "/event_cuisineEnDesordre.png",
  },
  {
    name: "Gonflement progressif",
    effect:
      "À la fin du tour de chaque joueur qui joue, la taille du gâteau augmente de 1",
    image: "/event_gonflementProgressif.png",
  },
  {
    name: "Ventilation d'urgence",
    effect:
      "Si la taille du gâteau est à plus de 15 à la fin du tour, retirer 3",
    image: "/event_ventilationDUrgence.png",
  },
  {
    name: "Réchauffage automatique",
    effect:
      "Si la taille du gâteau est à moins de 10 à la fin du tour, ajouter 2",
    image: "/event_rechauffageAutomatique.png",
  },
  {
    name: "Coupure de gaz",
    effect: "Toutes les cartes chaleurs sont interdites ce tour",
    image: "/event_coupureGaz.png",
  },
  {
    name: "Chef désigné",
    effect:
      "Le dernier joueur de ce tour décide de l'ordre de jeu pour le prochain tour",
    image: "/event_chefDesigne.png",
  },
  {
    name: "Vitrine du pâtissier",
    effect: "Chaque joueur doit montrer toutes ses cartes décorations en main",
    image: "/event_vitrinePatissier.png",
  },
  {
    name: "Minuteur final",
    effect:
      "Dernier tour ! Chaque joueur joue une dernière fois, puis la partie s'arrête",
    image: "/event_minuteurFinal.png",
  },
];
