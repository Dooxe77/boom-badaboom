<template>
  <section id="victoire" class="mb-12 relative overflow-hidden rounded-3xl">
    <div
      class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"
    ></div>
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-8 left-8 text-5xl">🏆</div>
      <div class="absolute top-16 right-12 text-3xl">👨‍🍳</div>
      <div class="absolute bottom-20 left-1/4 text-4xl">🎯</div>
      <div class="absolute bottom-12 right-1/3 text-2xl">🍰</div>
    </div>

    <div
      class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden"
    >
      <div class="p-6 sm:p-10">
        <div class="text-center mb-10">
          <h2
            class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
          >
            Conditions de Victoire
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"
          ></div>
          <p class="text-gray-600 text-lg font-medium">
            Les conditions dépendent de votre rôle dans la cuisine
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 mb-10">
          <!-- Pâtissiers (ex-Démineurs) -->
          <div class="group h-full">
            <div
              class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border-4 border-green-500"
            >
              <!-- Zone titre alignée -->
              <div class="text-center mb-2">
                <h4 class="text-2xl font-bold text-green-600">
                  PÂTISSIERS
                </h4>
              </div>

              <!-- Zone objectif alignée -->
              <div class="px-2 mt-auto">
                <div
                  class="bg-green-50/90 backdrop-blur-sm rounded-lg p-4 border-2 border-green-400 shadow-inner"
                >
                  <p class="text-sm text-green-600 font-medium mb-2">
                    Objectif :
                  </p>
                  <p
                    class="text-green-800 text-sm leading-relaxed font-medium"
                  >
                    Empêcher que le gâteau explose
                    <strong>ET</strong> empêcher le Glouton de réussir sa
                    mission
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Farceurs (ex-Saboteurs) -->
          <div class="group h-full">
            <div
              class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border-4 border-red-500"
            >
              <!-- Zone titre alignée -->
              <div class="text-center mb-2">
                <h4 class="text-2xl font-bold text-red-600">FARCEURS</h4>
              </div>

              <!-- Zone objectif alignée -->
              <div class="px-2 mt-auto">
                <div
                  class="bg-red-50/90 backdrop-blur-sm rounded-lg p-4 border-2 border-red-400 shadow-inner"
                >
                  <p class="text-sm text-red-600 font-medium mb-2">
                    Objectif :
                  </p>
                  <p
                    class="text-red-800 text-sm leading-relaxed font-medium"
                  >
                    Faire <strong>exploser le gâteau</strong> (taille du
                    gâteau ≥ capacité du four)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Glouton (ex-Agent Double) -->
          <div class="group h-full">
            <div
              class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border-4 border-yellow-500"
            >
              <!-- Zone titre alignée -->
              <div class="text-center mb-2">
                <h4 class="text-2xl font-bold text-yellow-600">GLOUTON</h4>
              </div>

              <!-- Zone objectif alignée -->
              <div class="px-2 mt-auto">
                <div
                  class="bg-yellow-50/90 backdrop-blur-sm rounded-lg p-4 border-2 border-yellow-500 shadow-inner"
                >
                  <p class="text-sm text-yellow-600 font-medium mb-2">
                    Objectif :
                  </p>
                  <div class="space-y-2">
                    <p
                      class="text-yellow-800 text-sm leading-relaxed font-medium"
                    >
                      Gagne
                      <strong>immédiatement pendant son tour</strong> si :
                    </p>
                    <p
                      class="text-yellow-800 text-sm leading-relaxed font-medium"
                    >
                      <strong
                        >au moins 2 cartes objectifs glouton en main</strong
                      >
                      <strong> ET</strong> taille du gâteau entre
                      <strong>15-18</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Liste des Cartes -->
</template>

<script setup>
// Section extraite de app.vue pour meilleure modularité
</script>
