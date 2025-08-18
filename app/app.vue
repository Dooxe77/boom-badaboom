<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Indicateur de connexion discret -->
    <div
      v-if="showOfflineBar"
      class="fixed top-0 left-0 right-0 z-[100] bg-red-500/95 text-white text-center py-2 px-4 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out"
    >
      <div class="flex items-center justify-center gap-3">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span class="text-sm font-medium">Mode hors ligne</span>
        </div>
        <button
          @click="checkConnection"
          :disabled="isRetrying"
          class="bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 border border-white/30"
        >
          {{ isRetrying ? "⏳ Connexion en cours..." : "🔄 Se connecter" }}
        </button>
      </div>
    </div>

    <!-- Bouton de mise à jour PWA -->
    <div
      v-if="showUpdateButton"
      class="fixed bottom-4 right-4 z-[99] bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
      @click="handleUpdate"
    >
      <div class="flex items-center gap-2">
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
        <span class="text-sm font-medium">Mise à jour</span>
      </div>
    </div>
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
          1-5 joueurs • 15-20 min • À partir de 8 ans
        </p>
        <div class="text-sm opacity-80 mb-4">
          <p>🤖 Mode Coopératif : 1-2 joueurs</p>
          <p>🎭 Mode Compétitif : 3-5 joueurs</p>
        </div>
        <p class="text-lg font-light">Bluff • Tension • Stratégie</p>

        <!-- Boutons principaux redesignés -->
        <div
          class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <!-- Bouton Démarrer une partie -->

          <button
            @click="openGameModeSelection"
            class="group relative overflow-hidden bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-[1.02] transition-all duration-300 text-lg sm:text-xl flex flex-col items-center justify-center min-w-[280px] sm:min-w-[300px] border border-red-400/30"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
            ></div>

            <div class="relative z-10">
              <div class="text-3xl sm:text-4xl mb-2">🎯</div>
              <div class="text-lg sm:text-xl font-bold tracking-wide">
                Démarrer une partie
              </div>
              <div class="text-xs sm:text-sm opacity-90 mt-1">
                Mode compteur digital
              </div>
            </div>
          </button>
        </div>

        <div class="mt-8 text-sm opacity-80">
          <p class="mb-1">⚠️ Jeu au stade prototype</p>
          <p>Créé par <strong>Anthony Ruelle</strong></p>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav
      :class="[
        'sticky z-50 bg-white shadow-lg',
        showOfflineBar ? 'top-10' : 'top-0',
      ]"
    >
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

            <!-- L'Incident de la Mine d'Argent -->
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6">
                📖 L'Incident de la Mine d'Argent
              </h3>

              <!-- L'Histoire -->
              <div
                class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 border-l-4 border-gray-500"
              >
                <h4 class="text-lg font-bold text-gray-800 mb-3">
                  📚 L'Histoire
                </h4>
                <p class="text-gray-700 leading-relaxed mb-3">
                  Une ancienne mine d'argent reconvertie en laboratoire
                  souterrain. Une expérience tourne mal, la pression monte dans
                  les cuves chimiques. L'explosion menace.
                </p>
              </div>

              <!-- Les Factions -->
              <div class="grid gap-6 mb-6">
                <!-- Les Secouristes -->
                <div
                  class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500"
                >
                  <div class="flex items-start">
                    <span class="text-3xl mr-4">🔧</span>
                    <div class="flex-1">
                      <h5 class="text-xl font-bold text-blue-800 mb-2">
                        LES SECOURISTES (démineurs actuellement)
                      </h5>
                      <div class="space-y-2">
                        <div class="flex items-center">
                          <span class="text-blue-700 font-medium text-sm mr-2"
                            >Qui :</span
                          >
                          <span class="text-blue-800 text-sm"
                            >Équipe de sécurité du laboratoire</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span class="text-blue-700 font-medium text-sm mr-2"
                            >Objectif :</span
                          >
                          <span class="text-blue-800 text-sm font-medium"
                            >Empêcher l'explosion et maintenir la sécurité</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span class="text-blue-700 font-medium text-sm mr-2"
                            >Pourquoi :</span
                          >
                          <span class="text-blue-800 text-sm italic"
                            >C'est leur travail de protéger le site et les
                            gens</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Les Saboteurs -->
                <div
                  class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500"
                >
                  <div class="flex items-start">
                    <span class="text-3xl mr-4">💥</span>
                    <div class="flex-1">
                      <h5 class="text-xl font-bold text-red-800 mb-2">
                        LES SABOTEURS
                      </h5>
                      <div class="space-y-2">
                        <div class="flex items-center">
                          <span class="text-red-700 font-medium text-sm mr-2"
                            >Qui :</span
                          >
                          <span class="text-red-800 text-sm"
                            >Personnes qui veulent détruire le laboratoire</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span class="text-red-700 font-medium text-sm mr-2"
                            >Objectif :</span
                          >
                          <span class="text-red-800 text-sm font-medium"
                            >Faire exploser les cuves</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span class="text-red-700 font-medium text-sm mr-2"
                            >Pourquoi :</span
                          >
                          <span class="text-red-800 text-sm italic"
                            >Vengeance, espionnage, ou opposition au
                            projet</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- L'Opportuniste -->
                <div
                  class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500"
                >
                  <div class="flex items-start">
                    <span class="text-3xl mr-4">🎯</span>
                    <div class="flex-1">
                      <h5 class="text-xl font-bold text-yellow-800 mb-2">
                        L'OPPORTUNISTE (agent double actuellement)
                      </h5>
                      <div class="space-y-2">
                        <div class="flex items-center">
                          <span class="text-yellow-700 font-medium text-sm mr-2"
                            >Qui :</span
                          >
                          <span class="text-yellow-800 text-sm"
                            >Journaliste local</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span class="text-yellow-700 font-medium text-sm mr-2"
                            >Objectif :</span
                          >
                          <span class="text-yellow-800 text-sm font-medium"
                            >Créer un incident contrôlé (pression entre
                            15-18)</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span class="text-yellow-700 font-medium text-sm mr-2"
                            >Pourquoi :</span
                          >
                          <span class="text-yellow-800 text-sm italic"
                            >Un petit accident fait un bon article sans
                            tragédie, parfait pour relancer sa carrière</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Le Jeu -->
              <div
                class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-purple-500"
              >
                <h4 class="text-lg font-bold text-purple-800 mb-3">
                  🎮 Le Jeu
                </h4>
                <p class="text-purple-800 leading-relaxed">
                  La pression monte dans les cuves. Si elle atteint le point de
                  rupture, tout explose. Chaque camp joue pour atteindre son
                  objectif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WIP (Work In Progress) -->
      <section id="wip" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-orange-600 border-b-4 border-orange-500 pb-4 mb-8"
            >
              🚧 Work In Progress (WIP)
            </h2>

            <div
              class="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg mb-6"
            >
              <h3 class="font-bold text-orange-800 mb-3 text-xl">
                ⚠️ Points en cours de développement
              </h3>
              <p class="text-orange-700 mb-4">
                Ces éléments sont actuellement en réflexion ou en cours de
                développement et peuvent évoluer.
              </p>
            </div>

            <div class="space-y-6">
              <!-- Groupe 1: Design & Contenu du jeu -->
              <div
                class="bg-gradient-to-br from-yellow-50 to-green-50 border-2 border-yellow-300 rounded-2xl p-6"
              >
                <div class="flex items-start space-x-4 mb-6">
                  <div
                    class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-500 to-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    1
                  </div>
                  <div class="flex-grow">
                    <h4 class="text-xl font-bold text-gray-800 mb-3">
                      🎨 Design & Contenu du Jeu
                    </h4>
                    <p class="text-gray-600 text-sm mb-4">
                      Amélioration de l'expérience de jeu et de l'immersion
                    </p>
                  </div>
                </div>

                <div class="space-y-4">
                  <!-- Nommage -->
                  <div
                    class="bg-yellow-100/50 rounded-xl p-4 border-l-4 border-yellow-400"
                  >
                    <h5
                      class="font-semibold text-yellow-800 mb-2 flex items-center"
                    >
                      🏷️ Nommage des éléments de jeu
                    </h5>
                    <p class="text-yellow-700 text-sm leading-relaxed">
                      Réflexion en cours sur la terminologie :
                      <strong>Compteur x Seuil</strong> VS
                      <strong>Pression x Point de rupture</strong> ? L'objectif
                      est de trouver des termes plus immersifs et intuitifs.
                    </p>
                  </div>

                  <!-- Refonte descriptions -->
                  <div
                    class="bg-green-100/50 rounded-xl p-4 border-l-4 border-green-400"
                  >
                    <h5
                      class="font-semibold text-green-800 mb-2 flex items-center"
                    >
                      📝 Refonte des descriptions de cartes
                    </h5>
                    <p class="text-green-700 text-sm leading-relaxed">
                      Amélioration et
                      <strong>unification des descriptions</strong> de toutes
                      les cartes. Objectif : rendre les effets plus clairs et
                      plus cohérents.
                    </p>
                  </div>

                  <!-- Thématisation -->
                  <div
                    class="bg-indigo-100/50 rounded-xl p-4 border-l-4 border-indigo-400"
                  >
                    <h5
                      class="font-semibold text-indigo-800 mb-2 flex items-center"
                    >
                      🎭 Thématisation du jeu
                    </h5>
                    <p class="text-indigo-700 text-sm leading-relaxed">
                      <strong>Développement narratif</strong> pour enrichir
                      l'univers du jeu. Création d'actions et d'effets en
                      rapport avec l'histoire de la mine d'argent.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Groupe 2: Modes avec IA -->
              <div
                class="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-2xl p-6"
              >
                <div class="flex items-start space-x-4 mb-6">
                  <div
                    class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg"
                  >
                    2
                  </div>
                  <div class="flex-grow">
                    <h4 class="text-xl font-bold text-gray-800 mb-3">
                      🤖 Modes avec Intelligence Artificielle
                    </h4>
                    <p class="text-gray-600 text-sm mb-4">
                      Développement et amélioration des modes de jeu contre l'IA
                    </p>
                  </div>
                </div>

                <div class="space-y-4">
                  <!-- Mode coop -->
                  <div
                    class="bg-blue-100/50 rounded-xl p-4 border-l-4 border-blue-400"
                  >
                    <h5
                      class="font-semibold text-blue-800 mb-2 flex items-center"
                    >
                      🤖 Développement du Mode Coopératif
                    </h5>
                    <p class="text-blue-700 text-sm leading-relaxed">
                      Création d'une application dédiée pour le
                      <strong>mode coopératif</strong> avec IA. Permettra aux
                      joueurs de jouer seuls ou à deux contre une intelligence
                      artificielle.
                    </p>
                  </div>

                  <!-- Mode vs IA -->
                  <div
                    class="bg-purple-100/50 rounded-xl p-4 border-l-4 border-purple-400"
                  >
                    <h5
                      class="font-semibold text-purple-800 mb-2 flex items-center"
                    >
                      🎯 Ajustement du mode vs IA
                    </h5>
                    <p class="text-purple-700 text-sm leading-relaxed">
                      <strong>Équilibrage et amélioration</strong> du mode de
                      jeu contre l'IA. Ajustement des niveaux de difficulté et
                      optimisation des stratégies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="mt-8 p-4 bg-gray-50 rounded-lg border-2 border-gray-200"
            >
              <p class="text-gray-600 text-sm text-center">
                💬 <strong>Vos retours sont les bienvenus !</strong> Ces points
                évoluent en fonction des tests et des retours des joueurs.
              </p>
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
                  <li><strong>112 cartes</strong></li>
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
                    <strong>Joueurs :</strong> 1-2 (Coopératif) / 3-5
                    (Compétitif)
                  </li>
                  <li><strong>Âge :</strong> À partir de 8 ans</li>
                  <li><strong>Durée :</strong> 15-20 minutes</li>
                  <li><strong>Genre :</strong> Bluff, Tension, Stratégie</li>
                </ul>
              </div>
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

            <ol class="space-y-4 sm:space-y-6">
              <li
                v-for="(step, index) in setupSteps"
                :key="index"
                class="flex items-start space-x-3 sm:space-x-4"
              >
                <div
                  class="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base"
                >
                  {{ index + 1 }}
                </div>
                <div class="flex-1 min-w-0">
                  <div
                    class="text-gray-700 text-sm sm:text-base"
                    v-html="step"
                  ></div>
                </div>
              </li>
            </ol>
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
                  peut plus reconstituer sa main (on termine le tour en cours)
                </li>
              </ul>
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
                  class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                >
                  <div class="flex items-center justify-center mb-6">
                    <div class="relative">
                      <img
                        src="/demineur.png"
                        alt="Carte Démineur"
                        loading="lazy"
                        class="w-32 h-44 object-contain rounded-xl shadow-lg border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                        @click="openCardModal('/demineur.png', 'Démineur')"
                      />
                      <div
                        class="absolute -top-2 -right-2 w-8 h-8 bg-blue-300 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm"
                      >
                        🟦
                      </div>
                    </div>
                  </div>
                  <div class="text-center text-white flex-grow flex flex-col">
                    <h4 class="text-2xl font-bold mb-4">DÉMINEURS</h4>
                    <div class="px-2">
                      <div
                        class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400"
                      >
                        <p class="text-sm text-blue-600 font-medium mb-1">
                          Objectif :
                        </p>
                        <p class="text-blue-800 text-sm leading-relaxed">
                          Empêcher l'explosion <strong>ET</strong> empêcher
                          l'Agent Double de remplir son objectif
                        </p>
                      </div>
                    </div>
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
                        class="w-32 h-44 object-contain rounded-xl shadow-lg border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                        @click="openCardModal('/saboteur.png', 'Saboteur')"
                      />
                      <div
                        class="absolute -top-2 -right-2 w-8 h-8 bg-pink-300 text-pink-800 rounded-full flex items-center justify-center font-bold text-sm"
                      >
                        🟥
                      </div>
                    </div>
                  </div>
                  <div class="text-center text-white flex-grow flex flex-col">
                    <h4 class="text-2xl font-bold mb-4">SABOTEURS</h4>
                    <div class="px-2">
                      <div
                        class="bg-red-50 rounded-lg p-3 border-l-4 border-red-400"
                      >
                        <p class="text-sm text-red-600 font-medium mb-1">
                          Objectif :
                        </p>
                        <p class="text-red-800 text-sm leading-relaxed">
                          Faire <strong>exploser la bombe</strong> (compteur ≥
                          seuil)
                        </p>
                      </div>
                    </div>
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
                        class="w-32 h-44 object-contain rounded-xl shadow-lg border-4 border-white/20 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
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
                    <h4 class="text-2xl font-bold mb-4">AGENT DOUBLE</h4>
                    <div class="px-2">
                      <div
                        class="bg-gray-100 rounded-lg p-3 border-l-4 border-yellow-500"
                      >
                        <p class="text-sm text-gray-600 font-medium mb-2">
                          Objectif :
                        </p>
                        <div class="space-y-2">
                          <p class="text-gray-700 text-sm leading-relaxed">
                            Gagne
                            <strong>immédiatement pendant son tour</strong> si :
                            <strong
                              >au moins 2 cartes objectifs en main
                            </strong>
                            <strong>ET</strong> compteur entre
                            <strong>15-18</strong>
                          </p>
                        </div>
                      </div>
                    </div>
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

              <div class="grid md:grid-cols-5 gap-6">
                <!-- Dossier classé -->
                <div class="group">
                  <div
                    class="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div class="flex items-center justify-center mb-6">
                      <div class="relative">
                        <img
                          src="/dossierClasse.png"
                          alt="Carte Dossier classé"
                          loading="lazy"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
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
                    <div class="flex items-center justify-center mb-6">
                      <div class="relative">
                        <img
                          src="/robotDeminage.png"
                          alt="Carte Robot de déminage"
                          loading="lazy"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
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
                    <div class="flex items-center justify-center mb-6">
                      <div class="relative">
                        <img
                          src="/planEvacuation.png"
                          alt="Carte Plan d'évacuation"
                          loading="lazy"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
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

                <!-- Neutralisation chimique -->
                <div class="group">
                  <div
                    class="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div class="flex items-center justify-center mb-6">
                      <div class="relative">
                        <img
                          src="/neutralisationChimique.png"
                          alt="Carte Neutralisation chimique"
                          loading="lazy"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/neutralisationChimique.png',
                              'Neutralisation chimique'
                            )
                          "
                        />
                        <div
                          class="absolute -top-2 -right-2 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs"
                        >
                          🧪
                        </div>
                      </div>
                    </div>
                    <div class="text-center text-gray-800">
                      <h5 class="text-lg font-bold">Neutralisation chimique</h5>
                    </div>
                  </div>
                </div>

                <!-- Schéma électrique -->
                <div class="group">
                  <div
                    class="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div class="flex items-center justify-center mb-6">
                      <div class="relative">
                        <img
                          src="/schemaElectrique.png"
                          alt="Carte Schéma électrique"
                          loading="lazy"
                          class="w-24 h-32 object-contain rounded-xl shadow-lg border-4 border-white/30 group-hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/schemaElectrique.png',
                              'Schéma électrique'
                            )
                          "
                        />
                        <div
                          class="absolute -top-2 -right-2 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center font-bold text-xs"
                        >
                          ⚡
                        </div>
                      </div>
                    </div>
                    <div class="text-center text-gray-800">
                      <h5 class="text-lg font-bold">Schéma électrique</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 text-center">
                <p class="text-blue-700 font-medium">
                  ⚠️ L'Agent Double doit avoir au moins 2 de ces cartes en main
                  ET que le compteur soit entre 15-18 pendant SON tour pour
                  gagner immédiatement
                </p>
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
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/demineur.png"
                          alt="Carte Démineur"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/saboteur.png"
                          alt="Carte Saboteur"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/agentDouble.png"
                          alt="Carte Agent Double"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                    🎯 Gagner immédiatement pendant son tour si : 2+ cartes
                    objectifs en main ET compteur 15-18
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
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <!-- Dossier classé -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/dossierClasse.png"
                          alt="Carte Dossier classé"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                        class="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                      >Bluff & Objectif</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Nécessaire pour la victoire immédiate de l'Agent Double
                    (compteur 15-18)
                  </p>
                </div>

                <!-- Robot de déminage -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/robotDeminage.png"
                          alt="Carte Robot de déminage"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                        class="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                      >Bluff & Objectif</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Nécessaire pour la victoire immédiate de l'Agent Double
                    (compteur 15-18)
                  </p>
                </div>

                <!-- Plan d'évacuation -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/planEvacuation.png"
                          alt="Carte Plan d'évacuation"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                        class="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                      >Bluff & Objectif</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Nécessaire pour la victoire immédiate de l'Agent Double
                    (compteur 15-18)
                  </p>
                </div>

                <!-- Neutralisation chimique -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/neutralisationChimique.png"
                          alt="Carte Neutralisation chimique"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/neutralisationChimique.png',
                              'Neutralisation chimique'
                            )
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        Neutralisation chimique
                      </h4>
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
                      class="inline-block bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                      >Bluff & Objectif</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Nécessaire pour la victoire immédiate de l'Agent Double
                    (compteur 15-18)
                  </p>
                </div>

                <!-- Schéma électrique -->
                <div
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/schemaElectrique.png"
                          alt="Carte Schéma électrique"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/schemaElectrique.png',
                              'Schéma électrique'
                            )
                          "
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        Schéma électrique
                      </h4>
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
                      class="inline-block bg-yellow-500 text-white text-xs font-medium px-3 py-1 rounded-full"
                      >Bluff & Objectif</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Nécessaire pour la victoire immédiate de l'Agent Double
                    (compteur 15-18)
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
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge1.png"
                            alt="Carte Charge +1"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge2.png"
                            alt="Carte Charge +2"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge3.png"
                            alt="Carte Charge +3"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge4.png"
                            alt="Carte Charge +4"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/charge5.png"
                            alt="Carte Charge +5"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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

                  <!-- X -->
                  <div
                    class="bg-white border border-red-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/chargeX.png"
                            alt="Carte Charge X"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/chargeX.png',
                                'XCartes Action Réactives'
                              )
                            "
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Charge X</h5>
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
                      Valeur mystère déterminée par tirage de carte système au
                      hasard
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
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/decharge1.png"
                            alt="Carte Décharge -1"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/decharge2.png"
                            alt="Carte Décharge -2"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                    class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/decharge3.png"
                            alt="Carte Décharge -3"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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

                  <!-- Décharge X -->
                  <div
                    class="bg-white border border-green-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/dechargeX.png"
                            alt="Carte Décharge X"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal('/dechargeX.png', 'Décharge X')
                            "
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">Décharge X</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <p class="text-sm text-gray-600">
                      Valeur mystère déterminée par tirage de carte système au
                      hasard
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
                    >être jouées n'importe quand mais que contre des cartes
                    d'autres joueurs</strong
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
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/action_desamorceur.png"
                          alt="Carte Désamorceur"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/action_desamorceur.png',
                              'Désamorceur'
                            )
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
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/action_miroir.png"
                          alt="Carte Miroir"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="openCardModal('/action_miroir.png', 'Miroir')"
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
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/action_surcharge.png"
                          alt="Carte Surcharge"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal('/action_surcharge.png', 'Surcharge')
                          "
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
                    Double la valeur de la carte (dé)charge ou seuil jouée
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
                      <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                          <div
                            class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                          >
                            <img
                              src="/premierjoueur.png"
                              alt="Carte Premier Joueur"
                              loading="lazy"
                              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                      <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                          <div
                            class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                          >
                            <img
                              src="/piste1.png"
                              alt="Carte Piste 1"
                              loading="lazy"
                              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                      <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                          <div
                            class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                          >
                            <img
                              src="/piste2.png"
                              alt="Carte Piste 2"
                              loading="lazy"
                              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                      <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                          <div
                            class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                          >
                            <img
                              src="/piste3.png"
                              alt="Carte Piste 3"
                              loading="lazy"
                              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
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
                      valeurs aléatoires des cartes Seuil et autres effets
                      nécessitant un tirage au hasard.
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
                            src="/sys_1.png"
                            alt="Carte Système 1"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="openCardModal('/sys_1.png', 'Système 1')"
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
                            src="/sys_2.png"
                            alt="Carte Système 2"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="openCardModal('/sys_2.png', 'Système 2')"
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
                            src="/sys_3.png"
                            alt="Carte Système 3"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="openCardModal('/sys_3.png', 'Système 3')"
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
                            src="/sys_4.png"
                            alt="Carte Système 4"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="openCardModal('/sys_4.png', 'Système 4')"
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
                            src="/sys_5.png"
                            alt="Carte Système 5"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="openCardModal('/sys_5.png', 'Système 5')"
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

            <div class="text-center bg-gray-100 p-4 rounded-lg">
              <p class="text-lg font-bold text-gray-700">
                📊 TOTAL CARTES : 112 cartes
              </p>
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

            <!-- Decks -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <!-- Deck IA -->
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
                          src="/charge1.png"
                          alt="Charge +1"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          src="/chargeX.png"
                          alt="Charge X"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/chargeX.png', 'Charge X')"
                        />
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
                          src="/action_blocage.png"
                          alt="Blocage"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                  🙋‍♂️ Deck Joueur (51 cartes)
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
                          src="/charge2.png"
                          alt="Charge +2"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          src="/dechargeX.png"
                          alt="Décharge X"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/dechargeX.png', 'Décharge X')"
                        />
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
                          src="/action_blocage.png"
                          alt="Blocage"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
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
                          src="/action_desamorceur.png"
                          alt="Désamorceur"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/action_desamorceur.png',
                              'Désamorceur'
                            )
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
                <h3 class="text-lg font-bold text-gray-800 mb-4">
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
              class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200"
            >
              <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">
                Merci aux contributeurs du projet
              </h3>

              <!-- Grille fixe avec taille homogène -->
              <div
                class="grid grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
              >
                <!-- Laura Ruelle -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      LR
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Laura</div>
                      <div>Ruelle</div>
                    </h4>
                  </div>
                </div>

                <!-- Mathieu Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      ML
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Mathieu</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Amélia Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      AL
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Amélia</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Malone Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      MA
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Malone</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Hugues Ruelle -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      HR
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Hugues</div>
                      <div>Ruelle</div>
                    </h4>
                  </div>
                </div>

                <!-- Evelyne Ruelle -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      ER
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Evelyne</div>
                      <div>Ruelle</div>
                    </h4>
                  </div>
                </div>

                <!-- Julie Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      JL
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Julie</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Marie Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      MC
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Marie</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Oscar Verquin -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      OV
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Oscar</div>
                      <div>Verquin</div>
                    </h4>
                  </div>
                </div>

                <!-- Thibaut Debruille -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      TD
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Thibaut</div>
                      <div>Debruille</div>
                    </h4>
                  </div>
                </div>

                <!-- Paulyne Meermans -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      PM
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Paulyne</div>
                      <div>Meermans</div>
                    </h4>
                  </div>
                </div>
              </div>

              <!-- Message de remerciement simple -->
              <div class="text-center">
                <p class="text-gray-700 font-medium">
                  Leurs retours ont permis d'affiner et d'équilibrer le jeu
                </p>
                <p class="text-red-600 font-bold mt-2">Merci à tous ! 🎉</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Refonte Thématique -->
      <section
        id="refonte-thematique"
        class="mb-12"
        v-show="showRefonteSection"
      >
        <div
          class="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-amber-400 border-b-4 border-amber-500 pb-4 mb-8"
            >
              🎭 Refonte Thématique - Mine d'Argent
            </h2>

            <div
              class="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl mb-8"
            >
              <h3 class="text-2xl font-bold mb-4">
                L'Incident de la Mine d'Argent
              </h3>
              <p class="text-lg mb-4">
                <strong
                  >Adaptation complète de toutes les cartes pour s'intégrer dans
                  l'univers narratif</strong
                >
              </p>
              <p class="opacity-90">
                De "Charge +1" à "Fuite mineure", de "Agent Double" à
                "L'Opportuniste" - chaque carte a été repensée pour créer une
                expérience immersive cohérente.
              </p>
            </div>

            <!-- Section Cartes Charge -->
            <div id="refonte-charges" class="mb-12">
              <div
                class="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-6 mb-6"
              >
                <h3
                  class="text-2xl font-bold text-white mb-4 flex items-center"
                >
                  🔥 Cartes Charge - Incidents qui augmentent la pression
                </h3>
              </div>

              <div class="grid gap-4">
                <div
                  v-for="card in chargeCards"
                  :key="card.ancien"
                  class="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <h4 class="text-red-300 font-bold">
                        📜 {{ card.ancien }}
                      </h4>
                      <p class="text-red-200 text-sm italic">
                        {{ card.ancienneDesc }}
                      </p>
                    </div>
                    <div class="space-y-2">
                      <h4 class="text-amber-300 font-bold">
                        ⚡ {{ card.nouveau }}
                      </h4>
                      <p class="text-amber-100 text-sm">
                        {{ card.nouvelleDesc }}
                      </p>
                      <div class="flex items-center justify-between mt-2">
                        <span
                          class="bg-amber-500 text-black px-2 py-1 rounded text-xs font-bold"
                          >{{ card.type }}</span
                        >
                        <span class="text-gray-400 text-xs"
                          >Quantité: {{ card.quantite }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Cartes Décharge -->
            <div id="refonte-decharges" class="mb-12">
              <div
                class="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 mb-6"
              >
                <h3
                  class="text-2xl font-bold text-white mb-4 flex items-center"
                >
                  ❄️ Cartes Décharge - Interventions qui réduisent la pression
                </h3>
              </div>

              <div class="grid gap-4">
                <div
                  v-for="card in dechargeCards"
                  :key="card.ancien"
                  class="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <h4 class="text-blue-300 font-bold">
                        📜 {{ card.ancien }}
                      </h4>
                      <p class="text-blue-200 text-sm italic">
                        {{ card.ancienneDesc }}
                      </p>
                    </div>
                    <div class="space-y-2">
                      <h4 class="text-cyan-300 font-bold">
                        🛡️ {{ card.nouveau }}
                      </h4>
                      <p class="text-cyan-100 text-sm">
                        {{ card.nouvelleDesc }}
                      </p>
                      <div class="flex items-center justify-between mt-2">
                        <span
                          class="bg-cyan-500 text-black px-2 py-1 rounded text-xs font-bold"
                          >{{ card.type }}</span
                        >
                        <span class="text-gray-400 text-xs"
                          >Quantité: {{ card.quantite }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Cartes Objectifs -->
            <div id="refonte-objectifs" class="mb-12">
              <div
                class="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 mb-6"
              >
                <h3
                  class="text-2xl font-bold text-white mb-4 flex items-center"
                >
                  🎯 Cartes Objectifs de l'Opportuniste (Journaliste)
                </h3>
              </div>

              <div class="grid gap-4">
                <div
                  v-for="card in objectifCards"
                  :key="card.ancien"
                  class="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <h4 class="text-purple-300 font-bold">
                        📜 {{ card.ancien }}
                      </h4>
                      <p class="text-purple-200 text-sm italic">
                        {{ card.ancienneDesc }}
                      </p>
                    </div>
                    <div class="space-y-2">
                      <h4 class="text-indigo-300 font-bold">
                        📸 {{ card.nouveau }}
                      </h4>
                      <p class="text-indigo-100 text-sm">
                        {{ card.nouvelleDesc }}
                      </p>
                      <div class="flex items-center justify-between mt-2">
                        <span
                          class="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-bold"
                          >{{ card.type }}</span
                        >
                        <span class="text-gray-400 text-xs"
                          >Quantité: {{ card.quantite }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Cartes Action Offensives -->
            <div id="refonte-actions-offensives" class="mb-12">
              <div
                class="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-6 mb-6"
              >
                <h3
                  class="text-2xl font-bold text-white mb-4 flex items-center"
                >
                  ⚔️ Cartes Action Offensives (Jaunes)
                </h3>
              </div>

              <div class="grid gap-4">
                <div
                  v-for="card in actionOffensiveCards"
                  :key="card.ancien"
                  class="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <h4 class="text-yellow-300 font-bold">
                        📜 {{ card.ancien }}
                      </h4>
                      <p class="text-yellow-200 text-sm italic">
                        {{ card.ancienneDesc }}
                      </p>
                    </div>
                    <div class="space-y-2">
                      <h4 class="text-orange-300 font-bold">
                        🔧 {{ card.nouveau }}
                      </h4>
                      <p class="text-orange-100 text-sm">
                        {{ card.nouvelleDesc }}
                      </p>
                      <div class="flex items-center justify-between mt-2">
                        <span
                          class="bg-orange-500 text-black px-2 py-1 rounded text-xs font-bold"
                          >{{ card.type }}</span
                        >
                        <span class="text-gray-400 text-xs"
                          >Quantité: {{ card.quantite }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Cartes Action Réactives -->
            <div id="refonte-actions-reactives" class="mb-12">
              <div
                class="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-6 mb-6"
              >
                <h3
                  class="text-2xl font-bold text-white mb-4 flex items-center"
                >
                  ⚡ Cartes Action Réactives (Rouges)
                </h3>
              </div>

              <div class="grid gap-4">
                <div
                  v-for="card in actionReactiveCards"
                  :key="card.ancien"
                  class="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <h4 class="text-red-300 font-bold">
                        📜 {{ card.ancien }}
                      </h4>
                      <p class="text-red-200 text-sm italic">
                        {{ card.ancienneDesc }}
                      </p>
                    </div>
                    <div class="space-y-2">
                      <h4 class="text-rose-300 font-bold">
                        ⚡ {{ card.nouveau }}
                      </h4>
                      <p class="text-rose-100 text-sm">
                        {{ card.nouvelleDesc }}
                      </p>
                      <div class="flex items-center justify-between mt-2">
                        <span
                          class="bg-rose-500 text-white px-2 py-1 rounded text-xs font-bold"
                          >{{ card.type }}</span
                        >
                        <span class="text-gray-400 text-xs"
                          >Quantité: {{ card.quantite }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Cartes Événements -->
            <div id="refonte-evenements" class="mb-12">
              <div
                class="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-6 mb-6"
              >
                <h3
                  class="text-2xl font-bold text-white mb-4 flex items-center"
                >
                  🌪️ Cartes Événements
                </h3>
              </div>

              <div class="grid gap-4">
                <div
                  v-for="card in evenementCards"
                  :key="card.ancien"
                  class="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <h4 class="text-teal-300 font-bold">
                        📜 {{ card.ancien }}
                      </h4>
                      <p class="text-teal-200 text-sm italic">
                        {{ card.ancienneDesc }}
                      </p>
                    </div>
                    <div class="space-y-2">
                      <h4 class="text-emerald-300 font-bold">
                        ⚠️ {{ card.nouveau }}
                      </h4>
                      <p class="text-emerald-100 text-sm">
                        {{ card.nouvelleDesc }}
                      </p>
                      <div class="flex items-center justify-between mt-2">
                        <span
                          class="bg-emerald-500 text-black px-2 py-1 rounded text-xs font-bold"
                          >{{ card.type }}</span
                        >
                        <span class="text-gray-400 text-xs"
                          >Quantité: {{ card.quantite }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section Cartes Système -->
            <div id="refonte-systeme" class="mb-12">
              <div
                class="bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl p-6 mb-6"
              >
                <h3
                  class="text-2xl font-bold text-white mb-4 flex items-center"
                >
                  ⚙️ Cartes Système - Interprétation Narrative
                </h3>
              </div>

              <div class="grid gap-4">
                <div
                  v-for="card in systemCards"
                  :key="card.nom"
                  class="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <h4 class="text-gray-300 font-bold">📜 {{ card.nom }}</h4>
                      <p class="text-gray-200 text-sm italic">
                        {{ card.description }}
                      </p>
                    </div>
                    <div class="space-y-2">
                      <h4 class="text-amber-300 font-bold">
                        🏭 {{ card.thematique }}
                      </h4>
                      <p class="text-amber-100 text-sm">
                        {{ card.descriptionThematique }}
                      </p>
                      <div class="flex items-center justify-between mt-2">
                        <span
                          class="bg-gray-500 text-white px-2 py-1 rounded text-xs font-bold"
                          >{{ card.type }}</span
                        >
                        <span class="text-gray-400 text-xs"
                          >Quantité: {{ card.quantite }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 bg-blue-900 bg-opacity-50 rounded-xl p-4">
                <h5 class="text-blue-300 font-bold mb-2">
                  💡 Note sur les Cartes Système
                </h5>
                <p class="text-blue-200 text-sm">
                  Les cartes système conservent leur fonction mécanique
                  originale car elles sont essentielles au gameplay. Seule
                  l'interprétation narrative change :
                  <strong>l'Agent Double devient "L'Opportuniste"</strong> - un
                  journaliste cherchant à documenter l'incident pour en faire un
                  scoop médiatique.
                </p>
              </div>
            </div>

            <!-- Récapitulatif -->
            <div
              class="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center"
            >
              <h3 class="text-2xl font-bold text-white mb-6">
                📊 Récapitulatif de la Refonte
              </h3>

              <div
                class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"
              >
                <div class="bg-white bg-opacity-20 rounded-xl p-4">
                  <div class="text-3xl mb-2">🔥</div>
                  <div class="text-xl font-bold text-white">24</div>
                  <div class="text-green-200 text-xs">Charges</div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-xl p-4">
                  <div class="text-3xl mb-2">❄️</div>
                  <div class="text-xl font-bold text-white">17</div>
                  <div class="text-green-200 text-xs">Décharges</div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-xl p-4">
                  <div class="text-3xl mb-2">🎯</div>
                  <div class="text-xl font-bold text-white">5</div>
                  <div class="text-green-200 text-xs">Objectifs</div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-xl p-4">
                  <div class="text-3xl mb-2">⚔️</div>
                  <div class="text-xl font-bold text-white">24</div>
                  <div class="text-green-200 text-xs">Actions Off.</div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-xl p-4">
                  <div class="text-3xl mb-2">⚡</div>
                  <div class="text-xl font-bold text-white">11</div>
                  <div class="text-green-200 text-xs">Actions Réact.</div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-xl p-4">
                  <div class="text-3xl mb-2">🌪️</div>
                  <div class="text-xl font-bold text-white">15</div>
                  <div class="text-green-200 text-xs">Événements</div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-white bg-opacity-10 rounded-xl p-4">
                  <div class="text-4xl mb-2">🎭</div>
                  <div class="text-3xl font-bold text-white">96</div>
                  <div class="text-green-200 text-sm">Cartes Principales</div>
                </div>
                <div class="bg-white bg-opacity-10 rounded-xl p-4">
                  <div class="text-4xl mb-2">⚙️</div>
                  <div class="text-3xl font-bold text-white">15</div>
                  <div class="text-green-200 text-sm">Cartes Système</div>
                </div>
              </div>

              <div class="bg-white bg-opacity-20 rounded-xl p-6 mb-6">
                <div class="text-5xl mb-3">🏭</div>
                <div class="text-4xl font-bold text-white">111</div>
                <div class="text-green-200 text-lg">
                  Total Cartes Mine d'Argent
                </div>
              </div>

              <div class="bg-white bg-opacity-10 rounded-xl p-6">
                <p class="text-green-100 text-lg">
                  <strong>✅ Refonte complète terminée !</strong><br />
                  Toutes les cartes ont été adaptées au thème de l'Incident de
                  la Mine d'Argent
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
              <div class="text-white text-sm opacity-70 mt-1">
                👥 {{ playerCount }} joueur{{ playerCount > 1 ? "s" : "" }}
              </div>
              <div
                v-if="turnNumber > 0"
                class="text-white text-xs opacity-50 mt-1"
              >
                <span
                  v-if="finalCountdownRevealed"
                  class="text-red-300 font-bold"
                  >🚨 DERNIER TOUR 🚨</span
                >
                <span v-else
                  >Tour {{ turnNumber }} |
                  {{
                    eventDeck.length > 0
                      ? eventDeck.length + " événements max restants"
                      : "Tous les événements révélés"
                  }}</span
                >
              </div>
            </div>

            <div class="flex space-x-2">
              <button
                @click="finalCountdownRevealed ? endGame() : drawNextEvent()"
                :disabled="
                  gameOver ||
                  (eventDeck.length === 0 && !finalCountdownRevealed)
                "
                :class="{
                  'bg-purple-500 hover:bg-purple-600':
                    !gameOver &&
                    eventDeck.length > 0 &&
                    !finalCountdownRevealed,
                  'bg-red-500 hover:bg-red-600':
                    !gameOver && finalCountdownRevealed,
                  'bg-gray-600 opacity-50 cursor-not-allowed':
                    gameOver ||
                    (eventDeck.length === 0 && !finalCountdownRevealed),
                }"
                class="text-white px-2 sm:px-3 py-2 rounded-lg font-bold transition-colors text-xs sm:text-sm flex items-center space-x-1"
              >
                <span>🎲</span>
                <span class="hidden xs:inline sm:inline">
                  {{
                    finalCountdownRevealed
                      ? "Fin de partie"
                      : eventDeck.length > 0
                      ? "Nouveau Tour"
                      : "Plus d'événements"
                  }}
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
                <div
                  class="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white whitespace-nowrap"
                >
                  💀 SEUIL
                </div>
                <!-- Flèche pointant vers le bas -->
                <div
                  class="w-0 h-0 border-l-3 border-r-3 border-t-5 border-l-transparent border-r-transparent border-t-red-500 mx-auto mt-1"
                ></div>
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
              <div
                class="absolute inset-1 rounded-full bg-gradient-to-t from-red-800 to-red-400 opacity-80"
              ></div>

              <!-- Contenu du pion - Seulement le chiffre -->
              <div class="relative text-white font-bold text-center z-10">
                <div class="text-2xl md:text-3xl font-black drop-shadow-lg">
                  {{ thresholdValue }}
                </div>
              </div>

              <!-- Effet de brillance -->
              <div
                class="absolute top-2 left-3 w-3 h-3 md:w-4 md:h-4 bg-white bg-opacity-40 rounded-full blur-sm"
              ></div>

              <!-- Pulse ring pour l'attention -->
              <div
                class="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping"
              ></div>
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
                    'bg-orange-500':
                      counterValue >= thresholdValue - 3 &&
                      counterValue < thresholdValue,
                    'bg-red-600': counterValue >= thresholdValue,
                  }"
                >
                  {{
                    counterValue < thresholdValue - 3
                      ? "💣 COMPTEUR"
                      : counterValue >= thresholdValue
                      ? "💥 BOOM"
                      : "⚠️ DANGER"
                  }}
                </div>
                <!-- Flèche pointant vers le bas - couleur dynamique -->
                <div
                  class="w-0 h-0 border-l-3 border-r-3 border-t-5 border-l-transparent border-r-transparent mx-auto mt-1 transition-all duration-300"
                  :class="{
                    'border-t-blue-500': counterValue < thresholdValue - 3,
                    'border-t-orange-500':
                      counterValue >= thresholdValue - 3 &&
                      counterValue < thresholdValue,
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
                'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700':
                  counterValue < thresholdValue - 3,
                'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600':
                  counterValue >= thresholdValue - 3 &&
                  counterValue < thresholdValue,
                'bg-gradient-to-br from-red-500 via-red-600 to-red-800':
                  counterValue >= thresholdValue,
              }"
            >
              <!-- Cercle intérieur avec effet de profondeur -->
              <div
                class="absolute inset-1 rounded-full opacity-80"
                :class="{
                  'bg-gradient-to-t from-blue-800 to-blue-400':
                    counterValue < thresholdValue - 3,
                  'bg-gradient-to-t from-orange-800 to-yellow-400':
                    counterValue >= thresholdValue - 3 &&
                    counterValue < thresholdValue,
                  'bg-gradient-to-t from-red-900 to-red-500':
                    counterValue >= thresholdValue,
                }"
              ></div>

              <!-- Contenu du pion - Seulement le chiffre -->
              <div class="relative text-white font-bold text-center z-10">
                <div class="text-2xl md:text-3xl font-black drop-shadow-lg">
                  {{ counterValue }}
                </div>
              </div>

              <!-- Effet de brillance -->
              <div
                class="absolute top-2 left-3 w-3 h-3 md:w-4 md:h-4 bg-white bg-opacity-40 rounded-full blur-sm"
              ></div>

              <!-- Pulse ring conditionnel -->
              <div
                v-if="counterValue >= thresholdValue - 3"
                class="absolute inset-0 rounded-full opacity-40 animate-ping"
                :class="{
                  'bg-yellow-500':
                    counterValue >= thresholdValue - 3 &&
                    counterValue < thresholdValue,
                  'bg-red-500': counterValue >= thresholdValue,
                }"
              ></div>

              <!-- Glow effect quand proche du seuil -->
              <div
                v-if="counterValue >= thresholdValue - 2"
                class="absolute inset-0 rounded-full"
                :style="{
                  filter:
                    counterValue >= thresholdValue
                      ? 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.8))'
                      : 'drop-shadow(0 0 16px rgba(234, 179, 8, 0.6))',
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
            <div
              v-if="
                currentEvent && currentEvent.name !== 'Compte à rebours final'
              "
              class="mb-4 p-3 bg-purple-900 bg-opacity-50 border border-purple-400 rounded-lg"
            >
              <div class="text-purple-200 text-xs mb-1">
                🎲 Événement actuel
              </div>
              <div class="text-yellow-300 font-bold text-sm mb-1">
                {{ currentEvent.name }}
              </div>
              <div
                class="text-white text-xs opacity-90"
                v-html="currentEvent.effect"
              ></div>
            </div>

            <!-- Événement final -->
            <div
              v-if="
                currentEvent && currentEvent.name === 'Compte à rebours final'
              "
              class="mb-4 p-3 bg-red-900 bg-opacity-70 border-2 border-red-500 rounded-lg"
            >
              <div class="text-red-200 text-xs mb-1">🚨 Événement spécial</div>
              <div class="text-yellow-300 font-bold text-sm mb-1">
                {{ currentEvent.name }}
              </div>
              <div
                class="text-white text-xs font-bold"
                v-html="currentEvent.effect"
              ></div>
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

        <!-- Modale Explosion -->
        <div
          v-if="gameOver && !showEndGameModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-85"
        >
          <div
            class="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <!-- Header -->
            <div
              class="bg-gradient-to-r from-red-600 to-red-700 p-6 text-center"
            >
              <div class="text-4xl mb-4">💥</div>
              <h3 class="text-2xl font-bold text-white mb-2">Explosion !</h3>
              <p class="text-red-100 text-sm">
                La bombe a explosée - Compteur: {{ counterValue }} / Seuil:
                {{ thresholdValue }}
              </p>
            </div>

            <!-- Content -->
            <div class="p-6 space-y-6">
              <!-- Temps de partie -->
              <div
                class="text-center bg-gray-700 rounded-xl p-4 border border-gray-600"
              >
                <div class="text-yellow-400 text-sm font-medium mb-2">
                  ⏱️ Temps de partie
                </div>
                <div class="text-white text-2xl font-bold">
                  {{ gameDuration || "Non disponible" }}
                </div>
              </div>

              <!-- Résultat de la partie -->
              <div class="bg-gray-700 rounded-xl p-6 border border-gray-600">
                <h4 class="text-xl font-bold text-red-400 mb-4 text-center">
                  🎯 Résultat de la Partie
                </h4>

                <div class="text-center">
                  <!-- Saboteurs gagnants -->
                  <div
                    class="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-center max-w-md mx-auto"
                  >
                    <div class="text-3xl mb-4">💀</div>
                    <h5 class="text-xl font-bold text-white mb-4">
                      SABOTEURS VICTORIEUX !
                    </h5>
                    <div class="text-red-100 text-sm space-y-2">
                      <div class="font-semibold text-red-200">
                        🏆 Les Saboteurs ont gagné !
                      </div>
                      <div>• La bombe a explosé</div>
                      <div>• Leur mission de sabotage est accomplie</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Boutons -->
              <div class="flex justify-center pt-4">
                <button
                  @click="quitGame"
                  class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  ✕ Quitter la partie
                </button>
              </div>
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
        <button
          @click="toggleRefonteSection"
          class="mt-4 px-3 py-1 text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
          title="Afficher/masquer la refonte thématique"
        >
          {{
            showRefonteSection ? "◾ Masquer refonte" : "◽ Afficher refonte"
          }}
        </button>
      </div>
    </footer>

    <!-- Card Modal -->
    <div
      v-if="showCardModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-75"
      @click="closeCardModal"
    >
      <div
        class="relative max-w-lg w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
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
        <div class="p-4 sm:p-6">
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
            v-if="unifiedHistory.length === 0"
            class="text-center text-gray-500 py-8"
          >
            Aucune action enregistrée
          </div>
          <div v-else class="space-y-3">
            <div
              v-for="(item, index) in unifiedHistory.slice().reverse()"
              :key="index"
              class="p-3 rounded-lg border"
              :class="{
                'bg-purple-50 border-purple-200': item.type === 'event',
                'bg-blue-50 border-blue-200': item.type === 'counter',
                'bg-orange-50 border-orange-200': item.type === 'threshold',
              }"
            >
              <!-- Événement -->
              <div v-if="item.type === 'event'">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2">
                    <span class="text-purple-600 text-sm font-bold">🎲</span>
                    <span class="text-sm font-bold text-purple-800">
                      Tour {{ item.turn }}: {{ item.name }}
                    </span>
                  </div>
                  <span class="text-xs text-purple-500">{{
                    item.timestamp
                  }}</span>
                </div>
                <div
                  class="text-xs text-purple-600 ml-6"
                  v-html="item.effect"
                ></div>
              </div>

              <!-- Modification du compteur -->
              <div v-else-if="item.type === 'counter'">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="text-blue-600 text-sm font-bold">📊</span>
                    <span class="text-sm font-medium text-blue-700">
                      Compteur {{ item.action }}
                    </span>
                    <span
                      class="text-sm text-blue-600 font-mono bg-blue-100 px-2 py-1 rounded"
                    >
                      {{ item.oldValue }} → {{ item.newValue }}
                    </span>
                  </div>
                  <span class="text-xs text-blue-500">{{
                    item.timestamp
                  }}</span>
                </div>
              </div>

              <!-- Modification du seuil -->
              <div v-else-if="item.type === 'threshold'">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="text-orange-600 text-sm font-bold">🛡️</span>
                    <span class="text-sm font-medium text-orange-700">
                      {{ item.action }}
                    </span>
                    <span
                      class="text-sm text-orange-600 font-mono bg-orange-100 px-2 py-1 rounded"
                    >
                      {{ item.oldValue }} → {{ item.newValue }}
                    </span>
                  </div>
                  <span class="text-xs text-orange-500">{{
                    item.timestamp
                  }}</span>
                </div>
              </div>

              <!-- Initialisation -->
              <div v-else-if="item.type === 'init'">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="text-green-600 text-sm font-bold">🎯</span>
                    <span class="text-sm font-medium text-green-700">
                      {{ item.action }}
                    </span>
                    <span
                      class="text-sm text-green-600 font-mono bg-green-100 px-2 py-1 rounded"
                    >
                      {{ item.oldValue }} → {{ item.newValue }}
                    </span>
                  </div>
                  <span class="text-xs text-green-500">{{
                    item.timestamp
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modale Événement -->
    <div
      v-if="showEventModal && currentEvent"
      class="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-80"
      @click="closeEventModal"
    >
      <div
        :class="[
          'bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-purple-400 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform',
          { 'animate-pulse': eventModalPulse },
        ]"
        @click.stop
      >
        <div class="p-4 sm:p-6 text-center">
          <div class="text-4xl sm:text-6xl mb-4 sm:mb-4">🎲</div>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
            Tour {{ turnNumber }}
          </h3>
          <div
            class="text-base sm:text-lg font-bold text-purple-200 mb-4 sm:mb-4"
          >
            Événement Révélé
          </div>

          <!-- Image de l'événement -->
          <div class="mb-4 sm:mb-4">
            <img
              :src="currentEvent.image"
              :alt="currentEvent.name"
              loading="lazy"
              class="w-24 h-32 sm:w-32 sm:h-44 mx-auto object-contain rounded-lg bg-white bg-opacity-10 p-2"
            />
          </div>

          <!-- Nom de l'événement -->
          <h4 class="text-lg sm:text-xl font-bold text-yellow-300 mb-2 sm:mb-4">
            {{ currentEvent.name }}
          </h4>

          <!-- Effet de l'événement -->
          <div
            class="bg-black bg-opacity-30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-4 text-white text-center text-sm sm:text-base"
            v-html="currentEvent.effect"
          ></div>

          <!-- Instructions pour les joueurs -->
          <div
            class="bg-yellow-900 bg-opacity-50 border border-yellow-600 rounded-lg p-2 sm:p-3 mb-4 sm:mb-4"
          >
            <div class="text-yellow-300 text-xs font-bold mb-1">
              📋 Instructions
            </div>
            <div class="text-yellow-100 text-xs">
              C'est aux joueurs d'appliquer les effets de cet événement pendant
              ce tour.
            </div>
          </div>

          <button
            @click="closeEventModal"
            class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full text-sm sm:text-base"
          >
            ✓ Compris
          </button>
        </div>
      </div>
    </div>

    <!-- Modale Instructions de début de partie -->
    <div
      v-if="showGameStartModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-85"
      @click="closeGameStartModal"
    >
      <div
        class="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-400 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-4 sm:p-6 text-center">
          <div class="text-4xl sm:text-5xl mb-4">🎯</div>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-4">
            Nouvelle Partie
          </h3>

          <!-- Instructions principales -->
          <div
            class="bg-black bg-opacity-30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-4 text-left"
          >
            <div
              class="text-blue-200 font-bold text-xs sm:text-sm mb-2 sm:mb-4"
            >
              📋 Rappel important :
            </div>
            <div class="text-white text-xs sm:text-sm space-y-1 sm:space-y-2">
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">1.</span>
                <span
                  >Le <strong>premier événement</strong> s'affiche
                  automatiquement au démarrage de la partie.</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">2.</span>
                <span
                  >Les <strong>joueurs</strong> sont responsables d'appliquer
                  les effets des événements.</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">3.</span>
                <span
                  >Cliquez "<strong>Nouveau Tour</strong>" pour révéler
                  l'événement suivant.</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">4.</span>
                <span
                  >Un événement reste actif pendant
                  <strong>tout le tour</strong>.</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">5.</span>
                <span
                  >Il y a <strong>10 événements</strong> au total. Le "Compte à
                  rebours final" apparaît aux tours 8, 9 ou 10.</span
                >
              </div>
            </div>
          </div>

          <!-- Note importante -->
          <div
            class="bg-orange-900 bg-opacity-50 border border-orange-500 rounded-lg p-2 sm:p-3 mb-4 sm:mb-4"
          >
            <div class="text-orange-300 text-xs font-bold mb-1">
              ⚠️ Important
            </div>
            <div class="text-orange-100 text-xs">
              Cette application gère le compteur et les événements. Les joueurs
              gèrent cartes et actions !
            </div>
          </div>

          <button
            @click="startGame"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full text-sm sm:text-base"
          >
            ✓ C'est parti !
          </button>
        </div>
      </div>
    </div>

    <!-- Modale Confirmation Fermeture Partie -->
    <div
      v-if="showCloseConfirmModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-75"
      @click="cancelCloseGame"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-4 sm:p-6 text-center">
          <div class="text-4xl sm:text-5xl mb-4 sm:mb-4">⚠️</div>
          <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-4">
            Quitter la partie ?
          </h3>
          <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Êtes-vous sûr de vouloir fermer la partie en cours ?
            <strong>Toutes les données seront perdues.</strong>
          </p>
          <div class="flex space-x-2 sm:space-x-3">
            <button
              @click="cancelCloseGame"
              class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base"
            >
              Annuler
            </button>
            <button
              @click="confirmCloseGame"
              class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base"
            >
              ✕ Quitter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modale Sélection Mode de Jeu -->
  <div
    v-if="showGameModeModal"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
    @click="closeGameModeModal"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-center">
        <h3 class="text-xl font-bold text-white mb-2">
          🎯 Choisissez votre Mode
        </h3>
        <p class="text-red-100 text-sm">Comment souhaitez-vous jouer ?</p>
      </div>
      <!-- Content -->
      <div class="p-6 space-y-4">
        <!-- Mode Compétitif -->
        <button
          @click="selectCompetitiveMode"
          class="w-full group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <div class="flex items-center justify-between">
            <div class="text-left">
              <div class="font-bold text-lg mb-1">🎭 Mode Compétitif</div>
              <div class="text-red-100 text-sm">3-5 joueurs • Rôles cachés</div>
            </div>
            <div
              class="text-2xl opacity-80 group-hover:opacity-100 transition-opacity"
            >
              ⚔️
            </div>
          </div>
        </button>
        <!-- Mode Coopératif -->
        <button
          @click="selectCooperativeMode"
          class="w-full group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <div class="flex items-center justify-between">
            <div class="text-left">
              <div class="font-bold text-lg mb-1">🤖 Mode Coopératif</div>
              <div class="text-blue-100 text-sm">1-2 joueurs vs IA</div>
            </div>
            <div
              class="text-2xl opacity-80 group-hover:opacity-100 transition-opacity"
            >
              🤝
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>

  <!-- Modale Sélection Difficulté IA -->
  <div
    v-if="showAIDifficultyModal"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
    @click="closeAIDifficultyModal"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-center">
        <h3 class="text-xl font-bold text-white mb-2">
          🎯 Choisissez la Difficulté
        </h3>
        <p class="text-blue-100 text-sm">Mode Coopératif vs IA</p>
      </div>
      <!-- Content -->
      <div class="p-6 space-y-3">
        <div
          v-for="difficulty in aiDifficultyLevels"
          :key="difficulty.name"
          @click="selectAIDifficulty(difficulty)"
          class="w-full group cursor-pointer rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 border-transparent hover:border-opacity-50"
          :class="{
            'bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 hover:border-green-400':
              difficulty.color === 'green',
            'bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 hover:border-blue-400':
              difficulty.color === 'blue',
            'bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 hover:border-orange-400':
              difficulty.color === 'orange',
            'bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 hover:border-red-400':
              difficulty.color === 'red',
            'bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 hover:border-purple-400':
              difficulty.color === 'purple',
          }"
        >
          <div class="flex items-center justify-between">
            <div class="text-left flex-1">
              <div
                class="font-bold text-lg mb-1"
                :class="{
                  'text-green-800': difficulty.color === 'green',
                  'text-blue-800': difficulty.color === 'blue',
                  'text-orange-800': difficulty.color === 'orange',
                  'text-red-800': difficulty.color === 'red',
                  'text-purple-800': difficulty.color === 'purple',
                }"
              >
                {{ difficulty.name }}
              </div>
              <div
                class="text-sm opacity-80"
                :class="{
                  'text-green-700': difficulty.color === 'green',
                  'text-blue-700': difficulty.color === 'blue',
                  'text-orange-700': difficulty.color === 'orange',
                  'text-red-700': difficulty.color === 'red',
                  'text-purple-700': difficulty.color === 'purple',
                }"
              >
                {{ difficulty.turns }} tours • Seuil
                {{ difficulty.threshold }} • Taux de victoire
                {{ difficulty.winRate }}
              </div>
            </div>
            <div
              class="text-xl opacity-70 group-hover:opacity-100 transition-opacity"
              :class="{
                'text-green-600': difficulty.color === 'green',
                'text-blue-600': difficulty.color === 'blue',
                'text-orange-600': difficulty.color === 'orange',
                'text-red-600': difficulty.color === 'red',
                'text-purple-600': difficulty.color === 'purple',
              }"
            >
              🎯
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mode IA Coopératif -->
  <div
    v-if="showAIMode"
    class="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center"
  >
    <div class="w-full h-full relative overflow-hidden">
      <!-- Background avec effet coloré design -->
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
              circle at 25% 25%,
              #3b82f6 1px,
              transparent 1px
            ),
            radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px);
          background-size: 50px 50px;
        "
      ></div>
      <!-- Header -->
      <div
        class="relative z-10 bg-black bg-opacity-30 border-b border-blue-400"
      >
        <div
          class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center"
        >
          <h1 class="text-2xl font-bold text-white flex items-center gap-3">
            🤖 Mode Coopératif vs IA
          </h1>
          <button
            @click="closeAIMode"
            class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            ✕ Fermer
          </button>
        </div>
      </div>
      <!-- Main content -->
      <div class="relative z-10 max-w-4xl mx-auto p-4 h-full overflow-auto">
        <!-- Informations de partie -->
        <div class="mb-6 text-center space-y-4">
          <!-- Difficulté sélectionnée -->
          <div
            v-if="selectedDifficulty"
            class="inline-block bg-black bg-opacity-50 text-white px-6 py-4 rounded-2xl shadow-lg border border-blue-400"
          >
            <div class="text-sm opacity-90 mb-1">Difficulté</div>
            <div class="text-xl font-bold">{{ selectedDifficulty.name }}</div>
            <div class="text-sm opacity-80">
              {{ selectedDifficulty.turns }} tours • Seuil
              {{ selectedDifficulty.threshold }}
            </div>
          </div>
        </div>

        <!-- Placeholder pour le contenu du mode IA -->
        <div
          class="text-center text-white bg-black bg-opacity-30 rounded-xl p-8"
        >
          <div class="text-4xl mb-4">🚧</div>
          <h3 class="text-xl font-bold mb-4">Mode en développement</h3>
          <p class="text-blue-200 mb-6">
            Le mode coopératif vs IA sera bientôt disponible avec toutes les
            nouvelles règles !
          </p>
          <button
            @click="closeAIMode"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Retour au menu
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modale Fin de Partie -->
  <div
    v-if="showEndGameModal"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-85"
    @click="closeEndGameModal"
  >
    <div
      class="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <!-- Header -->
      <div
        class="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-center"
      >
        <div class="text-4xl mb-4">🏆</div>
        <h3 class="text-2xl font-bold text-white mb-2">Fin de Partie !</h3>
        <p class="text-yellow-100 text-sm">
          Le "Compte à rebours final" a été révélé
        </p>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <!-- Temps de partie -->
        <div
          class="text-center bg-gray-700 rounded-xl p-4 border border-gray-600"
        >
          <div class="text-yellow-400 text-sm font-medium mb-2">
            ⏱️ Temps de partie
          </div>
          <div class="text-white text-2xl font-bold">
            {{ gameDuration || "Non disponible" }}
          </div>
        </div>

        <!-- Conditions de victoire -->
        <div class="bg-gray-700 rounded-xl p-6 border border-gray-600">
          <h4 class="text-xl font-bold text-yellow-400 mb-4 text-center">
            🎯 Conditions de Victoire par Rôle
          </h4>

          <div class="grid gap-6 md:grid-cols-3">
            <!-- Démineurs -->
            <div
              class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-center"
            >
              <div class="text-2xl mb-4">🛡️</div>
              <h5 class="text-lg font-bold text-white mb-4">DÉMINEURS</h5>
              <div class="text-blue-100 text-sm space-y-2">
                <div class="font-semibold text-blue-200">
                  Victoire par Élimination :
                </div>
                <div>• Tous les Saboteurs sont éliminés</div>
                <div>• L'Agent Double n'a pas gagné immédiatement</div>
                <div>• La bombe n'a pas explosé</div>
              </div>
            </div>

            <!-- Saboteurs -->
            <div
              class="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-4 text-center"
            >
              <div class="text-2xl mb-4">💥</div>
              <h5 class="text-lg font-bold text-white mb-4">SABOTEURS</h5>
              <div class="text-red-100 text-sm space-y-2">
                <div class="font-semibold text-red-200">Victoire si :</div>
                <div>• La bombe explose</div>
                <div class="text-xs opacity-80">(Compteur ≥ Seuil)</div>
              </div>
            </div>

            <!-- Agent Double -->
            <div
              class="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-4 text-center"
            >
              <div class="text-2xl mb-4">🎭</div>
              <h5 class="text-lg font-bold text-white mb-4">AGENT DOUBLE</h5>
              <div class="text-yellow-100 text-sm space-y-2">
                <div class="font-semibold text-yellow-200">
                  Victoire immédiate :
                </div>
                <div>• A au moins 2 cartes objectifs en main</div>
                <div>• ET le compteur est entre 15-18</div>
                <div>• A son tour seulement !</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Boutons -->
        <div class="flex justify-center pt-4">
          <button
            @click="quitGame"
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            ✕ Quitter la partie
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modale Sélection Nombre de Joueurs -->
  <div
    v-if="showPlayerCountModal"
    class="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
  >
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
      <div class="text-center mb-6">
        <div
          class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Mode Compétitif</h2>
        <p class="text-gray-600">Sélectionnez le nombre de joueurs</p>
      </div>

      <div class="space-y-3">
        <button
          @click="selectPlayerCount(3)"
          class="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-between"
        >
          <span>3 Joueurs</span>
          <div class="flex space-x-1">
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
          </div>
        </button>
        <button
          @click="selectPlayerCount(4)"
          class="w-full p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-between"
        >
          <span>4 Joueurs</span>
          <div class="flex space-x-1">
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
          </div>
        </button>
        <button
          @click="selectPlayerCount(5)"
          class="w-full p-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-between"
        >
          <span>5 Joueurs</span>
          <div class="flex space-x-1">
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
          </div>
        </button>
      </div>

      <button
        @click="closePlayerCountModal"
        class="w-full mt-6 p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
      >
        ← Retour
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Custom cursor for images */
.cursor-zoom-in {
  cursor: zoom-in;
}

/* Custom sizes for tokens */
.w-18 {
  width: 4.5rem;
}
.h-18 {
  height: 4.5rem;
}
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 30px rgba(0, 0, 0, 0.15);
}

/* Modal scroll improvements for mobile */
.max-h-\[90vh\] {
  max-height: 90vh;
}

@media (max-height: 600px) {
  .max-h-\[90vh\] {
    max-height: 95vh;
  }
}

/* Custom arrow border sizes */
.border-l-3 {
  border-left-width: 6px;
}
.border-r-3 {
  border-right-width: 6px;
}
.border-t-5 {
  border-top-width: 8px;
}

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

// PWA Update management
const showUpdateButton = ref(false);

// Section refonte cachée
const showRefonteSection = ref(false);

// Données des cartes de refonte
const chargeCards = [
  {
    ancien: "Charge +1",
    ancienneDesc: "Augmente le compteur de 1",
    nouveau: "Fuite mineure",
    nouvelleDesc: "Un joint se desserre dans la canalisation principale.",
    quantite: 5,
    type: "Charge +1",
  },
  {
    ancien: "Charge +2",
    ancienneDesc: "Augmente le compteur de 2",
    nouveau: "Court-circuit",
    nouvelleDesc:
      "Les circuits électriques surchauffent les pompes de circulation.",
    quantite: 6,
    type: "Charge +2",
  },
  {
    ancien: "Charge +3",
    ancienneDesc: "Augmente le compteur de 3",
    nouveau: "Valve grippée",
    nouvelleDesc: "Le mécanisme de décompression se bloque complètement.",
    quantite: 5,
    type: "Charge +3",
  },
  {
    ancien: "Charge +4",
    ancienneDesc: "Augmente le compteur de 4",
    nouveau: "Rupture de conduite",
    nouvelleDesc: "Une canalisation principale cède sous la pression.",
    quantite: 4,
    type: "Charge +4",
  },
  {
    ancien: "Charge +5",
    ancienneDesc: "Augmente le compteur de 5",
    nouveau: "Réaction en chaîne",
    nouvelleDesc: "Les composés du Projet Mercure entrent en fusion critique.",
    quantite: 2,
    type: "Charge +5",
  },
  {
    ancien: "Charge X",
    ancienneDesc:
      "Augmente le compteur d'un montant déterminé par une carte tirée au hasard",
    nouveau: "Incident imprévu",
    nouvelleDesc:
      "Une défaillance mystérieuse secoue le laboratoire souterrain.",
    quantite: 2,
    type: "Charge X",
  },
];

const dechargeCards = [
  {
    ancien: "Décharge -1",
    ancienneDesc: "Réduit le compteur de 1",
    nouveau: "Ventilation d'urgence",
    nouvelleDesc:
      "Les extracteurs évacuent les vapeurs toxiques vers l'extérieur.",
    quantite: 5,
    type: "Décharge -1",
  },
  {
    ancien: "Décharge -2",
    ancienneDesc: "Réduit le compteur de 2",
    nouveau: "Refroidissement",
    nouvelleDesc:
      "Le système de refroidissement fait baisser la température des cuves.",
    quantite: 5,
    type: "Décharge -2",
  },
  {
    ancien: "Décharge -3",
    ancienneDesc: "Réduit le compteur de 3",
    nouveau: "Purge manuelle",
    nouvelleDesc:
      "Évacuation directe de la pression par les soupapes de sécurité.",
    quantite: 5,
    type: "Décharge -3",
  },
  {
    ancien: "Décharge X",
    ancienneDesc:
      "Réduit le compteur d'un montant déterminé par une carte tirée au hasard",
    nouveau: "Intervention d'urgence",
    nouvelleDesc: "Une action de sauvetage d'efficacité imprévisible.",
    quantite: 2,
    type: "Décharge X",
  },
];

// Cartes Objectifs de l'Opportuniste
const objectifCards = [
  {
    ancien: "Dossier classé",
    ancienneDesc:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    nouveau: "Photos exclusives",
    nouvelleDesc:
      "Clichés spectaculaires de l'incident pour faire sensation dans les médias.",
    quantite: 1,
    type: "Bluff & Objectif",
  },
  {
    ancien: "Robot de déminage",
    ancienneDesc:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    nouveau: "Preuve accablante",
    nouvelleDesc:
      "Élément décisif qui révèle les vraies responsabilités de la catastrophe.",
    quantite: 1,
    type: "Bluff & Objectif",
  },
  {
    ancien: "Plan d'évacuation",
    ancienneDesc:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    nouveau: "Rapport d'expert",
    nouvelleDesc:
      "Analyse technique qui donne de la crédibilité scientifique au scoop.",
    quantite: 1,
    type: "Bluff & Objectif",
  },
  {
    ancien: "Neutralisation chimique",
    ancienneDesc:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    nouveau: "Échantillon chimique",
    nouvelleDesc:
      "Preuve matérielle des substances dangereuses manipulées dans la mine.",
    quantite: 1,
    type: "Bluff & Objectif",
  },
  {
    ancien: "Schéma électrique",
    ancienneDesc:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    nouveau: "Enregistrement secret",
    nouvelleDesc:
      "Conversation compromettante révélant les négligences des responsables.",
    quantite: 1,
    type: "Bluff & Objectif",
  },
];

// Cartes Action Offensives
const actionOffensiveCards = [
  {
    ancien: "Espion",
    ancienneDesc:
      "Regarde secrètement la main d'un joueur et vole une carte au choix",
    nouveau: "Espionnage industriel",
    nouvelleDesc:
      "Regarde secrètement la main d'un joueur et vole une carte au choix.",
    quantite: 3,
    type: "Action",
  },
  {
    ancien: "Blocage",
    ancienneDesc: "Un joueur passe complètement son prochain tour",
    nouveau: "Sabotage des communications",
    nouvelleDesc: "Un joueur passe complètement son prochain tour.",
    quantite: 3,
    type: "Action",
  },
  {
    ancien: "Sabotage",
    ancienneDesc:
      "Un joueur doit jouer une carte au hasard de sa main. Si c'est une carte objectif Agent Double, elle est défaussée sans effet",
    nouveau: "Piratage informatique",
    nouvelleDesc: "Un joueur doit jouer une carte au hasard de sa main.",
    quantite: 2,
    type: "Action",
  },
  {
    ancien: "Seuil augmenté",
    ancienneDesc:
      "Augmente le seuil d'explosion du montant d'une carte numérotée tirée au hasard (maximum 30 points)",
    nouveau: "Modification des seuils",
    nouvelleDesc:
      "Augmente le point de rupture d'une valeur aléatoire (maximum 30).",
    quantite: 3,
    type: "Action",
  },
  {
    ancien: "Seuil réduit",
    ancienneDesc:
      "Réduit le seuil du montant d'une carte numérotée tirée au hasard. Le nouveau seuil doit être au minimum à (compteur actuel +1)",
    nouveau: "Sabotage des sécurités",
    nouvelleDesc:
      "Réduit le point de rupture d'une valeur aléatoire (minimum : pression actuelle +1).",
    quantite: 3,
    type: "Action",
  },
  {
    ancien: "Contrebande",
    ancienneDesc: "Reprend une carte au choix dans la défausse",
    nouveau: "Récupération de données",
    nouvelleDesc: "Reprend une carte au choix dans la défausse.",
    quantite: 4,
    type: "Action",
  },
  {
    ancien: "Redistribution",
    ancienneDesc: "Échange ta main avec celle d'un joueur",
    nouveau: "Échange de postes",
    nouvelleDesc: "Échange ta main avec celle d'un joueur.",
    quantite: 1,
    type: "Action",
  },
  {
    ancien: "Manipulation",
    ancienneDesc: "Voit les 3 prochaines cartes de la pioche et change l'ordre",
    nouveau: "Prédiction",
    nouvelleDesc:
      "Vois les 3 prochaines cartes de la pioche et change l'ordre.",
    quantite: 1,
    type: "Action",
  },
  {
    ancien: "Pile ou Fiasco",
    ancienneDesc: "Lance une pièce : Pile = +3 / Face = -3",
    nouveau: "Pari risqué",
    nouvelleDesc: "Lance une pièce : Pile = +3 / Face = -3.",
    quantite: 1,
    type: "Action",
  },
  {
    ancien: "Changement de masque",
    ancienneDesc: "Échange ta carte rôle avec celle face cachée",
    nouveau: "Changement d'équipe",
    nouvelleDesc: "Échange ta carte rôle avec celle face cachée.",
    quantite: 1,
    type: "Action",
  },
  {
    ancien: "Coup de balai",
    ancienneDesc: "Défaussez toutes vos cartes et piochez-en le même nombre",
    nouveau: "Réinitialisation",
    nouvelleDesc: "Défausse toutes tes cartes et pioche-en le même nombre.",
    quantite: 1,
    type: "Action",
  },
  {
    ancien: "Grand mélange",
    ancienneDesc:
      "Mélange toutes les cartes des mains et de la défausse. Redistribue 5 cartes par joueur",
    nouveau: "Panique générale",
    nouvelleDesc:
      "Mélange toutes les cartes des mains et de la défausse. Redistribue 5 cartes par joueur.",
    quantite: 1,
    type: "Action",
  },
];

// Cartes Action Réactives
const actionReactiveCards = [
  {
    ancien: "Blocage",
    ancienneDesc: "Annule l'effet de la carte jouée",
    nouveau: "Protocole d'urgence",
    nouvelleDesc: "Annule l'effet de l'action en cours.",
    quantite: 4,
    type: "Action Réactive ⚡",
  },
  {
    ancien: "Miroir",
    ancienneDesc: "Redirige une action contre vous ou inverse le signe (+ ↔ -)",
    nouveau: "Équipement de protection",
    nouvelleDesc:
      "Redirige une action contre toi ou inverse son effet (+ ↔ -).",
    quantite: 4,
    type: "Action Réactive ⚡",
  },
  {
    ancien: "Surcharge",
    ancienneDesc: "Double la valeur de la carte (dé)charge ou seuil jouée",
    nouveau: "Amplificateur de pression",
    nouvelleDesc: "Double la valeur de l'action pression ou seuil jouée.",
    quantite: 3,
    type: "Action Réactive ⚡",
  },
];

// Cartes Événements
const evenementCards = [
  {
    ancien: "Changement de vent",
    ancienneDesc: "Tous les joueurs passent leur main au joueur à leur gauche",
    nouveau: "Rotation des équipes",
    nouvelleDesc:
      "Changement de poste : tous les joueurs passent leur main au joueur à leur gauche.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Perturbation électrique",
    ancienneDesc: "Personne ne pioche à la fin de son tour ce tour-ci",
    nouveau: "Panne d'éclairage",
    nouvelleDesc:
      "Éclairage de secours : personne ne pioche à la fin de son tour ce tour-ci.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Espionnage inversé",
    ancienneDesc: "Tous les joueurs révèlent 1 carte au hasard de leur main",
    nouveau: "Inspection surprise",
    nouvelleDesc:
      "Contrôle qualité : tous les joueurs révèlent 1 carte au hasard de leur main.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Transparence totale",
    ancienneDesc:
      "Pendant ce tour, toutes les cartes piochées doivent être révélées",
    nouveau: "Audit de sécurité",
    nouvelleDesc:
      "Transparence totale : toutes les cartes piochées doivent être révélées.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Court-circuit",
    ancienneDesc:
      "Les effets des cartes influant sur la piste sont inversés (les + deviennent des - et les - des +)",
    nouveau: "Dysfonctionnement général",
    nouvelleDesc:
      "Systèmes inversés : les effets de pression sont inversés (les + deviennent des - et vice-versa).",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Effet domino",
    ancienneDesc:
      "Toute carte jouée ce tour déclenche automatiquement sa réaction en chaîne",
    nouveau: "Réaction chimique",
    nouvelleDesc:
      "Instabilité : si une carte de décharge est jouée, révélez une carte de la pioche et appliquez son effet immédiatement.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Double vision",
    ancienneDesc:
      "Chaque carte (dé)charge compte double (Surcharge interdite ce tour)",
    nouveau: "Effet de serre",
    nouvelleDesc:
      "Concentration maximale : chaque carte de pression compte double (Amplificateur interdit ce tour).",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Panique générale",
    ancienneDesc:
      "Ce tour, après avoir joué votre carte, défaussez immédiatement une autre carte de votre main au hasard",
    nouveau: "Évacuation partielle",
    nouvelleDesc:
      "Procédure d'urgence : après avoir joué votre carte, défaussez immédiatement une autre carte au hasard.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Blackout",
    ancienneDesc:
      "Toutes les cartes Actions (cartes jaune et rouge) sont interdites ce tour",
    nouveau: "Maintenance d'urgence",
    nouvelleDesc:
      "Interventions techniques : toutes les cartes Action (jaunes et rouges) sont interdites ce tour.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Chaos total",
    ancienneDesc:
      "À son tour, chaque joueur pioche une carte et la joue immédiatement",
    nouveau: "Code rouge",
    nouvelleDesc:
      "Protocole automatique : chaque joueur pioche une carte et la joue immédiatement.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Inversion des rôles",
    ancienneDesc: "L'ordre de jeu s'inverse pour le reste de ce tour",
    nouveau: "Sens de circulation inversé",
    nouvelleDesc:
      "Changement de procédure : l'ordre de jeu s'inverse pour le reste de ce tour.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Tensions diplomatique",
    ancienneDesc:
      "À la fin du tour de chaque joueur qui joue, le compteur monte de +1",
    nouveau: "Surchauffe progressive",
    nouvelleDesc:
      "Montée en température : à la fin du tour de chaque joueur, la pression monte de +1.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Matériel instable",
    ancienneDesc: "Si le compteur est à plus de 15 à la fin du tour, retirer 3",
    nouveau: "Stabilisation automatique (partie 1)",
    nouvelleDesc:
      "Système de régulation : si la pression > 15 en fin de tour, retirer 3.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Accélération critique",
    ancienneDesc:
      "Si le compteur est à moins de 10 à la fin du tour, ajouter 2",
    nouveau: "Stabilisation automatique (partie 2)",
    nouvelleDesc:
      "Système de régulation : si la pression < 10 en fin de tour, ajouter 2.",
    quantite: 1,
    type: "Événement",
  },
  {
    ancien: "Compte à rebours final",
    ancienneDesc:
      "🚨 DERNIER TOUR ! Chaque joueur joue une dernière fois, puis la partie s'arrête",
    nouveau: "ÉVACUATION GÉNÉRALE !",
    nouvelleDesc:
      "🚨 DERNIER TOUR ! Chaque joueur joue une dernière fois, puis l'incident se résout.",
    quantite: 1,
    type: "Événement",
  },
];

// Cartes Système
const systemCards = [
  {
    nom: "Démineur",
    description:
      "Empêcher l'explosion ET empêcher l'Agent Double de remplir son objectif",
    thematique: "Ingénieur en sécurité minière",
    descriptionThematique:
      "Expert technique chargé de contenir l'incident et neutraliser les menaces.",
    quantite: 2,
    type: "Rôle",
  },
  {
    nom: "Saboteur",
    description: "Provoquer l'explosion ou faire gagner l'Agent Double",
    thematique: "Complice de l'incident",
    descriptionThematique:
      "Individu cherchant à aggraver la situation pour des raisons personnelles.",
    quantite: 3,
    type: "Rôle",
  },
  {
    nom: "Agent Double",
    description:
      "Réunir 2+ cartes objectifs et maintenir le compteur entre 15-18 pendant son tour",
    thematique: "L'Opportuniste (Journaliste)",
    descriptionThematique:
      "Reporter cherchant à documenter l'incident pour un scoop médiatique exclusif.",
    quantite: 1,
    type: "Rôle",
  },
  {
    nom: "Premier Joueur",
    description: "Indique qui commence la partie",
    thematique: "Chef d'équipe d'urgence",
    descriptionThematique:
      "Responsable de la coordination des opérations de sauvetage.",
    quantite: 1,
    type: "Système",
  },
  {
    nom: "Cartes Système 1-5",
    description: "Valeurs aléatoires pour les effets de cartes",
    thematique: "Niveaux de criticité",
    descriptionThematique:
      "Indices de gravité et d'urgence des différents incidents.",
    quantite: 5,
    type: "Système",
  },
  {
    nom: "Cartes Piste",
    description: "Jauge de pression et seuils d'explosion",
    thematique: "Capteurs de pression",
    descriptionThematique:
      "Instruments de mesure de la pression dans les galeries souterraines.",
    quantite: 3,
    type: "Système",
  },
];

// Toggle simple pour la section refonte
const toggleRefonteSection = () => {
  showRefonteSection.value = !showRefonteSection.value;
  if (showRefonteSection.value) {
    setTimeout(() => {
      document
        .getElementById("refonte-thematique")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
};

// Forcer le rechargement sans cache
const forceReload = () => {
  if (process.client) {
    if ("caches" in window) {
      // Vider tous les caches
      caches
        .keys()
        .then((names) => {
          names.forEach((name) => {
            caches.delete(name);
          });
        })
        .then(() => {
          window.location.reload();
        });
    } else {
      // Fallback : rechargement forcé
      window.location.reload();
    }
  }
};

// Vérifier les mises à jour PWA
const checkForPWAUpdate = () => {
  if (process.client && "serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data && event.data.type === "UPDATE_AVAILABLE") {
        showUpdateButton.value = true;
      }
    });
  }
};

const handleUpdate = () => {
  forceReload();
};

// Navigation
const navLinks = [
  { id: "concept", label: "Concept" },
  { id: "wip", label: "WIP" },
  { id: "contenu", label: "Contenu" },
  { id: "mise-en-place", label: "Mise en Place" },
  { id: "deroulement", label: "Déroulement" },
  { id: "victoire", label: "Victoire" },
  { id: "cartes", label: "Cartes" },
  { id: "cooperatif", label: "Mode Coopératif" },
  { id: "faq", label: "FAQ" },
  { id: "remerciements", label: "Remerciements" },
  { id: "contact", label: "Contact" },
];

// Cards data
const objectiveCards = [
  {
    name: "Dossier classé",
    type: "Bluff & Objectif",
    effect:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    quantity: 1,
  },
  {
    name: "Robot de déminage",
    type: "Bluff & Objectif",
    effect:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    quantity: 1,
  },
  {
    name: "Plan d'évacuation",
    type: "Bluff & Objectif",
    effect:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    quantity: 1,
  },
  {
    name: "Neutralisation chimique",
    type: "Bluff & Objectif",
    effect:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    quantity: 1,
  },
  {
    name: "Schéma électrique",
    type: "Bluff & Objectif",
    effect:
      "Nécessaire pour la victoire immédiate de l'Agent Double (au moins 2 en main + compteur 15-18)",
    quantity: 1,
  },
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
      "Augmente le seuil d'explosion du montant d'une carte numérotée tirée au hasard (maximum 30 points)",
    quantity: 3,
    image: "/action_seuilAugmente.png",
  },
  {
    name: "Seuil réduit",
    type: "Action",
    effect:
      "Réduit le seuil du montant d'une carte numérotée tirée au hasard. Le nouveau seuil doit être au minimum à (compteur actuel +1)",
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
  {
    name: "Changement de masque",
    type: "Action",
    effect: "Échange ta carte rôle avec celle face cachée",
    quantity: 1,
    image: "/action_changementMasque.png",
  },
  {
    name: "Coup de balai",
    type: "Action",
    effect: "Défaussez toutes vos cartes et piochez-en le même nombre",
    quantity: 1,
    image: "/action_coupDeBalai.png",
  },
  {
    name: "Grand mélange",
    type: "Action",
    effect:
      "Mélange toutes les cartes des mains et de la défausse. Redistribue 5 cartes par joueur",
    quantity: 1,
    image: "/action_grandMelange.png",
  },
];

// Setup steps
const setupSteps = [
  "<strong>Séparez les cartes système</strong> (rôles, événements, premier joueur)",
  "<strong>Sélectionnez les cartes selon le nombre de joueurs :</strong><span class='block mt-2'>• <strong>3 joueurs :</strong> Prenez uniquement les cartes marquées 3+</span><span class='block'>• <strong>4 joueurs :</strong> Ajoutez les cartes marquées 4+</span><span class='block'>• <strong>5 joueurs :</strong> Ajoutez aussi les cartes marquées 5+</span><span class='block mt-2'><em>Les indicateurs se trouvent en haut à droite des cartes</em></span>",
  "<strong>Mélangez toutes les cartes de jeu séléctionnées</strong>",
  "Chaque joueur reçoit <strong>5 cartes</strong>",
  "<strong>Assemblez la jauge :</strong> placez les 3 cartes piste côte à côte <span class='text-blue-600 text-sm'>(<em>Peut être passé si vous utilisez l'application</em>)</span>",
  "Placez le <strong>Compteur sur le nombre de joueurs</strong> (3, 4 ou 5) et le <strong>Seuil sur 20</strong> <span class='text-blue-600 text-sm'>(<em>Peut être passé si vous utilisez l'application</em>)</span>",
  '<strong>Désignez le premier joueur</strong> et donnez-lui la carte "Premier Joueur" qu\'il place devant lui',
  '<strong>Préparez les événements :</strong><span class="block mt-2">• Piochez 9 cartes Événement au hasard (hors Compte à rebours final)</span><span class="block">• Prenez 2 cartes au hasard de ce paquet + la carte "Compte à rebours final"</span><span class="block">• Mélangez ces 3 cartes et placez-les <strong>sous la pile</strong> d\'événements</span><span class="block mt-2"><span class="text-blue-600 text-sm">(<em>Peut être passé si vous utilisez l\'application</em>)</span></span>',
  "<strong>Distribuez les rôles</strong> selon le tableau de répartition avec incertitude :<div class='mt-4'></div><div class='bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-400 mb-4'><div class='text-sm text-yellow-800'><strong>🎭 Principe :</strong> Prenez plus de cartes rôles que de joueurs, mélangez-les et distribuez-en une par joueur. La carte non distribuée reste secrète, créant de l'incertitude sur la composition exacte.</div></div><div class='overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0'><div class='inline-block min-w-full'><table class='min-w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden'><thead><tr class='bg-gradient-to-r from-red-500 to-orange-500 text-white'><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Joueurs</th><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Cartes</th><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Composition</th><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Distribuées</th></tr></thead><tbody><tr class='bg-gray-50'><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-bold text-red-600 text-xs sm:text-sm'>3</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>4 cartes</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>1 Démineur + 2 Saboteurs + 1 Agent Double</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-semibold text-green-600 text-xs sm:text-sm'>3 <span class='text-gray-500 text-xs block sm:inline'>(1 retirée)</span></td></tr><tr class='bg-white'><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-bold text-red-600 text-xs sm:text-sm'>4</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>5 cartes</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>2 Démineurs + 2 Saboteurs + 1 Agent Double</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-semibold text-green-600 text-xs sm:text-sm'>4 <span class='text-gray-500 text-xs block sm:inline'>(1 retirée)</span></td></tr><tr class='bg-gray-50'><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-bold text-red-600 text-xs sm:text-sm'>5</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>6 cartes</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>2 Démineurs + 3 Saboteurs + 1 Agent Double</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-semibold text-green-600 text-xs sm:text-sm'>5 <span class='text-gray-500 text-xs block sm:inline'>(1 retirée)</span></td></tr></tbody></table></div></div>",
];

// Game steps
const gameSteps = [
  "<strong>Révélez un événement</strong> (au début du tour du premier joueur uniquement)",
  "<strong>Jouez 1 carte</strong> de votre main",
  "<strong>Appliquez l'effet</strong> de la carte (modification du compteur, action spéciale...)",
  "<strong>Piochez autant de carte que nécessaire</strong> pour revenir à 5 cartes en main (sauf si votre tour est sauté)",
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
      "Les effets des cartes influant sur la piste sont inversés (les + deviennent des - et les - des +)",
    image: "/event_courtCircuit.png",
  },
  {
    name: "Effet domino",
    effect:
      "Si une carte décharge est jouée, le joueur doit dévoiler uen carte de la pioche et appliquer son effet immédiatement",
    image: "/event_effetDomino.png",
  },
  {
    name: "Double vision",
    effect:
      "Chaque carte (dé)charge compte double (Surcharge interdite ce tour)",
    image: "/event_doubleVision.png",
  },
  {
    name: "Panique générale",
    effect:
      "Ce tour, après avoir joué votre carte, défaussez immédiatement une autre carte de votre main au hasard",
    image: "/event_paniqueGenerale.png",
  },
  {
    name: "Blackout",
    effect:
      "Toutes les cartes Actions (cartes jaune et rouge) sont interdites ce tour",
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
    name: "Tensions diplomatique",
    effect:
      "À la fin du tour de chaque joueur qui joue, le compteur monte de +1",
    image: "/event_tensionsDiplomatique.png",
  },
  {
    name: "Matériel instable",
    effect: "Si le compteur est à plus de 15 à la fin du tour, retirer 3",
    image: "/event_materielInstable.png",
  },
  {
    name: "Accélération critique",
    effect: "Si le compteur est à moins de 10 à la fin du tour, ajouter 2",
    image: "/event_accelerationCritique.png",
  },
  {
    name: "Compte à rebours final",
    effect:
      "<strong>🚨 DERNIER TOUR !</strong> Chaque joueur joue une dernière fois, puis la partie s'arrête",
    image: "/event_compteReboursFinal.png",
  },
];

// AI difficulty levels
const aiDifficultyLevels = [
  { name: "Débutant", turns: 7, threshold: 19, winRate: "90%", color: "green" },
  { name: "Normal", turns: 8, threshold: 17, winRate: "70%", color: "blue" },
  { name: "Expert", turns: 11, threshold: 15, winRate: "40%", color: "orange" },
  { name: "Légende", turns: 13, threshold: 12, winRate: "15%", color: "red" },
  {
    name: "Impossible",
    turns: 15,
    threshold: 10,
    winRate: "5%",
    color: "purple",
  },
];

// FAQs
const faqs = [
  {
    question: "Que se passe-t-il si le compteur devrait descendre sous 0 ?",
    answer:
      "<strong>Le compteur ne peut jamais descendre sous 0.</strong> Si une carte devait le faire descendre en dessous, il reste à 0.",
  },
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
      "<span class='block'>• Cette carte <strong>ne peut jamais</strong> déclencher l'explosion</span><span class='block'>• Le nouveau seuil doit être <strong>au minimum</strong> à (compteur actuel + 1)</span><span class='block'>• Le montant de réduction est déterminé par une carte numérotée tirée au hasard</span><span class='block'>• Si la réduction rendrait le seuil trop bas, la carte ne peut pas être jouée</span>",
  },
  {
    question: "Comment fonctionne la carte Miroir ?",
    answer:
      "La carte Miroir peut :<span class='block mt-2'>• <strong>Rediriger une action</strong> dirigée contre vous vers son auteur</span><span class='block'>• <strong>Inverser le signe</strong> d'une carte (dé)charge (+ devient -, - devient +)</span>",
  },
  {
    question: "Peut-on jouer Surcharge sur une carte Miroir ?",
    answer:
      "<strong>Non.</strong> La carte Surcharge ne peut pas être jouée sur une carte Miroir. Le Miroir est une carte réactive spéciale qui ne peut pas être surchargée.",
  },
  {
    question: "Sabotage et cartes objectif",
    answer:
      "Si la carte jouée au hasard par Sabotage est une <strong>carte objectif de l'Agent Double</strong> (Dossier classé, Robot de déminage, Plan d'évacuation), elle est <strong>défaussée sans effet</strong>.",
  },
  {
    question: "Que faire si je ne peux pas ou ne veux pas jouer de carte ?",
    answer:
      "<span class='block mb-2'><strong>Si aucune carte de votre main ne peut être jouée :</strong> Défaussez une carte de votre choix.</span><span class='block'><strong>Si vous pouvez jouer au moins une carte :</strong> Vous êtes <strong>obligé(e) de la jouer</strong>, même si cela ne vous arrange pas stratégiquement.</span>",
  },
  {
    question: "Comment distribuer les cartes avec Grand mélange ?",
    answer:
      "Après avoir mélangé toutes les cartes des mains et de la défausse :<span class='block mt-2'>• Distribuez <strong>1 carte à la fois</strong> en tournant dans le sens des aiguilles d'une montre</span><span class='block'>• Continuez jusqu'à ce que chaque joueur ait <strong>5 cartes</strong></span><span class='block'>• <strong>S'il n'y a pas assez de cartes</strong> dans la pile, distribuez tout de même jusqu'à épuisement (certains joueurs peuvent avoir moins de 5 cartes)</span>",
  },
];

// Back to top functionality
const showBackToTop = ref(false);

// PWA functionality
const deferredPrompt = ref(null);
const showInstallPrompt = ref(false);
const isStandalone = ref(false);
const isDev = ref(false);
const userEngaged = ref(false);

// Connection status
const isOnline = ref(true);
const showOfflineBar = ref(false);
const isRetrying = ref(false);

// Card modal functionality
const selectedCard = ref(null);
const showCardModal = ref(false);

// Mobile menu functionality
const isMobileMenuOpen = ref(false);
// Counter mode functionality
const showCounterMode = ref(false);
const playerCount = ref(3); // Nombre de joueurs (3, 4 ou 5)
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
const showEndGameModal = ref(false);

// Game mode selection
const showGameModeModal = ref(false);
const showPlayerCountModal = ref(false);

// AI mode functionality
const showAIMode = ref(false);
const showAIDifficultyModal = ref(false);
const aiTurnNumber = ref(0);
const aiCounterValue = ref(0);
const aiThresholdValue = ref(20);
const aiCounterHistory = ref([]);
const aiGameOver = ref(false);
const aiShowExplosion = ref(false);
const aiGameStartTime = ref(null);
const aiGameDuration = ref(null);
const showAIHistoryModal = ref(false);
const selectedDifficulty = ref(null);
const currentAICard = ref(null);
const showAICardModal = ref(false);

// Timer interval reference for cleanup
let timerInterval = null;

// Computed property for current elapsed time
const elapsedTime = computed(() => {
  if (!gameStartTime.value || gameOver.value) return null;
  const elapsed = Math.max(0, currentTime.value - gameStartTime.value);
  return formatDuration(elapsed);
});

// Computed property for unified history (events + counter changes)
const unifiedHistory = computed(() => {
  const allItems = [...usedEvents.value, ...counterHistory.value];

  // Sort by timestamp (convert to comparable format)
  return allItems.sort((a, b) => {
    const timeA = new Date(`1970-01-01 ${a.timestamp}`);
    const timeB = new Date(`1970-01-01 ${b.timestamp}`);
    return timeA - timeB;
  });
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

    if (outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    } else {
      console.log("User dismissed the A2HS prompt");
    }

    // Clear the deferred prompt, as it can only be used once
    deferredPrompt.value = null;
    showInstallPrompt.value = false;
  }
};

// Connection management functions
const checkConnection = async () => {
  isRetrying.value = true;

  try {
    // Test de connexion réelle avec un timeout court
    const response = await fetch("/?_=" + Date.now(), {
      method: "HEAD",
      mode: "no-cors",
      cache: "no-store",
      signal: AbortSignal.timeout(5000), // Timeout 5 secondes
    });

    // Connexion rétablie
    isOnline.value = true;
    showOfflineBar.value = false;
  } catch (error) {
    // Toujours hors ligne
    isOnline.value = false;
    showOfflineBar.value = true;
  } finally {
    isRetrying.value = false;
  }
};

const handleOnline = () => {
  isOnline.value = true;
  showOfflineBar.value = false;
  console.log("Connexion rétablie");
};

const handleOffline = () => {
  isOnline.value = false;
  showOfflineBar.value = true;
  console.log("Connexion perdue");
};

// Counter mode functions
const openCounterMode = () => {
  showCounterMode.value = true;

  // Initialize counter values
  counterValue.value = playerCount.value;
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
  showEndGameModal.value = false;
  initializeEventDeck();

  document.body.style.overflow = "hidden";
  // Timer will start when user clicks "C'est parti!"
};

const closeCounterMode = () => {
  showCounterMode.value = false;
  document.body.style.overflow = "auto";
};

const quitGame = () => {
  // Fermer toutes les modals
  showCounterMode.value = false;
  showEndGameModal.value = false;
  showHistoryModal.value = false;
  showEventModal.value = false;
  showPlayerCountModal.value = false;

  // Remettre à zéro tous les états du jeu
  counterValue.value = playerCount.value;
  thresholdValue.value = 20;
  minThreshold.value = 10;
  maxThreshold.value = 30;
  counterHistory.value = [];
  showExplosion.value = false;
  gameOver.value = false;
  gameStartTime.value = null;
  gameDuration.value = null;

  // Remettre à zéro le système d'événements
  currentEvent.value = null;
  eventDeck.value = [];
  usedEvents.value = [];

  // Restaurer le scroll
  document.body.style.overflow = "auto";
};

const triggerExplosion = () => {
  gameOver.value = true;

  // Calculer la durée de la partie
  if (gameStartTime.value) {
    const duration = Date.now() - gameStartTime.value;
    gameDuration.value = formatDuration(duration);
  }

  // Aller directement à la modale de fin de partie sans écran intermédiaire
  showExplosion.value = false;
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
    type: "counter",
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
    const oldValue = thresholdValue.value;
    thresholdValue.value = newValue;

    // Enregistrer dans l'historique
    counterHistory.value.push({
      action: delta > 0 ? `Seuil +${delta}` : `Seuil ${delta}`,
      oldValue: oldValue,
      newValue: newValue,
      timestamp: new Date().toLocaleTimeString(),
      type: "threshold",
    });
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
    } else if (showEndGameModal.value) {
      closeEndGameModal();
    } else if (showAIMode.value) {
      closeAIMode();
    } else if (showAIDifficultyModal.value) {
      closeAIDifficultyModal();
    } else if (showPlayerCountModal.value) {
      closePlayerCountModal();
    } else if (showGameModeModal.value) {
      closeGameModeModal();
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
  const normalEvents = events.filter(
    (event) => event.name !== "Compte à rebours final"
  );
  const finalEvent = events.find(
    (event) => event.name === "Compte à rebours final"
  );

  // Shuffle normal events and take 9 (to make 10 total with final event)
  const shuffledEvents = [...normalEvents].sort(() => Math.random() - 0.5);
  const selectedNormalEvents = shuffledEvents.slice(0, 9);

  // Create deck with 10 cards total
  const deck = [...selectedNormalEvents];

  // Insert final event at position 7, 8, or 9 (0-indexed) which corresponds to turns 8, 9, or 10
  const finalPositions = [7, 8, 9]; // Positions 8, 9, 10 in 1-indexed terms
  const finalPosition =
    finalPositions[Math.floor(Math.random() * finalPositions.length)];

  console.log(
    `Carte "Compte à rebours final" placée à la position ${finalPosition} (tour ${
      finalPosition + 1
    })`
  );

  // Insert the final event at the chosen position
  deck.splice(finalPosition, 0, finalEvent);

  eventDeck.value = deck;
};

const drawNextEvent = () => {
  if (eventDeck.value.length === 0 || gameOver.value) return;

  turnNumber.value += 1;
  const drawnEvent = eventDeck.value.shift();
  currentEvent.value = drawnEvent;

  // Add timestamp and turn number to the event for history
  const eventWithTimestamp = {
    ...drawnEvent,
    timestamp: new Date().toLocaleTimeString(),
    turn: turnNumber.value,
    type: "event",
  };

  usedEvents.value.push(eventWithTimestamp);
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

const endGame = () => {
  // Stop the timer and calculate final duration
  if (gameStartTime.value && !gameOver.value) {
    const now = Date.now();
    const duration = now - gameStartTime.value;
    gameDuration.value = formatDuration(duration);
    gameOver.value = true;
  }
  showEndGameModal.value = true;
};

const closeEndGameModal = () => {
  showEndGameModal.value = false;
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

// Game mode selection functions
const openGameModeSelection = () => {
  showGameModeModal.value = true;
};
const closeGameModeModal = () => {
  showGameModeModal.value = false;
};
const selectCompetitiveMode = () => {
  console.log("selectCompetitiveMode called");
  console.log("showPlayerCountModal BEFORE:", showPlayerCountModal.value);
  closeGameModeModal();
  showPlayerCountModal.value = true;
  console.log("showPlayerCountModal AFTER:", showPlayerCountModal.value);

  // Force une re-render après un court délai pour tester
  setTimeout(() => {
    console.log(
      "showPlayerCountModal after timeout:",
      showPlayerCountModal.value
    );
  }, 100);
};
const selectCooperativeMode = () => {
  closeGameModeModal();
  showAIDifficultyModal.value = true;
};

// Player count selection functions
const selectPlayerCount = (count) => {
  playerCount.value = count;
  closePlayerCountModal();
  openCounterMode();

  // Ajouter l'initialisation dans l'historique APRÈS l'ouverture du mode
  counterHistory.value.push({
    action: "Initialisation compteur",
    oldValue: 0,
    newValue: count,
    timestamp: new Date().toLocaleTimeString(),
    type: "init",
    icon: "🎯",
  });
};

const closePlayerCountModal = () => {
  showPlayerCountModal.value = false;
};

// AI difficulty selection functions
const selectAIDifficulty = (difficulty) => {
  selectedDifficulty.value = difficulty;
  showAIDifficultyModal.value = false;
  openAIMode();
};
const closeAIDifficultyModal = () => {
  showAIDifficultyModal.value = false;
};

// AI mode functions
const openAIMode = () => {
  showAIMode.value = true;
  // Initialize AI mode values
  aiCounterValue.value = 0;
  aiThresholdValue.value = selectedDifficulty.value?.threshold || 20;
  aiCounterHistory.value = [];
  aiTurnNumber.value = 0;
  aiShowExplosion.value = false;
  aiGameOver.value = false;
  aiGameStartTime.value = null;
  aiGameDuration.value = null;
  document.body.style.overflow = "hidden";
};
const closeAIMode = () => {
  showAIMode.value = false;
  document.body.style.overflow = "auto";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("keydown", handleEscape);

  // Initialize PWA update checker
  checkForPWAUpdate();

  // Check development mode
  isDev.value =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  // Check if already installed as PWA
  isStandalone.value =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  // Track user engagement for PWA
  const trackEngagement = () => {
    if (!userEngaged.value) {
      userEngaged.value = true;
      console.log("User engaged with the app");
    }
  };

  // Track user engagement
  window.addEventListener("click", trackEngagement);
  window.addEventListener("scroll", trackEngagement);
  window.addEventListener("touchstart", trackEngagement);

  // PWA install prompt
  window.addEventListener("beforeinstallprompt", (e) => {
    console.log("beforeinstallprompt event fired");
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt.value = e;

    // Show the install button only if not already in standalone mode and user has engaged
    if (!isStandalone.value) {
      showInstallPrompt.value = true;
      console.log("Install prompt is now available");
    }
  });

  // Listen for the app being installed
  window.addEventListener("appinstalled", () => {
    console.log("PWA was installed");
    showInstallPrompt.value = false;
    deferredPrompt.value = null;
    isStandalone.value = true;
  });

  // Connection status listeners
  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);

  // Vérification initiale de la connexion
  isOnline.value = navigator.onLine;
  if (!navigator.onLine) {
    showOfflineBar.value = true;
  }

  // Start timer interval on client side only
  timerInterval = setInterval(() => {
    currentTime.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleEscape);
  window.removeEventListener("online", handleOnline);
  window.removeEventListener("offline", handleOffline);

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
