<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-85"
    @click="$emit('close')"
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
                >Il y a <strong>10 événements</strong> au total. Le "Minuteur
                final" apparaît aux tours 8, 9 ou 10.</span
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
            Cette application gère la taille du gâteau, la capacité du four et
            les événements. Les joueurs gèrent cartes et actions !
          </div>
        </div>

        <button
          @click="$emit('start')"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full text-sm sm:text-base"
        >
          ✓ C'est parti !
        </button>
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
})

defineEmits(['close', 'start'])
</script>
