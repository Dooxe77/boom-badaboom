<template>
  <section id="setup" class="mb-12">
    <div
      class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden"
    >
      <div class="p-6 sm:p-10">
        <!-- Titre de section -->
        <div class="text-center mb-10">
          <h2
            class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4"
          >
            Mise en Place
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full mx-auto mb-4"
          ></div>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Préparez votre cuisine pour le chaos ! Suivez ces étapes pour
            une mise en place parfaite.
          </p>
        </div>

        <!-- Étapes de mise en place -->
        <div class="max-w-4xl mx-auto">
          <ol class="space-y-3">
            <li
              v-for="(step, index) in setupSteps"
              :key="index"
              class="bg-white rounded-xl p-4 shadow-md border border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center space-x-4">
                <!-- Numéro de l'étape -->
                <div class="flex-shrink-0">
                  <div
                    class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md"
                  >
                    {{ index + 1 }}
                  </div>
                </div>

                <!-- Contenu de l'étape -->
                <div class="flex-1 min-w-0">
                  <div
                    class="text-gray-800 text-sm leading-relaxed"
                    v-html="step"
                  ></div>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <!-- Note d'encouragement -->
        <div class="mt-6 text-center">
          <div
            class="bg-green-100 rounded-xl p-4 border border-green-300 max-w-2xl mx-auto"
          >
            <p class="text-green-800 font-medium">
              🍰 Une fois la mise en place terminée, que le meilleur
              gagne... et que le gâteau survive (ou pas) ! 🍰
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Déroulement -->
  <section
    id="gameplay"
    class="mb-12 relative overflow-hidden rounded-3xl"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"
    ></div>
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-8 left-8 text-5xl">⏰</div>
      <div class="absolute top-16 right-12 text-3xl">🎲</div>
      <div class="absolute bottom-20 left-1/4 text-4xl">📝</div>
      <div class="absolute bottom-12 right-1/3 text-2xl">🔄</div>
    </div>

    <div
      class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden"
    >
      <div class="p-6 sm:p-10">
        <div class="text-center mb-10">
          <h2
            class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
          >
            Déroulement d'une partie
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto"
          ></div>
        </div>

        <div
          class="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 border border-orange-200/50 shadow-lg"
        >
          <h3
            class="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
          >
            Séquence de Tour
          </h3>

          <div class="space-y-4">
            <div
              v-for="(step, index) in gameSteps"
              :key="index"
              class="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/40"
            >
              <div class="flex items-start space-x-4 sm:space-x-6">
                <div class="flex-shrink-0">
                  <div
                    class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                  >
                    {{ index + 1 }}
                  </div>
                </div>
                <div class="flex-1 pt-2">
                  <p
                    class="text-gray-700 text-base sm:text-lg leading-relaxed"
                    v-html="step"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-yellow-100/90 to-amber-100/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-yellow-300/50"
        >
          <div class="flex items-center justify-center mb-6">
            <div
              class="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-3 shadow-lg"
            >
              <div class="text-2xl text-white">⚠️</div>
            </div>
          </div>

          <h4
            class="text-xl sm:text-2xl font-bold text-center text-amber-800 mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent"
          >
            Fin de Partie Immédiate
          </h4>

          <div class="space-y-3">
            <div
              class="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50 hover:bg-white/90 transition-colors duration-300"
            >
              <div class="flex items-start space-x-3">
                <div class="text-xl">💥</div>
                <div
                  class="text-amber-700 font-medium text-sm sm:text-base"
                >
                  <strong>Si le gâteau explose</strong> (taille du gâteau ≥
                  capacité du four)
                </div>
              </div>
            </div>

            <div
              class="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50 hover:bg-white/90 transition-colors duration-300"
            >
              <div class="flex items-start space-x-3">
                <div class="text-xl">⏱️</div>
                <div
                  class="text-amber-700 font-medium text-sm sm:text-base"
                >
                  <strong>Après le tour déclenché</strong> par l'événement
                  "Minuteur final"
                </div>
              </div>
            </div>

            <div
              class="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50 hover:bg-white/90 transition-colors duration-300"
            >
              <div class="flex items-start space-x-3">
                <div class="text-xl">🃏</div>
                <div
                  class="text-amber-700 font-medium text-sm sm:text-base"
                >
                  <strong>Quand la pioche est vide</strong> et qu'un joueur
                  ne peut plus reconstituer sa main (on termine le tour en
                  cours)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Conditions de Victoire -->
</template>

<script setup>
import gameContent from '../data/game-content';

const { setupSteps, gameSteps } = gameContent;
</script>
