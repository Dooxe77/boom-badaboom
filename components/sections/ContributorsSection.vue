<template>
  <section
    id="contributors"
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

          <!-- Contributors Grid -->
          <div
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8"
          >
            <div
              v-for="contributor in contributors"
              :key="`${contributor.firstName}-${contributor.lastName}`"
              class="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <div class="flex flex-col items-center">
                <div
                  :class="`w-12 h-12 sm:w-14 sm:h-14 bg-${contributor.color} rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg mb-2 sm:mb-3`"
                >
                  {{ contributor.initials }}
                </div>
                <h4
                  class="font-semibold text-gray-800 text-center text-xs sm:text-sm leading-tight"
                >
                  <div>{{ contributor.firstName }}</div>
                  <div>{{ contributor.lastName }}</div>
                </h4>
              </div>
            </div>
          </div>

          <!-- Thank you message -->
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
</template>

<script setup>
import { contributors } from '../../data/contributors'
</script>
