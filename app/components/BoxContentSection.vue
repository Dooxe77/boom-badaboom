<template>
  <section id="content" class="mb-12">
    <div
      class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden"
    >
      <div class="p-6 sm:p-10">
        <!-- Titre de section -->
        <div class="text-center mb-8">
          <h2
            class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4"
          >
            Contenu de la Boîte
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full mx-auto mb-4"
          ></div>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Tout ce qu'il vous faut pour créer le chaos en cuisine !
          </p>
        </div>

        <!-- Contenu de la boîte -->
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Cartes & Matériel -->
            <div
              class="bg-white rounded-xl p-4 shadow-md border border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center mb-3">
                <h3 class="text-lg font-bold text-gray-800">
                  Cartes & Matériel
                </h3>
              </div>
              <ul class="space-y-3 text-gray-700 text-sm">
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"
                  ></span>
                  <div>
                    <strong>128 cartes</strong>
                  </div>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"
                  ></span>
                  <div>
                    <strong>Un plateau</strong>
                    <span class="block sm:inline sm:ml-1 text-gray-600"
                      >(permettant de suivre l'avancé du jeu)</span
                    >
                  </div>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"
                  ></span>
                  <div>
                    <strong>2 jetons punchboards</strong>
                    <span class="block sm:inline sm:ml-1 text-gray-600"
                      >(capacité du four & taille du gâteau)</span
                    >
                  </div>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"
                  ></span>
                  <div>
                    <strong>1 Livret de règles</strong>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Informations Générales -->
            <div
              class="bg-white rounded-xl p-4 shadow-md border border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="flex items-center mb-3">
                <h3 class="text-lg font-bold text-gray-800">
                  Informations Générales
                </h3>
              </div>
              <ul class="space-y-3 text-gray-700 text-sm">
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"
                  ></span>
                  <div>
                    <strong class="block sm:inline">Joueurs:</strong>
                    <span class="block sm:inline sm:ml-1">3-6 joueurs</span>
                  </div>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"
                  ></span>
                  <div>
                    <strong class="block sm:inline">Âge:</strong>
                    <span class="block sm:inline sm:ml-1"
                      >À partir de 7 ans</span
                    >
                  </div>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"
                  ></span>
                  <div>
                    <strong class="block sm:inline">Durée:</strong>
                    <span class="block sm:inline sm:ml-1">15-20 minutes</span>
                  </div>
                </li>
                <li class="flex items-start">
                  <span
                    class="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5 flex-shrink-0"
                  ></span>
                  <div>
                    <strong class="block sm:inline">Genre:</strong>
                    <span class="block sm:inline sm:ml-1"
                      >Bluff, Tension, Gourmandise</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mise en Place -->
</template>

<script setup>
// Section extraite de app.vue pour meilleure modularité
</script>
