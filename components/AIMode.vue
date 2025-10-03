<template>
  <div
    v-if="show"
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
      <div class="relative z-10 bg-black bg-opacity-30 border-b border-blue-400">
        <div class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-white flex items-center gap-3">
            👻 Défi contre Fourneau le Facétieux
          </h1>
          <button
            @click="$emit('close')"
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
              {{ selectedDifficulty.turns }} tours • Capacité du four {{ selectedDifficulty.threshold }}
            </div>
          </div>
        </div>

        <!-- Placeholder pour le contenu du mode IA -->
        <div class="text-center text-white bg-black bg-opacity-30 rounded-xl p-8">
          <div class="text-4xl mb-4">🚧</div>
          <h3 class="text-xl font-bold mb-4">Mode en développement</h3>
          <p class="text-blue-200 mb-6">
            Le mode coopératif contre Fourneau le Facétieux sera bientôt disponible avec toutes les nouvelles règles !
          </p>
          <button
            @click="$emit('close')"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Retour au menu
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
    default: false
  },
  selectedDifficulty: {
    type: Object,
    default: null
  }
});

defineEmits(['close']);
</script>
