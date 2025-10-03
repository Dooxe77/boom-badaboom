<template>
  <section id="cards" class="mb-12 relative overflow-hidden rounded-3xl">
    <div
      class="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-orange-50/30 to-red-50/30"
    ></div>
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-8 left-8 text-5xl">🃏</div>
      <div class="absolute top-16 right-12 text-3xl">🎴</div>
      <div class="absolute bottom-20 left-1/4 text-4xl">🎯</div>
      <div class="absolute bottom-12 right-1/3 text-2xl">⚡</div>
    </div>
    <div
      class="bg-gradient-to-br from-white via-orange-50/30 to-purple-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden"
    >
      <div class="p-6 sm:p-10">
        <div class="text-center mb-10">
          <h2
            class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
          >
            Matériel de Jeu
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"
          ></div>
        </div>

        <!-- Plateau de jeu -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="
              background: linear-gradient(
                to right,
                rgba(20, 184, 166, 0.1),
                rgba(6, 182, 212, 0.1)
              );
              border-left: 4px solid;
              border-image: linear-gradient(to bottom, #14b8a6, #06b6d4) 1;
            "
          >
            <span class="flex items-center">
              <span class="mr-2">🎯</span>
              <span
                class="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Plateau de Jeu
              </span>
            </span>
          </h3>
          <div
            class="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6"
          >
            <div class="text-center mb-4">
              <div
                class="inline-block bg-white rounded-xl shadow-lg p-4 mb-4"
              >
                <img
                  src="/placeholder-card.png"
                  alt="Plateau de jeu"
                  class="h-48 w-auto mx-auto object-contain"
                />
              </div>
              <p class="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Le plateau permet de suivre l'avancée de la partie entre la
                taille du gâteau et la capacité du four. Il offre une
                visualisation claire de l'état du jeu et aide les joueurs à
                comprendre rapidement la situation actuelle.
              </p>
            </div>
          </div>
        </div>

        <!-- Pions -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="
              background: linear-gradient(
                to right,
                rgba(99, 102, 241, 0.1),
                rgba(139, 92, 246, 0.1)
              );
              border-left: 4px solid;
              border-image: linear-gradient(to bottom, #6366f1, #8b5cf6) 1;
            "
          >
            <span class="flex items-center">
              <span class="mr-2">🎲</span>
              <span
                class="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent"
              >
                Pions
              </span>
            </span>
          </h3>
          <div
            class="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl p-6"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Pion Taille du Gâteau -->
              <div class="bg-white rounded-xl shadow-md p-6 text-center">
                <div class="inline-block bg-gray-50 rounded-xl p-4 mb-4">
                  <img
                    src="/placeholder-card.png"
                    alt="Pion taille du gâteau"
                    class="h-32 w-auto mx-auto object-contain"
                  />
                </div>
                <h4 class="font-bold text-lg text-gray-800 mb-2">
                  Pion Taille du Gâteau
                </h4>
                <p class="text-gray-600 text-sm">
                  Indique la taille actuelle du gâteau sur le plateau
                </p>
              </div>

              <!-- Pion Capacité du Four -->
              <div class="bg-white rounded-xl shadow-md p-6 text-center">
                <div class="inline-block bg-gray-50 rounded-xl p-4 mb-4">
                  <img
                    src="/placeholder-card.png"
                    alt="Pion capacité du four"
                    class="h-32 w-auto mx-auto object-contain"
                  />
                </div>
                <h4 class="font-bold text-lg text-gray-800 mb-2">
                  Pion Capacité du Four
                </h4>
                <p class="text-gray-600 text-sm">
                  Indique la capacité maximale du four sur le plateau
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cartes Rôles -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="
              background: linear-gradient(
                to right,
                rgba(34, 197, 94, 0.1),
                rgba(239, 68, 68, 0.1),
                rgba(245, 158, 11, 0.1)
              );
              border-left: 4px solid;
              border-image: linear-gradient(
                  to bottom,
                  #22c55e,
                  #ef4444,
                  #f59e0b
                )
                1;
            "
          >
            <span class="flex items-center">
              <span class="mr-2">🎭</span>
              <span
                class="bg-gradient-to-r from-green-600 via-red-600 to-yellow-600 bg-clip-text text-transparent"
              >
                Cartes Rôles
              </span>
            </span>
          </h3>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Pâtissiers -->
            <div
              class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <div class="flex space-x-1">
                    <div
                      class="w-10 h-14 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Pâtissier"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Pâtissier'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <div
                      class="w-10 h-14 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Pâtissier"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Pâtissier'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                  </div>
                  <h4 class="font-semibold text-green-700">Pâtissiers</h4>
                </div>
                <div class="text-right">
                  <span
                    class="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 2</span
                  >
                  <div class="text-xs text-gray-500 mt-1">max</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
                  >👩‍🍳 Équipe Gentille</span
                >
              </div>
              <p class="text-sm text-gray-600">
                🎯 Empêcher le gâteau d'exploser
                <strong>ET</strong> empêcher le Glouton de voler le gâteau
              </p>
            </div>

            <!-- Farceurs -->
            <div
              class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-4 border-red-500 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-2">
                  <div class="flex space-x-1">
                    <div
                      class="w-8 h-12 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Farceur"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal('/placeholder-card.png', 'Farceur')
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <div
                      class="w-8 h-12 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Farceur"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal('/placeholder-card.png', 'Farceur')
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <div
                      class="w-8 h-12 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Farceur"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal('/placeholder-card.png', 'Farceur')
                        "
                        @error="handleImageError"
                      />
                    </div>
                  </div>
                  <h4 class="font-semibold text-red-700">Farceurs</h4>
                </div>
                <div class="text-right">
                  <span
                    class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 3</span
                  >
                  <div class="text-xs text-gray-500 mt-1">max</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full"
                  >🤡 Équipe Sabotage</span
                >
              </div>
              <p class="text-sm text-gray-600">
                💥 Faire exploser le gâteau en faisant monter le compteur à
                20 ou plus
              </p>
            </div>

            <!-- Glouton -->
            <div
              class="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border-4 border-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/placeholder-card.png"
                      alt="Carte Glouton"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        openCardModal('/placeholder-card.png', 'Glouton')
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-yellow-700">Glouton</h4>
                </div>
                <div class="text-right">
                  <span
                    class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">unique</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                  >😋 Rôle Solo</span
                >
              </div>
              <p class="text-sm text-gray-600">
                🏆 Voler le gâteau : avoir 2+ cartes objectif ET taille du
                gâteau entre 15-18 pendant SON tour
              </p>
            </div>
          </div>
        </div>

        <!-- Cartes Objectif Glouton -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold text-yellow-600 bg-gradient-to-r from-yellow-100 to-transparent p-4 border-l-4 border-yellow-500 rounded mb-6"
          >
            🍴 Cartes Objectif Glouton
          </h3>
          <div class="mb-6 text-center">
            <div
              class="bg-yellow-50/70 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50"
            >
              <p class="text-yellow-700 font-medium text-sm sm:text-base">
                ⚠️ <strong>Condition de victoire du Glouton :</strong> Le
                Glouton doit avoir au moins 2 de ces cartes en main ET que
                la taille du gâteau soit entre 15-18 pendant SON tour pour
                gagner immédiatement
              </p>
            </div>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <!-- Cerises confites -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(203, 108, 230, 0.1),
                  white
                );
                border-color: rgba(203, 108, 230, 0.5);
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/placeholder-card.png"
                      alt="Carte Cerises confites"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Cerises confites'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-yellow-700">
                    Cerises confites
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>

            <!-- Spirale de caramel -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(203, 108, 230, 0.1),
                  white
                );
                border-color: rgba(203, 108, 230, 0.5);
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/placeholder-card.png"
                      alt="Carte Spirale de caramel"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Spirale de caramel'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-yellow-700">
                    Spirale de caramel
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>

            <!-- Plan d'évacuation -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(203, 108, 230, 0.1),
                  white
                );
                border-color: rgba(203, 108, 230, 0.5);
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/placeholder-card.png"
                      alt="Carte Macarons dorés"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Macarons dorés'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-yellow-700">
                    Macarons dorés
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>

            <!-- Neutralisation chimique -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(203, 108, 230, 0.1),
                  white
                );
                border-color: rgba(203, 108, 230, 0.5);
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/placeholder-card.png"
                      alt="Carte Rosace de chantilly"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Rosace de chantilly'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-yellow-700">
                    Rosace de chantilly
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>

            <!-- Schéma électrique -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(203, 108, 230, 0.1),
                  white
                );
                border-color: rgba(203, 108, 230, 0.5);
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/placeholder-card.png"
                      alt="Carte Bonbons gélifiés"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Bonbons gélifiés'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-yellow-700">
                    Bonbons gélifiés
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Cartes Compteur -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="
              color: #dfbd7f;
              background: linear-gradient(
                to right,
                rgba(223, 189, 127, 0.1),
                transparent
              );
              border-left-color: #dfbd7f;
            "
          >
            🌡️ Cartes influant sur la taille du gâteau
          </h3>

          <!-- Charges -->
          <div class="mb-8">
            <h4
              class="text-xl font-bold text-red-700 mb-4 flex items-center"
            >
              ⬆️ Chaleur (+)
            </h4>
            <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              <!-- Charge +1 -->
              <div
                class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Chaleur +1"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Chaleur +1'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-red-700">Chaleur +1</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +1
                </p>
              </div>

              <!-- Charge +2 -->
              <div
                class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Chaleur +2"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Chaleur +2'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-red-700">Chaleur +2</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 6</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +2
                </p>
              </div>

              <!-- Charge +3 -->
              <div
                class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Chaleur +3"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Chaleur +3'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-red-700">Chaleur +3</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +3
                </p>
              </div>

              <!-- Charge +4 -->
              <div
                class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Chaleur +4"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Chaleur +4'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-red-700">Chaleur +4</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 4</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +4
                </p>
              </div>

              <!-- Charge +5 -->
              <div
                class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Charge +5"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Chaleur +5'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-red-700">Chaleur +5</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +5
                </p>
              </div>

              <!-- X -->
              <div
                class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Charge X"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Chaleur ?'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-red-700">Chaleur ?</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau d'une valeur mystère
                  déterminée par tirage de carte au hasard
                </p>
              </div>
            </div>
          </div>

          <!-- Refroidissement -->
          <div class="mb-8">
            <h4
              class="text-xl font-bold text-green-700 mb-4 flex items-center"
            >
              ⬇️ Refroidissement (-)
            </h4>
            <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              <!-- Refroidissement -1 -->
              <div
                class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Refroidissement -1"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Refroidissement -1'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-green-700">
                      Refroidissement -1
                    </h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Diminue la taille du gâteau de -1
                </p>
              </div>

              <!-- Refroidissement -2 -->
              <div
                class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Refroidissement -2"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Refroidissement -2'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-green-700">
                      Refroidissement -2
                    </h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Diminue la taille du gâteau de -2
                </p>
              </div>

              <!-- Refroidissement -3 -->
              <div
                class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Refroidissement -3"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Refroidissement -3'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-green-700">
                      Refroidissement -3
                    </h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Diminue la taille du gâteau de -3
                </p>
              </div>

              <!-- Refroidissement X -->
              <div
                class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Refroidissement ?"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Refroidissement ?'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-green-700">
                      Refroidissement ?
                    </h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="
                      background-color: rgba(223, 189, 127, 0.1);
                      color: #dfbd7f;
                    "
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Diminue la taille du gâteau d'une valeur mystère
                  déterminée par tirage de carte au hasard
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cartes Action -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="
              color: #ff914d;
              background: linear-gradient(
                to right,
                rgba(255, 145, 77, 0.1),
                transparent
              );
              border-left-color: #ff914d;
            "
          >
            🔧 Cartes Action
          </h3>

          <div
            class="p-4 rounded-r-lg mb-6 border-l-4"
            style="
              background: linear-gradient(
                to right,
                rgba(255, 145, 77, 0.1),
                transparent
              );
              border-left-color: #ff914d;
            "
          >
            <p style="color: #ff914d">
              <strong>📝 Note :</strong> Les cartes Action (marquées 🔧)
              sont des cartes à effet offensif, stratégique ou de
              manipulation que vous jouez pendant
              <strong>votre tour</strong>. Elles permettent d'interagir avec
              les autres joueurs, de modifier les règles temporairement ou
              de récupérer des informations.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="card in actionCards"
              :key="card.name"
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(255, 145, 77, 0.1),
                  white
                );
                border-color: rgba(255, 145, 77, 0.5);
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      :src="card.image"
                      :alt="'Carte ' + card.name"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="openCardModal(card.image, card.name)"
                    />
                  </div>
                  <h4 class="font-semibold text-gray-800">
                    {{ card.name }}
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="bg-yellow-500 text-gray-800 text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× {{ card.quantity }}</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                  >🔧 {{ card.type }}</span
                >
              </div>
              <p class="text-sm text-gray-600">{{ card.effect }}</p>
            </div>
          </div>
        </div>

        <!-- Cartes Action Réactives -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="
              color: #cb6ce6;
              background: linear-gradient(
                to right,
                rgba(203, 108, 230, 0.1),
                transparent
              );
              border-left-color: #cb6ce6;
            "
          >
            ⚡ Cartes Action Réactives
          </h3>

          <div
            class="p-4 rounded-r-lg mb-6 border-l-4"
            style="
              background: linear-gradient(
                to right,
                rgba(203, 108, 230, 0.1),
                transparent
              );
              border-left-color: #cb6ce6;
            "
          >
            <p style="color: #cb6ce6">
              <strong>⚡ Note importante :</strong> Les cartes Action
              Réactives (marquées ⚡) peuvent
              <strong
                >être jouées n'importe quand mais que contre des cartes
                d'autres joueurs</strong
              >
              pour contrer, modifier ou rediriger une action. Elles ne
              comptent pas comme votre carte jouée du tour. Une carte
              réactive peut contrer une autre carte réactive.
            </p>
          </div>

          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Tablier de Protection -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(203, 108, 230, 0.1),
                  white
                );
                border-color: rgba(203, 108, 230, 0.5);
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/placeholder-card.png"
                      alt="Carte Tablier de Protection"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Tablier de Protection'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-gray-800">
                    Tablier de Protection
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #cb6ce6"
                    >× 4</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="
                    background-color: rgba(203, 108, 230, 0.1);
                    color: #cb6ce6;
                  "
                  >⚡ Réactive</span
                >
              </div>
              <p class="text-sm text-gray-600">
                Annule l'effet de la carte jouée
              </p>
            </div>

            <!-- Renvoi de spatule -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(203, 108, 230, 0.1),
                  white
                );
                border-color: rgba(203, 108, 230, 0.5);
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/placeholder-card.png"
                      alt="Carte Renvoi de spatule"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Renvoi de spatule'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-gray-800">
                    Renvoi de spatule
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #cb6ce6"
                    >× 4</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="
                    background-color: rgba(203, 108, 230, 0.1);
                    color: #cb6ce6;
                  "
                  >⚡ Réactive</span
                >
              </div>
              <p class="text-sm text-gray-600">
                Redirige une action contre vous ou inverse le signe (+ ↔ -)
              </p>
            </div>

            <!-- Coup de boost -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(203, 108, 230, 0.1),
                  white
                );
                border-color: rgba(203, 108, 230, 0.5);
              "
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/placeholder-card.png"
                      alt="Carte Coup de boost"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Coup de boost'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-gray-800">Coup de boost</h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #cb6ce6"
                    >× 3</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="
                    background-color: rgba(203, 108, 230, 0.1);
                    color: #cb6ce6;
                  "
                  >⚡ Réactive</span
                >
              </div>
              <p class="text-sm text-gray-600">
                Doublez la valeur de la carte chaleur, refroidissement, four
                rétréci ou four élargi jouée
              </p>
            </div>
          </div>
        </div>

        <!-- Cartes Événement -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="
              color: #4682b4;
              background: linear-gradient(
                to right,
                rgba(70, 130, 180, 0.1),
                transparent
              );
              border-left-color: #4682b4;
            "
          >
            🎭 Cartes Événement
          </h3>

          <div
            class="p-4 rounded-r-lg mb-6 border-l-4"
            style="
              background: linear-gradient(
                to right,
                rgba(70, 130, 180, 0.1),
                transparent
              );
              border-left-color: #4682b4;
            "
          >
            <h4 class="font-bold mb-2" style="color: #4682b4">
              ⏰ Timing :
            </h4>
            <p style="color: #4682b4">
              Un événement est révélé au début du tour du premier joueur,
              <strong>avant qu'il joue sa carte</strong>. L'effet s'applique
              à tout le tour de table.
            </p>
          </div>

          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="event in events"
              :key="event.name"
              :class="
                event.name === 'Minuteur final'
                  ? 'border-red-500 bg-red-50'
                  : ''
              "
              :style="
                event.name === 'Minuteur final'
                  ? ''
                  : 'background: linear-gradient(135deg, rgba(70, 130, 180, 0.1), white); border-color: rgba(70, 130, 180, 0.5);'
              "
              class="border-2 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      :src="event.image"
                      :alt="'Carte ' + event.name"
                      loading="lazy"
                      class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="openCardModal(event.image, event.name)"
                    />
                  </div>
                  <h4
                    class="font-bold text-lg"
                    :class="
                      event.name === 'Minuteur final' ? 'text-red-800' : ''
                    "
                    :style="
                      event.name === 'Minuteur final'
                        ? ''
                        : 'color: #4682b4;'
                    "
                  >
                    {{ event.name }}
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #4682b4"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="
                    background-color: rgba(70, 130, 180, 0.1);
                    color: #4682b4;
                  "
                  >🎭 Événement</span
                >
              </div>
              <p class="text-sm text-gray-700" v-html="event.effect"></p>
            </div>
          </div>

          <div
            class="mt-6 p-4 rounded-lg border-l-4"
            style="
              background: linear-gradient(
                to right,
                rgba(70, 130, 180, 0.1),
                transparent
              );
              border-left-color: #4682b4;
            "
          >
            <p class="text-sm" style="color: #4682b4">
              <strong>📋 Mise en place spéciale :</strong>
              Piochez 9 cartes Événement au hasard. Prenez 2 cartes au
              hasard + la carte "Minuteur final", mélangez ces 3 cartes et
              placez-les sous la pile d'événements pour qu'elles sortent
              entre les tours 8 et 10.
            </p>
          </div>
        </div>

        <!-- Cartes Système -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
          >
            ⚙️ Cartes Système
          </h3>
          <div class="bg-white rounded-lg shadow-md p-6">
            <!-- Carte Premier Joueur -->
            <div class="mb-6">
              <h4
                class="text-xl font-bold text-gray-700 mb-4 flex items-center"
              >
                👑 Carte Premier Joueur
              </h4>
              <div
                class="grid gap-4 md:grid-cols-1 lg:grid-cols-1 max-w-sm"
              >
                <div
                  class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Premier Joueur"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Premier Joueur'
                            )
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h5 class="font-semibold text-gray-800">
                        Premier Joueur
                      </h5>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Système</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Indique qui est le premier joueur et commence la partie
                  </p>
                </div>
              </div>
            </div>

            <!-- Cartes Système Numérotées -->
            <div class="mb-6">
              <h4
                class="text-xl font-bold text-gray-700 mb-4 flex items-center"
              >
                🔢 Cartes Système Numérotées
              </h4>
              <div
                class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6"
              >
                <p class="text-blue-700">
                  Ces cartes servent de référence pour déterminer les
                  valeurs aléatoires des effets nécessitant un tirage au
                  hasard.
                </p>
              </div>
              <div class="grid gap-4 md:grid-cols-5">
                <!-- Système 1 -->
                <div
                  class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Système 1"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Système 1'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-gray-800 text-center">
                      Système 1
                    </h5>
                    <div class="mt-2">
                      <span
                        class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                        >Système</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Système 2 -->
                <div
                  class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Système 2"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Système 2'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-gray-800 text-center">
                      Système 2
                    </h5>
                    <div class="mt-2">
                      <span
                        class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                        >Système</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Système 3 -->
                <div
                  class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Système 3"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Système 3'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-gray-800 text-center">
                      Système 3
                    </h5>
                    <div class="mt-2">
                      <span
                        class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                        >Système</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Système 4 -->
                <div
                  class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Système 4"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Système 4'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-gray-800 text-center">
                      Système 4
                    </h5>
                    <div class="mt-2">
                      <span
                        class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                        >Système</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Système 5 -->
                <div
                  class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                    >
                      <img
                        src="/placeholder-card.png"
                        alt="Carte Système 5"
                        loading="lazy"
                        class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          openCardModal(
                            '/placeholder-card.png',
                            'Système 5'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold text-gray-800 text-center">
                      Système 5
                    </h5>
                    <div class="mt-2">
                      <span
                        class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                        >Système</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400"
            >
              <p class="text-gray-800 text-sm">
                <strong>ℹ️ Note :</strong>
                Ces éléments sont nécessaires pour le suivi et la gestion de
                la partie mais ne sont pas des cartes jouables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mode Coopératif - COMMENTÉ TEMPORAIREMENT -->
  <!-- <section id="cooperatif" class="mb-12">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="p-4 sm:p-8">
        <h2
          class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
        >
          🤖 Mode Coopératif - Boom Squad
        </h2>

        <div
          class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-8"
        >
          <h3 class="text-2xl font-bold mb-4">1-2 joueurs vs IA</h3>
          <p class="text-lg mb-4">
            <strong>Affrontez la Machine</strong>, une IA explosive
            déterminée à faire sauter le compteur.
          </p>
          <p class="opacity-90">
            Tenez bon ensemble… ou sautez ensemble 💥
          </p>
        </div>

        <h3 class="text-2xl font-bold text-orange-600 mb-6">
          ⚙️ Mise en Place
        </h3>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
            <h4 class="text-lg font-bold text-blue-700 mb-4">
              Configuration
            </h4>
            <ul class="space-y-2 text-blue-700">
              <li>• Deck IA de <strong>22 cartes</strong></li>
              <li>• Chaque joueur pioche <strong>4 cartes</strong></li>
              <li>• Compteur sur <strong>0</strong></li>
              <li>• Choisir la difficulté</li>
            </ul>
          </div>

          <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
            <h4 class="text-lg font-bold text-red-700 mb-4">
              Niveaux de Difficulté
            </h4>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="font-medium">Débutant</span>
                <span>7 tours, seuil 19</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="font-medium">Normal</span>
                <span>8 tours, seuil 17</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="font-medium">Expert</span>
                <span>11 tours, seuil 15</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="font-medium">Légende</span>
                <span>13 tours, seuil 12</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="font-medium text-red-600">Impossible</span>
                <span>15 tours, seuil 10</span>
              </div>
            </div>
          </div>
        </div>

        <h3 class="text-2xl font-bold text-orange-600 mb-6">
          🔁 Déroulement d'un Tour
        </h3>

        <div class="space-y-4 mb-8">
          <div
            class="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg"
          >
            <h4 class="font-bold text-red-800 mb-2">
              1. Tour de la Machine (IA)
            </h4>
            <p class="text-red-700">
              L'IA pioche 1 carte de son deck et applique son effet
              immédiatement
            </p>
          </div>

          <div
            class="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg"
          >
            <h4 class="font-bold text-blue-800 mb-2">
              2. Tour des Joueurs
            </h4>
            <p class="text-blue-700">
              <strong>En duo :</strong> chaque joueur joue 1 carte, pioche
              <span class="block">1</span>
              <span class="block"
                ><strong>En solo :</strong> joue 2 cartes, pioche 2</span
              >
              Les joueurs coopèrent librement
            </p>
          </div>

          <div
            class="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg"
          >
            <h4 class="font-bold text-yellow-800 mb-2">3. Fin du Tour</h4>
            <p class="text-yellow-700">
              Si le compteur ≥ seuil d'explosion → <strong>Défaite</strong>
              Sinon → Continuer jusqu'à la fin des tours
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 class="text-2xl font-bold text-orange-600 mb-6">
              🤖 Deck IA (22 cartes avec logo 🤖)
            </h3>
            <div class="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <p class="text-sm text-red-700 mb-4">
                Cartes exclusivement utilisées par l'IA (celles avec le logo
                🤖 en haut à droite)
              </p>
              <div class="space-y-2">
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge +1"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge +1')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge +1</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge +2"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge +2')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge +2</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 4</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge +3"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge +3')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge +3</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 3</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge +4"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge +4')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge +4</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge +5"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge +5')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge +5</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 1</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge X"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge X')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge X</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Blocage"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal('/placeholder-card.png', 'Blocage')
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-yellow-700">Blocage</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 1</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Seuil réduit"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Seuil réduit'
                        )
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-yellow-700"
                      >Seuil réduit</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Sabotage"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal('/placeholder-card.png', 'Sabotage')
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-yellow-700"
                      >Sabotage</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-orange-600 mb-6">
              🙋‍♂️ Deck Joueur (41 cartes)
            </h3>
            <div
              class="bg-green-50 border-2 border-green-200 rounded-lg p-4"
            >
              <p class="text-sm text-green-700 mb-4">
                Cartes disponibles pour les joueurs (quantités pour le mode
                coopératif)
              </p>
              <div class="space-y-2">
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge +2"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge +2')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge +2</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 3</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge +3"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge +3')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge +3</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge +4"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge +4')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge +4</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Charge +5"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Charge +5')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-red-700">Charge +5</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 1</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Décharge -1"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal('/placeholder-card.png', 'Décharge -1')
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-green-700"
                      >Décharge -1</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Décharge -2"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal('/placeholder-card.png', 'Décharge -2')
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-green-700"
                      >Décharge -2</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Décharge -3"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal('/placeholder-card.png', 'Décharge -3')
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-green-700"
                      >Décharge -3</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Décharge X"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="openCardModal('/placeholder-card.png', 'Décharge X')"
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-green-700"
                      >Décharge X</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Blocage"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal('/placeholder-card.png', 'Blocage')
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-yellow-700">Blocage</span>
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Seuil augmenté"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Seuil augmenté'
                        )
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-yellow-700"
                      >Seuil augmenté</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 3</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Seuil réduit"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Seuil réduit'
                        )
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-yellow-700"
                      >Seuil réduit</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 1</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Contrebande"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Contrebande'
                        )
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-yellow-700"
                      >Contrebande</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 4</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Manipulation"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Manipulation'
                        )
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-yellow-700"
                      >Manipulation</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 1</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Intervention hasardeuse"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Intervention hasardeuse'
                        )
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-yellow-700"
                      >Intervention hasardeuse</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 1</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div
                  class="flex justify-between items-center bg-white p-2 rounded border"
                >
                  <div class="flex items-center space-x-3">
                    <img
                      src="/placeholder-card.png"
                      alt="Tablier de Protection"
                      loading="lazy"
                      class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                      @click="
                        openCardModal(
                          '/placeholder-card.png',
                          'Tablier de Protection'
                        )
                      "
                    
                    @error="handleImageError"/>
                    <span class="font-medium text-purple-700"
                      >⚡ Tablier de Protection</span
                    >
                  </div>
                  <div class="text-right">
                    <span
                      class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full"
                      >× 4</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8"
        >
          <h4 class="font-bold text-yellow-800 mb-4">
            ⚠️ Règles Spéciales
          </h4>
          <ul class="text-yellow-700 space-y-2">
            <li>
              • Les cartes <strong>Blocage</strong> de l'IA affectent le
              joueur suivant dans l'ordre
            </li>
          </ul>
        </div>

        <div
          class="bg-green-100 border-2 border-green-500 rounded-lg p-6 text-center"
        >
          <h4 class="text-xl font-bold text-green-800 mb-2">
            🎯 Condition de Victoire
          </h4>
          <p class="text-green-700">
            <strong>Survivez jusqu'à la fin du dernier tour</strong> sans
            que le compteur dépasse le seuil d'explosion !
          </p>
        </div>
      </div>
    </div>
  </section> -->

  <!-- FAQ -->
  <!-- FAQ Component -->
  <FAQ />
</template>

<script setup>
import actionCards from '../../data/cards/actions';
import { events } from '../../data/events';

defineEmits(['card-click']);
</script>
