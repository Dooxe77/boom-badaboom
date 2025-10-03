<template>
  <Analytics />
  <div class="min-h-screen bg-gray-50">
    <!-- Header Component -->
    <Header @start-game="openGameModeSelection" />

    <!-- Navigation Component -->
    <Navigation />

    <div class="container mx-auto px-4 sm:px-6 py-8">
      <!-- Concept du Jeu -->
      <!-- ConceptSection Component -->
      <ConceptSection />
      <!-- ContenuSection Component -->
      <ContenuSection />
      <!-- MiseEnPlaceSection Component -->
      <MiseEnPlaceSection />
      <!-- VictoireSection Component -->
      <VictoireSection />
      <!-- CartesSection Component -->
      <CartesSection @card-click="openCardModal" />

      <!-- Mode Coopératif -->
      <section
        id="cooperative-mode"
        class="mb-12 relative overflow-hidden rounded-3xl"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"
        ></div>
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-8 left-8 text-5xl">🤖</div>
          <div class="absolute top-16 right-12 text-3xl">🤝</div>
          <div class="absolute bottom-20 left-1/4 text-4xl">⚙️</div>
          <div class="absolute bottom-12 right-1/3 text-2xl">🎮</div>
        </div>

        <div
          class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden relative z-10"
        >
          <div class="p-6 sm:p-10">
            <div class="text-center mb-10">
              <h2
                class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
              >
                Mode Coopératif
              </h2>
              <div
                class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"
              ></div>
              <p class="text-gray-600 text-lg font-medium">
                1-2 Joueurs • Unis contre le fantôme farceur
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 shadow-lg"
            >
              <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">
                👻 L'Histoire : Le Fantôme du Four Ancestral
              </h3>

              <div class="space-y-6 text-gray-700">
                <p class="leading-relaxed">
                  La légende raconte qu'un
                  <strong class="text-purple-600">esprit farceur</strong> hante
                  le vieux four de Mamie Madeleine depuis des générations. Ce
                  fantôme espiègle, surnommé "Fourneau le Facétieux", s'amuse à
                  jouer des tours aux cuisiniers trop sérieux. Aujourd'hui, il a
                  décidé de
                  <strong class="text-red-600">mettre le chaos</strong> dans la
                  préparation du gâteau d'anniversaire !
                </p>

                <div
                  class="bg-white/60 rounded-xl p-6 border border-orange-200"
                >
                  <h4 class="font-bold text-lg text-gray-800 mb-4">
                    Votre Mission :
                  </h4>
                  <p class="mb-4">
                    En tant que membres sérieux de la famille, vous devez
                    <strong class="text-blue-600">coopérer</strong> pour :
                  </p>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <span class="text-orange-500 mr-3 text-xl">🎯</span>
                      <span
                        >Déjouer les farces du fantôme qui tente de faire
                        surchauffer le four magique</span
                      >
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-500 mr-3 text-xl">🛡️</span>
                      <span
                        >Maintenir le gâteau sous contrôle malgré les sabotages
                        surnaturels</span
                      >
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-500 mr-3 text-xl">⏰</span>
                      <span
                        >Réussir à finir la recette avant que le four n'explose
                        dans un grand BOOM BADABOOM !</span
                      >
                    </li>
                  </ul>
                </div>

                <p class="leading-relaxed text-center italic text-gray-600">
                  Le fantôme joue ses cartes contre vous, tentant de saboter
                  chaque étape. Saurez-vous apaiser Fourneau le Facétieux et
                  offrir à Mamie Madeleine le gâteau qu'elle mérite ?
                </p>

                <!-- Work in Progress -->
                <div
                  class="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl p-6 border-2 border-yellow-400 mt-8"
                >
                  <div class="flex items-center justify-center mb-4">
                    <div
                      class="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center"
                    >
                      <span class="text-2xl">🚧</span>
                    </div>
                  </div>
                  <h4
                    class="text-xl font-bold text-yellow-800 text-center mb-3"
                  >
                    Work In Progress
                  </h4>
                  <p class="text-yellow-700 text-center">
                    Ce mode est actuellement en développement. Les règles
                    détaillées et les mécaniques spécifiques seront bientôt
                    disponibles. Restez connectés pour découvrir cette nouvelle
                    façon palpitante de jouer à Boom Badaboom !
                  </p>
                  <div class="flex justify-center mt-4 space-x-2">
                    <div
                      class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                    ></div>
                    <div
                      class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                      style="animation-delay: 0.2s"
                    ></div>
                    <div
                      class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                      style="animation-delay: 0.4s"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Remerciements -->
      <section
        id="remerciements"
        class="mb-12 relative overflow-hidden rounded-3xl"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"
        ></div>
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-8 left-8 text-5xl">🙏</div>
          <div class="absolute top-16 right-12 text-3xl">❤️</div>
          <div class="absolute bottom-20 left-1/4 text-4xl">🎉</div>
          <div class="absolute bottom-12 right-1/3 text-2xl">👏</div>
        </div>

        <div
          class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden relative z-10"
        >
          <div class="p-6 sm:p-10">
            <div class="text-center mb-10">
              <h2
                class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
              >
                Remerciements
              </h2>
              <div
                class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"
              ></div>
              <p class="text-gray-600 text-lg font-medium">
                Merci aux contributeurs qui ont rendu ce jeu possible
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 shadow-lg"
            >
              <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">
                Merci aux contributeurs du projet
              </h3>

              <!-- Grille fixe avec taille homogène -->
              <div
                class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8"
              >
                <!-- Laura Ruelle -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      LR
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Laura</div>
                      <div>Ruelle</div>
                    </h4>
                  </div>
                </div>

                <!-- Mathieu Lecomte -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      ML
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Mathieu</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Amélia Lecomte -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      AL
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Amélia</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Malone Lecomte -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      MA
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Malone</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Hugues Ruelle -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      HR
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Hugues</div>
                      <div>Ruelle</div>
                    </h4>
                  </div>
                </div>

                <!-- Evelyne Ruelle -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      ER
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Evelyne</div>
                      <div>Ruelle</div>
                    </h4>
                  </div>
                </div>

                <!-- Julie Lecomte -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      JL
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Julie</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Marie Lecomte -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      MC
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Marie</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Oscar Verquin -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      OV
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Oscar</div>
                      <div>Verquin</div>
                    </h4>
                  </div>
                </div>

                <!-- Thibaut Debruille -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      TD
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Thibaut</div>
                      <div>Debruille</div>
                    </h4>
                  </div>
                </div>

                <!-- Paulyne Meermans -->
                <div
                  class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-12 h-12 sm:w-14 sm:h-14 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3"
                    >
                      PM
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                    >
                      <div>Paulyne</div>
                      <div>Meermans</div>
                    </h4>
                  </div>
                </div>
              </div>

              <!-- Message de remerciement simple -->
              <div class="text-center">
                <div
                  class="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50"
                >
                  <p class="text-gray-700 font-medium text-lg mb-3">
                    Leurs retours ont permis d'affiner la recette parfaite de ce
                    jeu
                  </p>
                  <p class="text-orange-600 font-bold text-xl">
                    Merci à toute l'équipe ! 👨‍🍳🎉
                  </p>
                </div>
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

    <!-- CounterMode Component -->
    <CounterMode
      :show="showCounterMode"
      :elapsed-time="elapsedTime"
      :player-count="playerCount"
      :turn-number="turnNumber"
      :final-countdown-revealed="finalCountdownRevealed"
      :event-deck-length="eventDeck.length"
      :game-over="gameOver"
      :counter-value="counterValue"
      :threshold-value="thresholdValue"
      :min-threshold="minThreshold"
      :max-threshold="maxThreshold"
      :current-event="currentEvent"
      :is-explosion="isExplosion"
      :show-end-game-modal="showEndGameModal"
      :game-duration="gameDuration"
      @next-turn="finalCountdownRevealed ? endGame() : drawNextEvent()"
      @show-history="showHistoryModal = true"
      @close-confirm="showCloseConfirmModal = true"
      @adjust-counter="adjustCounter"
      @adjust-threshold="adjustThreshold"
      @quit-game="quitGame"
    />

    <!-- Section Contact -->
    <!-- ContactForm Component -->
    <ContactForm />

    <!-- Footer -->
    <footer
      class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-center py-12 relative overflow-hidden"
    >
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-4 left-8 text-3xl">🍰</div>
        <div class="absolute top-8 right-12 text-2xl">👨‍🍳</div>
        <div class="absolute bottom-6 left-1/4 text-4xl">🔥</div>
        <div class="absolute bottom-4 right-1/3 text-2xl">💥</div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 relative z-10">
        <div class="mb-6">
          <h3
            class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent mb-2"
          >
            Boom Badaboom
          </h3>
          <p class="text-lg font-semibold text-orange-300 mb-3">
            Chaos en Cuisine
          </p>
          <div
            class="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-4"
          ></div>
        </div>

        <p class="text-gray-300 text-base leading-relaxed max-w-md mx-auto">
          Jeu de cartes à rôles cachés dans l'univers culinaire
        </p>
        <p class="text-gray-400 text-sm mt-2">Bluff • Tension • Stratégie</p>

        <div class="mt-8 pt-6 border-t border-gray-700">
          <!-- Logo de la maison d'édition -->
          <div class="mb-4 text-center">
            <p class="text-gray-400 text-xs mb-2">Édité par</p>
            <div class="inline-block bg-white/90 rounded-lg px-4 py-2">
              <img
                src="/LaRuelleAuxJeuxLogo.png"
                alt="La Ruelle Aux Jeux"
                class="h-10 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <p class="text-gray-500 text-sm">
            © {{ getCurrentYear() }} La Ruelle Aux Jeux - Créé avec passion pour
            les amateurs de jeux de société
          </p>
        </div>
      </div>
    </footer>

    <!-- CardModal Component -->
    <CardModal
      :show="showCardModal"
      :card="selectedCard"
      @close="closeCardModal"
    />

    <!-- HistoryModal Component -->
    <HistoryModal
      :show="showHistoryModal"
      :history="unifiedHistory"
      @close="showHistoryModal = false"
    />

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

  <!-- GameModeModal Component -->
  <GameModeModal
    :show="showGameModeModal"
    @close="closeGameModeModal"
    @select-competitive="selectCompetitiveMode"
    @select-cooperative="selectCooperativeMode"
  />

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
        <p class="text-blue-100 text-sm">Affrontez Fourneau le Facétieux</p>
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
                {{ difficulty.turns }} tours • Capacité du four
                {{ difficulty.threshold }} • Taux de victoire moyen
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

      <!-- Bouton retour -->
      <div class="p-6 pt-0">
        <button
          @click="
            closeAIDifficultyModal();
            openGameModeSelection();
          "
          class="w-full p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
        >
          ← Retour
        </button>
      </div>
    </div>
  </div>

  <!-- AIMode Component -->
  <AIMode
    :show="showAIMode"
    :selected-difficulty="selectedDifficulty"
    @close="closeAIMode"
  />

  <!-- EventCard Component -->
  <EventCard
    :show="showEventModal"
    :event="currentEvent"
    :turn-number="turnNumber"
    :pulse="eventModalPulse"
    @close="closeEventModal"
  />

  <!-- Modale Fin de Partie -->
  <div
    v-if="showEndGameModal"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-85"
  >
    <div
      class="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
    >
      <!-- Header -->
      <div
        class="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-center"
      >
        <div class="text-4xl mb-4">🏆</div>
        <h3 class="text-2xl font-bold text-white mb-2">Fin de Partie !</h3>
        <p class="text-yellow-100 text-sm">Le "Minuteur final" a été révélé</p>
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

          <div class="grid gap-6 md:grid-cols-2">
            <!-- Pâtissiers -->
            <div
              class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-center"
            >
              <div class="text-2xl mb-4">👩‍🍳</div>
              <h5 class="text-lg font-bold text-white mb-4">PÂTISSIERS</h5>
              <div class="text-blue-100 text-sm space-y-2">
                <div class="font-semibold text-blue-200">
                  Victoire par Réussite :
                </div>
                <div>• Le gâteau est parfait (pas d'explosion)</div>
                <div>• Le Glouton n'a pas volé le gâteau</div>
              </div>
            </div>

            <!-- Glouton -->
            <div
              class="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-4 text-center"
            >
              <div class="text-2xl mb-4">😋</div>
              <h5 class="text-lg font-bold text-white mb-4">GLOUTON</h5>
              <div class="text-yellow-100 text-sm space-y-2">
                <div class="font-semibold text-yellow-200">
                  Victoire immédiate si :
                </div>
                <div>• À son tour seulement !</div>
                <div>• Possède au moins 2 cartes objectifs glouton</div>
                <div>• ET la taille du gâteau est entre 15-18</div>
              </div>
            </div>
          </div>

          <div
            class="mt-4 bg-red-900 bg-opacity-50 rounded-lg p-4 border border-red-500"
          >
            <p class="text-red-200 text-sm text-center">
              ⚠️ Les Farceurs ne peuvent plus gagner car le temps est écoulé
            </p>
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
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Mode Rôles cachés</h2>
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
        @click="
          closePlayerCountModal();
          openGameModeSelection();
        "
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
import { Analytics } from "@vercel/analytics/vue";

// Fonction pour gérer les images manquantes
const handleImageError = (event) => {
  event.target.src = "/placeholder-card.png";
  event.target.onerror = null; // Éviter les boucles infinies
};

// Navigation
const navLinks = [
  { id: "concept", label: "Concept" },
  { id: "contenu", label: "Contenu" },
  { id: "mise-en-place", label: "Mise en Place" },
  { id: "deroulement", label: "Déroulement" },
  { id: "victoire", label: "Victoire" },
  { id: "cartes", label: "Matériel" },
  { id: "faq", label: "FAQ" },
  { id: "cooperative-mode", label: "Mode Coopératif" },
  { id: "remerciements", label: "Remerciements" },
  { id: "contact", label: "Contact" },
];

// Cards data

const actionCards = [
  {
    name: "Coup d'oeil gourmand",
    type: "Action",
    effect:
      "Regardez secrètement la main d'un joueur et volez une carte au choix",
    quantity: 3,
    image: "/placeholder-card.png",
  },
  {
    name: "Accident de cuisine",
    type: "Action",
    effect: "Un joueur de votre choix passe complètement son prochain tour",
    quantity: 3,
    image: "/placeholder-card.png",
  },
  {
    name: "Maladresse",
    type: "Action",
    effect:
      "Un joueur de votre choix doit jouer une carte au hasard de sa main",
    quantity: 2,
    image: "/placeholder-card.png",
  },
  {
    name: "Four élargi",
    type: "Action",
    effect: "Augmentez la capacité du four d'une valeur mystère",
    quantity: 3,
    image: "/placeholder-card.png",
  },
  {
    name: "Four rétréci",
    type: "Action",
    effect: "Diminuez la capacité du four d'une valeur mystère",
    quantity: 3,
    image: "/placeholder-card.png",
  },
  {
    name: "Récupération d'ingrédient",
    type: "Action",
    effect: "Reprenez une carte au choix dans la défausse",
    quantity: 4,
    image: "/placeholder-card.png",
  },
  {
    name: "Échange de Tablier",
    type: "Action",
    effect: "Échangez votre main avec celle d'un joueur de ton choix",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Inspection du frigo",
    type: "Action",
    effect: "Regardez les 3 prochaines cartes de la pioche et changez l'ordre",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Pincée de hasard",
    type: "Action",
    effect:
      "Piochez une carte de valeur aléatoire et modifiez la taille du gâteau : 1 ou 2 = +3 / 3 = 0 / 4 ou 5 = -3",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Changement de toque",
    type: "Action",
    effect: "Échangez votre carte Rôle avec celle face cachée",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Nettoyage complet",
    type: "Action",
    effect: "Défaussez toutes vos cartes et piochez-en le même nombre",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Remixage total",
    type: "Action",
    effect:
      "Mélangez toutes les cartes en main avec la défausse. Redistribuez 5 cartes par joueur",
    quantity: 1,
    image: "/placeholder-card.png",
  },
];

// Setup steps
const setupSteps = [
  "<strong>Séparez les cartes système du reste</strong> (rôles, événements, premier joueur)",
  "<strong>Sélectionnez les cartes selon le nombre de joueurs :</strong><span class='block mt-2'>• <strong>3 joueurs :</strong> Prenez uniquement les cartes marquées 3+</span><span class='block'>• <strong>4 joueurs :</strong> Ajoutez les cartes marquées 4+</span><span class='block'>• <strong>5 joueurs :</strong> Ajoutez aussi les cartes marquées 5+</span><span class='block mt-2'><em>Les indicateurs se trouvent en haut à droite des cartes</em></span>",
  "<strong>Mélangez toutes les cartes de jeu séléctionnées</strong>",
  "Chaque joueur reçoit <strong>5 cartes</strong>",
  "<strong>Placez le plateau de jeu</strong> au centre de la table <span class='text-blue-600 text-sm'>(<em>Peut être passé si vous utilisez l'application</em>)</span>",
  "Placez le jeton <strong>taille du gâteau sur le nombre de joueurs</strong> (3, 4 ou 5) et le jeton <strong>capacité du four sur 20</strong> <span class='text-blue-600 text-sm'>(<em>Peut être passé si vous utilisez l'application</em>)</span>",
  '<strong>Désignez le premier joueur</strong> et donnez-lui la carte "Premier Joueur" qu\'il place devant lui',
  '<strong>Préparez les événements :</strong><span class="block mt-2">• Piochez 9 cartes Événement au hasard (hors Minuteur final)</span><span class="block">• Prenez 2 cartes au hasard de ce paquet + la carte "Minuteur final"</span><span class="block">• Mélangez ces 3 cartes et placez-les <strong>sous la pile</strong> d\'événements</span><span class="block mt-2"><span class="text-blue-600 text-sm">(<em>Peut être passé si vous utilisez l\'application</em>)</span></span>',
  "<strong>Distribuez les rôles</strong> selon le tableau de répartition avec incertitude :<div class='mt-4'></div><div class='bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-400 mb-4'><div class='text-sm text-yellow-800'><strong>🎭 Principe :</strong> Prenez plus de cartes rôles que de joueurs, mélangez-les et distribuez-en une par joueur. La carte non distribuée reste secrète, créant de l'incertitude sur la composition exacte.</div></div><div class='overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0'><div class='inline-block min-w-full'><table class='min-w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden'><thead><tr class='bg-gradient-to-r from-red-500 to-orange-500 text-white'><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Joueurs</th><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Cartes</th><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Composition</th><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Distribuées</th></tr></thead><tbody><tr class='bg-gray-50'><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-bold text-red-600 text-xs sm:text-sm'>3</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>4 cartes</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>2 Pâtissiers + 1 Farceur + 1 Glouton</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-semibold text-green-600 text-xs sm:text-sm'>3 <span class='text-gray-500 text-xs block sm:inline'>(1 retirée)</span></td></tr><tr class='bg-white'><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-bold text-red-600 text-xs sm:text-sm'>4</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>5 cartes</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>2 Pâtissiers + 2 Farceurs + 1 Glouton</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-semibold text-green-600 text-xs sm:text-sm'>4 <span class='text-gray-500 text-xs block sm:inline'>(1 retirée)</span></td></tr><tr class='bg-gray-50'><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-bold text-red-600 text-xs sm:text-sm'>5</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>6 cartes</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>2 Pâtissiers + 3 Farceurs + 1 Glouton</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-semibold text-green-600 text-xs sm:text-sm'>5 <span class='text-gray-500 text-xs block sm:inline'>(1 retirée)</span></td></tr></tbody></table></div></div>",
];

// Game steps
const gameSteps = [
  "<strong>Révélez un événement</strong> (au début du tour du premier joueur uniquement)",
  "<strong>Jouez 1 carte</strong> de votre main",
  "<strong>Appliquez l'effet</strong> de la carte (modification du compteur, action spéciale...)",
  "<strong>Piochez autant de carte que nécessaire</strong> pour revenir à 5 cartes en main (sauf si votre tour est sauté)",
  "<strong>Fin de manche :</strong> Une fois que tous les joueurs ont joué, la carte Premier Joueur passe au joueur de gauche et on dévoile un nouvel événement",
];

// Events
const events = [
  {
    name: "Échange d'Ingrédients",
    effect: "Tous les joueurs passent leur main au joueur à leur gauche",
    image: "/placeholder-card.png",
  },
  {
    name: "Four en panne",
    effect: "Personne ne pioche à la fin de son tour ce tour-ci",
    image: "/placeholder-card.png",
  },
  {
    name: "Inventaire surprise",
    effect: "Tous les joueurs révèlent 1 carte au hasard de leur main",
    image: "/placeholder-card.png",
  },
  {
    name: "Cuisine ouverte",
    effect: "Pendant ce tour, toutes les cartes piochées doivent être révélées",
    image: "/placeholder-card.png",
  },
  {
    name: "Four déréglé",
    effect:
      "Les effets des cartes influant sur la piste sont inversés (les + deviennent des - et les - des +)",
    image: "/placeholder-card.png",
  },
  {
    name: "Éclaboussures",
    effect:
      "Si une carte refroidissement est jouée, le joueur dévoile une carte de la pioche et applique son effet immédiatement",
    image: "/placeholder-card.png",
  },
  {
    name: "Double intensité",
    effect:
      "Chaque carte chaleur/refroidissement 🌡️ compte double (Coup de Boost interdite ce tour)",
    image: "/placeholder-card.png",
  },
  {
    name: "Maladresse",
    effect:
      "Ce tour, après avoir joué votre carte, défaussez immédiatement une autre carte de votre main au hasard",
    image: "/placeholder-card.png",
  },
  {
    name: "Panne d'électricité",
    effect: "Toutes les cartes actions 🔧 ⚡ sont interdites ce tour",
    image: "/placeholder-card.png",
  },
  {
    name: "Service express",
    effect:
      "À son tour, chaque joueur pioche une carte et la joue immédiatement",
    image: "/placeholder-card.png",
  },
  {
    name: "Cuisine en désordre",
    effect: "L'ordre de jeu s'inverse pour le reste de ce tour",
    image: "/placeholder-card.png",
  },
  {
    name: "Gonflement progressif",
    effect:
      "À la fin du tour de chaque joueur qui joue, la taille du gâteau augmente de 1",
    image: "/placeholder-card.png",
  },
  {
    name: "Ventilation d'urgence",
    effect:
      "Si la taille du gâteau est à plus de 15 à la fin du tour, retirer 3",
    image: "/placeholder-card.png",
  },
  {
    name: "Réchauffage automatique",
    effect:
      "Si la taille du gâteau est à moins de 10 à la fin du tour, ajouter 2",
    image: "/placeholder-card.png",
  },
  {
    name: "Minuteur final",
    effect:
      "Dernier tour ! Chaque joueur joue une dernière fois, puis la partie s'arrête",
    image: "/placeholder-card.png",
  },
];

// AI difficulty levels
const aiDifficultyLevels = [
  {
    name: "🧁 Cupcake (Très facile)",
    turns: 7,
    threshold: 19,
    winRate: "90%",
    color: "green",
  },
  {
    name: "🍰 Génoise (Facile)",
    turns: 8,
    threshold: 17,
    winRate: "70%",
    color: "blue",
  },
  {
    name: "🎂 Éclair (Moyen)",
    turns: 11,
    threshold: 15,
    winRate: "40%",
    color: "orange",
  },
  {
    name: "🍮 Tarte Tatin (Difficile)",
    turns: 13,
    threshold: 12,
    winRate: "15%",
    color: "red",
  },
  {
    name: "👨‍🍳 Pièce Montée (Très difficile)",
    turns: 15,
    threshold: 10,
    winRate: "5%",
    color: "purple",
  },
];

// FAQs
const faqs = [
  {
    question:
      "Que se passe-t-il si la taille du gâteau devrait descendre sous 0 ?",
    answer:
      "<strong>La taille du gâteau ne peut jamais descendre sous 0.</strong> Si une carte devait le faire descendre en dessous, il reste à 0.",
  },
  {
    question: "Puis-je regarder la défausse ?",
    answer:
      '<strong>Non.</strong> Il est interdit de fouiller la défausse. Seule la dernière carte posée sur la pile de défausse est visible de tous. Le seul moyen de voir le contenu de la défausse est via une carte Action comme "Récupération d’ingrédient".',
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
    question: "Four rétréci - Règles importantes",
    answer:
      "<span class='block'>• Cette carte <strong>ne peut jamais</strong> déclencher l'explosion</span><span class='block'>• La nouvelle capacité du four doit être <strong>au minimum</strong> à (taille du gâteau actuel + 1)</span><span class='block'>• Le montant de réduction est déterminé par une carte numérotée tirée au hasard</span><span class='block'>• Si la réduction diminuerait la capacité du four trop bas, la carte ne peut pas être jouée</span>",
  },
  {
    question: "Comment fonctionne la carte Renvoi de spatule ?",
    answer:
      "La carte Renvoi de spatule peut :<span class='block mt-2'>• <strong>Rediriger une action</strong> dirigée contre vous vers son auteur</span><span class='block'>• <strong>Inverser le signe</strong> d'une carte refroidissement/chaleur (+ devient -, - devient +)</span>",
  },
  {
    question: "Peut-on jouer Coup de boost sur une carte Renvoi de spatule ?",
    answer:
      "<strong>Non.</strong> La carte Coup de boost ne peut pas être jouée sur une carte Renvoi de spatule. Le Renvoi de spatule est une carte réactive spéciale qui ne peut pas être surchargée.",
  },
  {
    question: "Maladresse et cartes objectif",
    answer:
      "Si la carte jouée au hasard par Maladresse est une <strong>carte objectif du Glouton</strong> (Cerises confites, Spirale de caramel, Macarons dorés, Rosace de chantilly, Bonbons gélifiés), elle est <strong>défaussée sans effet</strong>.",
  },
  {
    question: "Que faire si je ne peux pas ou ne veux pas jouer de carte ?",
    answer:
      "<span class='block mb-2'><strong>Si aucune carte de votre main ne peut être jouée :</strong> Défaussez une carte de votre choix.</span><span class='block'><strong>Si vous pouvez jouer au moins une carte :</strong> Vous êtes <strong>obligé(e) de la jouer</strong>, même si cela ne vous arrange pas stratégiquement.</span>",
  },
  {
    question: "Comment distribuer les cartes avec Remixage total ?",
    answer:
      "Après avoir mélangé toutes les cartes des mains et de la défausse :<span class='block mt-2'>• Distribuez <strong>1 carte à la fois</strong> en tournant dans le sens des aiguilles d'une montre</span><span class='block'>• Continuez jusqu'à ce que chaque joueur ait <strong>5 cartes</strong></span><span class='block'>• <strong>S'il n'y a pas assez de cartes</strong> dans la pile, distribuez tout de même jusqu'à épuisement (certains joueurs peuvent avoir moins de 5 cartes)</span>",
  },
];

// Back to top functionality
const showBackToTop = ref(false);

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
const isExplosion = ref(false);
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

// Get current year
const getCurrentYear = () => {
  return new Date().getFullYear();
};

// Card modal functions
const openCardModal = (cardImage, cardName) => {
  // Use placeholder if image doesn't exist
  const imagePath = cardImage || "/placeholder-card.png";
  selectedCard.value = { image: imagePath, name: cardName };
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

// Counter mode functions
const openCounterMode = () => {
  showCounterMode.value = true;

  // Initialize counter values
  counterValue.value = playerCount.value;
  thresholdValue.value = 20;
  counterHistory.value = [];
  showExplosion.value = false;
  gameOver.value = false;
  isExplosion.value = false;
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
  isExplosion.value = true;

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

const adjustCounterRandom = (type) => {
  let delta;
  if (type === "positive") {
    // Random entre +1 et +5
    delta = Math.floor(Math.random() * 5) + 1;
  } else {
    // Random entre -1 et -5
    delta = -(Math.floor(Math.random() * 5) + 1);
  }
  adjustCounter(delta);
};

const adjustThreshold = (delta) => {
  const newValue = thresholdValue.value + delta;
  if (newValue >= minThreshold.value && newValue <= maxThreshold.value) {
    const oldValue = thresholdValue.value;
    thresholdValue.value = newValue;

    // Enregistrer dans l'historique
    counterHistory.value.push({
      action: delta > 0 ? `Capacité +${delta}` : `Capacité ${delta}`,
      oldValue: oldValue,
      newValue: newValue,
      timestamp: new Date().toLocaleTimeString(),
      type: "threshold",
    });
  }
};

const adjustThresholdRandom = (type) => {
  let delta;
  if (type === "positive") {
    // Random entre +1 et +5
    delta = Math.floor(Math.random() * 5) + 1;
  } else {
    // Random entre -1 et -5
    delta = -(Math.floor(Math.random() * 5) + 1);
  }
  adjustThreshold(delta);
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
  // Get all events except "Minuteur final"
  const normalEvents = events.filter(
    (event) => event.name !== "Minuteur final"
  );
  const finalEvent = events.find((event) => event.name === "Minuteur final");

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
    `Carte "Minuteur final" placée à la position ${finalPosition} (tour ${
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
  if (drawnEvent.name === "Minuteur final") {
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
  document.body.style.overflow = "hidden";
};
const closeGameModeModal = () => {
  showGameModeModal.value = false;
  document.body.style.overflow = "auto";
};
const selectCompetitiveMode = () => {
  console.log("selectCompetitiveMode called");
  console.log("showPlayerCountModal BEFORE:", showPlayerCountModal.value);
  closeGameModeModal();
  showPlayerCountModal.value = true;
  document.body.style.overflow = "hidden";
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
  document.body.style.overflow = "hidden";
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
  document.body.style.overflow = "auto";
};

// AI difficulty selection functions
const selectAIDifficulty = (difficulty) => {
  selectedDifficulty.value = difficulty;
  showAIDifficultyModal.value = false;
  document.body.style.overflow = "auto";
  openAIMode();
};
const closeAIDifficultyModal = () => {
  showAIDifficultyModal.value = false;
  document.body.style.overflow = "auto";
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
        "Découvrez les règles complètes de Boom Badaboom, un jeu de cartes à rôles cachés mêlant bluff, tension et stratégie pour 1-5 joueurs.",
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
