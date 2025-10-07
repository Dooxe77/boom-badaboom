<template>
  <div class="flex justify-center items-center gap-4 sm:gap-6 px-4 py-2 bg-black bg-opacity-50 border-b border-gray-700">
    <!-- Taille du gâteau -->
    <div class="flex items-center gap-2">
      <span class="text-white text-xs sm:text-sm opacity-70">
        <span class="md:hidden">🎂 Gâteau:</span>
        <span class="hidden md:inline">🎂 Taille du gâteau:</span>
      </span>
      <span
        class="text-white font-bold text-sm sm:text-base px-2 py-1 rounded"
        :class="{
          'bg-blue-600': counterValue < thresholdValue - 3,
          'bg-orange-600': counterValue >= thresholdValue - 3 && counterValue < thresholdValue,
          'bg-red-600': counterValue >= thresholdValue,
        }"
      >
        {{ counterValue }}
      </span>
    </div>

    <!-- Capacité du four -->
    <div class="flex items-center gap-2">
      <span class="text-white text-xs sm:text-sm opacity-70">
        <span class="md:hidden">🔥 Four:</span>
        <span class="hidden md:inline">🔥 Capacité du four:</span>
      </span>
      <span class="text-white font-bold text-sm sm:text-base bg-red-600 px-2 py-1 rounded">
        {{ thresholdValue }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  counterValue: {
    type: Number,
    required: true
  },
  thresholdValue: {
    type: Number,
    required: true
  }
});
</script>
