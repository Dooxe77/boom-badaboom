<template>
  <div v-if="show" class="fixed inset-0 z-50 bg-black flex items-center justify-center">
    <div class="w-full h-full relative overflow-hidden">
      <!-- Background avec effet coloré design -->
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-red-900">
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
        <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
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
        <CounterModeHeader
          :elapsed-time="elapsedTime"
          :player-count="playerCount"
          :turn-number="turnNumber"
          :final-countdown-revealed="finalCountdownRevealed"
          :event-deck-length="eventDeckLength"
          :game-over="gameOver"
          @next-turn="$emit('next-turn')"
          @show-history="$emit('show-history')"
          @close="$emit('close-confirm')"
        />

        <!-- Bandeau des valeurs (légende) -->
        <CounterModeLegend :counter-value="counterValue" :threshold-value="thresholdValue" />

        <!-- Zone principale avec pions -->
        <CounterModeVisualizer :counter-value="counterValue" :threshold-value="thresholdValue" />

        <!-- Contrôles du compteur -->
        <CounterModeControls
          :current-event="currentEvent"
          :game-over="gameOver"
          :counter-value="counterValue"
          :threshold-value="thresholdValue"
          :min-threshold="minThreshold"
          :max-threshold="maxThreshold"
          @adjust-counter="$emit('adjust-counter', $event)"
          @adjust-threshold="$emit('adjust-threshold', $event)"
        />
      </div>

      <!-- Modale Explosion -->
      <div
        v-if="isExplosion && !showEndGameModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-85"
      >
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <!-- Header -->
          <div class="bg-gradient-to-r from-red-600 to-red-700 p-6 text-center">
            <div class="text-4xl mb-4">💥</div>
            <h3 class="text-2xl font-bold text-white mb-2">💥 Explosion !</h3>
            <p class="text-red-100 text-sm">
              Le gâteau a explosé ! Taille: {{ counterValue }} / Capacité du four: {{ thresholdValue }}
            </p>
          </div>

          <!-- Content -->
          <div class="p-6 space-y-6">
            <!-- Temps de partie -->
            <div class="text-center bg-gray-700 rounded-xl p-4 border border-gray-600">
              <div class="text-yellow-400 text-sm font-medium mb-2">⏱️ Temps de partie</div>
              <div class="text-white text-2xl font-bold">
                {{ gameDuration || "Non disponible" }}
              </div>
            </div>

            <!-- Résultat de la partie -->
            <div class="bg-gray-700 rounded-xl p-6 border border-gray-600">
              <h4 class="text-xl font-bold text-red-400 mb-4 text-center">🎯 Résultat de la Partie</h4>

              <div class="text-center">
                <!-- Farceurs gagnants -->
                <div class="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-center max-w-md mx-auto">
                  <div class="text-3xl mb-4">🤡</div>
                  <h5 class="text-xl font-bold text-white mb-4">FARCEURS VICTORIEUX !</h5>
                  <div class="text-red-100 text-sm space-y-2">
                    <div class="font-semibold text-red-200">🏆 Les Farceurs ont gagné !</div>
                    <div>• Le gâteau a explosé</div>
                    <div>• Leur mission de chaos est accomplie</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Boutons -->
            <div class="flex justify-center pt-4">
              <button
                @click="$emit('quit-game')"
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
</template>

<script setup>
// Components are auto-imported by Nuxt

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  elapsedTime: String,
  playerCount: Number,
  turnNumber: Number,
  finalCountdownRevealed: Boolean,
  eventDeckLength: Number,
  gameOver: Boolean,
  counterValue: Number,
  thresholdValue: Number,
  minThreshold: {
    type: Number,
    default: 10
  },
  maxThreshold: {
    type: Number,
    default: 30
  },
  currentEvent: Object,
  isExplosion: Boolean,
  showEndGameModal: Boolean,
  gameDuration: String
});

defineEmits(['next-turn', 'show-history', 'close-confirm', 'adjust-counter', 'adjust-threshold', 'quit-game']);
</script>
