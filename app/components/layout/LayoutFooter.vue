<template>
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
          © {{ currentYear }} La Ruelle Aux Jeux - Créé avec passion pour les
          amateurs de jeux de société
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
