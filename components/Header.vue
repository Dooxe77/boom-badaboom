<template>
  <header class="relative overflow-hidden">
    <!-- Background avec motif culinaire -->
    <div class="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 text-6xl">🧁</div>
      <div class="absolute top-20 right-16 text-4xl">🍰</div>
      <div class="absolute bottom-16 left-20 text-5xl">🥧</div>
      <div class="absolute bottom-10 right-12 text-3xl">🍪</div>
    </div>

    <div class="relative container mx-auto px-4 sm:px-6 py-8">
      <div class="flex items-center justify-between mb-6">
        <!-- Logo et titre -->
        <div class="flex items-center space-x-4">
          <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center p-2">
            <img
              src="/logo.png"
              alt="Logo Boom Badaboom"
              loading="lazy"
              class="w-full h-full object-contain"
              @error="handleImageError"
            />
          </div>
          <div class="hidden sm:block">
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
              BOOM BADABOOM
            </h1>
            <p class="text-lg text-orange-600 font-medium">
              Chaos en Cuisine
            </p>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2 sm:gap-3">
          <button
            @click="$emit('start-game')"
            class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-base"
          >
            <span class="hidden sm:inline">🎮 Démarrer la partie</span>
            <span class="sm:hidden">🎮 Jouer</span>
          </button>
          <div class="bg-orange-100 text-orange-700 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium border border-orange-200">
            ⚠️ Prototype
          </div>
        </div>
      </div>

      <!-- Titre mobile -->
      <div class="sm:hidden text-center mb-6">
        <h1 class="text-xl font-bold text-gray-800 leading-tight">
          BOOM BADABOOM
        </h1>
        <p class="text-base text-orange-600 font-medium">Chaos en Cuisine</p>
      </div>

      <!-- Infos du jeu -->
      <div class="bg-gradient-to-br from-white/85 via-orange-50/90 to-amber-50/85 backdrop-blur-md rounded-2xl shadow-xl border border-orange-300/60 p-6 ring-1 ring-orange-100/50">
        <div class="text-center">
          <p class="text-gray-700 text-lg mb-3">
            🎭 Jeu de cartes à rôles cachés où les
            <span class="font-semibold text-orange-600">Pâtissiers</span>
            tentent de réussir le gâteau parfait, les
            <span class="font-semibold text-red-500">Farceurs</span> sabotent
            la recette et le
            <span class="font-semibold text-yellow-600">Glouton</span>
            attend le moment parfait pour voler le gâteau et remporter la
            victoire !
          </p>

          <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-gray-600 mb-4">
            <div class="flex items-center space-x-2">
              <span class="text-lg">👥</span>
              <span>1-2 (Coopératif) ou 3-5 (Rôles cachés)</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-lg">⏱️</span>
              <span>15-20 min</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-lg">🎂</span>
              <span>7 ans +</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const handleImageError = (event) => {
  event.target.src = "/placeholder-card.png";
  event.target.onerror = null;
};

defineEmits(['start-game']);
</script>
