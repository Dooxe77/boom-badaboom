<template>
  <div class="flex-1 relative">
    <!-- Ligne principale améliorée avec effet 3D -->
    <div
      class="absolute h-3 rounded-full bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 shadow-inner transition-all duration-300"
      :style="{
        left: '10%',
        right: '10%',
        top: '50%',
        transform: 'translateY(-50%)',
      }"
    >
      <!-- Barre de progression avec dégradé -->
      <div class="absolute inset-0 h-full rounded-full bg-gradient-to-r from-blue-400 via-yellow-500 to-red-600 opacity-40"></div>
      <!-- Effet de brillance sur le dessus -->
      <div class="absolute top-0 left-0 right-0 h-1 rounded-t-full bg-gradient-to-b from-white to-transparent opacity-30"></div>

      <!-- Graduations sur la ligne -->
      <div
        v-for="mark in [0, 5, 10, 15, 20, 25, 30]"
        :key="'mark-' + mark"
        class="absolute"
        :style="{
          left: `${(mark / 30) * 100}%`,
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }"
      >
        <!-- Trait de graduation -->
        <div
          class="w-0.5 bg-white opacity-50"
          :class="{
            'h-4': mark % 10 === 0,
            'h-3': mark % 10 !== 0,
          }"
          :style="{ transform: 'translateY(-50%)' }"
        ></div>
        <!-- Chiffre sous la ligne -->
        <div
          v-if="mark % 5 === 0"
          class="absolute text-white text-xs opacity-60 font-medium"
          :style="{
            top: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
          }"
        >
          {{ mark }}
        </div>
      </div>
    </div>

    <!-- Représentation du Four avec pion capacité -->
    <div
      class="absolute transition-all duration-500"
      :style="{
        left: `${getThresholdPosition()}%`,
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }"
    >
      <!-- Version mobile : simple pastille -->
      <div class="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 border-2 border-white shadow-xl flex items-center justify-center">
        <div class="text-white text-sm font-black drop-shadow-lg">
          {{ thresholdValue }}
        </div>
      </div>

      <!-- Version desktop : four complet -->
      <div class="hidden md:block">
        <!-- Corps du four - forme de four vintage -->
        <div
          class="relative w-24 h-28 rounded-t-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border-3 border-gray-600 shadow-2xl"
          :style="{ filter: 'drop-shadow(0 0 15px rgba(239, 68, 68, 0.5))' }"
        >
          <!-- Porte du four (fenêtre) -->
          <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-lg bg-gradient-to-br from-red-400 via-red-500 to-red-700 border-2 border-gray-600 shadow-inner flex flex-col items-center justify-center">
            <!-- Reflet de la vitre -->
            <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-white via-transparent to-transparent opacity-20"></div>

            <!-- Contenu - Icône four + chiffre -->
            <div class="relative text-white font-bold text-center z-10 flex flex-col items-center">
              <div class="text-xl mb-0.5">🔥</div>
              <div class="text-lg font-black drop-shadow-lg">
                {{ thresholdValue }}
              </div>
            </div>

            <!-- Effet de chaleur animé -->
            <div class="absolute inset-0 rounded-lg bg-red-500 opacity-30 animate-ping"></div>
          </div>

          <!-- Poignée du four -->
          <div class="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-10 h-1.5 rounded-full bg-gray-500 border border-gray-400"></div>

          <!-- Boutons de contrôle du four -->
          <div class="absolute top-1.5 right-1.5 flex flex-col gap-0.5">
            <div class="w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-70"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-red-400 opacity-70"></div>
          </div>
        </div>

        <!-- Socle du four -->
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-28 h-2.5 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-b-lg"></div>
      </div>
    </div>

    <!-- Pion Gâteau (bleu) - Design amélioré avec icône gâteau -->
    <div
      class="absolute rounded-full border-2 md:border-4 border-white shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-yellow-300 cursor-pointer z-10"
      :style="{
        left: `${getCounterPosition()}%`,
        top: '50%',
      }"
      :class="[
        'w-10 h-10 -translate-x-5 -translate-y-5 md:w-24 md:h-24 md:-translate-x-12 md:-translate-y-12',
        {
          'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700': counterValue < thresholdValue - 3,
          'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600': counterValue >= thresholdValue - 3 && counterValue < thresholdValue,
          'bg-gradient-to-br from-red-500 via-red-600 to-red-800': counterValue >= thresholdValue,
        },
      ]"
    >
      <!-- Cercle intérieur avec effet de profondeur (desktop seulement) -->
      <div
        class="hidden md:block absolute inset-1 rounded-full opacity-80"
        :class="{
          'bg-gradient-to-t from-blue-800 to-blue-400': counterValue < thresholdValue - 3,
          'bg-gradient-to-t from-orange-800 to-yellow-400': counterValue >= thresholdValue - 3 && counterValue < thresholdValue,
          'bg-gradient-to-t from-red-900 to-red-500': counterValue >= thresholdValue,
        }"
      ></div>

      <!-- Contenu du pion - Version mobile : juste le chiffre -->
      <div class="md:hidden relative text-white font-bold text-center z-10">
        <div class="text-sm font-black drop-shadow-lg">
          {{ counterValue }}
        </div>
      </div>

      <!-- Contenu du pion - Version desktop : Icône gâteau + chiffre -->
      <div class="hidden md:flex relative text-white font-bold text-center z-10 flex-col items-center">
        <div class="text-xl mb-0.5">
          {{ counterValue < thresholdValue - 3 ? "🎂" : counterValue >= thresholdValue ? "💥" : "⚠️" }}
        </div>
        <div class="text-lg font-black drop-shadow-lg">
          {{ counterValue }}
        </div>
      </div>

      <!-- Effet de brillance (desktop seulement) -->
      <div class="hidden md:block absolute top-2 left-3 w-4 h-4 bg-white bg-opacity-40 rounded-full blur-sm"></div>

      <!-- Pulse ring conditionnel -->
      <div
        v-if="counterValue >= thresholdValue - 3"
        class="absolute inset-0 rounded-full opacity-40 animate-ping"
        :class="{
          'bg-yellow-500': counterValue >= thresholdValue - 3 && counterValue < thresholdValue,
          'bg-red-500': counterValue >= thresholdValue,
        }"
      ></div>

      <!-- Glow effect quand proche du seuil (desktop seulement) -->
      <div
        v-if="counterValue >= thresholdValue - 2"
        class="hidden md:block absolute inset-0 rounded-full"
        :style="{
          filter: counterValue >= thresholdValue
            ? 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.8))'
            : 'drop-shadow(0 0 16px rgba(234, 179, 8, 0.6))',
        }"
      ></div>
    </div>

    <!-- Indicateurs min/max -->
    <div class="absolute bottom-8 left-4 text-white text-xs opacity-75">
      <div class="bg-black bg-opacity-50 px-2 py-1 rounded">MIN: 0</div>
    </div>
    <div class="absolute bottom-8 right-4 text-white text-xs opacity-75">
      <div class="bg-black bg-opacity-50 px-2 py-1 rounded">MAX: 30</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  counterValue: {
    type: Number,
    required: true
  },
  thresholdValue: {
    type: Number,
    required: true
  }
});

const getCounterPosition = () => {
  const value = Math.max(0, Math.min(30, props.counterValue));
  const min = 0;
  const max = 30;
  return 10 + ((value - min) / (max - min)) * 80;
};

const getThresholdPosition = () => {
  const value = Math.max(0, Math.min(30, props.thresholdValue));
  const min = 0;
  const max = 30;
  return 10 + ((value - min) / (max - min)) * 80;
};
</script>
