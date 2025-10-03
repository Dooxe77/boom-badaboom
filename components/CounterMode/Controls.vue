<template>
  <div class="p-4 bg-black bg-opacity-70">
    <!-- Événement actuel -->
    <div
      v-if="currentEvent && currentEvent.name !== 'Minuteur final'"
      class="mb-4 p-3 bg-purple-900 bg-opacity-50 border border-purple-400 rounded-lg"
    >
      <div class="text-purple-200 text-xs mb-1">🎲 Événement actuel</div>
      <div class="text-yellow-300 font-bold text-sm mb-1">
        {{ currentEvent.name }}
      </div>
      <div class="text-white text-xs opacity-90" v-html="currentEvent.effect"></div>
    </div>

    <!-- Événement final -->
    <div
      v-if="currentEvent && currentEvent.name === 'Minuteur final'"
      class="mb-4 p-3 bg-red-900 bg-opacity-70 border-2 border-red-500 rounded-lg"
    >
      <div class="text-red-200 text-xs mb-1">🚨 Événement spécial</div>
      <div class="text-yellow-300 font-bold text-sm mb-1">
        {{ currentEvent.name }}
      </div>
      <div class="text-white text-xs font-bold" v-html="currentEvent.effect"></div>
    </div>

    <div class="mb-3">
      <h3 class="text-white font-bold mb-2 text-sm md:text-base">🎂 Taille du Gâteau</h3>

      <!-- Boutons compacts sur une ligne -->
      <div class="flex flex-wrap gap-1 md:gap-1 justify-center">
        <!-- Version mobile : seulement -1 et +1 avec valeur au milieu -->
        <template v-if="true">
          <button
            @click="$emit('adjust-counter', -1)"
            :disabled="gameOver"
            :class="{
              'bg-green-500 hover:bg-green-600': !gameOver,
              'bg-gray-600 opacity-50 cursor-not-allowed': gameOver,
            }"
            class="md:hidden text-white font-bold py-2 px-4 text-base rounded-lg transition-colors active:scale-95"
          >
            -1
          </button>

          <div class="md:hidden bg-white bg-opacity-20 text-white font-bold py-2 px-3 rounded-lg flex items-center mx-1 text-base">
            {{ counterValue }}
          </div>

          <button
            @click="$emit('adjust-counter', +1)"
            :disabled="gameOver"
            :class="{
              'bg-red-500 hover:bg-red-600': !gameOver,
              'bg-gray-600 opacity-50 cursor-not-allowed': gameOver,
            }"
            class="md:hidden text-white font-bold py-2 px-4 text-base rounded-lg transition-colors active:scale-95"
          >
            +1
          </button>
        </template>

        <!-- Version desktop : tous les boutons -->
        <template v-if="true">
          <!-- Boutons de diminution -->
          <button
            v-for="delta in [-3, -2, -1]"
            :key="delta"
            @click="$emit('adjust-counter', delta)"
            :disabled="gameOver"
            :class="{
              'bg-green-500 hover:bg-green-600': !gameOver,
              'bg-gray-600 opacity-50 cursor-not-allowed': gameOver,
            }"
            class="hidden md:inline-block text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors active:scale-95"
          >
            {{ delta }}
          </button>

          <!-- Séparateur visuel -->
          <div class="hidden md:block w-px bg-gray-500 mx-1"></div>

          <!-- Boutons d'augmentation -->
          <button
            v-for="delta in [+1, +2, +3, +4, +5]"
            :key="delta"
            @click="$emit('adjust-counter', delta)"
            :disabled="gameOver"
            :class="{
              'bg-red-500 hover:bg-red-600': !gameOver,
              'bg-gray-600 opacity-50 cursor-not-allowed': gameOver,
            }"
            class="hidden md:inline-block text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors active:scale-95"
          >
            +{{ delta }}
          </button>
        </template>
      </div>
    </div>

    <!-- Contrôles du seuil -->
    <div class="mb-3">
      <h3 class="text-white font-bold mb-2 text-sm md:text-base">🔥 Capacité du Four</h3>
      <div class="flex justify-center flex-wrap gap-1 md:gap-1">
        <!-- Version mobile : seulement -1 et +1 -->
        <template v-if="true">
          <button
            @click="$emit('adjust-threshold', -1)"
            :disabled="gameOver || thresholdValue - 1 < minThreshold"
            class="md:hidden bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white font-bold py-2 px-4 text-base rounded-lg transition-colors active:scale-95"
          >
            -1
          </button>

          <div class="md:hidden bg-white bg-opacity-20 text-white font-bold py-2 px-3 rounded-lg flex items-center mx-1 text-base">
            {{ thresholdValue }}
          </div>

          <button
            @click="$emit('adjust-threshold', +1)"
            :disabled="gameOver || thresholdValue + 1 > maxThreshold"
            class="md:hidden bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white font-bold py-2 px-4 text-base rounded-lg transition-colors active:scale-95"
          >
            +1
          </button>
        </template>

        <!-- Version desktop : tous les boutons -->
        <template v-if="true">
          <!-- Boutons de diminution -->
          <button
            v-for="delta in [-5, -4, -3, -2, -1]"
            :key="'neg-' + delta"
            @click="$emit('adjust-threshold', delta)"
            :disabled="gameOver || thresholdValue + delta < minThreshold"
            class="hidden md:inline-block bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors active:scale-95"
          >
            {{ delta }}
          </button>

          <div class="hidden md:flex bg-white bg-opacity-20 text-white font-bold py-2 px-4 rounded-lg items-center mx-2 text-sm">
            Capacité: {{ thresholdValue }}
          </div>

          <!-- Boutons d'augmentation -->
          <button
            v-for="delta in [+1, +2, +3, +4, +5]"
            :key="'pos-' + delta"
            @click="$emit('adjust-threshold', delta)"
            :disabled="gameOver || thresholdValue + delta > maxThreshold"
            class="hidden md:inline-block bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors active:scale-95"
          >
            +{{ delta }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentEvent: Object,
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
  }
});

defineEmits(['adjust-counter', 'adjust-threshold']);
</script>
