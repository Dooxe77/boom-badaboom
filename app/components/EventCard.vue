<template>
  <div
    v-if="show && event"
    class="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-80"
    @click="$emit('close')"
    @keydown.enter.prevent.stop
  >
    <div
      :class="[
        'bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-purple-400 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform',
        { 'animate-pulse': pulse },
      ]"
      @click.stop
    >
      <div class="p-4 sm:p-6 text-center">
        <div class="text-4xl sm:text-6xl mb-4 sm:mb-4">🎲</div>
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
          Tour {{ turnNumber }}
        </h3>
        <div class="text-base sm:text-lg font-bold text-purple-200 mb-4 sm:mb-4">
          Événement Révélé
        </div>

        <!-- Image de l'événement -->
        <div class="mb-4 sm:mb-4">
          <img
            :src="event.image"
            :alt="event.name"
            loading="lazy"
            class="w-24 h-32 sm:w-32 sm:h-44 mx-auto object-contain rounded-lg bg-white bg-opacity-10 p-2"
          />
        </div>

        <!-- Nom de l'événement -->
        <h4 class="text-lg sm:text-xl font-bold text-yellow-300 mb-2 sm:mb-4">
          {{ event.name }}
        </h4>

        <!-- Effet de l'événement -->
        <div
          class="bg-black bg-opacity-30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-4 text-white text-center text-sm sm:text-base"
          v-html="event.effect"
        ></div>

        <!-- Instructions pour les joueurs -->
        <div class="bg-yellow-900 bg-opacity-50 border border-yellow-600 rounded-lg p-2 sm:p-3 mb-4 sm:mb-4">
          <div class="text-yellow-300 text-xs font-bold mb-1">
            📋 Instructions
          </div>
          <div class="text-yellow-100 text-xs">
            C'est aux joueurs d'appliquer les effets de cet événement pendant ce tour.
          </div>
        </div>

        <button
          @click="(e) => { $emit('close'); e.target.blur(); }"
          class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full text-sm sm:text-base"
        >
          ✓ Compris
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  event: {
    type: Object,
    default: null
  },
  turnNumber: {
    type: Number,
    default: 1
  },
  pulse: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close']);

// Bloquer la touche Enter au niveau du document quand la modal est ouverte
const handleKeydown = (e) => {
  if (props.show && e.key === 'Enter') {
    e.preventDefault();
    e.stopPropagation();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown, true);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown, true);
});
</script>
