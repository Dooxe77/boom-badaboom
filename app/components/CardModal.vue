<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-75"
    @click="$emit('close')"
  >
    <div
      class="relative max-w-lg w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
      @click.stop
    >
      <!-- Close button -->
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
      >
        ✕
      </button>

      <!-- Card image -->
      <div class="p-4 sm:p-6">
        <img
          v-if="card"
          :src="card.image"
          :alt="card.name"
          loading="lazy"
          class="w-full h-auto object-contain rounded-xl shadow-lg"
          @error="handleImageError"
        />
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
  card: {
    type: Object,
    default: null
  }
});

defineEmits(['close']);

const handleImageError = (event) => {
  event.target.src = "/placeholder-card.png";
  event.target.onerror = null;
};
</script>
