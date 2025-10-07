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
          <div class="max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div
              v-for="contributor in contributors"
              :key="`${contributor.firstName}-${contributor.lastName}`"
              class="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              <div class="flex items-center gap-3">
                <div
                  :class="[
                    'w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0 shadow-md',
                    getColorClass(contributor.color)
                  ]"
                >
                  {{ contributor.initials }}
                </div>
                <h4 class="font-semibold text-gray-800 text-sm sm:text-base leading-tight">
                  {{ contributor.firstName }} {{ contributor.lastName }}
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
import { contributors } from '../data/contributors'

const colorMap = {
  'yellow-500': 'bg-yellow-500',
  'blue-500': 'bg-blue-500',
  'pink-500': 'bg-pink-500',
  'green-500': 'bg-green-500',
  'purple-500': 'bg-purple-500',
  'teal-500': 'bg-teal-500',
  'orange-500': 'bg-orange-500',
  'red-500': 'bg-red-500',
  'indigo-500': 'bg-indigo-500',
  'cyan-500': 'bg-cyan-500',
  'rose-500': 'bg-rose-500',
}

const getColorClass = (color) => {
  return colorMap[color] || 'bg-gray-500'
}
</script>
