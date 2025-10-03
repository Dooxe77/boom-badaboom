<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
    @click="$emit('close')"
  >
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-96 overflow-hidden" @click.stop>
      <div class="p-4 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-bold text-gray-800">📋 Historique</h3>
          <button
            @click="$emit('close')"
            class="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
      <div class="p-4 max-h-80 overflow-y-auto">
        <div v-if="history.length === 0" class="text-center text-gray-500 py-8">
          Aucune action enregistrée
        </div>
        <div v-else class="space-y-3">
          <div
            v-for="(item, index) in [...history].reverse()"
            :key="index"
            class="p-3 rounded-lg border"
            :class="{
              'bg-purple-50 border-purple-200': item.type === 'event',
              'bg-blue-50 border-blue-200': item.type === 'counter',
              'bg-orange-50 border-orange-200': item.type === 'threshold',
            }"
          >
            <!-- Événement -->
            <div v-if="item.type === 'event'">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center space-x-2">
                  <span class="text-purple-600 text-sm font-bold">🎲</span>
                  <span class="text-sm font-bold text-purple-800">
                    Tour {{ item.turn }}: {{ item.name }}
                  </span>
                </div>
                <span class="text-xs text-purple-500">{{ item.timestamp }}</span>
              </div>
              <div class="text-xs text-purple-600 ml-6" v-html="item.effect"></div>
            </div>

            <!-- Modification de la taille -->
            <div v-else-if="item.type === 'counter'">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <span class="text-blue-600 text-sm font-bold">🎂</span>
                  <span class="text-sm font-medium text-blue-700">Taille {{ item.action }}</span>
                  <span class="text-sm text-blue-600 font-mono bg-blue-100 px-2 py-1 rounded">
                    {{ item.oldValue }} → {{ item.newValue }}
                  </span>
                </div>
                <span class="text-xs text-blue-500">{{ item.timestamp }}</span>
              </div>
            </div>

            <!-- Modification de la capacité -->
            <div v-else-if="item.type === 'threshold'">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <span class="text-orange-600 text-sm font-bold">🔥</span>
                  <span class="text-sm font-medium text-orange-700">{{ item.action }}</span>
                  <span class="text-sm text-orange-600 font-mono bg-orange-100 px-2 py-1 rounded">
                    {{ item.oldValue }} → {{ item.newValue }}
                  </span>
                </div>
                <span class="text-xs text-orange-500">{{ item.timestamp }}</span>
              </div>
            </div>

            <!-- Initialisation -->
            <div v-else-if="item.type === 'init'">
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <span class="text-green-600 text-sm font-bold">🎯</span>
                  <span class="text-sm font-medium text-green-700">{{ item.action }}</span>
                  <span class="text-sm text-green-600 font-mono bg-green-100 px-2 py-1 rounded">
                    {{ item.oldValue }} → {{ item.newValue }}
                  </span>
                </div>
                <span class="text-xs text-green-500">{{ item.timestamp }}</span>
              </div>
            </div>
          </div>
        </div>
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
  history: {
    type: Array,
    default: () => []
  }
});

defineEmits(['close']);
</script>
