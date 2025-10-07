<template>
  <section
    id="cooperative-mode"
    class="mb-12 relative overflow-hidden rounded-3xl"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"
    ></div>
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-8 left-8 text-5xl">🤖</div>
      <div class="absolute top-16 right-12 text-3xl">🤝</div>
      <div class="absolute bottom-20 left-1/4 text-4xl">⚙️</div>
      <div class="absolute bottom-12 right-1/3 text-2xl">🎮</div>
    </div>

    <div
      class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden relative z-10"
    >
      <div class="p-6 sm:p-10">
        <div class="text-center mb-10">
          <h2
            class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
          >
            Mode Coopératif
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"
          ></div>
          <p class="text-gray-600 text-lg font-medium">
            1-2 Joueurs • Unis contre le fantôme farceur
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 shadow-lg"
        >
          <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">
            👻 L'Histoire : Le Fantôme du Four Ancestral
          </h3>

          <div class="space-y-6 text-gray-700">
            <p class="leading-relaxed">
              La légende raconte qu'un
              <strong class="text-purple-600">esprit farceur</strong> hante le
              vieux four de Mamie Madeleine depuis des générations. Ce fantôme
              espiègle, surnommé "Fourneau le Facétieux", s'amuse à jouer des
              tours aux cuisiniers trop sérieux. Aujourd'hui, il a décidé de
              <strong class="text-red-600">mettre le chaos</strong> dans la
              préparation du gâteau d'anniversaire !
            </p>

            <div class="bg-white/60 rounded-xl p-6 border border-orange-200">
              <h4 class="font-bold text-lg text-gray-800 mb-4">
                Votre Mission :
              </h4>
              <p class="mb-4">
                En tant que membres sérieux de la famille, vous devez
                <strong class="text-blue-600">coopérer</strong> pour :
              </p>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-orange-500 mr-3 text-xl">🎯</span>
                  <span
                    >Déjouer les farces du fantôme qui tente de faire
                    surchauffer le four magique</span
                  >
                </li>
                <li class="flex items-start">
                  <span class="text-orange-500 mr-3 text-xl">🛡️</span>
                  <span
                    >Maintenir le gâteau sous contrôle malgré les sabotages
                    surnaturels</span
                  >
                </li>
                <li class="flex items-start">
                  <span class="text-orange-500 mr-3 text-xl">⏰</span>
                  <span
                    >Réussir à finir la recette avant que le four n'explose dans
                    un grand BOOM BADABOOM !</span
                  >
                </li>
              </ul>
            </div>

            <p class="leading-relaxed text-center italic text-gray-600">
              Le fantôme joue ses cartes contre vous, tentant de saboter chaque
              étape. Saurez-vous apaiser Fourneau le Facétieux et offrir à
              Mamie Madeleine le gâteau qu'elle mérite ?
            </p>

            <!-- Work in Progress -->
            <div
              class="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl p-6 border-2 border-yellow-400 mt-8"
            >
              <div class="flex items-center justify-center mb-4">
                <div
                  class="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center"
                >
                  <span class="text-2xl">🚧</span>
                </div>
              </div>
              <h4 class="text-xl font-bold text-yellow-800 text-center mb-3">
                Work In Progress
              </h4>
              <p class="text-yellow-700 text-center">
                Ce mode est actuellement en développement. Les règles détaillées
                et les mécaniques spécifiques seront bientôt disponibles. Restez
                connectés pour découvrir cette nouvelle façon palpitante de
                jouer à Boom Badaboom !
              </p>
              <div class="flex justify-center mt-4 space-x-2">
                <div
                  class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                ></div>
                <div
                  class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                  style="animation-delay: 0.2s"
                ></div>
                <div
                  class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                  style="animation-delay: 0.4s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Cooperative mode section component
</script>
