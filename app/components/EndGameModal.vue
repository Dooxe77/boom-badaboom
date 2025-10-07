<template>
  <div
    v-if="show"
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
            {{ gameDuration || 'Non disponible' }}
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
            @click="$emit('quit')"
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            ✕ Quitter la partie
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  gameDuration: {
    type: String,
    default: null,
  },
})

defineEmits(['quit'])
</script>
