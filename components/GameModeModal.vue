<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
    @click="$emit('close')"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-center">
        <h3 class="text-xl font-bold text-white mb-2">
          🎯 Choisissez votre Mode
        </h3>
        <p class="text-red-100 text-sm">Comment souhaitez-vous jouer ?</p>
      </div>
      <!-- Content -->
      <div class="p-6 space-y-4">
        <!-- Mode Rôles cachés -->
        <button
          @click="$emit('select-competitive')"
          class="w-full group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <div class="flex items-center justify-between">
            <div class="text-left">
              <div class="font-bold text-lg mb-1">🎭 Mode Rôles cachés</div>
              <div class="text-red-100 text-sm">
                3-5 joueurs • Bluff et déduction
              </div>
            </div>
            <div class="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
              ⚔️
            </div>
          </div>
        </button>
        <!-- Mode Coopératif -->
        <button
          @click="$emit('select-cooperative')"
          class="w-full group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <div class="flex items-center justify-between">
            <div class="text-left">
              <div class="font-bold text-lg mb-1">👻 Mode Coopératif</div>
              <div class="text-blue-100 text-sm">
                1-2 joueurs contre Fourneau le Facétieux
              </div>
            </div>
            <div class="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">
              🤝
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

defineEmits(['close', 'select-competitive', 'select-cooperative']);
</script>
