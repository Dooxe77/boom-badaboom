<template>
  <section id="material" class="mb-12 relative overflow-hidden rounded-3xl">
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
                  src="/plateau.png"
                  alt="Plateau de jeu"
                  class="h-48 w-auto mx-auto object-contain transition-transform duration-200 cursor-zoom-in hover:scale-110"
                  @click="
                    emit('card-click', '/plateau.png', 'Plateau de jeu')
                  "
                  @error="handleImageError"
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
                    src="/pion_tailleGateau.png"
                    alt="Pion taille du gâteau"
                    class="h-32 w-auto mx-auto object-contain transition-transform duration-200 cursor-zoom-in hover:scale-110"
                    @click="
                      emit('card-click',
                        '/pion_tailleGateau.png',
                        'Pion Taille du Gâteau'
                      )
                    "
                    @error="handleImageError"
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
                    src="/pion_capaciteFour.png"
                    alt="Pion capacité du four"
                    class="h-32 w-auto mx-auto object-contain transition-transform duration-200 cursor-zoom-in hover:scale-110"
                    @click="
                      emit('card-click',
                        '/pion_capaciteFour.png',
                        'Pion Capacité du Four'
                      )
                    "
                    @error="handleImageError"
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
                <h4 class="font-semibold text-green-700">Pâtissiers</h4>
                <div class="text-right">
                  <span
                    class="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 3</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="flex justify-center space-x-2 mb-4">
                <div
                  class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                >
                  <img
                    src="/role_patissier1.png"
                    alt="Carte Pâtissier"
                    loading="lazy"
                    class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                    @click="
                      emit('card-click',
                        '/role_patissier1.png',
                        'Pâtissier'
                      )
                    "
                    @error="handleImageError"
                  />
                </div>
                <div
                  class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                >
                  <img
                    src="/role_patissier2.png"
                    alt="Carte Pâtissier"
                    loading="lazy"
                    class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                    @click="
                      emit('card-click',
                        '/role_patissier2.png',
                        'Pâtissier'
                      )
                    "
                    @error="handleImageError"
                  />
                </div>
                <div
                  class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                >
                  <img
                    src="/role_patissier3.png"
                    alt="Carte Pâtissier"
                    loading="lazy"
                    class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                    @click="
                      emit('card-click',
                        '/role_patissier3.png',
                        'Pâtissier'
                      )
                    "
                    @error="handleImageError"
                  />
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
                  >👩‍🍳 Équipe Gentille</span
                >
              </div>
              <p class="text-sm text-gray-600">
                🎯 Éviter l'explosion du gâteau et la victoire du Glouton
              </p>
            </div>

            <!-- Farceurs -->
            <div
              class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-4 border-red-500 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-semibold text-red-700">Farceurs</h4>
                <div class="text-right">
                  <span
                    class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    >× 3</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="flex justify-center space-x-2 mb-4">
                <div
                  class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                >
                  <img
                    src="/role_farceur1.png"
                    alt="Carte Farceur"
                    loading="lazy"
                    class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                    @click="
                      emit('card-click', '/role_farceur1.png', 'Farceur')
                    "
                    @error="handleImageError"
                  />
                </div>
                <div
                  class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                >
                  <img
                    src="/role_farceur2.png"
                    alt="Carte Farceur"
                    loading="lazy"
                    class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                    @click="
                      emit('card-click', '/role_farceur2.png', 'Farceur')
                    "
                    @error="handleImageError"
                  />
                </div>
                <div
                  class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                >
                  <img
                    src="/role_farceur3.png"
                    alt="Carte Farceur"
                    loading="lazy"
                    class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                    @click="
                      emit('card-click', '/role_farceur3.png', 'Farceur')
                    "
                    @error="handleImageError"
                  />
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full"
                  >🤡 Équipe Sabotage</span
                >
              </div>
              <p class="text-sm text-gray-600">
                💥 Faire exploser le gâteau
              </p>
            </div>

            <!-- Glouton -->
            <div
              class="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="border-color: #ff751f;"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="font-semibold" style="color: #ff751f;">Glouton</h4>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #ff751f;"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">unique</div>
                </div>
              </div>
              <div class="flex justify-center mb-4">
                <div
                  class="w-20 h-24 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                >
                  <img
                    src="/role_glouton.png"
                    alt="Carte Glouton"
                    loading="lazy"
                    class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                    @click="
                      emit('card-click', '/role_glouton.png', 'Glouton')
                    "
                    @error="handleImageError"
                  />
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(255, 117, 31, 0.2); color: #ff751f;"
                  >😋 Rôle Solo</span
                >
              </div>
              <p class="text-sm text-gray-600">
                🏆 Réunir 2 décorations et gâteau de taille comprise entre 15 et 18
              </p>
            </div>
          </div>
        </div>

        <!-- Cartes Objectif Glouton -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="color: #ff751f; background: linear-gradient(to right, rgba(255, 117, 31, 0.1), transparent); border-color: #ff751f;"
          >
            🍴 Cartes Objectif Glouton
          </h3>
          <div class="mb-6 text-center">
            <div
              class="backdrop-blur-sm rounded-xl p-4 border"
              style="background-color: rgba(255, 117, 31, 0.1); border-color: rgba(255, 117, 31, 0.3);"
            >
              <p class="font-medium text-sm sm:text-base" style="color: #ff751f;">
                ⚠️ <strong>Condition de victoire du Glouton :</strong> Le
                Glouton doit avoir au moins 2 de ces cartes en main ET que
                la taille du gâteau soit entre 15-18 pendant SON tour pour
                gagner immédiatement
              </p>
            </div>
          </div>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Cerises confites -->
            <div
              class="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="border-color: #ff751f;"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/objectifGlouton1.png"
                      alt="Carte Cerises confites"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/objectifGlouton1.png',
                          'Cerises confites'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold" style="color: #ff751f;">
                    Cerises confites
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #ff751f;"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(255, 117, 31, 0.1); color: #ff751f;"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>

            <!-- Spirale de caramel -->
            <div
              class="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="border-color: #ff751f;"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/objectifGlouton2.png"
                      alt="Carte Spirale de caramel"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/objectifGlouton2.png',
                          'Spirale de caramel'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold" style="color: #ff751f;">
                    Spirale de caramel
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #ff751f;"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(255, 117, 31, 0.2); color: #ff751f;"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>

            <!-- Plan d'évacuation -->
            <div
              class="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="border-color: #ff751f;"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/objectifGlouton3.png"
                      alt="Carte Macarons dorés"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/objectifGlouton3.png',
                          'Macarons dorés'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold" style="color: #ff751f;">
                    Macarons dorés
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #ff751f;"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(255, 117, 31, 0.2); color: #ff751f;"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>

            <!-- Neutralisation chimique -->
            <div
              class="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="border-color: #ff751f;"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/objectifGlouton4.png"
                      alt="Carte Rosace de chantilly"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/objectifGlouton4.png',
                          'Rosace de chantilly'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold" style="color: #ff751f;">
                    Rosace de chantilly
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #ff751f;"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(255, 117, 31, 0.2); color: #ff751f;"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>

            <!-- Schéma électrique -->
            <div
              class="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="border-color: #ff751f;"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/objectifGlouton5.png"
                      alt="Carte Bonbons gélifiés"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/objectifGlouton5.png',
                          'Bonbons gélifiés'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold" style="color: #ff751f;">
                    Bonbons gélifiés
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #ff751f;"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(255, 117, 31, 0.2); color: #ff751f;"
                  >🍰 Objectif Glouton</span
                >
              </div>
            </div>

            <!-- Copeaux de chocolat -->
            <div
              class="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="border-color: #ff751f;"
            >
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                  >
                    <img
                      src="/objectifGlouton6.png"
                      alt="Carte Copeaux de chocolat"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/objectifGlouton6.png',
                          'Copeaux de chocolat'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold" style="color: #ff751f;">
                    Copeaux de chocolat
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #ff751f;"
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(255, 117, 31, 0.2); color: #ff751f;"
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
              class="text-xl font-bold mb-4 flex items-center"
              style="color: #d4a574;"
            >
              ⬆️ Chaleur (+)
            </h4>
            <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              <!-- Charge +1 -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/chaleur1.png"
                        alt="Carte Chaleur +1"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/chaleur1.png',
                            'Chaleur +1'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">Chaleur +1</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 6</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +1
                </p>
              </div>

              <!-- Charge +2 -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/chaleur2.png"
                        alt="Carte Chaleur +2"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/chaleur2.png',
                            'Chaleur +2'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">Chaleur +2</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 9</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +2
                </p>
              </div>

              <!-- Charge +3 -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/chaleur3.png"
                        alt="Carte Chaleur +3"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/chaleur3.png',
                            'Chaleur +3'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">Chaleur +3</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 3</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +3
                </p>
              </div>

              <!-- Charge +4 -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/chaleur4.png"
                        alt="Carte Chaleur +4"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/chaleur4.png',
                            'Chaleur +4'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">Chaleur +4</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 4</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +4
                </p>
              </div>

              <!-- Charge +5 -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/chaleur5.png"
                        alt="Carte Chaleur +5"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/chaleur5.png',
                            'Chaleur +5'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">Chaleur +5</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Augmente la taille du gâteau de +5
                </p>
              </div>

              <!-- X -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/chaleur.png"
                        alt="Carte Chaleur ?"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/chaleur.png',
                            'Chaleur ?'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">Chaleur ?</h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
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
              class="text-xl font-bold mb-4 flex items-center"
              style="color: #d4a574;"
            >
              ⬇️ Refroidissement (-)
            </h4>
            <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              <!-- Refroidissement -1 -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/refroidissement1.png"
                        alt="Carte Refroidissement -1"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/refroidissement1.png',
                            'Refroidissement -1'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">
                      Refroidissement -1
                    </h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Diminue la taille du gâteau de -1
                </p>
              </div>

              <!-- Refroidissement -2 -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/refroidissement2.png"
                        alt="Carte Refroidissement -2"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/refroidissement2.png',
                            'Refroidissement -2'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">
                      Refroidissement -2
                    </h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 9</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Diminue la taille du gâteau de -2
                </p>
              </div>

              <!-- Refroidissement -3 -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/refroidissement3.png"
                        alt="Carte Refroidissement -3"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/refroidissement3.png',
                            'Refroidissement -3'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">
                      Refroidissement -3
                    </h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 5</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
                    >🌡️ Taille du gâteau</span
                  >
                </div>
                <p class="text-sm text-gray-600">
                  Diminue la taille du gâteau de -3
                </p>
              </div>

              <!-- Refroidissement X -->
              <div
                class="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                style="border-color: #d4a574;"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                    >
                      <img
                        src="/refroidissement.png"
                        alt="Carte Refroidissement ?"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/refroidissement.png',
                            'Refroidissement ?'
                          )
                        "
                        @error="handleImageError"
                      />
                    </div>
                    <h5 class="font-semibold" style="color: #d4a574;">
                      Refroidissement ?
                    </h5>
                  </div>
                  <div class="text-right">
                    <span
                      class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                      style="background-color: #d4a574;"
                      >× 2</span
                    >
                    <div class="text-xs text-gray-500 mt-1">quantité</div>
                  </div>
                </div>
                <div class="mb-2">
                  <span
                    class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style="background-color: rgba(212, 165, 116, 0.2); color: #d4a574;"
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
              color: #ec6082;
              background: linear-gradient(
                to right,
                rgba(236, 96, 130, 0.1),
                transparent
              );
              border-left-color: #ec6082;
            "
          >
            🔧 Cartes Action
          </h3>

          <div
            class="p-4 rounded-r-lg mb-6 border-l-4"
            style="
              background: linear-gradient(
                to right,
                rgba(236, 96, 130, 0.1),
                transparent
              );
              border-left-color: #ec6082;
            "
          >
            <p style="color: #ec6082;">
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
                  rgba(236, 96, 130, 0.1),
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
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="emit('card-click', card.image, card.name)"
                    />
                  </div>
                  <h4 class="font-semibold text-gray-800">
                    {{ card.name }}
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #ec6082;"
                    >× {{ card.quantity }}</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(236, 96, 130, 0.2); color: #ec6082;"
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
              color: #4ca7ff;
              background: linear-gradient(
                to right,
                rgba(76, 167, 255, 0.1),
                transparent
              );
              border-left-color: #4ca7ff;
            "
          >
            ⚡ Cartes Action Réactives
          </h3>

          <div
            class="p-4 rounded-r-lg mb-6 border-l-4"
            style="
              background: linear-gradient(
                to right,
                rgba(76, 167, 255, 0.1),
                transparent
              );
              border-left-color: #4ca7ff;
            "
          >
            <p style="color: #4ca7ff;">
              <strong>⚡ Note :</strong> Les cartes Action
              Réactives (marquées ⚡) peuvent
              <strong
                >être jouées n'importe quand contre des cartes
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
                  rgba(76, 167, 255, 0.1),
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
                      src="/actionReactive_tablierDeProtection.png"
                      alt="Carte Tablier de Protection"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/actionReactive_tablierDeProtection.png',
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
                    style="background-color: #4ca7ff"
                    >× 3</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(76, 167, 255, 0.2); color: #4ca7ff;"
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
                  rgba(76, 167, 255, 0.1),
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
                      src="/actionReactive_RenvoiDeSpatule.png"
                      alt="Carte Renvoi de spatule"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/actionReactive_RenvoiDeSpatule.png',
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
                    style="background-color: #4ca7ff"
                    >× 3</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(76, 167, 255, 0.2); color: #4ca7ff;"
                  >⚡ Réactive</span
                >
              </div>
              <p class="text-sm text-gray-600">
                Redirigez une action faite contre vous vers un autre joueur
              </p>
            </div>

            <!-- Coup de boost -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(76, 167, 255, 0.1),
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
                      src="/actionReactive_CoupDeBoost.png"
                      alt="Carte Coup de boost"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/actionReactive_CoupDeBoost.png',
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
                    style="background-color: #4ca7ff"
                    >× 3</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(76, 167, 255, 0.2); color: #4ca7ff;"
                  >⚡ Réactive</span
                >
              </div>
              <p class="text-sm text-gray-600">
                Doublez la valeur de la carte chaleur, refroidissement, four
                rétréci ou four élargi jouée
              </p>
            </div>

            <!-- Thermostat capricieux -->
            <div
              class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(76, 167, 255, 0.1),
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
                      src="/actionReactive_thermostatCapricieux.png"
                      alt="Carte Thermostat capricieux"
                      loading="lazy"
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="
                        emit('card-click',
                          '/actionReactive_thermostatCapricieux.png',
                          'Thermostat capricieux'
                        )
                      "
                      @error="handleImageError"
                    />
                  </div>
                  <h4 class="font-semibold text-gray-800">Thermostat capricieux</h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style="background-color: #4ca7ff"
                    >× 3</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  style="background-color: rgba(76, 167, 255, 0.2); color: #4ca7ff;"
                  >⚡ Réactive</span
                >
              </div>
              <p class="text-sm text-gray-600">
                Inversez le signe de la carte chaleur ou refroidissement jouée
              </p>
            </div>
          </div>
        </div>

        <!-- Cartes Événement -->
        <div class="mb-8">
          <h3
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="
              color: #800080;
              background: linear-gradient(
                to right,
                rgba(128, 0, 128, 0.1),
                transparent
              );
              border-left-color: #800080;
            "
          >
            🎭 Cartes Événement
          </h3>

          <div
            class="p-4 rounded-r-lg mb-6 border-l-4"
            style="
              background: linear-gradient(
                to right,
                rgba(128, 0, 128, 0.1),
                transparent
              );
              border-left-color: #800080;
            "
          >
            <h4 class="font-bold mb-2" style="color: #800080;">
              ⏰ Timing :
            </h4>
            <p style="color: #800080;">
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
                  : 'background: linear-gradient(135deg, rgba(128, 0, 128, 0.1), white); border-color: rgba(128, 0, 128, 0.5);'
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
                      class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                      @click="emit('card-click', event.image, event.name)"
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
                        : 'color: #800080;'
                    "
                  >
                    {{ event.name }}
                  </h4>
                </div>
                <div class="text-right">
                  <span
                    class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                    :style="
                      event.name === 'Minuteur final'
                        ? 'background-color: #ef4444;'
                        : 'background-color: #800080;'
                    "
                    >× 1</span
                  >
                  <div class="text-xs text-gray-500 mt-1">quantité</div>
                </div>
              </div>
              <div class="mb-2">
                <span
                  class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                  :style="
                    event.name === 'Minuteur final'
                      ? 'background-color: rgba(239, 68, 68, 0.2); color: #ef4444;'
                      : 'background-color: rgba(128, 0, 128, 0.2); color: #800080;'
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
                rgba(128, 0, 128, 0.1),
                transparent
              );
              border-left-color: #800080;
            "
          >
            <p class="text-sm" style="color: #800080;">
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
            class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
            style="
              color: #6b7280;
              background: linear-gradient(
                to right,
                rgba(107, 114, 128, 0.1),
                transparent
              );
              border-left-color: #6b7280;
            "
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
                          src="/systeme_premierJoueur.png"
                          alt="Carte Premier Joueur"
                          loading="lazy"
                          class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            emit('card-click',
                              '/systeme_premierJoueur.png',
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
                class="border-l-4 p-4 rounded-r-lg mb-6"
                style="
                  background: linear-gradient(
                    to right,
                    rgba(107, 114, 128, 0.1),
                    transparent
                  );
                  border-left-color: #6b7280;
                "
              >
                <p style="color: #6b7280;">
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
                        src="/systeme_valeurMystere1.png"
                        alt="Carte Système 1"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/systeme_valeurMystere1.png',
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
                        src="/systeme_valeurMystere2.png"
                        alt="Carte Système 2"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/systeme_valeurMystere2.png',
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
                        src="/systeme_valeurMystere3.png"
                        alt="Carte Système 3"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/systeme_valeurMystere3.png',
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
                        src="/systeme_valeurMystere4.png"
                        alt="Carte Système 4"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/systeme_valeurMystere4.png',
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
                        src="/systeme_valeurMystere5.png"
                        alt="Carte Système 5"
                        loading="lazy"
                        class="w-full h-full object-contain hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                        @click="
                          emit('card-click',
                            '/systeme_valeurMystere5.png',
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

  <!-- FAQ Component -->
  <FAQ />
</template>

<script setup>
import actionCards from '../data/cards/actions';
import { events } from '../data/events';

const emit = defineEmits(['card-click']);

const handleImageError = (event) => {
  event.target.src = "/placeholder-card.png";
  event.target.onerror = null;
};
</script>
