<template>
  <div class="flex flex-col bg-black bg-opacity-70">
    <!-- Ligne principale header -->
    <div class="flex justify-between items-center p-4">
      <!-- Timer et informations centrés -->
      <div class="flex-1 text-center">
        <div v-if="elapsedTime" class="text-white text-sm opacity-60">
          ⏱️ {{ elapsedTime }}
        </div>
        <div class="text-white text-sm opacity-70 mt-1">
          👥 {{ playerCount }} joueur{{ playerCount > 1 ? "s" : "" }}
        </div>
        <div v-if="turnNumber > 0" class="text-white text-xs opacity-50 mt-1">
          <span v-if="finalCountdownRevealed" class="text-red-300 font-bold">
            🚨 DERNIER TOUR 🚨
          </span>
          <span v-else>
            Tour {{ turnNumber }} |
            {{
              eventDeckLength > 0
                ? eventDeckLength + " événements max restants"
                : "Tous les événements révélés"
            }}
          </span>
        </div>
      </div>

      <div class="flex space-x-2">
        <button
          @click="$emit('next-turn')"
          :disabled="gameOver || (eventDeckLength === 0 && !finalCountdownRevealed)"
          :class="{
            'bg-purple-500 hover:bg-purple-600':
              !gameOver && eventDeckLength > 0 && !finalCountdownRevealed,
            'bg-red-500 hover:bg-red-600': !gameOver && finalCountdownRevealed,
            'bg-gray-600 opacity-50 cursor-not-allowed':
              gameOver || (eventDeckLength === 0 && !finalCountdownRevealed),
          }"
          class="text-white px-2 sm:px-3 py-2 rounded-lg font-bold transition-colors text-xs sm:text-sm flex items-center space-x-1"
        >
          <span>🎲</span>
          <span class="hidden xs:inline sm:inline">
            {{
              finalCountdownRevealed
                ? "Fin de partie"
                : eventDeckLength > 0
                ? "Nouveau Tour"
                : "Plus d'événements"
            }}
          </span>
        </button>
        <button
          @click="$emit('show-history')"
          class="bg-gray-700 hover:bg-gray-800 text-white px-2 sm:px-3 py-2 rounded-lg font-bold transition-colors text-xs sm:text-sm flex items-center space-x-1"
        >
          <span>📋</span>
          <span class="hidden xs:inline sm:inline">Historique</span>
        </button>
        <button
          @click="$emit('close')"
          class="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-bold transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  elapsedTime: String,
  playerCount: Number,
  turnNumber: Number,
  finalCountdownRevealed: Boolean,
  eventDeckLength: Number,
  gameOver: Boolean
});

defineEmits(['next-turn', 'show-history', 'close']);
</script>
