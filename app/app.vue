<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header
      class="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-white"
    >
      <div class="container mx-auto px-4 sm:px-6 py-16 text-center">
        <div
          class="w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm p-4"
        >
          <img
            src="/logo.png"
            alt="Logo Boom Badaboom"
            loading="lazy"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-xl mb-2 opacity-90">Jeu de cartes à rôles cachés</p>
        <p class="text-lg mb-8 opacity-90">
          1-5 joueurs • 15-30 min • À partir de 8 ans
        </p>
        <div class="text-sm opacity-80 mb-4">
          <p>🤖 Mode Coopératif : 1-2 joueurs</p>
          <p>🎭 Mode Compétitif : 3-5 joueurs</p>
        </div>
        <p class="text-lg font-light">Bluff • Tension • Stratégie</p>

        <!-- Boutons -->
        <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            @click="openCounterMode"
            class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg flex flex-col items-center"
          >
            <span>🎯 Démarrer une partie</span>
          </button>
          
          <!-- Bouton Installation PWA -->
          <button
            v-if="showInstallPrompt"
            @click="installPWA"
            class="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base flex items-center gap-2"
          >
            <span>📱</span>
            <span>Installer l'App</span>
          </button>
        </div>

        <div class="mt-8 text-sm opacity-80">
          <p class="mb-1">⚠️ Jeu au stade prototype</p>
          <p>Créé par <strong>Anthony Ruelle</strong></p>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white shadow-lg">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-4">
          <!-- Logo/Title for mobile -->
          <div class="flex items-center">
            <h2 class="text-lg font-bold text-red-600 md:hidden">
              Boom Badaboom
            </h2>
          </div>

          <!-- Desktop menu -->
          <div class="hidden md:flex justify-center flex-1">
            <div class="flex space-x-8">
              <a
                v-for="link in navLinks"
                :key="link.id"
                :href="`#${link.id}`"
                class="px-4 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-300 whitespace-nowrap"
                @click="closeMobileMenu"
              >
                {{ link.label }}
              </a>
            </div>
          </div>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden relative w-6 h-6 flex flex-col justify-center items-center focus:outline-none"
          >
            <span
              :class="{
                'rotate-45 translate-y-1': isMobileMenuOpen,
                'rotate-0 translate-y-0': !isMobileMenuOpen,
              }"
              class="block w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-out"
            ></span>
            <span
              :class="{
                'opacity-0': isMobileMenuOpen,
                'opacity-100': !isMobileMenuOpen,
              }"
              class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-out"
            ></span>
            <span
              :class="{
                '-rotate-45 -translate-y-1': isMobileMenuOpen,
                'rotate-0 translate-y-0': !isMobileMenuOpen,
              }"
              class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-out"
            ></span>
          </button>
        </div>

        <!-- Mobile menu -->
        <div
          :class="{
            'max-h-screen opacity-100': isMobileMenuOpen,
            'max-h-0 opacity-0': !isMobileMenuOpen,
          }"
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white"
        >
          <div class="py-2 space-y-1">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              @click="closeMobileMenu"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-red-500"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 sm:px-6 py-8">
      <!-- Concept du Jeu -->
      <section id="concept" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🧩 Concept du Jeu
            </h2>

            <div
              class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-8"
            >
              <h3 class="text-2xl font-bold mb-4">Boom Badaboom</h3>
              <p class="text-lg mb-4">
                <strong
                  >Un jeu de cartes à rôles cachés mêlant bluff, tension et
                  stratégie.</strong
                >
              </p>
              <p class="opacity-90">
                Les joueurs incarnent des personnages aux objectifs différents
                autour d'une bombe virtuelle prête à exploser. Votre rôle
                détermine votre mission : empêcher l'explosion, la provoquer… ou
                réussir un objectif personnel secret.
              </p>
            </div>

            <h3 class="text-2xl font-bold text-orange-600 mb-6">
              🎯 Objectifs des Joueurs
            </h3>

            <div class="grid lg:grid-cols-3 gap-8 mb-8">
              <!-- Démineurs -->
              <div class="group h-full">
                <div
                  class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                >
                  <div class="flex items-center justify-center mb-6">
                    <div class="relative">
                      <img
                        src="/demineur.png"
                        alt="Carte Démineur"
                        loading="lazy"
                        class="w-32 h-44 object-contain rounded-xl shadow-lg border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/demineur.png', 'Démineur')"
                      />
                      <div
                        class="absolute -top-2 -right-2 w-8 h-8 bg-blue-300 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm"
                      >
                        🟦
                      </div>
                    </div>
                  </div>
                  <div
                    class="text-center text-white flex-grow flex flex-col justify-center"
                  >
                    <h4 class="text-2xl font-bold mb-3">DÉMINEURS</h4>
                    <p class="text-blue-100 leading-relaxed">
                      Empêcher l'explosion <strong>ET</strong> empêcher l'Agent
                      Double de remplir son objectif
                    </p>
                  </div>
                </div>
              </div>

              <!-- Saboteurs -->
              <div class="group h-full">
                <div
                  class="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                >
                  <div class="flex items-center justify-center mb-6">
                    <div class="relative">
                      <img
                        src="/saboteur.png"
                        alt="Carte Saboteur"
                        loading="lazy"
                        class="w-32 h-44 object-contain rounded-xl shadow-lg border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/saboteur.png', 'Saboteur')"
                      />
                      <div
                        class="absolute -top-2 -right-2 w-8 h-8 bg-pink-300 text-pink-800 rounded-full flex items-center justify-center font-bold text-sm"
                      >
                        🟥
                      </div>
                    </div>
                  </div>
                  <div
                    class="text-center text-white flex-grow flex flex-col justify-center"
                  >
                    <h4 class="text-2xl font-bold mb-3">SABOTEURS</h4>
                    <p class="text-pink-100 leading-relaxed">
                      Faire exploser la bombe
                    </p>
                  </div>
                </div>
              </div>

              <!-- Agent Double -->
              <div class="group h-full">
                <div
                  class="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                >
                  <div class="flex items-center justify-center mb-6">
                    <div class="relative">
                      <img
                        src="/agentDouble.png"
                        alt="Carte Agent Double"
                        loading="lazy"
                        class="w-32 h-44 object-contain rounded-xl shadow-lg border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="
                          openCardModal('/agentDouble.png', 'Agent Double')
                        "
                      />
                      <div
                        class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 text-yellow-800 rounded-full flex items-center justify-center font-bold text-sm"
                      >
                        🟨
                      </div>
                    </div>
                  </div>
                  <div
                    class="text-center text-gray-800 flex-grow flex flex-col justify-center"
                  >
                    <h4 class="text-2xl font-bold mb-3">AGENT DOUBLE</h4>
                    <p class="text-gray-700 leading-relaxed">
                      Réunir <strong>2 des 3 cartes spécifiques</strong> dans sa
                      main <strong>ET</strong> éviter l'explosion
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
            >
              <h4 class="font-bold text-yellow-800 mb-2">
                ⚠️ Fin de Partie Immédiate :
              </h4>
              <ul class="text-yellow-700 space-y-1">
                <li><strong>Si la bombe explose</strong> (compteur ≥ seuil)</li>
                <li>
                  <strong>Après le tour déclenché</strong> par l'événement
                  "Compte à rebours final"
                </li>
                <li>
                  <strong>Quand la pioche est vide</strong> et qu'un joueur ne
                  peut plus reconstituer sa main
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Contenu de la Boîte -->
      <section id="contenu" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              📦 Contenu de la Boîte
            </h2>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <h3 class="text-xl font-bold text-red-500 mb-4">
                  🎴 Cartes & Matériel
                </h3>
                <ul class="space-y-2 text-gray-700">
                  <li><strong>98 cartes</strong></li>
                  <li>
                    <strong>2 jetons punchboards</strong> (compteur & seuil)
                  </li>
                  <li><strong>1 Livret de règles</strong></li>
                </ul>
              </div>
              <div class="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <h3 class="text-xl font-bold text-red-500 mb-4">
                  👥 Informations Générales
                </h3>
                <ul class="space-y-2 text-gray-700">
                  <li>
                    <strong>Joueurs :</strong> 3-5 (Compétitif) / 1-2
                    (Coopératif)
                  </li>
                  <li><strong>Âge :</strong> À partir de 8 ans</li>
                  <li><strong>Durée :</strong> 15-30 minutes</li>
                  <li><strong>Genre :</strong> Bluff, Tension, Stratégie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Liste des Cartes -->
      <section id="cartes" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🃏 Liste Complète des Cartes
            </h2>

            <!-- Cartes Personnages/Rôles -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-purple-600 bg-gradient-to-r from-purple-100 to-transparent p-4 border-l-4 border-purple-500 rounded mb-6"
              >
                👤 Cartes Personnages/Rôles
              </h3>
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- Démineur -->
                <div
                  class="bg-white border border-purple-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/demineur.png"
                          alt="Carte Démineur"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/demineur.png', 'Démineur')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Démineur</h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 2</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Rôle Gentil</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    🎯 Empêcher l'explosion et empêcher l'Agent Double de
                    remplir son objectif
                  </p>
                </div>

                <!-- Saboteur -->
                <div
                  class="bg-white border border-purple-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/saboteur.png"
                          alt="Carte Saboteur"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/saboteur.png', 'Saboteur')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Saboteur</h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 3</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Rôle Méchant</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    💥 Faire exploser la bombe
                  </p>
                </div>

                <!-- Agent Double -->
                <div
                  class="bg-white border border-purple-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/agentDouble.png"
                          alt="Carte Agent Double"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="
                            openCardModal('/agentDouble.png', 'Agent Double')
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Agent Double</h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Rôle Neutre</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    🎯 Réunir 2 des 3 cartes spécifiques + éviter l'explosion +
                    survivre jusqu'à la fin
                  </p>
                </div>
              </div>
            </div>

            <!-- Cartes Objectif Agent Double -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                💎 Cartes Objectif Agent Double
              </h3>
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- Dossier classé -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/dossierClasse.png"
                          alt="Carte Dossier classé"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="
                            openCardModal(
                              '/dossierClasse.png',
                              'Dossier classé'
                            )
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        Dossier classé
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Bluff & Objectif</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Nécessaire pour la victoire de l'Agent Double (2/3)
                  </p>
                </div>

                <!-- Robot de déminage -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/robotDeminage.png"
                          alt="Carte Robot de déminage"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="
                            openCardModal(
                              '/robotDeminage.png',
                              'Robot de déminage'
                            )
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        Robot de déminage
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Bluff & Objectif</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Nécessaire pour la victoire de l'Agent Double (2/3)
                  </p>
                </div>

                <!-- Plan d'évacuation -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/planEvacuation.png"
                          alt="Carte Plan d'évacuation"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="
                            openCardModal(
                              '/planEvacuation.png',
                              'Plan d\'évacuation'
                            )
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        Plan d'évacuation
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Bluff & Objectif</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Nécessaire pour la victoire de l'Agent Double (2/3)
                  </p>
                </div>
              </div>
            </div>

            <!-- Cartes Conditionnelles -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                🎲 Cartes Conditionnelles
              </h3>
              <div class="grid gap-6 md:grid-cols-2">
                <!-- Charge instable -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/chargeInstable.png"
                          alt="Carte Charge instable"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="
                            openCardModal(
                              '/chargeInstable.png',
                              'Charge instable'
                            )
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        Charge instable
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Conditionnelle</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Si compteur ≤ 10 : +4, sinon +2
                  </p>
                </div>

                <!-- Détonation amplifiée -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/detonationAmplifiee.png"
                          alt="Carte Détonation amplifiée"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="
                            openCardModal(
                              '/detonationAmplifiee.png',
                              'Détonation amplifiée'
                            )
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        Détonation amplifiée
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Conditionnelle</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Si compteur ≥ 20 : +1, sinon +2
                  </p>
                </div>

                <!-- Refroidissement express -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/refroidissementExpress.png"
                          alt="Carte Refroidissement express"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="
                            openCardModal(
                              '/refroidissementExpress.png',
                              'Refroidissement express'
                            )
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        Refroidissement express
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Conditionnelle</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Si compteur ≥ 20 : -4, sinon -2
                  </p>
                </div>

                <!-- Désescalade tactique -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/desescaladeTactique.png"
                          alt="Carte Désescalade tactique"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="
                            openCardModal(
                              '/desescaladeTactique.png',
                              'Désescalade tactique'
                            )
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        Désescalade tactique
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Conditionnelle</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Si compteur ≤ 10 : -1, sinon -2
                  </p>
                </div>
              </div>
            </div>

            <!-- Cartes Compteur -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                📈 Cartes Compteur
              </h3>

              <!-- Charges -->
              <div class="mb-8">
                <h4
                  class="text-xl font-bold text-red-700 mb-4 flex items-center"
                >
                  ⬆️ Charges (+)
                </h4>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <!-- Charge +1 -->
                  <div
                    class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge1.png"
                            alt="Carte Charge +1"
                            loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge1.png', 'Charge +1')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +1</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la valeur de la bombe de +1
                    </p>
                  </div>

                  <!-- Charge +2 -->
                  <div
                    class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge2.png"
                            alt="Carte Charge +2"
                            loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge2.png', 'Charge +2')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +2</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 6</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la valeur de la bombe de +2
                    </p>
                  </div>

                  <!-- Charge +3 -->
                  <div
                    class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge3.png"
                            alt="Carte Charge +3"
                            loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge3.png', 'Charge +3')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +3</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la valeur de la bombe de +3
                    </p>
                  </div>

                  <!-- Charge +4 -->
                  <div
                    class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge4.png"
                            alt="Carte Charge +4"
                            loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge4.png', 'Charge +4')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +4</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 4</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la valeur de la bombe de +4
                    </p>
                  </div>

                  <!-- Charge +5 -->
                  <div
                    class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge5.png"
                            alt="Carte Charge +5"
                            loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge5.png', 'Charge +5')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +5</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la valeur de la bombe de +5
                    </p>
                  </div>
                </div>
              </div>

              <!-- Décharges -->
              <div class="mb-8">
                <h4
                  class="text-xl font-bold text-green-700 mb-4 flex items-center"
                >
                  ⬇️ Décharges (-)
                </h4>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <!-- Décharge -1 -->
                  <div
                    class="bg-white border border-green-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/decharge1.png"
                            alt="Carte Décharge -1"
                            loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="
                              openCardModal('/decharge1.png', 'Décharge -1')
                            "
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">
                          Décharge -1
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
                    <p class="text-sm text-gray-600">
                      Diminue la valeur de la bombe de -1
                    </p>
                  </div>

                  <!-- Décharge -2 -->
                  <div
                    class="bg-white border border-green-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/decharge2.png"
                            alt="Carte Décharge -2"
                            loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="
                              openCardModal('/decharge2.png', 'Décharge -2')
                            "
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">
                          Décharge -2
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
                    <p class="text-sm text-gray-600">
                      Diminue la valeur de la bombe de -2
                    </p>
                  </div>

                  <!-- Décharge -3 -->
                  <div
                    class="bg-white border border-green-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/decharge3.png"
                            alt="Carte Décharge -3"
                            loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="
                              openCardModal('/decharge3.png', 'Décharge -3')
                            "
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">
                          Décharge -3
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
                    <p class="text-sm text-gray-600">
                      Diminue la valeur de la bombe de -3
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cartes Action -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                ⚡ Cartes Action
              </h3>

              <div
                class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6"
              >
                <p class="text-blue-800">
                  <strong>📝 Note :</strong> Les cartes Action sont des cartes à
                  effet offensif, stratégique ou de manipulation que vous jouez
                  pendant <strong>votre tour</strong>. Elles permettent
                  d'interagir avec les autres joueurs, de modifier les règles
                  temporairement ou de récupérer des informations.
                </p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="card in actionCards"
                  :key="card.name"
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          :src="card.image"
                          :alt="'Carte ' + card.name"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
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
                      >{{ card.type }}</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">{{ card.effect }}</p>
                </div>
              </div>
            </div>

            <!-- Cartes Action Réactives -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                ⚡ Cartes Action Réactives
              </h3>

              <div
                class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6"
              >
                <p class="text-yellow-800">
                  <strong>⚡ Note importante :</strong> Les cartes Action
                  Réactives (marquées ⚡) peuvent
                  <strong
                    >uniquement être jouées pendant le tour d'un
                    adversaire</strong
                  >
                  pour contrer, modifier ou rediriger une action. Elles ne
                  comptent pas comme votre carte jouée du tour. Une carte
                  réactive peut contrer une autre carte réactive.
                </p>
              </div>

              <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Désamorceur -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/desamorceur.png"
                          alt="Carte Désamorceur"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="
                            openCardModal('/desamorceur.png', 'Désamorceur')
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Désamorceur</h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 4</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Réactive ⚡</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Annule l'effet de la carte jouée
                  </p>
                </div>

                <!-- Miroir -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/miroir.png"
                          alt="Carte Miroir"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/miroir.png', 'Miroir')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Miroir</h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 4</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Réactive ⚡</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Redirige une action contre vous ou inverse le signe (+ ↔ -)
                  </p>
                </div>

                <!-- Surcharge -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/surcharge.png"
                          alt="Carte Surcharge"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/surcharge.png', 'Surcharge')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Surcharge</h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 3</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Réactive ⚡</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Double la valeur de la carte (dé)charge jouée
                  </p>
                </div>
              </div>
            </div>

            <!-- Cartes Événement -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                🎭 Cartes Événement
              </h3>

              <div
                class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6"
              >
                <h4 class="font-bold text-yellow-800 mb-2">⏰ Timing :</h4>
                <p class="text-yellow-700">
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
                    event.name === 'Compte à rebours final'
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 bg-white'
                  "
                  class="border-2 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          :src="event.image"
                          :alt="'Carte ' + event.name"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal(event.image, event.name)"
                        />
                      </div>
                      <h4
                        class="font-bold text-lg"
                        :class="
                          event.name === 'Compte à rebours final'
                            ? 'text-red-800'
                            : 'text-gray-800'
                        "
                      >
                        {{ event.name }}
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full"
                      >Événement</span
                    >
                  </div>
                  <p class="text-sm text-gray-700" v-html="event.effect"></p>
                </div>
              </div>

              <div
                class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400"
              >
                <p class="text-blue-800 text-sm">
                  <strong>📋 Mise en place spéciale :</strong>
                  Piochez 9 cartes Événement au hasard. Prenez 2 cartes au
                  hasard + la carte "Compte à rebours final", mélangez ces 3
                  cartes et placez-les sous la pile d'événements pour qu'elles
                  sortent entre les tours 8 et 10.
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
                      class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                    >
                      <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center space-x-3">
                          <div
                            class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                          >
                            <img
                              src="/premierjoueur.png"
                              alt="Carte Premier Joueur"
                              loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                              @click="
                                openCardModal(
                                  '/premierjoueur.png',
                                  'Premier Joueur'
                                )
                              "
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

                <!-- Cartes de Suivi de la Bombe -->
                <div class="mb-6">
                  <h4
                    class="text-xl font-bold text-gray-700 mb-4 flex items-center"
                  >
                    💣 Cartes de Suivi de la Bombe
                  </h4>
                  <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                    <div
                      class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                    >
                      <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center space-x-3">
                          <div
                            class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                          >
                            <img
                              src="/piste1.png"
                              alt="Carte Piste 1"
                              loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                              @click="openCardModal('/piste1.png', 'Piste 1')"
                            />
                          </div>
                          <h5 class="font-semibold text-gray-800">Piste 1</h5>
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
                        Première section de la jauge de la bombe
                      </p>
                    </div>
                    <div
                      class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                    >
                      <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center space-x-3">
                          <div
                            class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                          >
                            <img
                              src="/piste2.png"
                              alt="Carte Piste 2"
                              loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                              @click="openCardModal('/piste2.png', 'Piste 2')"
                            />
                          </div>
                          <h5 class="font-semibold text-gray-800">Piste 2</h5>
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
                        Deuxième section de la jauge de la bombe
                      </p>
                    </div>
                    <div
                      class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                    >
                      <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center space-x-3">
                          <div
                            class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                          >
                            <img
                              src="/piste3.png"
                              alt="Carte Piste 3"
                              loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                              @click="openCardModal('/piste3.png', 'Piste 3')"
                            />
                          </div>
                          <h5 class="font-semibold text-gray-800">Piste 3</h5>
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
                        Troisième section de la jauge de la bombe
                      </p>
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

            <div class="text-center bg-gray-100 p-4 rounded-lg">
              <p class="text-lg font-bold text-gray-700">
                📊 TOTAL CARTES : 98 cartes
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mise en Place -->
      <section id="mise-en-place" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              ⚙️ Mise en Place
            </h2>

            <ol class="space-y-6">
              <li
                v-for="(step, index) in setupSteps"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div
                  class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold"
                >
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="text-gray-700" v-html="step"></p>
                </div>
              </li>
            </ol>

            <div
              class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-8"
            >
              <h4 class="font-bold text-yellow-800 mb-2">
                ⚠️ Règle importante :
              </h4>
              <p class="text-yellow-700">
                Le compteur ne peut <strong>jamais descendre sous 0</strong>. Si
                une carte devait le faire descendre en dessous, il reste à 0.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Déroulement -->
      <section id="deroulement" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🔄 Déroulement d'une Partie
            </h2>

            <h3
              class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
            >
              📋 Séquence de Tour
            </h3>

            <ol class="space-y-4 mb-8">
              <li
                v-for="(step, index) in gameSteps"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div
                  class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold"
                >
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="text-gray-700" v-html="step"></p>
                </div>
              </li>
            </ol>

            <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 class="font-bold text-red-800 mb-2">
                💥 Explosion Immédiate :
              </h4>
              <p class="text-red-700">
                Si le compteur atteint ou dépasse le seuil d'explosion, la bombe
                explose immédiatement et la partie s'arrête ! Les Saboteurs
                gagnent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Conditions de Victoire -->
      <section id="victoire" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🏆 Conditions de Victoire
            </h2>

            <div class="grid lg:grid-cols-3 gap-8 mb-8">
              <!-- Démineurs -->
              <div class="group h-full">
                <div
                  class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div class="flex items-center justify-center mb-4">
                    <div class="relative">
                      <img
                        src="/demineur.png"
                        alt="Carte Démineur"
                        loading="lazy"
                        class="w-24 h-32 object-contain rounded-lg shadow-md border-2 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/demineur.png', 'Démineur')"
                      />
                      <div
                        class="absolute -top-1 -right-1 w-6 h-6 bg-blue-300 text-blue-800 rounded-full flex items-center justify-center font-bold text-xs"
                      >
                        🟦
                      </div>
                    </div>
                  </div>
                  <div
                    class="text-center text-white flex-grow flex flex-col justify-center"
                  >
                    <h3 class="text-xl font-bold mb-2">DÉMINEURS</h3>
                    <h4 class="text-lg font-semibold mb-3 text-blue-200">
                      Victoire par Élimination
                    </h4>
                    <p class="text-sm text-blue-100 leading-relaxed">
                      Empêcher l'explosion ET empêcher la victoire de l'Agent
                      Double
                    </p>
                  </div>
                </div>
              </div>

              <!-- Saboteurs -->
              <div class="group h-full">
                <div
                  class="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div class="flex items-center justify-center mb-4">
                    <div class="relative">
                      <img
                        src="/saboteur.png"
                        alt="Carte Saboteur"
                        loading="lazy"
                        class="w-24 h-32 object-contain rounded-lg shadow-md border-2 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/saboteur.png', 'Saboteur')"
                      />
                      <div
                        class="absolute -top-1 -right-1 w-6 h-6 bg-pink-300 text-pink-800 rounded-full flex items-center justify-center font-bold text-xs"
                      >
                        🟥
                      </div>
                    </div>
                  </div>
                  <div
                    class="text-center text-white flex-grow flex flex-col justify-center"
                  >
                    <h3 class="text-xl font-bold mb-2">SABOTEURS</h3>
                    <h4 class="text-lg font-semibold mb-3 text-pink-200">
                      Victoire Immédiate
                    </h4>
                    <p class="text-sm text-pink-100 leading-relaxed">
                      Faire exploser la bombe<br />(compteur ≥ seuil)
                    </p>
                  </div>
                </div>
              </div>

              <!-- Agent Double -->
              <div class="group h-full">
                <div
                  class="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div class="flex items-center justify-center mb-4">
                    <div class="relative">
                      <img
                        src="/agentDouble.png"
                        alt="Carte Agent Double"
                        loading="lazy"
                        class="w-24 h-32 object-contain rounded-lg shadow-md border-2 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="
                          openCardModal('/agentDouble.png', 'Agent Double')
                        "
                      />
                      <div
                        class="absolute -top-1 -right-1 w-6 h-6 bg-yellow-200 text-yellow-800 rounded-full flex items-center justify-center font-bold text-xs"
                      >
                        🟨
                      </div>
                    </div>
                  </div>
                  <div
                    class="text-center text-gray-800 flex-grow flex flex-col justify-center"
                  >
                    <h3 class="text-xl font-bold mb-2">AGENT DOUBLE</h3>
                    <h4 class="text-lg font-semibold mb-3 text-gray-700">
                      Victoire en Fin de Partie
                    </h4>
                    <ul class="text-sm text-gray-700 leading-relaxed space-y-1">
                      <li>Posséder 2 des 3 cartes objectif</li>
                      <li>ET éviter l'explosion</li>
                      <li>ET arriver en fin de partie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 p-8 rounded-2xl shadow-lg"
            >
              <h4 class="font-bold text-blue-800 mb-6 text-center text-2xl">
                🎯 Cartes Objectif de l'Agent Double
              </h4>
              <p class="text-blue-700 mb-6 text-center text-lg">
                L'Agent Double doit réunir
                <strong>2 des 3 cartes suivantes</strong> dans sa main :
              </p>

              <div class="grid md:grid-cols-3 gap-6">
                <!-- Dossier classé -->
                <div class="group">
                  <div
                    class="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div class="flex items-center justify-center mb-4">
                      <div class="relative">
                        <img
                          src="/dossierClasse.png"
                          alt="Carte Dossier classé"
                          loading="lazy"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          @click="
                            openCardModal(
                              '/dossierClasse.png',
                              'Dossier classé'
                            )
                          "
                        />
                        <div
                          class="absolute -top-2 -right-2 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs"
                        >
                          📂
                        </div>
                      </div>
                    </div>
                    <div class="text-center text-gray-800">
                      <h5 class="text-lg font-bold">Dossier classé</h5>
                    </div>
                  </div>
                </div>

                <!-- Robot de déminage -->
                <div class="group">
                  <div
                    class="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div class="flex items-center justify-center mb-4">
                      <div class="relative">
                        <img
                          src="/robotDeminage.png"
                          alt="Carte Robot de déminage"
                          loading="lazy"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          @click="
                            openCardModal(
                              '/robotDeminage.png',
                              'Robot de déminage'
                            )
                          "
                        />
                        <div
                          class="absolute -top-2 -right-2 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs"
                        >
                          🤖
                        </div>
                      </div>
                    </div>
                    <div class="text-center text-gray-800">
                      <h5 class="text-lg font-bold">Robot de déminage</h5>
                    </div>
                  </div>
                </div>

                <!-- Plan d'évacuation -->
                <div class="group">
                  <div
                    class="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div class="flex items-center justify-center mb-4">
                      <div class="relative">
                        <img
                          src="/planEvacuation.png"
                          alt="Carte Plan d'évacuation"
                          loading="lazy"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          @click="
                            openCardModal(
                              '/planEvacuation.png',
                              'Plan d\'évacuation'
                            )
                          "
                        />
                        <div
                          class="absolute -top-2 -right-2 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs"
                        >
                          🗺️
                        </div>
                      </div>
                    </div>
                    <div class="text-center text-gray-800">
                      <h5 class="text-lg font-bold">Plan d'évacuation</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 text-center">
                <p class="text-blue-700 font-medium">
                  ⚠️ Ces cartes permettent à l'Agent Double de bluffer sur son
                  identité tout en poursuivant son objectif secret
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mode Coopératif -->
      <section id="cooperatif" class="mb-12">
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

            <!-- Mise en place coopérative -->
            <h3 class="text-2xl font-bold text-orange-600 mb-6">
              ⚙️ Mise en Place
            </h3>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-lg font-bold text-blue-700 mb-4">
                  Configuration
                </h4>
                <ul class="space-y-2 text-blue-700">
                  <li>• Deck IA de <strong>20 cartes</strong></li>
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

            <!-- Déroulement coopératif -->
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
                  1<br />
                  <strong>En solo :</strong> joue 2 cartes, pioche 2<br />
                  Les joueurs coopèrent librement
                </p>
              </div>

              <div
                class="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg"
              >
                <h4 class="font-bold text-yellow-800 mb-2">3. Fin du Tour</h4>
                <p class="text-yellow-700">
                  Si le compteur ≥ seuil d'explosion → <strong>Défaite</strong
                  ><br />
                  Sinon → Continuer jusqu'à la fin des tours
                </p>
              </div>
            </div>

            <!-- Decks -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <!-- Deck IA -->
              <div>
                <h3 class="text-2xl font-bold text-orange-600 mb-6">
                  🤖 Deck IA (20 cartes avec logo 🤖)
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
                          src="/charge1.png"
                          alt="Charge +1"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="openCardModal('/charge1.png', 'Charge +1')"
                        />
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
                          src="/charge2.png"
                          alt="Charge +2"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="openCardModal('/charge2.png', 'Charge +2')"
                        />
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
                          src="/charge3.png"
                          alt="Charge +3"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="openCardModal('/charge3.png', 'Charge +3')"
                        />
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
                          src="/charge4.png"
                          alt="Charge +4"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="openCardModal('/charge4.png', 'Charge +4')"
                        />
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
                          src="/charge5.png"
                          alt="Charge +5"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="openCardModal('/charge5.png', 'Charge +5')"
                        />
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
                          src="/action_blocage.png"
                          alt="Blocage"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/action_blocage.png', 'Blocage')
                          "
                        />
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
                          src="/action_seuilReduit.png"
                          alt="Seuil réduit"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/action_seuilReduit.png',
                              'Seuil réduit'
                            )
                          "
                        />
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
                          src="/action_sabotage.png"
                          alt="Sabotage"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/action_sabotage.png', 'Sabotage')
                          "
                        />
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

              <!-- Deck Joueur -->
              <div>
                <h3 class="text-2xl font-bold text-orange-600 mb-6">
                  🙋‍♂️ Deck Joueur (43 cartes)
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
                          src="/chargeInstable.png"
                          alt="Charge instable"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/chargeInstable.png',
                              'Charge instable'
                            )
                          "
                        />
                        <span class="font-medium text-pink-700"
                          >Charge instable</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-pink-500 text-white text-xs px-2 py-1 rounded-full"
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
                          src="/detonationAmplifiee.png"
                          alt="Détonation amplifiée"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/detonationAmplifiee.png',
                              'Détonation amplifiée'
                            )
                          "
                        />
                        <span class="font-medium text-pink-700"
                          >Détonation amplifiée</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-pink-500 text-white text-xs px-2 py-1 rounded-full"
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
                          src="/refroidissementExpress.png"
                          alt="Refroidissement express"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/refroidissementExpress.png',
                              'Refroidissement express'
                            )
                          "
                        />
                        <span class="font-medium text-pink-700"
                          >Refroidissement express</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-pink-500 text-white text-xs px-2 py-1 rounded-full"
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
                          src="/desescaladeTactique.png"
                          alt="Désescalade tactique"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/desescaladeTactique.png',
                              'Désescalade tactique'
                            )
                          "
                        />
                        <span class="font-medium text-pink-700"
                          >Désescalade tactique</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-pink-500 text-white text-xs px-2 py-1 rounded-full"
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
                          src="/charge2.png"
                          alt="Charge +2"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="openCardModal('/charge2.png', 'Charge +2')"
                        />
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
                          src="/charge3.png"
                          alt="Charge +3"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="openCardModal('/charge3.png', 'Charge +3')"
                        />
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
                          src="/charge4.png"
                          alt="Charge +4"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="openCardModal('/charge4.png', 'Charge +4')"
                        />
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
                          src="/charge5.png"
                          alt="Charge +5"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="openCardModal('/charge5.png', 'Charge +5')"
                        />
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
                          src="/decharge1.png"
                          alt="Décharge -1"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/decharge1.png', 'Décharge -1')
                          "
                        />
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
                          src="/decharge2.png"
                          alt="Décharge -2"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/decharge2.png', 'Décharge -2')
                          "
                        />
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
                          src="/decharge3.png"
                          alt="Décharge -3"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/decharge3.png', 'Décharge -3')
                          "
                        />
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
                          src="/action_blocage.png"
                          alt="Blocage"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/action_blocage.png', 'Blocage')
                          "
                        />
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
                          src="/action_seuilAugmente.png"
                          alt="Seuil augmenté"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/action_seuilAugmente.png',
                              'Seuil augmenté'
                            )
                          "
                        />
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
                          src="/action_seuilReduit.png"
                          alt="Seuil réduit"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/action_seuilReduit.png',
                              'Seuil réduit'
                            )
                          "
                        />
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
                          src="/action_contrebande.png"
                          alt="Contrebande"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/action_contrebande.png',
                              'Contrebande'
                            )
                          "
                        />
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
                          src="/action_manipulation.png"
                          alt="Manipulation"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/action_manipulation.png',
                              'Manipulation'
                            )
                          "
                        />
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
                          src="/action_pileOuFiasco.png"
                          alt="Pile ou Fiasco"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/action_pileOuFiasco.png',
                              'Pile ou Fiasco'
                            )
                          "
                        />
                        <span class="font-medium text-yellow-700"
                          >Pile ou Fiasco</span
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
                          src="/desamorceur.png"
                          alt="Désamorceur"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-pointer hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/desamorceur.png', 'Désamorceur')
                          "
                        />
                        <span class="font-medium text-purple-700"
                          >Désamorceur</span
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

            <!-- Règles spéciales -->
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
                <li>
                  • Les cartes <strong>Seuil réduit</strong> et
                  <strong>Seuil augmenté</strong> sont fixés à
                  <strong>±2</strong>
                </li>
              </ul>
            </div>

            <!-- Victoire -->
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
      </section>

      <!-- FAQ -->
      <section id="faq" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              ❓ Questions Fréquentes
            </h2>

            <div class="space-y-6">
              <div
                v-for="faq in faqs"
                :key="faq.question"
                class="bg-gray-50 border border-gray-200 rounded-lg p-6"
              >
                <h3 class="text-lg font-bold text-gray-800 mb-3">
                  {{ faq.question }}
                </h3>
                <p class="text-gray-700" v-html="faq.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Remerciements -->
      <section id="remerciements" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🙏 Remerciements
            </h2>

            <div
              class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200"
            >
              <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                Merci aux premiers testeurs qui ont contribué au développement
                du jeu
              </h3>

              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  class="bg-white rounded-lg p-4 shadow-md text-center border-2 border-blue-100 hover:border-blue-300 transition-colors"
                >
                  <div
                    class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold"
                  >
                    M
                  </div>
                  <h4 class="font-semibold text-gray-800">Mathieu Lecomte</h4>
                  <p class="text-sm text-gray-600 mt-1">Premier testeur</p>
                </div>

                <div
                  class="bg-white rounded-lg p-4 shadow-md text-center border-2 border-pink-100 hover:border-pink-300 transition-colors"
                >
                  <div
                    class="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold"
                  >
                    A
                  </div>
                  <h4 class="font-semibold text-gray-800">Amélia Lecomte</h4>
                  <p class="text-sm text-gray-600 mt-1">Première testeuse</p>
                </div>

                <div
                  class="bg-white rounded-lg p-4 shadow-md text-center border-2 border-green-100 hover:border-green-300 transition-colors"
                >
                  <div
                    class="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold"
                  >
                    ML
                  </div>
                  <h4 class="font-semibold text-gray-800">Malone Lecomte</h4>
                  <p class="text-sm text-gray-600 mt-1">Premier testeur</p>
                </div>

                <div
                  class="bg-white rounded-lg p-4 shadow-md text-center border-2 border-yellow-100 hover:border-yellow-300 transition-colors"
                >
                  <div
                    class="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold"
                  >
                    LR
                  </div>
                  <h4 class="font-semibold text-gray-800">Laura Ruelle</h4>
                  <p class="text-sm text-gray-600 mt-1">Première testeuse</p>
                </div>
              </div>

              <div class="text-center mt-8 pt-6 border-t-2 border-blue-200">
                <p class="text-gray-700 text-lg">
                  Leur participation aux tests et leurs retours ont été
                  essentiels pour peaufiner l'équilibrage du jeu et améliorer
                  l'expérience de tous les joueurs.
                </p>
                <p class="text-gray-600 text-sm mt-4 italic">
                  Un grand merci pour votre temps et vos précieux conseils ! 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Back to top button -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>

    <!-- Mode Compteur -->
    <div
      v-if="showCounterMode"
      class="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div class="w-full h-full relative overflow-hidden">
        <!-- Background avec effet coloré design -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-red-900"
        >
          <!-- Effet de grille -->
          <div
            class="absolute inset-0 opacity-20"
            style="
              background-image: radial-gradient(
                circle at 2px 2px,
                rgba(255, 255, 255, 0.15) 1px,
                transparent 0
              );
              background-size: 40px 40px;
            "
          ></div>
          <!-- Cercles décoratifs -->
          <div
            class="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-xl animate-pulse"
          ></div>
          <div
            class="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-lg animate-pulse"
            style="animation-delay: 1s"
          ></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-2xl animate-pulse"
            style="animation-delay: 2s"
          ></div>
        </div>

        <!-- Overlay semi-transparent -->
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>

        <!-- Interface utilisateur -->
        <div class="relative z-10 h-full flex flex-col">
          <!-- Header -->
          <div
            class="flex justify-between items-center p-4 bg-black bg-opacity-70"
          >
            <h2
              class="text-white text-lg sm:text-xl font-bold flex items-center"
            >
              <span>🎯</span>
              <span class="ml-1 text-sm sm:text-xl">Compteur</span>
            </h2>

            <!-- Timer et informations centrés -->
            <div class="flex-1 text-center">
              <div v-if="elapsedTime" class="text-white text-sm opacity-60">
                ⏱️ {{ elapsedTime }}
              </div>
              <div v-if="turnNumber > 0" class="text-white text-xs opacity-50 mt-1">
                <span v-if="finalCountdownRevealed" class="text-red-300 font-bold">🚨 DERNIER TOUR 🚨</span>
                <span v-else>Tour {{ turnNumber }} | {{ eventDeck.length > 0 ? eventDeck.length + ' événements restants' : 'Tous événements révélés' }}</span>
              </div>
            </div>

            <div class="flex space-x-2">
              <button
                @click="drawNextEvent"
                :disabled="gameOver || eventDeck.length === 0 || finalCountdownRevealed"
                :class="{
                  'bg-purple-500 hover:bg-purple-600': !gameOver && eventDeck.length > 0 && !finalCountdownRevealed,
                  'bg-gray-600 opacity-50 cursor-not-allowed': gameOver || eventDeck.length === 0 || finalCountdownRevealed,
                }"
                class="text-white px-2 sm:px-3 py-2 rounded-lg font-bold transition-colors text-xs sm:text-sm flex items-center space-x-1"
              >
                <span>🎲</span>
                <span class="hidden xs:inline sm:inline">
                  {{ finalCountdownRevealed ? 'Dernier tour' : (eventDeck.length > 0 ? 'Nouveau Tour' : 'Plus d\'événements') }}
                </span>
              </button>
              <button
                @click="showHistoryModal = true"
                class="bg-gray-700 hover:bg-gray-800 text-white px-2 sm:px-3 py-2 rounded-lg font-bold transition-colors text-xs sm:text-sm flex items-center space-x-1"
              >
                <span>📋</span>
                <span class="hidden xs:inline sm:inline">Historique</span>
              </button>
              <button
                @click="showCloseConfirmModal = true"
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          <!-- Zone principale avec pions -->
          <div class="flex-1 relative">
            <!-- Ligne principale unique -->
            <div
              class="absolute h-0.5 bg-gradient-to-r from-blue-400 to-red-400 opacity-60 transition-all duration-300"
              :style="{
                left: '10%',
                right: '10%',
                top: '50%',
              }"
            ></div>

            <!-- Flèche et label Seuil -->
            <div
              class="absolute transition-all duration-500 z-30"
              :style="{
                left: `${Math.max(20, Math.min(80, getThresholdPosition()))}%`,
                top: '20%',
                transform: 'translateX(-50%)',
              }"
            >
              <!-- Label avec flèche -->
              <div class="text-center mb-2">
                <div class="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white whitespace-nowrap">
                  💀 SEUIL
                </div>
                <!-- Flèche pointant vers le bas -->
                <div class="w-0 h-0 border-l-3 border-r-3 border-t-5 border-l-transparent border-r-transparent border-t-red-500 mx-auto mt-1"></div>
              </div>
            </div>

            <!-- Pion Seuil (rouge) - Design amélioré -->
            <div
              class="absolute w-14 h-14 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 border-4 border-white shadow-2xl flex items-center justify-center transform -translate-x-7 md:-translate-x-9 -translate-y-7 md:-translate-y-9 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-yellow-300 cursor-pointer"
              :style="{
                left: `${getThresholdPosition()}%`,
                top: '50%',
                filter: 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.6))',
              }"
            >
              <!-- Cercle intérieur avec effet de profondeur -->
              <div class="absolute inset-1 rounded-full bg-gradient-to-t from-red-800 to-red-400 opacity-80"></div>
              
              <!-- Contenu du pion - Seulement le chiffre -->
              <div class="relative text-white font-bold text-center z-10">
                <div class="text-2xl md:text-3xl font-black drop-shadow-lg">{{ thresholdValue }}</div>
              </div>
              
              <!-- Effet de brillance -->
              <div class="absolute top-2 left-3 w-3 h-3 md:w-4 md:h-4 bg-white bg-opacity-40 rounded-full blur-sm"></div>
              
              <!-- Pulse ring pour l'attention -->
              <div class="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping"></div>
            </div>

            <!-- Flèche et label Compteur -->
            <div
              class="absolute transition-all duration-500 z-20"
              :style="{
                left: `${Math.max(20, Math.min(80, getCounterPosition()))}%`,
                top: '20%',
                transform: 'translateX(-50%)',
              }"
            >
              <!-- Label avec flèche dynamique -->
              <div class="text-center mb-2">
                <div 
                  class="text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white transition-all duration-300 whitespace-nowrap"
                  :class="{
                    'bg-blue-500': counterValue < thresholdValue - 3,
                    'bg-orange-500 animate-pulse': counterValue >= thresholdValue - 3 && counterValue < thresholdValue,
                    'bg-red-600 animate-bounce': counterValue >= thresholdValue,
                  }"
                >
                  {{ counterValue < thresholdValue - 3 ? '💣 COMPTEUR' : (counterValue >= thresholdValue ? '💥 BOOM' : '⚠️ DANGER') }}
                </div>
                <!-- Flèche pointant vers le bas - couleur dynamique -->
                <div 
                  class="w-0 h-0 border-l-3 border-r-3 border-t-5 border-l-transparent border-r-transparent mx-auto mt-1 transition-all duration-300"
                  :class="{
                    'border-t-blue-500': counterValue < thresholdValue - 3,
                    'border-t-orange-500': counterValue >= thresholdValue - 3 && counterValue < thresholdValue,
                    'border-t-red-600': counterValue >= thresholdValue,
                  }"
                ></div>
              </div>
            </div>

            <!-- Pion Compteur (bleu) - Design amélioré -->
            <div
              class="absolute w-14 h-14 md:w-18 md:h-18 rounded-full border-4 border-white shadow-2xl flex items-center justify-center transform -translate-x-7 md:-translate-x-9 -translate-y-7 md:-translate-y-9 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-yellow-300 cursor-pointer z-10"
              :style="{
                left: `${getCounterPosition()}%`,
                top: '50%',
              }"
              :class="{
                // États dynamiques
                'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700': counterValue < thresholdValue - 3,
                'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 animate-pulse': counterValue >= thresholdValue - 3 && counterValue < thresholdValue,
                'bg-gradient-to-br from-red-500 via-red-600 to-red-800 animate-bounce': counterValue >= thresholdValue,
              }"
            >
              <!-- Cercle intérieur avec effet de profondeur -->
              <div 
                class="absolute inset-1 rounded-full opacity-80"
                :class="{
                  'bg-gradient-to-t from-blue-800 to-blue-400': counterValue < thresholdValue - 3,
                  'bg-gradient-to-t from-orange-800 to-yellow-400': counterValue >= thresholdValue - 3 && counterValue < thresholdValue,
                  'bg-gradient-to-t from-red-900 to-red-500': counterValue >= thresholdValue,
                }"
              ></div>
              
              <!-- Contenu du pion - Seulement le chiffre -->
              <div class="relative text-white font-bold text-center z-10">
                <div class="text-2xl md:text-3xl font-black drop-shadow-lg">{{ counterValue }}</div>
              </div>
              
              <!-- Effet de brillance -->
              <div class="absolute top-2 left-3 w-3 h-3 md:w-4 md:h-4 bg-white bg-opacity-40 rounded-full blur-sm"></div>
              
              <!-- Pulse ring conditionnel -->
              <div 
                v-if="counterValue >= thresholdValue - 3"
                class="absolute inset-0 rounded-full opacity-40 animate-ping"
                :class="{
                  'bg-yellow-500': counterValue >= thresholdValue - 3 && counterValue < thresholdValue,
                  'bg-red-500': counterValue >= thresholdValue,
                }"
              ></div>
              
              <!-- Glow effect quand proche du seuil -->
              <div 
                v-if="counterValue >= thresholdValue - 2"
                class="absolute inset-0 rounded-full animate-pulse"
                :style="{
                  filter: counterValue >= thresholdValue ? 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.8))' : 'drop-shadow(0 0 16px rgba(234, 179, 8, 0.6))',
                }"
              ></div>
            </div>

            <!-- Indicateurs min/max -->
            <div class="absolute bottom-8 left-4 text-white text-xs opacity-75">
              <div class="bg-black bg-opacity-50 px-2 py-1 rounded">MIN: 0</div>
            </div>
            <div
              class="absolute bottom-8 right-4 text-white text-xs opacity-75"
            >
              <div class="bg-black bg-opacity-50 px-2 py-1 rounded">
                MAX: 30
              </div>
            </div>
          </div>

          <!-- Contrôles du compteur -->
          <div class="p-4 bg-black bg-opacity-70">
            <!-- Événement actuel -->
            <div v-if="currentEvent && currentEvent.name !== 'Compte à rebours final'" class="mb-4 p-3 bg-purple-900 bg-opacity-50 border border-purple-400 rounded-lg">
              <div class="text-purple-200 text-xs mb-1">🎲 Événement actuel</div>
              <div class="text-yellow-300 font-bold text-sm mb-1">{{ currentEvent.name }}</div>
              <div class="text-white text-xs opacity-90" v-html="currentEvent.effect"></div>
            </div>
            
            <!-- Événement final -->
            <div v-if="currentEvent && currentEvent.name === 'Compte à rebours final'" class="mb-4 p-3 bg-red-900 bg-opacity-70 border-2 border-red-500 rounded-lg animate-pulse">
              <div class="text-red-200 text-xs mb-1">🚨 Événement spécial</div>
              <div class="text-yellow-300 font-bold text-sm mb-1">{{ currentEvent.name }}</div>
              <div class="text-white text-xs font-bold" v-html="currentEvent.effect"></div>
            </div>
            
            <div class="mb-4">
              <h3 class="text-white font-bold mb-2">Compteur de la Bombe</h3>

              <!-- Boutons compacts sur une ligne -->
              <div class="flex flex-wrap gap-1 justify-center">
                <!-- Boutons de diminution -->
                <button
                  v-for="delta in [-3, -2, -1]"
                  :key="delta"
                  @click="adjustCounter(delta)"
                  :disabled="gameOver"
                  :class="{
                    'bg-green-500 hover:bg-green-600': !gameOver,
                    'bg-gray-600 opacity-50 cursor-not-allowed': gameOver,
                  }"
                  class="text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors active:scale-95"
                >
                  {{ delta }}
                </button>

                <!-- Séparateur visuel -->
                <div class="w-px bg-gray-500 mx-1"></div>

                <!-- Boutons d'augmentation -->
                <button
                  v-for="delta in [+1, +2, +3, +4, +5]"
                  :key="delta"
                  @click="adjustCounter(delta)"
                  :disabled="gameOver"
                  :class="{
                    'bg-red-500 hover:bg-red-600': !gameOver,
                    'bg-gray-600 opacity-50 cursor-not-allowed': gameOver,
                  }"
                  class="text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors active:scale-95"
                >
                  +{{ delta }}
                </button>
              </div>
            </div>

            <!-- Contrôles du seuil -->
            <div class="mb-4">
              <h3 class="text-white font-bold mb-2">Seuil d'Explosion</h3>
              <div class="flex justify-center space-x-2">
                <button
                  @click="adjustThreshold(-1)"
                  :disabled="gameOver || thresholdValue <= minThreshold"
                  class="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-lg transition-colors active:scale-95"
                >
                  -1
                </button>
                <div
                  class="bg-white bg-opacity-20 text-white font-bold py-3 px-6 rounded-lg flex items-center"
                >
                  Seuil: {{ thresholdValue }}
                </div>
                <button
                  @click="adjustThreshold(+1)"
                  :disabled="gameOver || thresholdValue >= maxThreshold"
                  class="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-lg transition-colors active:scale-95"
                >
                  +1
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Animation d'explosion -->
        <div
          v-if="showExplosion"
          class="absolute inset-0 z-20 flex items-center justify-center bg-red-600 bg-opacity-90"
        >
          <div class="text-center animate-pulse">
            <div class="text-9xl mb-4 animate-bounce">💥</div>
            <div class="text-6xl font-bold text-white animate-ping">BOOM!</div>
            <div class="text-2xl text-yellow-300 mt-4 animate-pulse">
              EXPLOSION!
            </div>
          </div>
        </div>

        <!-- Écran de fin de partie -->
        <div
          v-if="gameOver && !showExplosion"
          class="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-90"
        >
          <div
            class="text-center text-white p-8 bg-red-900 bg-opacity-80 rounded-2xl"
          >
            <div class="text-6xl mb-4">💀</div>
            <h2 class="text-3xl font-bold mb-4">FIN DE PARTIE</h2>
            <p class="text-xl mb-6">La bombe a explosé!</p>
            <p class="text-lg mb-2">
              Compteur: {{ counterValue }} / Seuil: {{ thresholdValue }}
            </p>
            <p v-if="gameDuration" class="text-base text-yellow-300 mb-8">
              ⏱️ Durée de la partie: {{ gameDuration }}
            </p>
            <div v-else class="mb-8"></div>
            <div class="space-y-3">
              <button
                @click="closeCounterMode"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
              >
                ✕ Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Contact -->
    <section id="contact" class="bg-gray-900 py-16">
      <div class="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            📧 Contact
          </h2>
          <p class="text-gray-300 text-lg">
            Une question sur le jeu ? Une suggestion ? Envoyez-nous un message !
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-2xl p-8">
          <form
            method="POST"
            action="https://formspree.io/f/xkgzkgjw"
            class="space-y-6"
            @submit="handleFormSubmit"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Prénom -->
              <div>
                <label
                  for="prenom"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Votre prénom"
                />
              </div>

              <!-- Nom -->
              <div>
                <label
                  for="nom"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                placeholder="votre.email@exemple.com"
              />
            </div>

            <!-- Message -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <!-- Bouton d'envoi -->
            <div class="text-center">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100 transition-all duration-300"
              >
                <span v-if="isSubmitting" class="flex items-center">
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Envoi en cours...
                </span>
                <span v-else> 📧 Envoyer le message </span>
              </button>
            </div>

            <!-- Message de confirmation -->
            <div
              v-if="submitMessage"
              class="text-center p-4 rounded-lg"
              :class="
                submitSuccess
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              "
            >
              {{ submitMessage }}
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-8">
      <div class="container mx-auto px-2 sm:px-6">
        <p class="text-lg font-semibold mb-2">Boom Badaboom</p>
        <p class="text-gray-400">
          Jeu de cartes à rôles cachés - Bluff, Tension, Stratégie
        </p>
      </div>
    </footer>

    <!-- Card Modal -->
    <div
      v-if="showCardModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      @click="closeCardModal"
    >
      <div
        class="relative max-w-lg max-h-full bg-white rounded-2xl shadow-2xl overflow-hidden"
        @click.stop
      >
        <!-- Close button -->
        <button
          @click="closeCardModal"
          class="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          ✕
        </button>

        <!-- Card image -->
        <div class="p-6">
          <img
            v-if="selectedCard"
            :src="selectedCard.image"
            :alt="selectedCard.name"
            loading="lazy"
            class="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Modale Historique -->
    <div
      v-if="showHistoryModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      @click="showHistoryModal = false"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-96 overflow-hidden"
        @click.stop
      >
        <div class="p-4 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-800">📋 Historique</h3>
            <button
              @click="showHistoryModal = false"
              class="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
        <div class="p-4 max-h-80 overflow-y-auto">
          <div
            v-if="counterHistory.length === 0"
            class="text-center text-gray-500 py-8"
          >
            Aucune action enregistrée
          </div>
          <div v-else class="space-y-2">
            <div
              v-for="(entry, index) in counterHistory.slice().reverse()"
              :key="index"
              class="p-3 bg-gray-50 rounded-lg"
            >
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-gray-700">{{
                  entry.action
                }}</span>
                <span class="text-sm text-blue-600 font-mono"
                  >{{ entry.oldValue }} → {{ entry.newValue }}</span
                >
              </div>
              <div class="text-xs text-gray-500 mt-1">
                {{ entry.timestamp }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modale Événement -->
    <div
      v-if="showEventModal && currentEvent"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
      @click="closeEventModal"
    >
      <div
        :class="[
          'bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-purple-400 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform',
          { 'animate-pulse': eventModalPulse }
        ]"
        @click.stop
      >
        <div class="p-6 text-center">
          <div class="text-6xl mb-4">🎲</div>
          <h3 class="text-2xl font-bold text-white mb-2">
            Tour {{ turnNumber }}
          </h3>
          <div class="text-lg font-bold text-purple-200 mb-4">
            Événement Révélé
          </div>
          
          <!-- Image de l'événement -->
          <div class="mb-4">
            <img
              :src="currentEvent.image"
              :alt="currentEvent.name"
              loading="lazy"
              class="w-32 h-44 mx-auto object-contain rounded-lg bg-white bg-opacity-10 p-2"
            />
          </div>
          
          <!-- Nom de l'événement -->
          <h4 class="text-xl font-bold text-yellow-300 mb-3">
            {{ currentEvent.name }}
          </h4>
          
          <!-- Effet de l'événement -->
          <div
            class="bg-black bg-opacity-30 rounded-lg p-4 mb-4 text-white text-center"
            v-html="currentEvent.effect"
          ></div>
          
          <!-- Instructions pour les joueurs -->
          <div class="bg-yellow-900 bg-opacity-50 border border-yellow-600 rounded-lg p-3 mb-4">
            <div class="text-yellow-300 text-xs font-bold mb-1">📋 Instructions</div>
            <div class="text-yellow-100 text-xs">
              C'est aux joueurs d'appliquer les effets de cet événement pendant ce tour.
            </div>
          </div>
          
          <button
            @click="closeEventModal"
            class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
          >
            ✓ Compris
          </button>
        </div>
      </div>
    </div>

    <!-- Modale Instructions de début de partie -->
    <div
      v-if="showGameStartModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-85"
      @click="closeGameStartModal"
    >
      <div
        class="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-400 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
        @click.stop
      >
        <div class="p-6 text-center">
          <div class="text-5xl mb-4">🎯</div>
          <h3 class="text-2xl font-bold text-white mb-4">
            Nouvelle Partie
          </h3>
          
          <!-- Instructions principales -->
          <div class="bg-black bg-opacity-30 rounded-lg p-4 mb-4 text-left">
            <div class="text-blue-200 font-bold text-sm mb-3">📋 Rappel important :</div>
            <div class="text-white text-sm space-y-2">
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">1.</span>
                <span>Le <strong>premier événement</strong> s'affiche automatiquement au démarrage de la partie.</span>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">2.</span>
                <span>Les <strong>joueurs</strong> sont responsables d'appliquer les effets des événements.</span>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">3.</span>
                <span>Cliquez "<strong>Nouveau Tour</strong>" pour révéler l'événement suivant.</span>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">4.</span>
                <span>Un événement reste actif pendant <strong>tout le tour</strong>.</span>
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">5.</span>
                <span>Il y a <strong>10 événements</strong> au total. Le "Compte à rebours final" apparaît aux tours 8, 9 ou 10.</span>
              </div>
            </div>
          </div>
          
          <!-- Note importante -->
          <div class="bg-orange-900 bg-opacity-50 border border-orange-500 rounded-lg p-3 mb-4">
            <div class="text-orange-300 text-xs font-bold mb-1">⚠️ Important</div>
            <div class="text-orange-100 text-xs">
              Cette application ne fait que gérer le compteur et afficher les événements. 
              Les joueurs doivent gérer eux-mêmes leurs cartes et actions !
            </div>
          </div>
          
          <button
            @click="startGame"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
          >
            ✓ C'est parti !
          </button>
        </div>
      </div>
    </div>

    <!-- Modale Confirmation Fermeture Partie -->
    <div
      v-if="showCloseConfirmModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      @click="cancelCloseGame"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
        @click.stop
      >
        <div class="p-6 text-center">
          <div class="text-5xl mb-4">⚠️</div>
          <h3 class="text-lg font-bold text-gray-800 mb-4">
            Quitter la partie ?
          </h3>
          <p class="text-gray-600 mb-6">
            Êtes-vous sûr de vouloir fermer la partie en cours ? 
            <br />
            <strong>Toutes les données seront perdues.</strong>
          </p>
          <div class="flex space-x-3">
            <button
              @click="cancelCloseGame"
              class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Annuler
            </button>
            <button
              @click="confirmCloseGame"
              class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              ✕ Quitter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom sizes for tokens */
.w-18 { width: 4.5rem; }
.h-18 { height: 4.5rem; }
.shadow-3xl { 
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(0, 0, 0, 0.15); 
}

/* Custom arrow border sizes */
.border-l-3 { border-left-width: 6px; }
.border-r-3 { border-right-width: 6px; }
.border-t-5 { border-top-width: 8px; }

/* Enhanced glow effects */
.token-glow-blue {
  filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.7));
}
.token-glow-yellow {
  filter: drop-shadow(0 0 18px rgba(234, 179, 8, 0.8));
}
.token-glow-red {
  filter: drop-shadow(0 0 25px rgba(239, 68, 68, 0.9));
}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// Navigation
const navLinks = [
  { id: "concept", label: "Concept" },
  { id: "contenu", label: "Contenu" },
  { id: "cartes", label: "Cartes" },
  { id: "mise-en-place", label: "Mise en Place" },
  { id: "deroulement", label: "Déroulement" },
  { id: "victoire", label: "Victoire" },
  { id: "cooperatif", label: "Mode Coopératif" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
  { id: "remerciements", label: "Remerciements" },
];

// Cards data
const objectiveCards = [
  {
    name: "Dossier classé",
    type: "Bluff & Objectif",
    effect: "Nécessaire pour la victoire de l'Agent Double (2/3)",
    quantity: 1,
  },
  {
    name: "Robot de déminage",
    type: "Bluff & Objectif",
    effect: "Nécessaire pour la victoire de l'Agent Double (2/3)",
    quantity: 1,
  },
  {
    name: "Plan d'évacuation",
    type: "Bluff & Objectif",
    effect: "Nécessaire pour la victoire de l'Agent Double (2/3)",
    quantity: 1,
  },
];

const conditionalCards = [
  {
    name: "Charge instable",
    type: "Conditionnelle",
    effect: "Si compteur ≤ 10 : +4, sinon +2",
    quantity: 1,
  },
  {
    name: "Détonation amplifiée",
    type: "Conditionnelle",
    effect: "Si compteur ≥ 20 : +1, sinon +2",
    quantity: 1,
  },
  {
    name: "Refroidissement express",
    type: "Conditionnelle",
    effect: "Si compteur ≥ 20 : -4, sinon -2",
    quantity: 1,
  },
  {
    name: "Désescalade tactique",
    type: "Conditionnelle",
    effect: "Si compteur ≤ 10 : -1, sinon -2",
    quantity: 1,
  },
];

const chargeCards = [
  { name: "Charge +1", quantity: 5 },
  { name: "Charge +2", quantity: 6 },
  { name: "Charge +3", quantity: 5 },
  { name: "Charge +4", quantity: 4 },
  { name: "Charge +5", quantity: 2 },
];

const dischargeCards = [
  { name: "Décharge -1", quantity: 5 },
  { name: "Décharge -2", quantity: 5 },
  { name: "Décharge -3", quantity: 5 },
];

const actionCards = [
  {
    name: "Espion",
    type: "Action",
    effect:
      "Regarde secrètement la main d'un joueur et vole une carte au choix",
    quantity: 3,
    image: "/action_espion.png",
  },
  {
    name: "Blocage",
    type: "Action",
    effect: "Un joueur passe complètement son prochain tour",
    quantity: 3,
    image: "/action_blocage.png",
  },
  {
    name: "Sabotage",
    type: "Action",
    effect:
      "Un joueur doit jouer une carte au hasard de sa main. Si c'est une carte objectif Agent Double, elle est défaussée sans effet",
    quantity: 2,
    image: "/action_sabotage.png",
  },
  {
    name: "Seuil augmenté",
    type: "Action",
    effect:
      "Augmente le seuil d'explosion de +1 à +5 points au choix (maximum 30 points)",
    quantity: 3,
    image: "/action_seuilAugmente.png",
  },
  {
    name: "Seuil réduit",
    type: "Action",
    effect:
      "Réduit le seuil de -1 à -5 points au choix. Le nouveau seuil doit être au minimum à (compteur actuel +1). Obligation de baisser d'au moins 1 point",
    quantity: 3,
    image: "/action_seuilReduit.png",
  },
  {
    name: "Contrebande",
    type: "Action",
    effect: "Reprend une carte au choix dans la défausse",
    quantity: 4,
    image: "/action_contrebande.png",
  },
  {
    name: "Redistribution",
    type: "Action",
    effect: "Échange ta main avec celle d'un joueur",
    quantity: 1,
    image: "/action_redistribution.png",
  },
  {
    name: "Manipulation",
    type: "Action",
    effect: "Voit les 3 prochaines cartes de la pioche et change l'ordre",
    quantity: 1,
    image: "/action_manipulation.png",
  },
  {
    name: "Pile ou Fiasco",
    type: "Action",
    effect: "Lance une pièce : Pile = +3 / Face = -3",
    quantity: 1,
    image: "/action_pileOuFiasco.png",
  },
];

const reactiveCards = [
  {
    name: "Désamorceur",
    type: "Réactive ⚡",
    effect: "Annule l'effet de la carte jouée",
    quantity: 4,
  },
  {
    name: "Miroir",
    type: "Réactive ⚡",
    effect: "Redirige une action contre vous ou inverse le signe (+ ↔ -)",
    quantity: 4,
  },
  {
    name: "Surcharge",
    type: "Réactive ⚡",
    effect: "Double la valeur de la carte (dé)charge jouée",
    quantity: 3,
  },
];

// Setup steps
const setupSteps = [
  "<strong>Séparez les cartes système</strong> (rôles, événements, premier joueur)",
  "<strong>Mélangez toutes les cartes de jeu</strong> restantes",
  "Chaque joueur reçoit <strong>5 cartes</strong>",
  "<strong>Assemblez la jauge :</strong> placez les 3 cartes piste côte à côte <span class='text-blue-600 text-sm'>(<em>Peut être passé si vous utilisez l'application</em>)</span>",
  "Placez le <strong>Compteur sur 0</strong> et le <strong>Seuil sur 20</strong> <span class='text-blue-600 text-sm'>(<em>Peut être passé si vous utilisez l'application</em>)</span>",
  '<strong>Désignez le premier joueur</strong> et donnez-lui la carte "Premier Joueur" qu\'il place devant lui',
  '<strong>Préparez les événements :</strong><br>• Piochez 9 cartes Événement au hasard<br>• Prenez 2 cartes au hasard + la carte "Compte à rebours final"<br>• Mélangez ces 3 cartes et placez-les <strong>sous la pile</strong> d\'événements <span class="text-blue-600 text-sm">(<em>Peut être passé si vous utilisez l\'application</em>)</span>',
  "<strong>Distribuez les rôles</strong> selon le tableau de répartition",
];

// Game steps
const gameSteps = [
  "<strong>Révélez un événement</strong> (au début du tour du premier joueur uniquement)",
  "<strong>Jouez 1 carte</strong> de votre main",
  "<strong>Appliquez l'effet</strong> de la carte (modification du compteur, action spéciale...)",
  "<strong>Piochez 1 carte</strong> pour revenir à 5 cartes en main (sauf si votre tour est sauté)",
];

// Events
const events = [
  {
    name: "Changement de vent",
    effect: "Tous les joueurs passent leur main au joueur à leur gauche",
    image: "/event_changementDeVent.png",
  },
  {
    name: "Perturbation électrique",
    effect: "Personne ne pioche à la fin de son tour ce tour-ci",
    image: "/event_perturbationElectrique.png",
  },
  {
    name: "Espionnage inversé",
    effect: "Tous les joueurs révèlent 1 carte au hasard de leur main",
    image: "/event_espionnageInverse.png",
  },
  {
    name: "Transparence totale",
    effect: "Pendant ce tour, toutes les cartes piochées doivent être révélées",
    image: "/event_transparenceTotale.png",
  },
  {
    name: "Court-circuit",
    effect:
      "Les effets Charge/Décharge sont inversés ce tour (+ devient -, - devient +)",
    image: "/event_courtCircuit.png",
  },
  {
    name: "Fausse alerte",
    effect:
      "Le seuil augmente temporairement de +3. Si compteur ≥ seuil normal en fin de tour : explosion",
    image: "/event_fausseAlerte.png",
  },
  {
    name: "Double vision",
    effect:
      "Chaque carte (dé)charge compte double (Surcharge interdite ce tour)",
    image: "/event_doubleVision.png",
  },
  {
    name: "Panique générale",
    effect: "Chaque joueur doit jouer 2 cartes ce tour au lieu d'une",
    image: "/event_paniqueGenerale.png",
  },
  {
    name: "Blackout",
    effect:
      "Toutes les cartes Actions (non-(dé)charge) sont interdites ce tour",
    image: "/event_blackout.png",
  },
  {
    name: "Chaos total",
    effect:
      "À son tour, chaque joueur pioche une carte et la joue immédiatement",
    image: "/event_chaosTotal.png",
  },
  {
    name: "Inversion des rôles",
    effect: "L'ordre de jeu s'inverse pour le reste de ce tour",
    image: "/event_inversionRoles.png",
  },
  {
    name: "Compte à rebours final",
    effect:
      "<strong>🚨 DERNIER TOUR !</strong> Chaque joueur joue une dernière fois, puis la partie s'arrête",
    image: "/event_compteReboursFinal.png",
  },
];

// FAQs
const faqs = [
  {
    question: "Puis-je regarder la défausse ?",
    answer:
      '<strong>Non.</strong> Il est interdit de fouiller la défausse. Seule la dernière carte posée sur la pile de défausse est visible de tous. Le seul moyen de voir le contenu de la défausse est via une carte Action comme "Contrebande".',
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
    question: "Seuil Réduit - Règles importantes",
    answer:
      "• Cette carte <strong>ne peut jamais</strong> déclencher l'explosion<br>• Le nouveau seuil doit être <strong>au minimum</strong> à (compteur actuel + 1)<br>• Vous devez <strong>obligatoirement</strong> faire baisser le seuil d'au moins 1 point<br>• Si le compteur est à 19 et le seuil à 20, vous ne pouvez pas jouer cette carte",
  },
  {
    question: "Comment fonctionne la carte Miroir ?",
    answer:
      "La carte Miroir peut :<br>• <strong>Rediriger une action</strong> dirigée contre vous vers son auteur<br>• <strong>Inverser le signe</strong> d'une carte (dé)charge (+ devient -, - devient +)",
  },
  {
    question: "Sabotage et cartes objectif",
    answer:
      "Si la carte jouée au hasard par Sabotage est une <strong>carte objectif de l'Agent Double</strong> (Dossier classé, Robot de déminage, Plan d'évacuation), elle est <strong>défaussée sans effet</strong>.",
  },
];

// Back to top functionality
const showBackToTop = ref(false);

// PWA functionality
const deferredPrompt = ref(null);
const showInstallPrompt = ref(false);

// Card modal functionality
const selectedCard = ref(null);
const showCardModal = ref(false);

// Mobile menu functionality
const isMobileMenuOpen = ref(false);
// Counter mode functionality
const showCounterMode = ref(false);
const counterValue = ref(0);
const thresholdValue = ref(20);
const minThreshold = ref(10);
const maxThreshold = ref(30);
const counterHistory = ref([]);
const showExplosion = ref(false);
const gameOver = ref(false);
const showHistoryModal = ref(false);
const gameStartTime = ref(null);
const gameDuration = ref(null);
const currentTime = ref(Date.now());

// Event system
const currentEvent = ref(null);
const eventDeck = ref([]);
const usedEvents = ref([]);
const turnNumber = ref(0);
const showEventModal = ref(false);
const eventModalPulse = ref(false);
const showGameStartModal = ref(false);
const finalCountdownRevealed = ref(false);
const showCloseConfirmModal = ref(false);

// Timer interval reference for cleanup
let timerInterval = null;

// Computed property for current elapsed time
const elapsedTime = computed(() => {
  if (!gameStartTime.value || gameOver.value) return null;
  const elapsed = Math.max(0, currentTime.value - gameStartTime.value);
  return formatDuration(elapsed);
});

// Contact form
const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.pageYOffset > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Card modal functions
const openCardModal = (cardImage, cardName) => {
  selectedCard.value = { image: cardImage, name: cardName };
  showCardModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeCardModal = () => {
  showCardModal.value = false;
  selectedCard.value = null;
  document.body.style.overflow = "auto";
};

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// PWA functions
const installPWA = async () => {
  if (deferredPrompt.value) {
    // Show the install prompt
    deferredPrompt.value.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.value.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    
    // Clear the deferred prompt, as it can only be used once
    deferredPrompt.value = null;
    showInstallPrompt.value = false;
  }
};

// Counter mode functions
const openCounterMode = () => {
  showCounterMode.value = true;
  
  // Initialize counter values
  counterValue.value = 0;
  thresholdValue.value = 20;
  counterHistory.value = [];
  showExplosion.value = false;
  gameOver.value = false;
  gameStartTime.value = null;
  gameDuration.value = null;
  
  // Initialize event system
  currentEvent.value = null;
  usedEvents.value = [];
  turnNumber.value = 0;
  showEventModal.value = false;
  showGameStartModal.value = true;
  eventModalPulse.value = false;
  finalCountdownRevealed.value = false;
  showCloseConfirmModal.value = false;
  initializeEventDeck();
  
  document.body.style.overflow = "hidden";
  // Timer will start when user clicks "C'est parti!"
};

const closeCounterMode = () => {
  showCounterMode.value = false;
  document.body.style.overflow = "auto";
};



const triggerExplosion = () => {
  showExplosion.value = true;
  gameOver.value = true;

  // Calculer la durée de la partie
  if (gameStartTime.value) {
    const duration = Date.now() - gameStartTime.value;
    gameDuration.value = formatDuration(duration);
  }

  // Animation d'explosion après un délai
  setTimeout(() => {
    showExplosion.value = false;
  }, 3000);
};

const formatDuration = (ms) => {
  // Ensure we never have negative time
  const safeDuration = Math.max(0, ms);
  const seconds = Math.floor(safeDuration / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (minutes > 0) {
    return `${minutes}m ${remainingSeconds.toString().padStart(2, "0")}s`;
  }
  return `${remainingSeconds}s`;
};

// Contact form handling
const handleFormSubmit = async (event) => {
  event.preventDefault();
  isSubmitting.value = true;
  submitMessage.value = "";

  try {
    const formData = new FormData(event.target);

    const response = await fetch("https://formspree.io/f/xkgzkgjw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      submitSuccess.value = true;
      submitMessage.value =
        "✅ Message envoyé avec succès ! Nous vous répondrons rapidement.";
      // Reset form
      event.target.reset();
    } else {
      throw new Error("Erreur lors de l'envoi");
    }
  } catch (error) {
    submitSuccess.value = false;
    submitMessage.value =
      "❌ Erreur lors de l'envoi. Veuillez réessayer plus tard.";
  } finally {
    isSubmitting.value = false;
    // Hide message after 5 seconds
    setTimeout(() => {
      submitMessage.value = "";
    }, 5000);
  }
};

const adjustCounter = (delta) => {
  const newValue = Math.max(0, counterValue.value + delta); // Minimum à 0

  counterHistory.value.push({
    action: delta > 0 ? `+${delta}` : `${delta}`,
    oldValue: counterValue.value,
    newValue: newValue,
    timestamp: new Date().toLocaleTimeString(),
  });
  counterValue.value = newValue;

  // Check for explosion
  if (counterValue.value >= thresholdValue.value) {
    triggerExplosion();
  }
};

const adjustThreshold = (delta) => {
  const newValue = thresholdValue.value + delta;
  if (newValue >= minThreshold.value && newValue <= maxThreshold.value) {
    thresholdValue.value = newValue;
  }
};

const getCounterPosition = () => {
  // Position du compteur : 0 au bord gauche, 30 au bord droit
  const maxScale = 30;
  const percentage = Math.min((counterValue.value / maxScale) * 100, 100);

  // 0 = 10% (bord gauche), 30 = 90% (bord droit)
  const minLeft = 10; // Position 0 (%)
  const maxLeft = 90; // Position 30 (%)
  return minLeft + (percentage / 100) * (maxLeft - minLeft);
};

const getThresholdPosition = () => {
  // Position du seuil : même échelle que le compteur
  const maxScale = 30;
  const percentage = Math.min((thresholdValue.value / maxScale) * 100, 100);

  // 0 = 10% (bord gauche), 30 = 90% (bord droit)
  const minLeft = 10; // Position 0 (%)
  const maxLeft = 90; // Position 30 (%)
  return minLeft + (percentage / 100) * (maxLeft - minLeft);
};

// Handle escape key for modal
const handleEscape = (event) => {
  if (event.key === "Escape") {
    if (showCloseConfirmModal.value) {
      cancelCloseGame();
    } else if (showCounterMode.value) {
      showCloseConfirmModal.value = true; // Show confirmation instead of direct close
    } else if (showCardModal.value) {
      closeCardModal();
    } else if (showEventModal.value) {
      showEventModal.value = false;
    } else if (showGameStartModal.value) {
      closeGameStartModal();
    }
  }
};

// Event management functions
const initializeEventDeck = () => {
  // Get all events except "Compte à rebours final"
  const normalEvents = events.filter(event => event.name !== "Compte à rebours final");
  const finalEvent = events.find(event => event.name === "Compte à rebours final");
  
  // Shuffle normal events and take 9 (to make 10 total with final event)
  const shuffledEvents = [...normalEvents].sort(() => Math.random() - 0.5);
  const selectedNormalEvents = shuffledEvents.slice(0, 9);
  
  // Create deck with 10 cards total
  const deck = [...selectedNormalEvents];
  
  // Insert final event at position 7, 8, or 9 (0-indexed) which corresponds to turns 8, 9, or 10
  const finalPositions = [7, 8, 9]; // Positions 8, 9, 10 in 1-indexed terms
  const finalPosition = finalPositions[Math.floor(Math.random() * finalPositions.length)];
  
  // Insert the final event at the chosen position
  deck.splice(finalPosition, 0, finalEvent);
  
  eventDeck.value = deck;
};

const drawNextEvent = () => {
  if (eventDeck.value.length === 0 || gameOver.value || finalCountdownRevealed.value) return;
  
  turnNumber.value += 1;
  const drawnEvent = eventDeck.value.shift();
  currentEvent.value = drawnEvent;
  usedEvents.value.push(drawnEvent);
  showEventModal.value = true;
  eventModalPulse.value = true;
  
  // Check if the final countdown has been revealed
  if (drawnEvent.name === "Compte à rebours final") {
    finalCountdownRevealed.value = true;
  }
  
  // Remove pulse effect after 2 seconds
  setTimeout(() => {
    eventModalPulse.value = false;
  }, 2000);
};

const closeEventModal = () => {
  showEventModal.value = false;
};

const startGame = () => {
  showGameStartModal.value = false;
  // Set both times synchronously to ensure they start together
  const now = Date.now();
  gameStartTime.value = now;
  currentTime.value = now;
  
  // Automatically trigger the first event
  setTimeout(() => {
    drawNextEvent();
  }, 500); // Small delay to ensure modal is closed
};

const closeGameStartModal = () => {
  showGameStartModal.value = false;
  // Don't start timer when just closing the modal
};

const confirmCloseGame = () => {
  showCloseConfirmModal.value = false;
  closeCounterMode();
};

const cancelCloseGame = () => {
  showCloseConfirmModal.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("keydown", handleEscape);
  
  // PWA install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt.value = e;
    // Show the install button
    showInstallPrompt.value = true;
  });

  // Listen for the app being installed
  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    showInstallPrompt.value = false;
    deferredPrompt.value = null;
  });
  
  // Start timer interval on client side only
  timerInterval = setInterval(() => {
    currentTime.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleEscape);
  
  // Clean up timer interval
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

// SEO
useHead({
  title: "Boom Badaboom - Règles du Jeu | Jeu de cartes à rôles cachés",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les règles complètes de Boom Badaboom, un jeu de cartes à rôles cachés mêlant bluff, tension et stratégie pour 3-5 joueurs.",
    },
    {
      name: "keywords",
      content:
        "Boom Badaboom, jeu de cartes, rôles cachés, bluff, stratégie, règles du jeu",
    },
    { property: "og:title", content: "Boom Badaboom - Règles du Jeu" },
    {
      property: "og:description",
      content:
        "Jeu de cartes à rôles cachés mêlant bluff, tension et stratégie",
    },
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
  ],
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "icon", type: "image/png", href: "/logo.png" },
    { rel: "apple-touch-icon", href: "/logo.png" },
    { rel: "shortcut icon", href: "/favicon.ico" },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

@media print {
  .nav,
  .back-to-top {
    display: none !important;
  }

  .content {
    box-shadow: none !important;
    margin: 0 !important;
  }
}
</style>
