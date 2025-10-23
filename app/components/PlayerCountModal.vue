<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
  >
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
      <div class="text-center mb-6">
        <div
          class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Mode Rôles cachés</h2>
        <p class="text-gray-600">Sélectionnez le nombre de joueurs</p>
      </div>

      <div class="space-y-3">
        <button
          @click="$emit('select', 3)"
          class="w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-between"
        >
          <span>3 Joueurs</span>
          <div class="flex space-x-1">
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
          </div>
        </button>
        <button
          @click="$emit('select', 4)"
          class="w-full p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-between"
        >
          <span>4 Joueurs</span>
          <div class="flex space-x-1">
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
          </div>
        </button>
        <button
          @click="$emit('select', 5)"
          class="w-full p-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-between"
        >
          <span>5 Joueurs</span>
          <div class="flex space-x-1">
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
          </div>
        </button>
        <button
          @click="$emit('select', 6)"
          class="w-full p-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-between"
        >
          <span>6 Joueurs</span>
          <div class="flex space-x-1">
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div class="w-3 h-3 bg-white rounded-full opacity-80"></div>
          </div>
        </button>
      </div>

      <button
        @click="$emit('back')"
        class="w-full mt-6 p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
      >
        ← Retour
      </button>
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

defineEmits(['select', 'back'])
</script>
