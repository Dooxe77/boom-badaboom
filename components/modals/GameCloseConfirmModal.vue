<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-75"
    @click="$emit('cancel')"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <div class="p-4 sm:p-6 text-center">
        <div class="text-4xl sm:text-5xl mb-4 sm:mb-4">⚠️</div>
        <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-4">
          Quitter la partie ?
        </h3>
        <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
          Êtes-vous sûr de vouloir fermer la partie en cours ?
          <strong>Toutes les données seront perdues.</strong>
        </p>
        <div class="flex space-x-2 sm:space-x-3">
          <button
            @click="$emit('cancel')"
            class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base"
          >
            Annuler
          </button>
          <button
            @click="$emit('confirm')"
            class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base"
          >
            ✕ Quitter
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
})

defineEmits(['cancel', 'confirm'])
</script>
