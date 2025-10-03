<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
    @click="$emit('close')"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-center">
        <h3 class="text-xl font-bold text-white mb-2">
          🎯 Choisissez la Difficulté
        </h3>
        <p class="text-blue-100 text-sm">Affrontez Fourneau le Facétieux</p>
      </div>
      <!-- Content -->
      <div class="p-6 space-y-3">
        <div
          v-for="difficulty in difficultyLevels"
          :key="difficulty.name"
          @click="$emit('select', difficulty)"
          class="w-full group cursor-pointer rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 border-transparent hover:border-opacity-50"
          :class="{
            'bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 hover:border-green-400':
              difficulty.color === 'green',
            'bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 hover:border-blue-400':
              difficulty.color === 'blue',
            'bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 hover:border-orange-400':
              difficulty.color === 'orange',
            'bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 hover:border-red-400':
              difficulty.color === 'red',
            'bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 hover:border-purple-400':
              difficulty.color === 'purple',
          }"
        >
          <div class="flex items-center justify-between">
            <div class="text-left flex-1">
              <div
                class="font-bold text-lg mb-1"
                :class="{
                  'text-green-800': difficulty.color === 'green',
                  'text-blue-800': difficulty.color === 'blue',
                  'text-orange-800': difficulty.color === 'orange',
                  'text-red-800': difficulty.color === 'red',
                  'text-purple-800': difficulty.color === 'purple',
                }"
              >
                {{ difficulty.name }}
              </div>
              <div
                class="text-sm opacity-80"
                :class="{
                  'text-green-700': difficulty.color === 'green',
                  'text-blue-700': difficulty.color === 'blue',
                  'text-orange-700': difficulty.color === 'orange',
                  'text-red-700': difficulty.color === 'red',
                  'text-purple-700': difficulty.color === 'purple',
                }"
              >
                {{ difficulty.turns }} tours • Capacité du four
                {{ difficulty.threshold }} • Taux de victoire moyen
                {{ difficulty.winRate }}
              </div>
            </div>
            <div
              class="text-xl opacity-70 group-hover:opacity-100 transition-opacity"
              :class="{
                'text-green-600': difficulty.color === 'green',
                'text-blue-600': difficulty.color === 'blue',
                'text-orange-600': difficulty.color === 'orange',
                'text-red-600': difficulty.color === 'red',
                'text-purple-600': difficulty.color === 'purple',
              }"
            >
              🎯
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton retour -->
      <div class="p-6 pt-0">
        <button
          @click="$emit('back')"
          class="w-full p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
        >
          ← Retour
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
  difficultyLevels: {
    type: Array,
    required: true,
  },
})

defineEmits(['close', 'select', 'back'])
</script>
