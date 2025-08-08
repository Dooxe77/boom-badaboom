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
            <h2 class="text-lg font-bold text-red-600 md:hidden">Boom Badaboom</h2>
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
              :class="{'rotate-45 translate-y-1': isMobileMenuOpen, 'rotate-0 translate-y-0': !isMobileMenuOpen}"
              class="block w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-out"
            ></span>
            <span
              :class="{'opacity-0': isMobileMenuOpen, 'opacity-100': !isMobileMenuOpen}"
              class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-out"
            ></span>
            <span
              :class="{'-rotate-45 -translate-y-1': isMobileMenuOpen, 'rotate-0 translate-y-0': !isMobileMenuOpen}"
              class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-out"
            ></span>
          </button>
        </div>

        <!-- Mobile menu -->
        <div
          :class="{'max-h-screen opacity-100': isMobileMenuOpen, 'max-h-0 opacity-0': !isMobileMenuOpen}"
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
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div class="flex items-center justify-center mb-6">
                    <div class="relative">
                      <img
                        src="/demineur.png"
                        alt="Carte Démineur"
                        class="w-32 h-44 object-contain rounded-xl shadow-lg border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/demineur.png', 'Démineur')"
                      />
                      <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-300 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm">
                        🟦
                      </div>
                    </div>
                  </div>
                  <div class="text-center text-white flex-grow flex flex-col justify-center">
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
                <div class="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div class="flex items-center justify-center mb-6">
                    <div class="relative">
                      <img
                        src="/saboteur.png"
                        alt="Carte Saboteur"
                        class="w-32 h-44 object-contain rounded-xl shadow-lg border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/saboteur.png', 'Saboteur')"
                      />
                      <div class="absolute -top-2 -right-2 w-8 h-8 bg-pink-300 text-pink-800 rounded-full flex items-center justify-center font-bold text-sm">
                        🟥
                      </div>
                    </div>
                  </div>
                  <div class="text-center text-white flex-grow flex flex-col justify-center">
                    <h4 class="text-2xl font-bold mb-3">SABOTEURS</h4>
                    <p class="text-pink-100 leading-relaxed">
                      Faire exploser la bombe
                    </p>
                  </div>
                </div>
              </div>

              <!-- Agent Double -->
              <div class="group h-full">
                <div class="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  <div class="flex items-center justify-center mb-6">
                    <div class="relative">
                      <img
                        src="/agentDouble.png"
                        alt="Carte Agent Double"
                        class="w-32 h-44 object-contain rounded-xl shadow-lg border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/agentDouble.png', 'Agent Double')"
                      />
                      <div class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 text-yellow-800 rounded-full flex items-center justify-center font-bold text-sm">
                        🟨
                      </div>
                    </div>
                  </div>
                  <div class="text-center text-gray-800 flex-grow flex flex-col justify-center">
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
                  <li><strong>98 cartes</strong> de jeu au format poker</li>
                  <li><strong>3 cartes piste</strong> (jauge de bombe)</li>
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

            <!-- Cartes Objectif Agent Double -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                💎 Cartes Objectif Agent Double
              </h3>
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- Dossier classé -->
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/dossierClasse.png"
                          alt="Carte Dossier classé"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/dossierClasse.png', 'Dossier classé')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Dossier classé</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Bluff & Objectif</span>
                  </div>
                  <p class="text-sm text-gray-600">Nécessaire pour la victoire de l'Agent Double (2/3)</p>
                </div>

                <!-- Robot de déminage -->
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/robotDeminage.png"
                          alt="Carte Robot de déminage"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/robotDeminage.png', 'Robot de déminage')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Robot de déminage</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Bluff & Objectif</span>
                  </div>
                  <p class="text-sm text-gray-600">Nécessaire pour la victoire de l'Agent Double (2/3)</p>
                </div>

                <!-- Plan d'évacuation -->
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/planEvacuation.png"
                          alt="Carte Plan d'évacuation"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/planEvacuation.png', 'Plan d\'évacuation')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Plan d'évacuation</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Bluff & Objectif</span>
                  </div>
                  <p class="text-sm text-gray-600">Nécessaire pour la victoire de l'Agent Double (2/3)</p>
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
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/chargeInstable.png"
                          alt="Carte Charge instable"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/chargeInstable.png', 'Charge instable')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Charge instable</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full">Conditionnelle</span>
                  </div>
                  <p class="text-sm text-gray-600">Si compteur ≤ 10 : +4, sinon +2</p>
                </div>

                <!-- Détonation amplifiée -->
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/detonationAmplifiee.png"
                          alt="Carte Détonation amplifiée"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/detonationAmplifiee.png', 'Détonation amplifiée')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Détonation amplifiée</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full">Conditionnelle</span>
                  </div>
                  <p class="text-sm text-gray-600">Si compteur ≥ 20 : +1, sinon +2</p>
                </div>

                <!-- Refroidissement express -->
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/refroidissementExpress.png"
                          alt="Carte Refroidissement express"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/refroidissementExpress.png', 'Refroidissement express')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Refroidissement express</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full">Conditionnelle</span>
                  </div>
                  <p class="text-sm text-gray-600">Si compteur ≥ 20 : -4, sinon -2</p>
                </div>

                <!-- Désescalade tactique -->
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/desescaladeTactique.png"
                          alt="Carte Désescalade tactique"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/desescaladeTactique.png', 'Désescalade tactique')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Désescalade tactique</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full">Conditionnelle</span>
                  </div>
                  <p class="text-sm text-gray-600">Si compteur ≤ 10 : -1, sinon -2</p>
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
                <h4 class="text-xl font-bold text-red-700 mb-4 flex items-center">
                  ⬆️ Charges (+)
                </h4>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <!-- Charge +1 -->
                  <div class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                          <img
                            src="/charge1.png"
                            alt="Carte Charge +1"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge1.png', 'Charge +1')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +1</h5>
                      </div>
                      <div class="text-right">
                        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 5</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">Augmente la valeur de la bombe de +1</p>
                  </div>

                  <!-- Charge +2 -->
                  <div class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                          <img
                            src="/charge2.png"
                            alt="Carte Charge +2"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge2.png', 'Charge +2')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +2</h5>
                      </div>
                      <div class="text-right">
                        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 6</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">Augmente la valeur de la bombe de +2</p>
                  </div>

                  <!-- Charge +3 -->
                  <div class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                          <img
                            src="/charge3.png"
                            alt="Carte Charge +3"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge3.png', 'Charge +3')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +3</h5>
                      </div>
                      <div class="text-right">
                        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 5</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">Augmente la valeur de la bombe de +3</p>
                  </div>

                  <!-- Charge +4 -->
                  <div class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                          <img
                            src="/charge4.png"
                            alt="Carte Charge +4"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge4.png', 'Charge +4')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +4</h5>
                      </div>
                      <div class="text-right">
                        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 4</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">Augmente la valeur de la bombe de +4</p>
                  </div>

                  <!-- Charge +5 -->
                  <div class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                          <img
                            src="/charge5.png"
                            alt="Carte Charge +5"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/charge5.png', 'Charge +5')"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge +5</h5>
                      </div>
                      <div class="text-right">
                        <span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 2</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">Augmente la valeur de la bombe de +5</p>
                  </div>
                </div>
              </div>

              <!-- Décharges -->
              <div class="mb-8">
                <h4 class="text-xl font-bold text-green-700 mb-4 flex items-center">
                  ⬇️ Décharges (-)
                </h4>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <!-- Décharge -1 -->
                  <div class="bg-white border border-green-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                          <img
                            src="/decharge1.png"
                            alt="Carte Décharge -1"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/decharge1.png', 'Décharge -1')"
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">Décharge -1</h5>
                      </div>
                      <div class="text-right">
                        <span class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 5</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">Diminue la valeur de la bombe de -1</p>
                  </div>

                  <!-- Décharge -2 -->
                  <div class="bg-white border border-green-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                          <img
                            src="/decharge2.png"
                            alt="Carte Décharge -2"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/decharge2.png', 'Décharge -2')"
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">Décharge -2</h5>
                      </div>
                      <div class="text-right">
                        <span class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 5</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">Diminue la valeur de la bombe de -2</p>
                  </div>

                  <!-- Décharge -3 -->
                  <div class="bg-white border border-green-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center space-x-3">
                        <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                          <img
                            src="/decharge3.png"
                            alt="Carte Décharge -3"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                            @click="openCardModal('/decharge3.png', 'Décharge -3')"
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">Décharge -3</h5>
                      </div>
                      <div class="text-right">
                        <span class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 5</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">Diminue la valeur de la bombe de -3</p>
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
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
                >
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="font-semibold text-gray-800">{{ card.name }}</h4>
                    <span class="bg-yellow-500 text-gray-800 text-xs font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0">{{ card.quantity }}</span>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">{{ card.type }}</span>
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
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/desamorceur.png"
                          alt="Carte Désamorceur"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/desamorceur.png', 'Désamorceur')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Désamorceur</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 4</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Réactive ⚡</span>
                  </div>
                  <p class="text-sm text-gray-600">Annule l'effet de la carte jouée</p>
                </div>

                <!-- Miroir -->
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/miroir.png"
                          alt="Carte Miroir"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/miroir.png', 'Miroir')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Miroir</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 4</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Réactive ⚡</span>
                  </div>
                  <p class="text-sm text-gray-600">Redirige une action contre vous ou inverse le signe (+ ↔ -)</p>
                </div>

                <!-- Surcharge -->
                <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group">
                  <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
                        <img
                          src="/surcharge.png"
                          alt="Carte Surcharge"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                          @click="openCardModal('/surcharge.png', 'Surcharge')"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">Surcharge</h4>
                    </div>
                    <div class="text-right">
                      <span class="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 3</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Réactive ⚡</span>
                  </div>
                  <p class="text-sm text-gray-600">Double la valeur de la carte (dé)charge jouée</p>
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
                  <strong>avant qu'il joue sa carte</strong>. L'effet s'applique à
                  tout le tour de table.
                </p>
              </div>

              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="event in events"
                  :key="event.name"
                  :class="event.name === 'Compte à rebours final' ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'"
                  class="border-2 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-bold text-lg"
                        :class="event.name === 'Compte à rebours final' ? 'text-red-800' : 'text-gray-800'">
                      {{ event.name }}
                    </h4>
                    <div class="text-right">
                      <span class="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">Événement</span>
                  </div>
                  <p class="text-sm text-gray-700" v-html="event.effect"></p>
                </div>
              </div>

              <div class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <p class="text-blue-800 text-sm">
                  <strong>📋 Mise en place spéciale :</strong> 
                  Piochez 9 cartes Événement au hasard. Prenez 2 cartes au hasard + la carte "Compte à rebours final", 
                  mélangez ces 3 cartes et placez-les sous la pile d'événements pour qu'elles sortent entre les tours 8 et 10.
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

              <!-- Carte Premier Joueur -->
              <div class="mb-6">
                <h4 class="text-xl font-bold text-gray-700 mb-4 flex items-center">
                  👑 Carte Premier Joueur
                </h4>
                <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-1 max-w-sm">
                  <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
                    <div class="flex justify-between items-start mb-3">
                      <h5 class="font-semibold text-gray-800">Premier Joueur</h5>
                      <div class="text-right">
                        <span class="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-3 flex justify-center">
                      <img
                        src="/premierjoueur.png"
                        alt="Carte Premier Joueur"
                        class="w-20 h-28 object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                        @click="openCardModal('/premierjoueur.png', 'Premier Joueur')"
                      />
                    </div>
                    <div class="mb-2">
                      <span class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">Système</span>
                    </div>
                    <p class="text-sm text-gray-600">Indique qui est le premier joueur et commence la partie</p>
                  </div>
                </div>
              </div>

              <!-- Cartes de Suivi de la Bombe -->
              <div class="mb-6">
                <h4 class="text-xl font-bold text-gray-700 mb-4 flex items-center">
                  💣 Cartes de Suivi de la Bombe
                </h4>
                <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
                  <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
                    <div class="flex justify-between items-start mb-3">
                      <h5 class="font-semibold text-gray-800">Piste 1</h5>
                      <div class="text-right">
                        <span class="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-3 flex justify-center">
                      <img
                        src="/piste1.png"
                        alt="Carte Piste 1"
                        class="w-28 h-20 object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer transform rotate-90"
                        @click="openCardModal('/piste1.png', 'Piste 1')"
                      />
                    </div>
                    <div class="mb-2">
                      <span class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">Système</span>
                    </div>
                    <p class="text-sm text-gray-600">Première section de la jauge de la bombe</p>
                  </div>
                  <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
                    <div class="flex justify-between items-start mb-3">
                      <h5 class="font-semibold text-gray-800">Piste 2</h5>
                      <div class="text-right">
                        <span class="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-3 flex justify-center">
                      <img
                        src="/piste2.png"
                        alt="Carte Piste 2"
                        class="w-28 h-20 object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer transform rotate-90"
                        @click="openCardModal('/piste2.png', 'Piste 2')"
                      />
                    </div>
                    <div class="mb-2">
                      <span class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">Système</span>
                    </div>
                    <p class="text-sm text-gray-600">Deuxième section de la jauge de la bombe</p>
                  </div>
                  <div class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
                    <div class="flex justify-between items-start mb-3">
                      <h5 class="font-semibold text-gray-800">Piste 3</h5>
                      <div class="text-right">
                        <span class="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">× 1</span>
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-3 flex justify-center">
                      <img
                        src="/piste3.png"
                        alt="Carte Piste 3"
                        class="w-28 h-20 object-contain group-hover:scale-105 transition-transform duration-200 cursor-pointer transform rotate-90"
                        @click="openCardModal('/piste3.png', 'Piste 3')"
                      />
                    </div>
                    <div class="mb-2">
                      <span class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">Système</span>
                    </div>
                    <p class="text-sm text-gray-600">Troisième section de la jauge de la bombe</p>
                  </div>
                </div>
              </div>

              <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                <p class="text-gray-800 text-sm">
                  <strong>ℹ️ Note :</strong> 
                  Ces éléments sont nécessaires pour le suivi et la gestion de la partie mais ne sont pas des cartes jouables.
                </p>
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
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div class="flex items-center justify-center mb-4">
                    <div class="relative">
                      <img
                        src="/demineur.png"
                        alt="Carte Démineur"
                        class="w-24 h-32 object-contain rounded-lg shadow-md border-2 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/demineur.png', 'Démineur')"
                      />
                      <div class="absolute -top-1 -right-1 w-6 h-6 bg-blue-300 text-blue-800 rounded-full flex items-center justify-center font-bold text-xs">
                        🟦
                      </div>
                    </div>
                  </div>
                  <div class="text-center text-white flex-grow flex flex-col justify-center">
                    <h3 class="text-xl font-bold mb-2">DÉMINEURS</h3>
                    <h4 class="text-lg font-semibold mb-3 text-blue-200">
                      Victoire par Élimination
                    </h4>
                    <p class="text-sm text-blue-100 leading-relaxed">
                      Empêcher l'explosion ET empêcher la victoire de l'Agent Double
                    </p>
                  </div>
                </div>
              </div>

              <!-- Saboteurs -->
              <div class="group h-full">
                <div class="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div class="flex items-center justify-center mb-4">
                    <div class="relative">
                      <img
                        src="/saboteur.png"
                        alt="Carte Saboteur"
                        class="w-24 h-32 object-contain rounded-lg shadow-md border-2 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/saboteur.png', 'Saboteur')"
                      />
                      <div class="absolute -top-1 -right-1 w-6 h-6 bg-pink-300 text-pink-800 rounded-full flex items-center justify-center font-bold text-xs">
                        🟥
                      </div>
                    </div>
                  </div>
                  <div class="text-center text-white flex-grow flex flex-col justify-center">
                    <h3 class="text-xl font-bold mb-2">SABOTEURS</h3>
                    <h4 class="text-lg font-semibold mb-3 text-pink-200">Victoire Immédiate</h4>
                    <p class="text-sm text-pink-100 leading-relaxed">
                      Faire exploser la bombe<br />(compteur ≥ seuil)
                    </p>
                  </div>
                </div>
              </div>

              <!-- Agent Double -->
              <div class="group h-full">
                <div class="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div class="flex items-center justify-center mb-4">
                    <div class="relative">
                      <img
                        src="/agentDouble.png"
                        alt="Carte Agent Double"
                        class="w-24 h-32 object-contain rounded-lg shadow-md border-2 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        @click="openCardModal('/agentDouble.png', 'Agent Double')"
                      />
                      <div class="absolute -top-1 -right-1 w-6 h-6 bg-yellow-200 text-yellow-800 rounded-full flex items-center justify-center font-bold text-xs">
                        🟨
                      </div>
                    </div>
                  </div>
                  <div class="text-center text-gray-800 flex-grow flex flex-col justify-center">
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

            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 p-8 rounded-2xl shadow-lg">
              <h4 class="font-bold text-blue-800 mb-6 text-center text-2xl">
                🎯 Cartes Objectif de l'Agent Double
              </h4>
              <p class="text-blue-700 mb-6 text-center text-lg">
                L'Agent Double doit réunir <strong>2 des 3 cartes suivantes</strong> dans sa main :
              </p>
              
              <div class="grid md:grid-cols-3 gap-6">
                <!-- Dossier classé -->
                <div class="group">
                  <div class="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div class="flex items-center justify-center mb-4">
                      <div class="relative">
                        <img
                          src="/dossierClasse.png"
                          alt="Carte Dossier classé"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          @click="openCardModal('/dossierClasse.png', 'Dossier classé')"
                        />
                        <div class="absolute -top-2 -right-2 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs">
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
                  <div class="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div class="flex items-center justify-center mb-4">
                      <div class="relative">
                        <img
                          src="/robotDeminage.png"
                          alt="Carte Robot de déminage"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          @click="openCardModal('/robotDeminage.png', 'Robot de déminage')"
                        />
                        <div class="absolute -top-2 -right-2 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs">
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
                  <div class="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div class="flex items-center justify-center mb-4">
                      <div class="relative">
                        <img
                          src="/planEvacuation.png"
                          alt="Carte Plan d'évacuation"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                          @click="openCardModal('/planEvacuation.png', 'Plan d\'évacuation')"
                        />
                        <div class="absolute -top-2 -right-2 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs">
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
                  ⚠️ Ces cartes permettent à l'Agent Double de bluffer sur son identité tout en poursuivant son objectif secret
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
                <strong>Affrontez la Machine</strong>, une IA explosive déterminée à faire sauter le compteur.
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
                <h4 class="text-lg font-bold text-blue-700 mb-4">Configuration</h4>
                <ul class="space-y-2 text-blue-700">
                  <li>• Deck IA de <strong>20 cartes</strong></li>
                  <li>• Chaque joueur pioche <strong>4 cartes</strong></li>
                  <li>• Compteur sur <strong>0</strong></li>
                  <li>• Choisir la difficulté</li>
                </ul>
              </div>
              
              <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 class="text-lg font-bold text-red-700 mb-4">Niveaux de Difficulté</h4>
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
              <div class="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 class="font-bold text-red-800 mb-2">1. Tour de la Machine (IA)</h4>
                <p class="text-red-700">L'IA pioche 1 carte de son deck et applique son effet immédiatement</p>
              </div>
              
              <div class="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h4 class="font-bold text-blue-800 mb-2">2. Tour des Joueurs</h4>
                <p class="text-blue-700">
                  <strong>En duo :</strong> chaque joueur joue 1 carte, pioche 1<br>
                  <strong>En solo :</strong> joue 2 cartes, pioche 2<br>
                  Les joueurs coopèrent librement
                </p>
              </div>
              
              <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h4 class="font-bold text-yellow-800 mb-2">3. Fin du Tour</h4>
                <p class="text-yellow-700">
                  Si le compteur ≥ seuil d'explosion → <strong>Défaite</strong><br>
                  Sinon → Continuer jusqu'à la fin des tours
                </p>
              </div>
            </div>

            <!-- Decks -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <!-- Deck IA -->
              <div>
                <h3 class="text-2xl font-bold text-orange-600 mb-6">
                  🤖 Deck IA (20 cartes)
                </h3>
                <div class="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <p class="text-sm text-red-700 mb-4">Cartes exclusivement utilisées par l'IA</p>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-red-700">Charge +1</span>
                      <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">5</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-red-700">Charge +2</span>
                      <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">4</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-red-700">Charge +3</span>
                      <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-red-700">Charge +4</span>
                      <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-red-700">Charge +5</span>
                      <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-yellow-700">Blocage</span>
                      <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-yellow-700">Seuil réduit</span>
                      <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-yellow-700">Sabotage</span>
                      <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Deck Joueur -->
              <div>
                <h3 class="text-2xl font-bold text-orange-600 mb-6">
                  🙋‍♂️ Deck Joueur (43 cartes)
                </h3>
                <div class="bg-green-50 border-2 border-green-200 rounded-lg p-4 max-h-96 overflow-y-auto">
                  <p class="text-sm text-green-700 mb-4">Cartes disponibles pour les joueurs</p>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-pink-700">Charge instable</span>
                      <span class="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-pink-700">Détonation amplifiée</span>
                      <span class="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-pink-700">Refroidissement express</span>
                      <span class="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-pink-700">Désescalade tactique</span>
                      <span class="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-red-700">Charge +2</span>
                      <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-red-700">Charge +3</span>
                      <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-red-700">Charge +4</span>
                      <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-red-700">Charge +5</span>
                      <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-green-700">Décharge -1</span>
                      <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">5</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-green-700">Décharge -2</span>
                      <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">5</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-green-700">Décharge -3</span>
                      <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">5</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-yellow-700">Blocage</span>
                      <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-yellow-700">Seuil augmenté</span>
                      <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-yellow-700">Seuil réduit</span>
                      <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-yellow-700">Contrebande</span>
                      <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">4</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-yellow-700">Manipulation</span>
                      <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-yellow-700">Pile ou Fiasco</span>
                      <span class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">1</span>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 rounded border">
                      <span class="font-medium text-purple-700">Désamorceur</span>
                      <span class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Règles spéciales -->
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
              <h4 class="font-bold text-yellow-800 mb-4">⚠️ Règles Spéciales</h4>
              <ul class="text-yellow-700 space-y-2">
                <li>• Les cartes <strong>Blocage</strong> de l'IA affectent le joueur suivant dans l'ordre</li>
                <li>• Les cartes <strong>Seuil réduit</strong> et <strong>Seuil augmenté</strong> sont fixés à <strong>±2</strong></li>
              </ul>
            </div>

            <!-- Victoire -->
            <div class="bg-green-100 border-2 border-green-500 rounded-lg p-6 text-center">
              <h4 class="text-xl font-bold text-green-800 mb-2">🎯 Condition de Victoire</h4>
              <p class="text-green-700">
                <strong>Survivez jusqu'à la fin du dernier tour</strong> sans que le compteur dépasse le seuil d'explosion !
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

            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                Merci aux premiers testeurs qui ont contribué au développement du jeu
              </h3>
              
              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white rounded-lg p-4 shadow-md text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
                  <div class="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    M
                  </div>
                  <h4 class="font-semibold text-gray-800">Mathieu Lecomte</h4>
                  <p class="text-sm text-gray-600 mt-1">Premier testeur</p>
                </div>
                
                <div class="bg-white rounded-lg p-4 shadow-md text-center border-2 border-pink-100 hover:border-pink-300 transition-colors">
                  <div class="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    A
                  </div>
                  <h4 class="font-semibold text-gray-800">Amélia Lecomte</h4>
                  <p class="text-sm text-gray-600 mt-1">Première testeuse</p>
                </div>
                
                <div class="bg-white rounded-lg p-4 shadow-md text-center border-2 border-green-100 hover:border-green-300 transition-colors">
                  <div class="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    ML
                  </div>
                  <h4 class="font-semibold text-gray-800">Malone Lecomte</h4>
                  <p class="text-sm text-gray-600 mt-1">Premier testeur</p>
                </div>
                
                <div class="bg-white rounded-lg p-4 shadow-md text-center border-2 border-yellow-100 hover:border-yellow-300 transition-colors">
                  <div class="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    LR
                  </div>
                  <h4 class="font-semibold text-gray-800">Laura Ruelle</h4>
                  <p class="text-sm text-gray-600 mt-1">Première testeuse</p>
                </div>
              </div>

              <div class="text-center mt-8 pt-6 border-t-2 border-blue-200">
                <p class="text-gray-700 text-lg">
                  Leur participation aux tests et leurs retours ont été essentiels pour peaufiner l'équilibrage du jeu et améliorer l'expérience de tous les joueurs.
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

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-8 mt-16">
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
            class="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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
  },
  {
    name: "Blocage",
    type: "Action",
    effect: "Un joueur passe complètement son prochain tour",
    quantity: 3,
  },
  {
    name: "Sabotage",
    type: "Action",
    effect:
      "Un joueur doit jouer une carte au hasard de sa main. Si c'est une carte objectif Agent Double, elle est défaussée sans effet",
    quantity: 2,
  },
  {
    name: "Seuil augmenté",
    type: "Action",
    effect:
      "Augmente le seuil d'explosion de +1 à +5 points au choix (maximum 30 points)",
    quantity: 3,
  },
  {
    name: "Seuil réduit",
    type: "Action",
    effect:
      "Réduit le seuil de -1 à -5 points au choix. Le nouveau seuil doit être au minimum à (compteur actuel +1). Obligation de baisser d'au moins 1 point",
    quantity: 3,
  },
  {
    name: "Contrebande",
    type: "Action",
    effect: "Reprend une carte au choix dans la défausse",
    quantity: 4,
  },
  {
    name: "Redistribution",
    type: "Action",
    effect: "Échange ta main avec celle d'un joueur",
    quantity: 1,
  },
  {
    name: "Manipulation",
    type: "Action",
    effect: "Voit les 3 prochaines cartes de la pioche et change l'ordre",
    quantity: 1,
  },
  {
    name: "Pile ou Fiasco",
    type: "Action",
    effect: "Lance une pièce : Pile = +3 / Face = -3",
    quantity: 1,
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
  "<strong>Assemblez la jauge :</strong> placez les 3 cartes piste côte à côte",
  "Placez le <strong>Compteur sur 0</strong> et le <strong>Seuil sur 20</strong>",
  '<strong>Désignez le premier joueur</strong> et donnez-lui la carte "Premier Joueur" qu\'il place devant lui',
  '<strong>Préparez les événements :</strong><br>• Piochez 9 cartes Événement au hasard<br>• Prenez 2 cartes au hasard + la carte "Compte à rebours final"<br>• Mélangez ces 3 cartes et placez-les <strong>sous la pile</strong> d\'événements',
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
  },
  {
    name: "Perturbation électrique",
    effect: "Personne ne pioche à la fin de son tour ce tour-ci",
  },
  {
    name: "Espionnage inversé",
    effect: "Tous les joueurs révèlent 1 carte au hasard de leur main",
  },
  {
    name: "Transparence totale",
    effect: "Pendant ce tour, toutes les cartes piochées doivent être révélées",
  },
  {
    name: "Court-circuit",
    effect:
      "Les effets Charge/Décharge sont inversés ce tour (+ devient -, - devient +)",
  },
  {
    name: "Fausse alerte",
    effect:
      "Le seuil augmente temporairement de +3. Si compteur ≥ seuil normal en fin de tour : explosion",
  },
  {
    name: "Double vision",
    effect:
      "Chaque carte (dé)charge compte double (Surcharge interdite ce tour)",
  },
  {
    name: "Panique générale",
    effect: "Chaque joueur doit jouer 2 cartes ce tour au lieu d'une",
  },
  {
    name: "Blackout",
    effect:
      "Toutes les cartes Actions (non-(dé)charge) sont interdites ce tour",
  },
  {
    name: "Chaos total",
    effect:
      "À son tour, chaque joueur pioche une carte et la joue immédiatement",
  },
  {
    name: "Inversion des rôles",
    effect: "L'ordre de jeu s'inverse pour le reste de ce tour",
  },
  {
    name: "Compte à rebours final",
    effect:
      "<strong>🚨 DERNIER TOUR !</strong> Chaque joueur joue une dernière fois, puis la partie s'arrête",
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

// Card modal functionality
const selectedCard = ref(null);
const showCardModal = ref(false);

// Mobile menu functionality
const isMobileMenuOpen = ref(false);

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
  document.body.style.overflow = 'hidden';
};

const closeCardModal = () => {
  showCardModal.value = false;
  selectedCard.value = null;
  document.body.style.overflow = 'auto';
};

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Handle escape key for modal
const handleEscape = (event) => {
  if (event.key === 'Escape' && showCardModal.value) {
    closeCardModal();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleEscape);
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
    { property: "og:type", content: "website" },
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
