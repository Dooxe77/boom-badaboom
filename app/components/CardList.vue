<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="card in cards"
      :key="card.name"
      class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
      :style="{
        background: `linear-gradient(135deg, ${gradientFrom}, white)`,
        borderColor: borderColor
      }"
    >
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1">
            <img
              :src="card.image"
              :alt="'Carte ' + card.name"
              loading="lazy"
              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
              @click="$emit('card-click', card.image, card.name)"
            />
          </div>
          <h4 class="font-semibold text-gray-800">
            {{ card.name }}
          </h4>
        </div>
        <div v-if="card.quantity" class="text-right">
          <span class="bg-yellow-500 text-gray-800 text-xs font-bold px-2 py-1 rounded-full flex-shrink-0">
            × {{ card.quantity }}
          </span>
          <div class="text-xs text-gray-500 mt-1">quantité</div>
        </div>
      </div>
      <div v-if="card.type" class="mb-2">
        <span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
          {{ typeIcon }} {{ card.type }}
        </span>
      </div>
      <p class="text-sm text-gray-600">{{ card.effect }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cards: {
    type: Array,
    required: true
  },
  gradientFrom: {
    type: String,
    default: 'rgba(255, 145, 77, 0.1)'
  },
  borderColor: {
    type: String,
    default: 'rgba(255, 145, 77, 0.5)'
  },
  typeIcon: {
    type: String,
    default: '🔧'
  }
});

defineEmits(['card-click']);
</script>
