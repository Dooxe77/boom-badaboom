<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header
      class="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-white"
    >
      <div class="container mx-auto px-4 sm:px-6 py-16 text-center">
        <div
          class="w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm p-4"
        >
          <img
            src="/logo.png"
            alt="Logo Boom Badaboom"
            class="w-full h-full object-contain"
          />
        </div>
        <p class="text-xl mb-2 opacity-90">Jeu de cartes à rôles cachés</p>
        <p class="text-lg mb-8 opacity-90">
          3-5 joueurs • 15-30 min • À partir de 8 ans
        </p>
        <p class="text-lg font-light">Bluff • Tension • Stratégie</p>
        
        <div class="mt-8 text-sm opacity-80">
          <p class="mb-1">⚠️ Jeu au stade prototype</p>
          <p>Créé par <strong>Anthony Ruelle</strong></p>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white shadow-lg">
      <div class="container mx-auto px-2 sm:px-6">
        <div class="flex justify-center py-4">
          <div
            class="flex space-x-1 md:space-x-8 overflow-x-auto scrollbar-hide"
          >
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              class="px-4 py-2 text-sm md:text-base font-medium text-gray-700 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-300 whitespace-nowrap"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 sm:px-6 py-8">
      <!-- Concept du Jeu -->
      <section id="concept" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🧩 Concept du Jeu
            </h2>

            <div
              class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-8"
            >
              <h3 class="text-2xl font-bold mb-4">Boom Badaboom</h3>
              <p class="text-lg mb-4">
                <strong
                  >Un jeu de cartes à rôles cachés mêlant bluff, tension et
                  stratégie.</strong
                >
              </p>
              <p class="opacity-90">
                Les joueurs incarnent des personnages aux objectifs différents
                autour d'une bombe virtuelle prête à exploser. Votre rôle
                détermine votre mission : empêcher l'explosion, la provoquer… ou
                réussir un objectif personnel secret.
              </p>
            </div>

            <h3 class="text-2xl font-bold text-orange-600 mb-6">
              🎯 Objectifs des Joueurs
            </h3>

            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div
                class="bg-blue-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h4 class="text-xl font-bold mb-3">🟦 DÉMINEURS</h4>
                <p class="text-sm opacity-90">
                  Empêcher l'explosion <strong>ET</strong> empêcher l'Agent
                  Double de remplir son objectif
                </p>
              </div>
              <div
                class="bg-pink-500 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h4 class="text-xl font-bold mb-3">🟥 SABOTEURS</h4>
                <p class="text-sm opacity-90">Faire exploser la bombe</p>
              </div>
              <div
                class="bg-yellow-400 text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h4 class="text-xl font-bold mb-3">🟨 AGENT DOUBLE</h4>
                <p class="text-sm">
                  Réunir <strong>2 des 3 cartes spécifiques</strong> dans sa
                  main <strong>ET</strong> éviter l'explosion
                </p>
              </div>
            </div>

            <div
              class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg"
            >
              <h4 class="font-bold text-yellow-800 mb-2">
                ⚠️ Fin de Partie Immédiate :
              </h4>
              <ul class="text-yellow-700 space-y-1">
                <li><strong>Si la bombe explose</strong> (compteur ≥ seuil)</li>
                <li>
                  <strong>Après le tour déclenché</strong> par l'événement
                  "Compte à rebours final"
                </li>
                <li>
                  <strong>Quand la pioche est vide</strong> et qu'un joueur ne
                  peut plus reconstituer sa main
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Contenu de la Boîte -->
      <section id="contenu" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              📦 Contenu de la Boîte
            </h2>

            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <h3 class="text-xl font-bold text-red-500 mb-4">
                  🎴 Cartes & Matériel
                </h3>
                <ul class="space-y-2 text-gray-700">
                  <li><strong>98 cartes</strong> de jeu au format poker</li>
                  <li><strong>3 cartes piste</strong> (jauge de bombe)</li>
                  <li>
                    <strong>2 jetons punchboards</strong> (compteur & seuil)
                  </li>
                  <li><strong>1 Livret de règles</strong></li>
                </ul>
              </div>
              <div class="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                <h3 class="text-xl font-bold text-red-500 mb-4">
                  👥 Informations Générales
                </h3>
                <ul class="space-y-2 text-gray-700">
                  <li>
                    <strong>Joueurs :</strong> 3-5 (Compétitif) / 1-2
                    (Coopératif)
                  </li>
                  <li><strong>Âge :</strong> À partir de 8 ans</li>
                  <li><strong>Durée :</strong> 15-30 minutes</li>
                  <li><strong>Genre :</strong> Bluff, Tension, Stratégie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Liste des Cartes -->
      <section id="cartes" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🃏 Liste Complète des Cartes
            </h2>

            <!-- Cartes Objectif Agent Double -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                💎 Cartes Objectif Agent Double
              </h3>
              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="card in objectiveCards"
                  :key="card.name"
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
                >
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="font-semibold text-gray-800">{{ card.name }}</h4>
                    <span class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0">{{ card.quantity }}</span>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">{{ card.type }}</span>
                  </div>
                  <p class="text-sm text-gray-600">{{ card.effect }}</p>
                </div>
              </div>
            </div>

            <!-- Cartes Conditionnelles -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                🎲 Cartes Conditionnelles
              </h3>
              <div class="grid gap-4 md:grid-cols-2">
                <div
                  v-for="card in conditionalCards"
                  :key="card.name"
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
                >
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="font-semibold text-gray-800">{{ card.name }}</h4>
                    <span class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0">{{ card.quantity }}</span>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full">{{ card.type }}</span>
                  </div>
                  <p class="text-sm text-gray-600">{{ card.effect }}</p>
                </div>
              </div>
            </div>

            <!-- Cartes Compteur -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                📈 Cartes Compteur
              </h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div
                  class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg"
                >
                  <h4 class="text-lg font-bold text-red-700 mb-4">
                    ⬆️ Charges (+)
                  </h4>
                  <div class="space-y-3">
                    <div
                      v-for="card in chargeCards"
                      :key="card.name"
                      class="bg-white border border-red-200 rounded-lg p-3 flex justify-between items-center"
                    >
                      <span class="font-medium text-red-700">{{ card.name }}</span>
                      <span class="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">{{ card.quantity }}</span>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg"
                >
                  <h4 class="text-lg font-bold text-green-700 mb-4">
                    ⬇️ Décharges (-)
                  </h4>
                  <div class="space-y-3">
                    <div
                      v-for="card in dischargeCards"
                      :key="card.name"
                      class="bg-white border border-green-200 rounded-lg p-3 flex justify-between items-center"
                    >
                      <span class="font-medium text-green-700">{{ card.name }}</span>
                      <span class="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">{{ card.quantity }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cartes Action -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                ⚡ Cartes Action
              </h3>

              <div
                class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6"
              >
                <p class="text-blue-800">
                  <strong>📝 Note :</strong> Les cartes Action sont des cartes à
                  effet offensif, stratégique ou de manipulation que vous jouez
                  pendant <strong>votre tour</strong>. Elles permettent
                  d'interagir avec les autres joueurs, de modifier les règles
                  temporairement ou de récupérer des informations.
                </p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="card in actionCards"
                  :key="card.name"
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
                >
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="font-semibold text-gray-800">{{ card.name }}</h4>
                    <span class="bg-yellow-500 text-gray-800 text-xs font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0">{{ card.quantity }}</span>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">{{ card.type }}</span>
                  </div>
                  <p class="text-sm text-gray-600">{{ card.effect }}</p>
                </div>
              </div>
            </div>

            <!-- Cartes Action Réactives -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                ⚡ Cartes Action Réactives
              </h3>

              <div
                class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6"
              >
                <p class="text-yellow-800">
                  <strong>⚡ Note importante :</strong> Les cartes Action
                  Réactives (marquées ⚡) peuvent
                  <strong
                    >uniquement être jouées pendant le tour d'un
                    adversaire</strong
                  >
                  pour contrer, modifier ou rediriger une action. Elles ne
                  comptent pas comme votre carte jouée du tour. Une carte
                  réactive peut contrer une autre carte réactive.
                </p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="card in reactiveCards"
                  :key="card.name"
                  class="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
                >
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="font-semibold text-gray-800">{{ card.name }}</h4>
                    <span class="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full ml-2 flex-shrink-0">{{ card.quantity }}</span>
                  </div>
                  <div class="mb-2">
                    <span class="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">{{ card.type }}</span>
                  </div>
                  <p class="text-sm text-gray-600">{{ card.effect }}</p>
                </div>
              </div>
            </div>

            <div class="text-center bg-gray-100 p-4 rounded-lg">
              <p class="text-lg font-bold text-gray-700">
                📊 TOTAL CARTES : 98 cartes
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Mise en Place -->
      <section id="mise-en-place" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              ⚙️ Mise en Place
            </h2>

            <ol class="space-y-6">
              <li
                v-for="(step, index) in setupSteps"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div
                  class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold"
                >
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="text-gray-700" v-html="step"></p>
                </div>
              </li>
            </ol>

            <div
              class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-8"
            >
              <h4 class="font-bold text-yellow-800 mb-2">
                ⚠️ Règle importante :
              </h4>
              <p class="text-yellow-700">
                Le compteur ne peut <strong>jamais descendre sous 0</strong>. Si
                une carte devait le faire descendre en dessous, il reste à 0.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Déroulement -->
      <section id="deroulement" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🔄 Déroulement d'une Partie
            </h2>

            <h3
              class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
            >
              📋 Séquence de Tour
            </h3>

            <ol class="space-y-4 mb-8">
              <li
                v-for="(step, index) in gameSteps"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div
                  class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold"
                >
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="text-gray-700" v-html="step"></p>
                </div>
              </li>
            </ol>

            <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 class="font-bold text-red-800 mb-2">
                💥 Explosion Immédiate :
              </h4>
              <p class="text-red-700">
                Si le compteur atteint ou dépasse le seuil d'explosion, la bombe
                explose immédiatement et la partie s'arrête ! Les Saboteurs
                gagnent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Événements -->
      <section id="evenements" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🎭 Événements
            </h2>

            <div
              class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8"
            >
              <h4 class="font-bold text-yellow-800 mb-2">⏰ Timing :</h4>
              <p class="text-yellow-700">
                Un événement est révélé au début du tour du premier joueur,
                <strong>avant qu'il joue sa carte</strong>. L'effet s'applique à
                tout le tour de table.
              </p>
            </div>

            <div class="space-y-4">
              <div
                v-for="event in events"
                :key="event.name"
                :class="event.name === 'Compte à rebours final' ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'"
                class="border-2 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
              >
                <h4 class="font-bold text-lg mb-2" 
                    :class="event.name === 'Compte à rebours final' ? 'text-red-800' : 'text-gray-800'">
                  {{ event.name }}
                </h4>
                <p class="text-sm text-gray-700" v-html="event.effect"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conditions de Victoire -->
      <section id="victoire" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🏆 Conditions de Victoire
            </h2>

            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
                <h3 class="text-xl font-bold mb-2">🟦 DÉMINEURS</h3>
                <h4 class="text-lg font-semibold mb-3">
                  Victoire par Élimination
                </h4>
                <p class="text-sm opacity-90">
                  Empêcher l'explosion ET empêcher la victoire de l'Agent Double
                </p>
              </div>
              <div class="bg-pink-500 text-white p-6 rounded-xl shadow-lg">
                <h3 class="text-xl font-bold mb-2">🟥 SABOTEURS</h3>
                <h4 class="text-lg font-semibold mb-3">Victoire Immédiate</h4>
                <p class="text-sm opacity-90">
                  Faire exploser la bombe<br />(compteur ≥ seuil)
                </p>
              </div>
              <div class="bg-yellow-400 text-gray-800 p-6 rounded-xl shadow-lg">
                <h3 class="text-xl font-bold mb-2">🟨 AGENT DOUBLE</h3>
                <h4 class="text-lg font-semibold mb-3">
                  Victoire en Fin de Partie
                </h4>
                <ul class="text-sm text-left space-y-1">
                  <li>Posséder 2 des 3 cartes objectif</li>
                  <li>ET éviter l'explosion</li>
                  <li>ET arriver en fin de partie</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h4 class="font-bold text-blue-800 mb-3">
                🎯 Cartes Objectif de l'Agent Double
              </h4>
              <p class="text-blue-700 mb-2">
                L'Agent Double doit réunir
                <strong>2 des 3 cartes suivantes</strong> dans sa main :
              </p>
              <ul class="text-blue-700 space-y-1">
                <li>📂 <strong>Dossier classé</strong></li>
                <li>🤖 <strong>Robot de déminage</strong></li>
                <li>🗺️ <strong>Plan d'évacuation</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              ❓ Questions Fréquentes
            </h2>

            <div class="space-y-6">
              <div
                v-for="faq in faqs"
                :key="faq.question"
                class="bg-gray-50 border border-gray-200 rounded-lg p-6"
              >
                <h3 class="text-lg font-bold text-gray-800 mb-3">
                  {{ faq.question }}
                </h3>
                <p class="text-gray-700" v-html="faq.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Back to top button -->
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-8 mt-16">
      <div class="container mx-auto px-2 sm:px-6">
        <p class="text-lg font-semibold mb-2">Boom Badaboom</p>
        <p class="text-gray-400">
          Jeu de cartes à rôles cachés - Bluff, Tension, Stratégie
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Navigation
const navLinks = [
  { id: "concept", label: "Concept" },
  { id: "contenu", label: "Contenu" },
  { id: "cartes", label: "Cartes" },
  { id: "mise-en-place", label: "Mise en Place" },
  { id: "deroulement", label: "Déroulement" },
  { id: "evenements", label: "Événements" },
  { id: "victoire", label: "Victoire" },
  { id: "faq", label: "FAQ" },
];

// Cards data
const objectiveCards = [
  {
    name: "Dossier classé",
    type: "Bluff & Objectif",
    effect: "Nécessaire pour la victoire de l'Agent Double (2/3)",
    quantity: 1,
  },
  {
    name: "Robot de déminage",
    type: "Bluff & Objectif",
    effect: "Nécessaire pour la victoire de l'Agent Double (2/3)",
    quantity: 1,
  },
  {
    name: "Plan d'évacuation",
    type: "Bluff & Objectif",
    effect: "Nécessaire pour la victoire de l'Agent Double (2/3)",
    quantity: 1,
  },
];

const conditionalCards = [
  {
    name: "Charge instable",
    type: "Conditionnelle",
    effect: "Si compteur ≤ 10 : +4, sinon +2",
    quantity: 1,
  },
  {
    name: "Détonation amplifiée",
    type: "Conditionnelle",
    effect: "Si compteur ≥ 20 : +1, sinon +2",
    quantity: 1,
  },
  {
    name: "Refroidissement express",
    type: "Conditionnelle",
    effect: "Si compteur ≥ 20 : -4, sinon -2",
    quantity: 1,
  },
  {
    name: "Désescalade tactique",
    type: "Conditionnelle",
    effect: "Si compteur ≤ 10 : -1, sinon -2",
    quantity: 1,
  },
];

const chargeCards = [
  { name: "Charge +1", quantity: 5 },
  { name: "Charge +2", quantity: 6 },
  { name: "Charge +3", quantity: 5 },
  { name: "Charge +4", quantity: 4 },
  { name: "Charge +5", quantity: 2 },
];

const dischargeCards = [
  { name: "Décharge -1", quantity: 5 },
  { name: "Décharge -2", quantity: 5 },
  { name: "Décharge -3", quantity: 5 },
];

const actionCards = [
  {
    name: "Espion",
    type: "Action",
    effect:
      "Regarde secrètement la main d'un joueur et vole une carte au choix",
    quantity: 3,
  },
  {
    name: "Blocage",
    type: "Action",
    effect: "Un joueur passe complètement son prochain tour",
    quantity: 3,
  },
  {
    name: "Sabotage",
    type: "Action",
    effect:
      "Un joueur doit jouer une carte au hasard de sa main. Si c'est une carte objectif Agent Double, elle est défaussée sans effet",
    quantity: 2,
  },
  {
    name: "Seuil augmenté",
    type: "Action",
    effect:
      "Augmente le seuil d'explosion de +1 à +5 points au choix (maximum 30 points)",
    quantity: 3,
  },
  {
    name: "Seuil réduit",
    type: "Action",
    effect:
      "Réduit le seuil de -1 à -5 points au choix. Le nouveau seuil doit être au minimum à (compteur actuel +1). Obligation de baisser d'au moins 1 point",
    quantity: 3,
  },
  {
    name: "Contrebande",
    type: "Action",
    effect: "Reprend une carte au choix dans la défausse",
    quantity: 4,
  },
  {
    name: "Redistribution",
    type: "Action",
    effect: "Échange ta main avec celle d'un joueur",
    quantity: 1,
  },
  {
    name: "Manipulation",
    type: "Action",
    effect: "Voit les 3 prochaines cartes de la pioche et change l'ordre",
    quantity: 1,
  },
  {
    name: "Pile ou Fiasco",
    type: "Action",
    effect: "Lance une pièce : Pile = +3 / Face = -3",
    quantity: 1,
  },
];

const reactiveCards = [
  {
    name: "Désamorceur",
    type: "Réactive ⚡",
    effect: "Annule l'effet de la carte jouée",
    quantity: 4,
  },
  {
    name: "Miroir",
    type: "Réactive ⚡",
    effect: "Redirige une action contre vous ou inverse le signe (+ ↔ -)",
    quantity: 4,
  },
  {
    name: "Surcharge",
    type: "Réactive ⚡",
    effect: "Double la valeur de la carte (dé)charge jouée",
    quantity: 3,
  },
];

// Setup steps
const setupSteps = [
  "<strong>Séparez les cartes système</strong> (rôles, événements, premier joueur)",
  "<strong>Mélangez toutes les cartes de jeu</strong> restantes",
  "Chaque joueur reçoit <strong>5 cartes</strong>",
  "<strong>Assemblez la jauge :</strong> placez les 3 cartes piste côte à côte",
  "Placez le <strong>Compteur sur 0</strong> et le <strong>Seuil sur 20</strong>",
  '<strong>Désignez le premier joueur</strong> et donnez-lui la carte "Premier Joueur" qu\'il place devant lui',
  '<strong>Préparez les événements :</strong><br>• Piochez 9 cartes Événement au hasard<br>• Prenez 2 cartes au hasard + la carte "Compte à rebours final"<br>• Mélangez ces 3 cartes et placez-les <strong>sous la pile</strong> d\'événements',
  "<strong>Distribuez les rôles</strong> selon le tableau de répartition",
];

// Game steps
const gameSteps = [
  "<strong>Révélez un événement</strong> (au début du tour du premier joueur uniquement)",
  "<strong>Jouez 1 carte</strong> de votre main",
  "<strong>Appliquez l'effet</strong> de la carte (modification du compteur, action spéciale...)",
  "<strong>Piochez 1 carte</strong> pour revenir à 5 cartes en main (sauf si votre tour est sauté)",
];

// Events
const events = [
  {
    name: "Changement de vent",
    effect: "Tous les joueurs passent leur main au joueur à leur gauche",
  },
  {
    name: "Perturbation électrique",
    effect: "Personne ne pioche à la fin de son tour ce tour-ci",
  },
  {
    name: "Espionnage inversé",
    effect: "Tous les joueurs révèlent 1 carte au hasard de leur main",
  },
  {
    name: "Transparence totale",
    effect: "Pendant ce tour, toutes les cartes piochées doivent être révélées",
  },
  {
    name: "Court-circuit",
    effect:
      "Les effets Charge/Décharge sont inversés ce tour (+ devient -, - devient +)",
  },
  {
    name: "Fausse alerte",
    effect:
      "Le seuil augmente temporairement de +3. Si compteur ≥ seuil normal en fin de tour : explosion",
  },
  {
    name: "Double vision",
    effect:
      "Chaque carte (dé)charge compte double (Surcharge interdite ce tour)",
  },
  {
    name: "Panique générale",
    effect: "Chaque joueur doit jouer 2 cartes ce tour au lieu d'une",
  },
  {
    name: "Blackout",
    effect:
      "Toutes les cartes Actions (non-(dé)charge) sont interdites ce tour",
  },
  {
    name: "Chaos total",
    effect:
      "À son tour, chaque joueur pioche une carte et la joue immédiatement",
  },
  {
    name: "Inversion des rôles",
    effect: "L'ordre de jeu s'inverse pour le reste de ce tour",
  },
  {
    name: "Compte à rebours final",
    effect:
      "<strong>🚨 DERNIER TOUR !</strong> Chaque joueur joue une dernière fois, puis la partie s'arrête",
  },
];

// FAQs
const faqs = [
  {
    question: "Puis-je regarder la défausse ?",
    answer:
      '<strong>Non.</strong> Il est interdit de fouiller la défausse. Seule la dernière carte posée sur la pile de défausse est visible de tous. Le seul moyen de voir le contenu de la défausse est via une carte Action comme "Contrebande".',
  },
  {
    question:
      "Que se passe-t-il si je dois jouer une carte mais que ma main est vide ?",
    answer:
      "Si vous n'avez aucune carte en main (situation très rare), vous passez votre tour et piochez immédiatement pour reconstituer votre main.",
  },
  {
    question: "Puis-je jouer plusieurs cartes réactives ⚡ en même temps ?",
    answer:
      '<strong>Non.</strong> Les cartes réactives se jouent une par une. Une carte réactive peut contrer une autre carte réactive, créant une "chaîne" de réactions.',
  },
  {
    question: "Seuil Réduit - Règles importantes",
    answer:
      "• Cette carte <strong>ne peut jamais</strong> déclencher l'explosion<br>• Le nouveau seuil doit être <strong>au minimum</strong> à (compteur actuel + 1)<br>• Vous devez <strong>obligatoirement</strong> faire baisser le seuil d'au moins 1 point<br>• Si le compteur est à 19 et le seuil à 20, vous ne pouvez pas jouer cette carte",
  },
  {
    question: "Comment fonctionne la carte Miroir ?",
    answer:
      "La carte Miroir peut :<br>• <strong>Rediriger une action</strong> dirigée contre vous vers son auteur<br>• <strong>Inverser le signe</strong> d'une carte (dé)charge (+ devient -, - devient +)",
  },
  {
    question: "Sabotage et cartes objectif",
    answer:
      "Si la carte jouée au hasard par Sabotage est une <strong>carte objectif de l'Agent Double</strong> (Dossier classé, Robot de déminage, Plan d'évacuation), elle est <strong>défaussée sans effet</strong>.",
  },
];

// Back to top functionality
const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.pageYOffset > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// SEO
useHead({
  title: "Boom Badaboom - Règles du Jeu | Jeu de cartes à rôles cachés",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les règles complètes de Boom Badaboom, un jeu de cartes à rôles cachés mêlant bluff, tension et stratégie pour 3-5 joueurs.",
    },
    {
      name: "keywords",
      content:
        "Boom Badaboom, jeu de cartes, rôles cachés, bluff, stratégie, règles du jeu",
    },
    { property: "og:title", content: "Boom Badaboom - Règles du Jeu" },
    {
      property: "og:description",
      content:
        "Jeu de cartes à rôles cachés mêlant bluff, tension et stratégie",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

@media print {
  .nav,
  .back-to-top {
    display: none !important;
  }

  .content {
    box-shadow: none !important;
    margin: 0 !important;
  }
}
</style>
