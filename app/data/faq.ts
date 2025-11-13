export default [
  {
    question:
      "Que se passe-t-il si la taille du gâteau devrait descendre sous 0 ?",
    answer:
      "<strong>La taille du gâteau ne peut jamais descendre sous 0.</strong> Si une carte devait le faire descendre en dessous, il reste à 0.",
  },
  {
    question: "Puis-je regarder la défausse ?",
    answer:
      '<strong>Non.</strong> Il est interdit de fouiller la défausse. Seule la dernière carte posée sur la pile de défausse est visible de tous. Le seul moyen de voir le contenu de la défausse est via une carte Action comme "Récupération d\'ingrédient".',
  },
  {
    question:
      "Que se passe-t-il si je dois jouer une carte mais que ma main est vide ?",
    answer:
      "Si vous n'avez aucune carte en main (situation très rare), vous passez votre tour et piochez immédiatement pour reconstituer votre main.",
  },
  {
    question: "Puis-je jouer plusieurs cartes réactives ⚡ en même temps ?",
    answer:
      '<strong>Non.</strong> Les cartes réactives se jouent une par une. Une carte réactive peut contrer une autre carte réactive, créant une "chaîne" de réactions.',
  },
  {
    question: "Les cartes réactives ⚡ comptent-elles comme ma carte jouée à mon tour ?",
    answer:
      "<strong>Non, les cartes réactives ne comptent pas comme votre carte jouée.</strong><span class='block mt-2'>Les cartes réactives sont jouées <strong>en réaction aux cartes des adversaires</strong>, en dehors de votre tour de jeu normal. Elles permettent de répondre instantanément à une action adverse sans consommer votre action du tour.</span><span class='block mt-2'>💡 <strong>Exemple :</strong> Un adversaire joue \"Chaleur +3\". Vous jouez \"Annulation\" (carte réactive) pour l'annuler. Lorsque votre tour arrive, vous devrez <strong>quand même jouer 1 carte</strong> normalement - la carte réactive jouée précédemment ne compte pas.</span><span class='block mt-2'>⚠️ <strong>Important :</strong> Les cartes réactives ne peuvent être jouées que sur les cartes des adversaires, jamais sur vos propres cartes.</span>",
  },
  {
    question: "Four rétréci - Règles importantes",
    answer:
      "<span class='block'>• Cette carte <strong>ne peut jamais</strong> déclencher l'explosion</span><span class='block'>• La nouvelle capacité du four doit être <strong>au minimum</strong> à (taille du gâteau actuel + 1)</span><span class='block'>• Le montant de réduction est déterminé par une carte numérotée tirée au hasard</span><span class='block'>• Si la réduction diminuerait la capacité du four trop bas, la carte ne peut pas être jouée</span>",
  },
  {
    question: "Comment fonctionne la carte Renvoi de spatule ?",
    answer:
      "La carte <strong>Renvoi de spatule</strong> vous permet de <strong>rediriger une action ciblant un joueur vers un autre joueur de votre choix</strong>.<span class='block mt-2'>💡 <em>Exemples :</em></span><span class='block ml-4 mt-1'>• Un joueur cible quelqu'un avec \"Accident de cuisine\" → Vous pouvez rediriger cette carte vers un autre joueur (vous-même ou un autre joueur)</span><span class='block ml-4'>• Un joueur cible quelqu'un avec \"Recette improvisée\" → Vous pouvez choisir un autre joueur qui subira l'effet à la place</span><span class='block mt-2'>⚠️ <strong>Important :</strong> Cette carte peut être jouée lorsqu'une action cible n'importe quel joueur (pas seulement vous). Vous pouvez donc protéger un allié ou vous-même.</span>",
  },
  {
    question: "Comment fonctionnent les chaînes de cartes réactives ?",
    answer:
      "<span class='block mb-2'><strong>Les cartes réactives s'empilent et la dernière jouée détermine l'effet final.</strong></span><span class='block mb-2'>🔄 <strong>Principe :</strong> Chaque carte réactive \"écrase\" l'effet de la précédente et devient la nouvelle cible potentielle.</span><span class='block mb-2'>📚 <strong>Exemples :</strong></span><span class='block ml-4'>• Chaleur +3 → Annulation → Annulation de l'annulation = <strong>Résultat : +3</strong></span><span class='block ml-4'>• Chaleur +3 → Coup de boost (×2 = +6) → Annulation du boost = <strong>Résultat : +3</strong></span><span class='block ml-4'>• Refroidissement -2 → Thermostat capricieux (inversé en +2) → Annulation = <strong>Résultat : -2</strong></span><span class='block mt-2'>⚠️ <strong>Règle importante :</strong> Les cartes réactives ne peuvent être jouées <strong>que sur les cartes des adversaires</strong>, jamais sur vos propres cartes.</span>",
  },
  {
    question: "Type de carte vs Effet de carte : Quelle est la différence ?",
    answer:
      "<strong>Règle importante : Le TYPE d'une carte est déterminé par son nom/libellé, pas par l'effet qu'elle produit.</strong><span class='block mt-2'>Lorsqu'un événement ou une carte interdit, modifie ou cible un type de carte spécifique (Chaleur, Refroidissement, Action, etc.), c'est le <strong>libellé de la carte</strong> qui compte, pas l'effet final après modifications.</span><span class='block mt-2'>📚 <strong>Exemples concrets :</strong></span><span class='block ml-4 mt-2'><strong>Exemple 1 : Coupure de gaz + Inversions</strong></span><span class='block ml-4'>• Événement : \"Toutes les cartes <u>Chaleurs</u> sont interdites ce tour\"</span><span class='block ml-4'>• Une carte <strong>Refroidissement</strong> -2 + \"Four déréglé\" (inversé en +2) → ✅ <strong>Autorisée</strong> (le libellé dit \"Refroidissement\")</span><span class='block ml-4'>• Une carte <strong>Chaleur</strong> +3 + \"Thermostat capricieux\" (inversé en -3) → ❌ <strong>Interdite</strong> (le libellé dit \"Chaleur\")</span><span class='block ml-4 mt-2'><strong>Exemple 2 : Éclaboussures</strong></span><span class='block ml-4'>• Événement : \"Si une carte <u>Refroidissement</u> est jouée, effet spécial\"</span><span class='block ml-4'>• Une carte <strong>Chaleur</strong> +2 inversée en -2 → ❌ <strong>Ne déclenche PAS</strong> (le libellé dit \"Chaleur\")</span><span class='block ml-4'>• Une carte <strong>Refroidissement</strong> -3 inversée en +3 → ✅ <strong>Déclenche</strong> l'effet (le libellé dit \"Refroidissement\")</span><span class='block mt-2'>💡 <strong>Règle générale :</strong> Ce qui est écrit sur la carte (son titre/type) prime toujours sur l'effet numérique final. Une carte Chaleur reste une carte Chaleur même si son effet est inversé.</span>",
  },
  {
    question: "Maladresse et cartes objectif",
    answer:
      "Si la carte jouée au hasard par l'événement Maladresse est une <strong>carte objectif du Glouton</strong> (Cerises confites, Spirale de caramel, Macarons dorés, Rosace de chantilly, Bonbons gélifiés), elle est <strong>défaussée sans effet</strong>.",
  },
  {
    question: "Que faire si je ne peux pas ou ne veux pas jouer de carte ?",
    answer:
      "<span class='block mb-2'><strong>Si aucune carte de votre main ne peut être jouée :</strong> Défaussez une carte de votre choix.</span><span class='block'><strong>Si vous pouvez jouer au moins une carte :</strong> Vous êtes <strong>obligé(e) de la jouer</strong>, même si cela ne vous arrange pas stratégiquement.</span>",
  },
  {
    question: "Comment distribuer les cartes avec Remixage total ?",
    answer:
      "Après avoir mélangé toutes les cartes des mains et de la défausse (<strong>y compris la carte Remixage total elle-même</strong>) :<span class='block mt-2'>• Distribuez <strong>1 carte à la fois</strong> en tournant dans le sens des aiguilles d'une montre</span><span class='block'>• Continuez jusqu'à ce que chaque joueur ait <strong>5 cartes</strong></span><span class='block'>• <strong>S'il n'y a pas assez de cartes</strong> dans la pile, distribuez tout de même jusqu'à épuisement (certains joueurs peuvent avoir moins de 5 cartes)</span>",
  },
  {
    question:
      "Que se passe-t-il si le gâteau explose pendant le tour du Glouton ?",
    answer:
      "<strong>Les Farceurs gagnent dans tous les cas.</strong><span class='block mt-2'>Même si le Glouton avait les cartes objectif nécessaires en main ET que la taille du gâteau était entre 15-18, <strong>l'explosion met fin immédiatement au jeu</strong> et donne la victoire aux Farceurs.</span><span class='block mt-2'>💡 <em>L'explosion du gâteau est une condition de défaite absolue pour le Glouton, qui prévaut sur sa condition de victoire.</em></span>",
  },
  {
    question:
      "Recette Improvisée vs Service express : Qui s'applique en premier ?",
    answer:
      "<span class='block mb-2'><strong>Événement d'abord, Action ensuite.</strong></span><span class='block mb-2'>Si vous avez joué une carte <strong>Recette Improvisée</strong> (Action) et qu'un événement <strong>Service express</strong> se déclenche :</span><span class='block'>1️⃣ L'événement Service express s'applique immédiatement (tout le monde joue une carte supplémentaire)</span><span class='block'>2️⃣ Votre carte Recette Improvisée s'appliquera au <strong>prochain tour de jeu normal</strong></span><span class='block mt-2'>💡 <em>Les événements interrompent toujours le flux normal du jeu, les actions en attente reprennent ensuite.</em></span>",
  },
  {
    question: "Comment fonctionnent les cartes Action qui ciblent un joueur ?",
    answer:
      "<span class='block mb-2'>Les cartes Action qui affectent un joueur spécifique (Accident de cuisine, Recette improvisée, etc.) suivent ces règles :</span><span class='block mt-2'>📍 <strong>Placement :</strong> La carte est placée <strong>devant le joueur ciblé</strong> jusqu'à son tour</span><span class='block mt-2'>⏰ <strong>Résolution :</strong> Au <strong>début de son tour</strong>, le joueur ciblé :</span><span class='block ml-4'>1️⃣ Défausse la carte placée devant lui</span><span class='block ml-4'>2️⃣ Applique l'effet (sauter son tour, jouer au hasard, etc.)</span><span class='block mt-2'>💡 <em>Exemple : Accident de cuisine → Le joueur ciblé garde la carte devant lui, puis au début de son tour, il la défausse et passe complètement son tour.</em></span>",
  },
  {
    question: "Chef désigné : Comment choisir l'ordre de jeu ?",
    answer:
      "<strong>Le premier joueur a une liberté totale pour choisir l'ordre de jeu.</strong><span class='block mt-2'>Lorsque l'événement \"Chef désigné\" est révélé, le premier joueur peut désigner <strong>n'importe quel ordre</strong> pour ce tour, sans contrainte de sens horaire ou antihoraire.</span><span class='block mt-2'>💡 <strong>Exemples d'ordres possibles :</strong></span><span class='block ml-4'>• Ordre classique (horaire) : Joueur 1 → 2 → 3 → 4</span><span class='block ml-4'>• Ordre inverse : Joueur 4 → 3 → 2 → 1</span><span class='block ml-4'>• Ordre personnalisé : Joueur 1 → 4 → 2 → 3</span><span class='block ml-4'>• Ordre stratégique : Joueur 3 → 1 → 4 → 2</span><span class='block mt-2'>⚠️ <strong>Important :</strong> Tous les joueurs doivent jouer une fois pendant ce tour. Le premier joueur ne peut pas sauter de joueur ni faire jouer quelqu'un plusieurs fois.</span>",
  },
];
