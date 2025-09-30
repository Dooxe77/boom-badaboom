<template>
  <Analytics />
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="relative overflow-hidden">
      <!-- Background avec motif culinaire -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"
      ></div>
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
            <div
              class="w-16 h-16 sm:w-20 sm:h-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center p-2"
            >
              <img
                src="/logo.png"
                alt="Logo Boom Badaboom"
                loading="lazy"
                class="w-full h-full object-contain"
                @error="handleImageError"
              />
            </div>
            <div class="hidden sm:block">
              <h1
                class="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight"
              >
                BOOM BADABOOM
              </h1>
              <p class="text-lg text-orange-600 font-medium">
                Chaos en Cuisine
              </p>
            </div>
          </div>

          <!-- Badge prototype -->
          <div
            class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium border border-orange-200"
          >
            ⚠️ Prototype
          </div>
        </div>

        <!-- Titre mobile -->
        <div class="sm:hidden text-center mb-6">
          <h1 class="text-xl font-bold text-gray-800 leading-tight">
            BOOM BADABOOM
          </h1>
          <p class="text-base text-orange-600 font-medium">Chaos en Cuisine</p>
        </div>

        <!-- Infos du jeu dans une carte -->
        <div
          class="bg-gradient-to-br from-white/85 via-orange-50/90 to-amber-50/85 backdrop-blur-md rounded-2xl shadow-xl border border-orange-300/60 p-6 ring-1 ring-orange-100/50"
        >
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

            <div
              class="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-gray-600 mb-4"
            >
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

            <div class="flex flex-wrap justify-center gap-2 text-xs">
              <span class="bg-pink-100 text-pink-700 px-3 py-1 rounded-full"
                >Bluff</span
              >
              <span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-full"
                >Tension</span
              >
              <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full"
                >Gourmandise</span
              >
            </div>
          </div>
        </div>

        <!-- Créateur et Éditeur -->
        <div
          class="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6"
        >
          <div
            class="bg-gradient-to-r from-slate-100 to-gray-100 border border-slate-200 px-4 py-2 rounded-full shadow-sm"
          >
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-600">🎨 Créé par</span>
              <span class="text-sm font-semibold text-slate-700"
                >Anthony Ruelle</span
              >
            </div>
          </div>
          <div
            class="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 px-4 py-2 rounded-full shadow-sm"
          >
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-600">📚 Édité par</span>
              <span class="text-sm font-semibold text-amber-700"
                >La Ruelle Aux Jeux</span
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav :class="['sticky z-50 bg-white shadow-lg']">
      <div class="container mx-auto px-2 sm:px-4 md:px-6">
        <div class="flex justify-between items-center py-3 md:py-4">
          <!-- Desktop menu -->
          <div class="hidden md:flex justify-center flex-1">
            <div class="flex flex-wrap justify-center gap-2 lg:gap-4 xl:gap-6">
              <a
                v-for="link in navLinks"
                :key="link.id"
                :href="`#${link.id}`"
                class="px-2 py-2 text-sm lg:text-base lg:px-3 xl:px-4 font-medium text-gray-700 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-300 whitespace-nowrap"
                @click="closeMobileMenu"
              >
                {{ link.label }}
              </a>
            </div>
          </div>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden relative w-6 h-6 flex flex-col justify-center items-center focus:outline-none"
          >
            <span
              :class="{
                'rotate-45 translate-y-1': isMobileMenuOpen,
                'rotate-0 translate-y-0': !isMobileMenuOpen,
              }"
              class="block w-5 h-0.5 bg-gray-600 transition-all duration-300 ease-out"
            ></span>
            <span
              :class="{
                'opacity-0': isMobileMenuOpen,
                'opacity-100': !isMobileMenuOpen,
              }"
              class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-out"
            ></span>
            <span
              :class="{
                '-rotate-45 -translate-y-1': isMobileMenuOpen,
                'rotate-0 translate-y-0': !isMobileMenuOpen,
              }"
              class="block w-5 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ease-out"
            ></span>
          </button>
        </div>

        <!-- Mobile menu -->
        <div
          :class="{
            'max-h-screen opacity-100': isMobileMenuOpen,
            'max-h-0 opacity-0': !isMobileMenuOpen,
          }"
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white"
        >
          <div class="py-2 space-y-1">
            <a
              v-for="link in navLinks"
              :key="link.id"
              :href="`#${link.id}`"
              @click="closeMobileMenu"
              class="block px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-red-500"
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
        <div
          class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden"
        >
          <div class="p-6 sm:p-10">
            <div class="text-center mb-10">
              <h2
                class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4"
              >
                Concept du Jeu
              </h2>
              <div
                class="w-24 h-1 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full mx-auto"
              ></div>
            </div>

            <!-- Histoire du jeu -->
            <div
              class="bg-gradient-to-br from-orange-50/70 via-pink-50/60 to-amber-50/80 rounded-2xl p-6 border shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300 mb-10"
              style="border-color: #ff8c42"
            >
              <div class="flex items-start">
                <span class="text-3xl mr-4">🍰</span>
                <div class="flex-1">
                  <h5 class="text-xl font-bold mb-2" style="color: #ff8c42">
                    BOOM BADABOOM : CHAOS EN CUISINE
                  </h5>
                  <div class="space-y-3 text-sm" style="color: #d63031">
                    <p>
                      Dans cette cuisine familiale, un
                      <strong>délicieux gâteau d'anniversaire</strong> mijote
                      tranquillement dans un four magique. Mais attention :
                      cette recette est
                      <span class="font-bold">explosive</span> !
                    </p>

                    <p>
                      Si le gâteau gonfle trop, c'est le
                      <strong>BOOM BADABOOM</strong> assuré, et tout le monde
                      finira recouvert de crème ! 🎂💥
                    </p>

                    <p class="italic">
                      Seulement voilà...
                      <strong
                        >tout le monde n'a pas les mêmes intentions</strong
                      >
                      autour de ce four magique ! Bluff, tension et pure
                      gourmandise se mélangent dans cette cuisine où les rôles
                      secrets créent une ambiance... explosive !
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Les Personnages -->
            <div class="mb-8">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">
                  🎭 Les Personnages
                </h3>
                <p class="text-gray-600 max-w-2xl mx-auto">
                  Trois rôles secrets aux objectifs bien différents... Qui
                  êtes-vous vraiment ?
                </p>
              </div>

              <div class="grid gap-8 mb-6">
                <!-- Les Pâtissiers -->
                <div
                  class="bg-gradient-to-br from-green-50/70 via-lime-50/60 to-green-100/80 rounded-2xl p-6 border border-green-200/50 shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300"
                  style="border-color: #55a831"
                >
                  <div class="flex items-start">
                    <span class="text-3xl mr-4">👩‍🍳</span>
                    <div class="flex-1">
                      <h5 class="text-xl font-bold mb-2" style="color: #55a831">
                        LES PÂTISSIERS
                      </h5>
                      <div class="space-y-2">
                        <div class="flex items-center">
                          <span
                            class="font-medium text-sm mr-2"
                            style="color: #55a831"
                            >Qui :</span
                          >
                          <span class="text-sm" style="color: #3d7a23"
                            >Maîtres pâtissiers passionnés de perfection</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span
                            class="font-medium text-sm mr-2"
                            style="color: #55a831"
                            >Objectif :</span
                          >
                          <span
                            class="text-sm font-medium"
                            style="color: #3d7a23"
                            >Réussir le gâteau parfait et empêcher
                            l'explosion</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span
                            class="font-medium text-sm mr-2"
                            style="color: #55a831"
                            >Pourquoi :</span
                          >
                          <span class="text-sm italic" style="color: #3d7a23"
                            >Ils rêvent d'un gâteau parfait et surveillent
                            anxieusement la cuisson</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Les Farceurs -->
                <div
                  class="bg-gradient-to-br from-red-50/70 via-rose-50/60 to-red-100/80 rounded-2xl p-6 border shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300"
                  style="border-color: #ac0b17"
                >
                  <div class="flex items-start">
                    <span class="text-3xl mr-4">🤡</span>
                    <div class="flex-1">
                      <h5 class="text-xl font-bold mb-2" style="color: #ac0b17">
                        LES FARCEURS
                      </h5>
                      <div class="space-y-2">
                        <div class="flex items-center">
                          <span
                            class="font-medium text-sm mr-2"
                            style="color: #ac0b17"
                            >Qui :</span
                          >
                          <span class="text-sm" style="color: #7c0b0b"
                            >Espièges qui adorent semer le chaos</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span
                            class="font-medium text-sm mr-2"
                            style="color: #ac0b17"
                            >Objectif :</span
                          >
                          <span
                            class="text-sm font-medium"
                            style="color: #7c0b0b"
                            >Provoquer l'explosion du gâteau</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span
                            class="font-medium text-sm mr-2"
                            style="color: #ac0b17"
                            >Pourquoi :</span
                          >
                          <span class="text-sm italic" style="color: #7c0b0b"
                            >Ils cachent leur jeu et tentent discrètement de
                            saboter la recette pour le BOOM BADABOOM</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Le Glouton -->
                <div
                  class="bg-gradient-to-br from-yellow-50/70 via-amber-50/60 to-yellow-100/80 rounded-2xl p-6 border shadow-sm backdrop-blur-sm hover:shadow-md transition-all duration-300"
                  style="border-color: #ffd700"
                >
                  <div class="flex items-start">
                    <span class="text-3xl mr-4">😋</span>
                    <div class="flex-1">
                      <h5 class="text-xl font-bold mb-2" style="color: #ffd700">
                        LE GLOUTON
                      </h5>
                      <div class="space-y-2">
                        <div class="flex items-center">
                          <span
                            class="font-medium text-sm mr-2"
                            style="color: #ffd700"
                            >Qui :</span
                          >
                          <span class="text-sm" style="color: #cc9900"
                            >Petit malin gourmand et opportuniste</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span
                            class="font-medium text-sm mr-2"
                            style="color: #ffd700"
                            >Objectif :</span
                          >
                          <span
                            class="text-sm font-medium"
                            style="color: #cc9900"
                            >Voler le gâteau quand il atteint la taille
                            parfaite</span
                          >
                        </div>
                        <div class="flex items-center">
                          <span
                            class="font-medium text-sm mr-2"
                            style="color: #ffd700"
                            >Pourquoi :</span
                          >
                          <span class="text-sm italic" style="color: #cc9900"
                            >Il attend patiemment d'ouvrir la trappe secrète du
                            four et s'enfuir avec le butin</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contenu de la Boîte -->
      <section id="contenu" class="mb-12">
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
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li class="flex items-center">
                      <span
                        class="w-2 h-2 bg-orange-400 rounded-full mr-3"
                      ></span>
                      <strong>108 cartes</strong>
                    </li>
                    <li class="flex items-center">
                      <span
                        class="w-2 h-2 bg-orange-400 rounded-full mr-3"
                      ></span>
                      <strong>Un plateau</strong>
                      <small class="ml-1"
                        >(permettant de suivre l'avancé du jeu)</small
                      >
                    </li>
                    <li class="flex items-center">
                      <span
                        class="w-2 h-2 bg-orange-400 rounded-full mr-3"
                      ></span>
                      <strong>2 jetons punchboards </strong>
                      <small class="ml-1"
                        >(capacité du four & taille du gâteau)</small
                      >
                    </li>
                    <li class="flex items-center">
                      <span
                        class="w-2 h-2 bg-orange-400 rounded-full mr-3"
                      ></span>
                      <strong>1 Livret de règles</strong>
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
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li class="flex items-center">
                      <span
                        class="w-2 h-2 bg-orange-400 rounded-full mr-3"
                      ></span>
                      <strong class="mr-1">Joueurs: </strong> 1-2 (Coopératif)
                      ou 3-5 (Rôles cachés)
                    </li>
                    <li class="flex items-center">
                      <span
                        class="w-2 h-2 bg-orange-400 rounded-full mr-3"
                      ></span>
                      <strong class="mr-1">Âge: </strong> À partir de 8 ans
                    </li>
                    <li class="flex items-center">
                      <span
                        class="w-2 h-2 bg-orange-400 rounded-full mr-3"
                      ></span>
                      <strong class="mr-1">Durée: </strong> 15-20 minutes
                    </li>
                    <li class="flex items-center">
                      <span
                        class="w-2 h-2 bg-orange-400 rounded-full mr-3"
                      ></span>
                      <strong class="mr-1">Genre: </strong> Bluff, Tension,
                      Gourmandise
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mise en Place -->
      <section id="mise-en-place" class="mb-12">
        <div
          class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden"
        >
          <div class="p-6 sm:p-10">
            <!-- Titre de section -->
            <div class="text-center mb-10">
              <h2
                class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4"
              >
                Mise en Place
              </h2>
              <div
                class="w-24 h-1 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full mx-auto mb-4"
              ></div>
              <p class="text-gray-600 max-w-2xl mx-auto">
                Préparez votre cuisine pour le chaos ! Suivez ces étapes pour
                une mise en place parfaite.
              </p>
            </div>

            <!-- Étapes de mise en place -->
            <div class="max-w-4xl mx-auto">
              <ol class="space-y-3">
                <li
                  v-for="(step, index) in setupSteps"
                  :key="index"
                  class="bg-white rounded-xl p-4 shadow-md border border-orange-200 hover:shadow-lg transition-all duration-300"
                >
                  <div class="flex items-center space-x-4">
                    <!-- Numéro de l'étape -->
                    <div class="flex-shrink-0">
                      <div
                        class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md"
                      >
                        {{ index + 1 }}
                      </div>
                    </div>

                    <!-- Contenu de l'étape -->
                    <div class="flex-1 min-w-0">
                      <div
                        class="text-gray-800 text-sm leading-relaxed"
                        v-html="step"
                      ></div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            <!-- Note d'encouragement -->
            <div class="mt-6 text-center">
              <div
                class="bg-green-100 rounded-xl p-4 border border-green-300 max-w-2xl mx-auto"
              >
                <p class="text-green-800 font-medium">
                  🍰 Une fois la mise en place terminée, que le meilleur
                  gagne... et que le gâteau survive (ou pas) ! 🍰
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Déroulement -->
      <section
        id="deroulement"
        class="mb-12 relative overflow-hidden rounded-3xl"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"
        ></div>
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-8 left-8 text-5xl">⏰</div>
          <div class="absolute top-16 right-12 text-3xl">🎲</div>
          <div class="absolute bottom-20 left-1/4 text-4xl">📝</div>
          <div class="absolute bottom-12 right-1/3 text-2xl">🔄</div>
        </div>

        <div
          class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden"
        >
          <div class="p-6 sm:p-10">
            <div class="text-center mb-10">
              <h2
                class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
              >
                Déroulement d'une partie
              </h2>
              <div
                class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto"
              ></div>
            </div>

            <div
              class="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 border border-orange-200/50 shadow-lg"
            >
              <h3
                class="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
              >
                Séquence de Tour
              </h3>

              <div class="space-y-4">
                <div
                  v-for="(step, index) in gameSteps"
                  :key="index"
                  class="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/40"
                >
                  <div class="flex items-start space-x-4 sm:space-x-6">
                    <div class="flex-shrink-0">
                      <div
                        class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                      >
                        {{ index + 1 }}
                      </div>
                    </div>
                    <div class="flex-1 pt-2">
                      <p
                        class="text-gray-700 text-base sm:text-lg leading-relaxed"
                        v-html="step"
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-br from-yellow-100/90 to-amber-100/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-yellow-300/50"
            >
              <div class="flex items-center justify-center mb-6">
                <div
                  class="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-3 shadow-lg"
                >
                  <div class="text-2xl text-white">⚠️</div>
                </div>
              </div>

              <h4
                class="text-xl sm:text-2xl font-bold text-center text-amber-800 mb-6 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent"
              >
                Fin de Partie Immédiate
              </h4>

              <div class="space-y-3">
                <div
                  class="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50 hover:bg-white/90 transition-colors duration-300"
                >
                  <div class="flex items-start space-x-3">
                    <div class="text-xl">💥</div>
                    <div
                      class="text-amber-700 font-medium text-sm sm:text-base"
                    >
                      <strong>Si le gâteau explose</strong> (taille du gâteau ≥
                      capacité du four)
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50 hover:bg-white/90 transition-colors duration-300"
                >
                  <div class="flex items-start space-x-3">
                    <div class="text-xl">⏱️</div>
                    <div
                      class="text-amber-700 font-medium text-sm sm:text-base"
                    >
                      <strong>Après le tour déclenché</strong> par l'événement
                      "Minuteur final"
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50 hover:bg-white/90 transition-colors duration-300"
                >
                  <div class="flex items-start space-x-3">
                    <div class="text-xl">🃏</div>
                    <div
                      class="text-amber-700 font-medium text-sm sm:text-base"
                    >
                      <strong>Quand la pioche est vide</strong> et qu'un joueur
                      ne peut plus reconstituer sa main (on termine le tour en
                      cours)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conditions de Victoire -->
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
                          <strong>au moins 2 cartes objectifs en main</strong>
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
      <section id="cartes" class="mb-12 relative overflow-hidden rounded-3xl">
        <div
          class="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-orange-50/30 to-red-50/30"
        ></div>
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-8 left-8 text-5xl">🃏</div>
          <div class="absolute top-16 right-12 text-3xl">🎴</div>
          <div class="absolute bottom-20 left-1/4 text-4xl">🎯</div>
          <div class="absolute bottom-12 right-1/3 text-2xl">⚡</div>
        </div>
        <div
          class="bg-gradient-to-br from-white via-orange-50/30 to-purple-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden"
        >
          <div class="p-6 sm:p-10">
            <div class="text-center mb-10">
              <h2
                class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
              >
                Matériel de Jeu
              </h2>
              <div
                class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"
              ></div>
            </div>

            <!-- Plateau de jeu -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
                style="
                  background: linear-gradient(
                    to right,
                    rgba(20, 184, 166, 0.1),
                    rgba(6, 182, 212, 0.1)
                  );
                  border-left: 4px solid;
                  border-image: linear-gradient(to bottom, #14b8a6, #06b6d4) 1;
                "
              >
                <span class="flex items-center">
                  <span class="mr-2">🎯</span>
                  <span class="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Plateau de Jeu
                  </span>
                </span>
              </h3>
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6">
                <div class="text-center mb-4">
                  <div class="inline-block bg-white rounded-xl shadow-lg p-4 mb-4">
                    <img
                      src="/placeholder-card.png"
                      alt="Plateau de jeu"
                      class="h-48 w-auto mx-auto object-contain"
                    />
                  </div>
                  <p class="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    Le plateau permet de suivre l'avancée de la partie entre la taille du gâteau et la capacité du four. Il offre une visualisation claire de l'état du jeu et aide les joueurs à comprendre rapidement la situation actuelle.
                  </p>
                </div>
              </div>
            </div>

            <!-- Pions -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
                style="
                  background: linear-gradient(
                    to right,
                    rgba(99, 102, 241, 0.1),
                    rgba(139, 92, 246, 0.1)
                  );
                  border-left: 4px solid;
                  border-image: linear-gradient(to bottom, #6366f1, #8b5cf6) 1;
                "
              >
                <span class="flex items-center">
                  <span class="mr-2">🎲</span>
                  <span class="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Pions
                  </span>
                </span>
              </h3>
              <div class="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Pion Taille du Gâteau -->
                  <div class="bg-white rounded-xl shadow-md p-6 text-center">
                    <div class="inline-block bg-gray-50 rounded-xl p-4 mb-4">
                      <img
                        src="/placeholder-card.png"
                        alt="Pion taille du gâteau"
                        class="h-32 w-auto mx-auto object-contain"
                      />
                    </div>
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Pion Taille du Gâteau</h4>
                    <p class="text-gray-600 text-sm">
                      Indique la taille actuelle du gâteau sur le plateau
                    </p>
                  </div>

                  <!-- Pion Capacité du Four -->
                  <div class="bg-white rounded-xl shadow-md p-6 text-center">
                    <div class="inline-block bg-gray-50 rounded-xl p-4 mb-4">
                      <img
                        src="/placeholder-card.png"
                        alt="Pion capacité du four"
                        class="h-32 w-auto mx-auto object-contain"
                      />
                    </div>
                    <h4 class="font-bold text-lg text-gray-800 mb-2">Pion Capacité du Four</h4>
                    <p class="text-gray-600 text-sm">
                      Indique la capacité maximale du four sur le plateau
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cartes Rôles -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
                style="
                  background: linear-gradient(
                    to right,
                    rgba(34, 197, 94, 0.1),
                    rgba(239, 68, 68, 0.1),
                    rgba(245, 158, 11, 0.1)
                  );
                  border-left: 4px solid;
                  border-image: linear-gradient(
                      to bottom,
                      #22c55e,
                      #ef4444,
                      #f59e0b
                    )
                    1;
                "
              >
                <span class="flex items-center">
                  <span class="mr-2">🎭</span>
                  <span class="bg-gradient-to-r from-green-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                    Cartes Rôles
                  </span>
                </span>
              </h3>
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <!-- Pâtissiers -->
                <div
                  class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-2">
                      <div class="flex space-x-1">
                        <div
                          class="w-10 h-14 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Pâtissier"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Pâtissier'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <div
                          class="w-10 h-14 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Pâtissier"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Pâtissier'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                      </div>
                      <h4 class="font-semibold text-green-700">Pâtissiers</h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 2</span
                      >
                      <div class="text-xs text-gray-500 mt-1">max</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
                      >👩‍🍳 Équipe Gentille</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    🎯 Empêcher le gâteau d'exploser
                    <strong>ET</strong> empêcher le Glouton de voler le gâteau
                  </p>
                </div>

                <!-- Farceurs -->
                <div
                  class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-4 border-red-500 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-2">
                      <div class="flex space-x-1">
                        <div
                          class="w-8 h-12 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Farceur"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal('/placeholder-card.png', 'Farceur')
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <div
                          class="w-8 h-12 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Farceur"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal('/placeholder-card.png', 'Farceur')
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <div
                          class="w-8 h-12 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Farceur"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal('/placeholder-card.png', 'Farceur')
                            "
                            @error="handleImageError"
                          />
                        </div>
                      </div>
                      <h4 class="font-semibold text-red-700">Farceurs</h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 3</span
                      >
                      <div class="text-xs text-gray-500 mt-1">max</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full"
                      >🤡 Équipe Sabotage</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    💥 Faire exploser le gâteau en faisant monter le compteur à
                    20 ou plus
                  </p>
                </div>

                <!-- Glouton -->
                <div
                  class="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-6 border-4 border-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Glouton"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal('/placeholder-card.png', 'Glouton')
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h4 class="font-semibold text-yellow-700">Glouton</h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">unique</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                      >😋 Rôle Solo</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    🏆 Voler le gâteau : avoir 2+ cartes objectif ET taille du
                    gâteau entre 15-18 pendant SON tour
                  </p>
                </div>
              </div>
            </div>

            <!-- Cartes Objectif Glouton -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-yellow-600 bg-gradient-to-r from-yellow-100 to-transparent p-4 border-l-4 border-yellow-500 rounded mb-6"
              >
                🍴 Cartes Objectif Glouton
              </h3>
              <div class="mb-6 text-center">
                <div
                  class="bg-yellow-50/70 backdrop-blur-sm rounded-xl p-4 border border-yellow-200/50"
                >
                  <p class="text-yellow-700 font-medium text-sm sm:text-base">
                    ⚠️ <strong>Condition de victoire du Glouton :</strong> Le
                    Glouton doit avoir au moins 2 de ces cartes en main ET que
                    la taille du gâteau soit entre 15-18 pendant SON tour pour
                    gagner immédiatement
                  </p>
                </div>
              </div>
              <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                <!-- Cerises confites -->
                <div
                  class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(203, 108, 230, 0.1),
                      white
                    );
                    border-color: rgba(203, 108, 230, 0.5);
                  "
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Cerises confites"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Cerises confites'
                            )
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h4 class="font-semibold text-yellow-700">
                        Cerises confites
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                      >🍰 Objectif Glouton</span
                    >
                  </div>
                </div>

                <!-- Spirale de caramel -->
                <div
                  class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(203, 108, 230, 0.1),
                      white
                    );
                    border-color: rgba(203, 108, 230, 0.5);
                  "
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Spirale de caramel"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Spirale de caramel'
                            )
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h4 class="font-semibold text-yellow-700">
                        Spirale de caramel
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                      >🍰 Objectif Glouton</span
                    >
                  </div>
                </div>

                <!-- Plan d'évacuation -->
                <div
                  class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(203, 108, 230, 0.1),
                      white
                    );
                    border-color: rgba(203, 108, 230, 0.5);
                  "
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Macarons dorés"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Macarons dorés'
                            )
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h4 class="font-semibold text-yellow-700">
                        Macarons dorés
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                      >🍰 Objectif Glouton</span
                    >
                  </div>
                </div>

                <!-- Neutralisation chimique -->
                <div
                  class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(203, 108, 230, 0.1),
                      white
                    );
                    border-color: rgba(203, 108, 230, 0.5);
                  "
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Rosace de chantilly"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Rosace de chantilly'
                            )
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h4 class="font-semibold text-yellow-700">
                        Rosace de chantilly
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                      >🍰 Objectif Glouton</span
                    >
                  </div>
                </div>

                <!-- Schéma électrique -->
                <div
                  class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(203, 108, 230, 0.1),
                      white
                    );
                    border-color: rgba(203, 108, 230, 0.5);
                  "
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Bonbons gélifiés"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Bonbons gélifiés'
                            )
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h4 class="font-semibold text-yellow-700">
                        Bonbons gélifiés
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                      >🍰 Objectif Glouton</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Cartes Compteur -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
                style="
                  color: #dfbd7f;
                  background: linear-gradient(
                    to right,
                    rgba(223, 189, 127, 0.1),
                    transparent
                  );
                  border-left-color: #dfbd7f;
                "
              >
                🌡️ Cartes influant sur la taille du gâteau
              </h3>

              <!-- Charges -->
              <div class="mb-8">
                <h4
                  class="text-xl font-bold text-red-700 mb-4 flex items-center"
                >
                  ⬆️ Chaleur (+)
                </h4>
                <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                  <!-- Charge +1 -->
                  <div
                    class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Chaleur +1"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Chaleur +1'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Chaleur +1</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la taille du gâteau de +1
                    </p>
                  </div>

                  <!-- Charge +2 -->
                  <div
                    class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Chaleur +2"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Chaleur +2'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Chaleur +2</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 6</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la taille du gâteau de +2
                    </p>
                  </div>

                  <!-- Charge +3 -->
                  <div
                    class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Chaleur +3"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Chaleur +3'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Chaleur +3</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la taille du gâteau de +3
                    </p>
                  </div>

                  <!-- Charge +4 -->
                  <div
                    class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Chaleur +4"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Chaleur +4'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Chaleur +4</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 4</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la taille du gâteau de +4
                    </p>
                  </div>

                  <!-- Charge +5 -->
                  <div
                    class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Charge +5"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Chaleur +5'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Chaleur +5</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la taille du gâteau de +5
                    </p>
                  </div>

                  <!-- X -->
                  <div
                    class="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Charge X"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Chaleur ?'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-red-700">Chaleur ?</h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Augmente la taille du gâteau d'une valeur mystère
                      déterminée par tirage de carte au hasard
                    </p>
                  </div>
                </div>
              </div>

              <!-- Refroidissement -->
              <div class="mb-8">
                <h4
                  class="text-xl font-bold text-green-700 mb-4 flex items-center"
                >
                  ⬇️ Refroidissement (-)
                </h4>
                <div class="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                  <!-- Refroidissement -1 -->
                  <div
                    class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Refroidissement -1"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Refroidissement -1'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">
                          Refroidissement -1
                        </h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Diminue la taille du gâteau de -1
                    </p>
                  </div>

                  <!-- Refroidissement -2 -->
                  <div
                    class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Refroidissement -2"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Refroidissement -2'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">
                          Refroidissement -2
                        </h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Diminue la taille du gâteau de -2
                    </p>
                  </div>

                  <!-- Refroidissement -3 -->
                  <div
                    class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Refroidissement -3"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Refroidissement -3'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">
                          Refroidissement -3
                        </h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Diminue la taille du gâteau de -3
                    </p>
                  </div>

                  <!-- Refroidissement X -->
                  <div
                    class="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Refroidissement ?"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Refroidissement ?'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-green-700">
                          Refroidissement ?
                        </h5>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span
                        class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                        style="
                          background-color: rgba(223, 189, 127, 0.1);
                          color: #dfbd7f;
                        "
                        >🌡️ Taille du gâteau</span
                      >
                    </div>
                    <p class="text-sm text-gray-600">
                      Diminue la taille du gâteau d'une valeur mystère
                      déterminée par tirage de carte au hasard
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Cartes Action -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
                style="
                  color: #ff914d;
                  background: linear-gradient(
                    to right,
                    rgba(255, 145, 77, 0.1),
                    transparent
                  );
                  border-left-color: #ff914d;
                "
              >
                🔧 Cartes Action
              </h3>

              <div
                class="p-4 rounded-r-lg mb-6 border-l-4"
                style="
                  background: linear-gradient(
                    to right,
                    rgba(255, 145, 77, 0.1),
                    transparent
                  );
                  border-left-color: #ff914d;
                "
              >
                <p style="color: #ff914d">
                  <strong>📝 Note :</strong> Les cartes Action (marquées ⚡)
                  sont des cartes à effet offensif, stratégique ou de
                  manipulation que vous jouez pendant
                  <strong>votre tour</strong>. Elles permettent d'interagir avec
                  les autres joueurs, de modifier les règles temporairement ou
                  de récupérer des informations.
                </p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="card in actionCards"
                  :key="card.name"
                  class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(255, 145, 77, 0.1),
                      white
                    );
                    border-color: rgba(255, 145, 77, 0.5);
                  "
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          :src="card.image"
                          :alt="'Carte ' + card.name"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="openCardModal(card.image, card.name)"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        ⚡ {{ card.name }}
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="bg-yellow-500 text-gray-800 text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        >× {{ card.quantity }}</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                      >🔧 {{ card.type }}</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">{{ card.effect }}</p>
                </div>
              </div>
            </div>

            <!-- Cartes Action Réactives -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
                style="
                  color: #cb6ce6;
                  background: linear-gradient(
                    to right,
                    rgba(203, 108, 230, 0.1),
                    transparent
                  );
                  border-left-color: #cb6ce6;
                "
              >
                ⚡ Cartes Action Réactives
              </h3>

              <div
                class="p-4 rounded-r-lg mb-6 border-l-4"
                style="
                  background: linear-gradient(
                    to right,
                    rgba(203, 108, 230, 0.1),
                    transparent
                  );
                  border-left-color: #cb6ce6;
                "
              >
                <p style="color: #cb6ce6">
                  <strong>⚡ Note importante :</strong> Les cartes Action
                  Réactives (marquées ⚡) peuvent
                  <strong
                    >être jouées n'importe quand mais que contre des cartes
                    d'autres joueurs</strong
                  >
                  pour contrer, modifier ou rediriger une action. Elles ne
                  comptent pas comme votre carte jouée du tour. Une carte
                  réactive peut contrer une autre carte réactive.
                </p>
              </div>

              <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <!-- Tablier de Protection -->
                <div
                  class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(203, 108, 230, 0.1),
                      white
                    );
                    border-color: rgba(203, 108, 230, 0.5);
                  "
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Tablier de Protection"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Tablier de Protection'
                            )
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        ⚡ Tablier de Protection
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        style="background-color: #cb6ce6"
                        >× 4</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                      style="
                        background-color: rgba(203, 108, 230, 0.1);
                        color: #cb6ce6;
                      "
                      >Réactive ⚡</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Annule l'effet de la carte jouée
                  </p>
                </div>

                <!-- Renvoi de spatule -->
                <div
                  class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(203, 108, 230, 0.1),
                      white
                    );
                    border-color: rgba(203, 108, 230, 0.5);
                  "
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Renvoi de spatule"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Renvoi de spatule'
                            )
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        ⚡ Renvoi de spatule
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        style="background-color: #cb6ce6"
                        >× 4</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                      style="
                        background-color: rgba(203, 108, 230, 0.1);
                        color: #cb6ce6;
                      "
                      >Réactive ⚡</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Redirige une action contre vous ou inverse le signe (+ ↔ -)
                  </p>
                </div>

                <!-- Coup de boost -->
                <div
                  class="bg-gradient-to-br rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  style="
                    background: linear-gradient(
                      135deg,
                      rgba(203, 108, 230, 0.1),
                      white
                    );
                    border-color: rgba(203, 108, 230, 0.5);
                  "
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          src="/placeholder-card.png"
                          alt="Carte Coup de boost"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Coup de boost'
                            )
                          "
                          @error="handleImageError"
                        />
                      </div>
                      <h4 class="font-semibold text-gray-800">
                        ⚡ Coup de boost
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        style="background-color: #cb6ce6"
                        >× 3</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                      style="
                        background-color: rgba(203, 108, 230, 0.1);
                        color: #cb6ce6;
                      "
                      >Réactive ⚡</span
                    >
                  </div>
                  <p class="text-sm text-gray-600">
                    Doublez la valeur de la carte chaleur, refroidissement, four
                    rétréci ou four élargi jouée
                  </p>
                </div>
              </div>
            </div>

            <!-- Cartes Événement -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold p-4 border-l-4 rounded mb-6"
                style="
                  color: #4682b4;
                  background: linear-gradient(
                    to right,
                    rgba(70, 130, 180, 0.1),
                    transparent
                  );
                  border-left-color: #4682b4;
                "
              >
                🎭 Cartes Événement
              </h3>

              <div
                class="p-4 rounded-r-lg mb-6 border-l-4"
                style="
                  background: linear-gradient(
                    to right,
                    rgba(70, 130, 180, 0.1),
                    transparent
                  );
                  border-left-color: #4682b4;
                "
              >
                <h4 class="font-bold mb-2" style="color: #4682b4">
                  ⏰ Timing :
                </h4>
                <p style="color: #4682b4">
                  Un événement est révélé au début du tour du premier joueur,
                  <strong>avant qu'il joue sa carte</strong>. L'effet s'applique
                  à tout le tour de table.
                </p>
              </div>

              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="event in events"
                  :key="event.name"
                  :class="
                    event.name === 'Minuteur final'
                      ? 'border-red-500 bg-red-50'
                      : ''
                  "
                  :style="
                    event.name === 'Minuteur final'
                      ? ''
                      : 'background: linear-gradient(135deg, rgba(70, 130, 180, 0.1), white); border-color: rgba(70, 130, 180, 0.5);'
                  "
                  class="border-2 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                >
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                      >
                        <img
                          :src="event.image"
                          :alt="'Carte ' + event.name"
                          loading="lazy"
                          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                          @click="openCardModal(event.image, event.name)"
                        />
                      </div>
                      <h4
                        class="font-bold text-lg"
                        :class="
                          event.name === 'Minuteur final' ? 'text-red-800' : ''
                        "
                        :style="
                          event.name === 'Minuteur final'
                            ? ''
                            : 'color: #4682b4;'
                        "
                      >
                        {{ event.name }}
                      </h4>
                    </div>
                    <div class="text-right">
                      <span
                        class="text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                        style="background-color: #4682b4"
                        >× 1</span
                      >
                      <div class="text-xs text-gray-500 mt-1">quantité</div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <span
                      class="inline-block text-xs font-medium px-3 py-1 rounded-full"
                      style="
                        background-color: rgba(70, 130, 180, 0.1);
                        color: #4682b4;
                      "
                      >🎭 Événement</span
                    >
                  </div>
                  <p class="text-sm text-gray-700" v-html="event.effect"></p>
                </div>
              </div>

              <div
                class="mt-6 p-4 rounded-lg border-l-4"
                style="
                  background: linear-gradient(
                    to right,
                    rgba(70, 130, 180, 0.1),
                    transparent
                  );
                  border-left-color: #4682b4;
                "
              >
                <p class="text-sm" style="color: #4682b4">
                  <strong>📋 Mise en place spéciale :</strong>
                  Piochez 9 cartes Événement au hasard. Prenez 2 cartes au
                  hasard + la carte "Minuteur final", mélangez ces 3 cartes et
                  placez-les sous la pile d'événements pour qu'elles sortent
                  entre les tours 8 et 10.
                </p>
              </div>
            </div>

            <!-- Cartes Système -->
            <div class="mb-8">
              <h3
                class="text-2xl font-bold text-orange-600 bg-gradient-to-r from-orange-100 to-transparent p-4 border-l-4 border-orange-500 rounded mb-6"
              >
                ⚙️ Cartes Système
              </h3>
              <div class="bg-white rounded-lg shadow-md p-6">
                <!-- Carte Premier Joueur -->
                <div class="mb-6">
                  <h4
                    class="text-xl font-bold text-gray-700 mb-4 flex items-center"
                  >
                    👑 Carte Premier Joueur
                  </h4>
                  <div
                    class="grid gap-4 md:grid-cols-1 lg:grid-cols-1 max-w-sm"
                  >
                    <div
                      class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                          <div
                            class="w-12 h-16 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1"
                          >
                            <img
                              src="/placeholder-card.png"
                              alt="Carte Premier Joueur"
                              loading="lazy"
                              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                              @click="
                                openCardModal(
                                  '/placeholder-card.png',
                                  'Premier Joueur'
                                )
                              "
                              @error="handleImageError"
                            />
                          </div>
                          <h5 class="font-semibold text-gray-800">
                            Premier Joueur
                          </h5>
                        </div>
                        <div class="text-right">
                          <span
                            class="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-full flex-shrink-0"
                            >× 1</span
                          >
                          <div class="text-xs text-gray-500 mt-1">quantité</div>
                        </div>
                      </div>
                      <div class="mb-2">
                        <span
                          class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                          >Système</span
                        >
                      </div>
                      <p class="text-sm text-gray-600">
                        Indique qui est le premier joueur et commence la partie
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Cartes Système Numérotées -->
                <div class="mb-6">
                  <h4
                    class="text-xl font-bold text-gray-700 mb-4 flex items-center"
                  >
                    🔢 Cartes Système Numérotées
                  </h4>
                  <div
                    class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6"
                  >
                    <p class="text-blue-700">
                      Ces cartes servent de référence pour déterminer les
                      valeurs aléatoires des effets nécessitant un tirage au
                      hasard.
                    </p>
                  </div>
                  <div class="grid gap-4 md:grid-cols-5">
                    <!-- Système 1 -->
                    <div
                      class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Système 1"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Système 1'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-gray-800 text-center">
                          Système 1
                        </h5>
                        <div class="mt-2">
                          <span
                            class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                            >Système</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Système 2 -->
                    <div
                      class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Système 2"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Système 2'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-gray-800 text-center">
                          Système 2
                        </h5>
                        <div class="mt-2">
                          <span
                            class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                            >Système</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Système 3 -->
                    <div
                      class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Système 3"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Système 3'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-gray-800 text-center">
                          Système 3
                        </h5>
                        <div class="mt-2">
                          <span
                            class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                            >Système</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Système 4 -->
                    <div
                      class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Système 4"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Système 4'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-gray-800 text-center">
                          Système 4
                        </h5>
                        <div class="mt-2">
                          <span
                            class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                            >Système</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Système 5 -->
                    <div
                      class="bg-white border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition-shadow group"
                    >
                      <div class="flex flex-col items-center">
                        <div
                          class="w-16 h-20 rounded-md overflow-hidden shadow-sm bg-gray-50 p-1 mb-4"
                        >
                          <img
                            src="/placeholder-card.png"
                            alt="Carte Système 5"
                            loading="lazy"
                            class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200 cursor-zoom-in"
                            @click="
                              openCardModal(
                                '/placeholder-card.png',
                                'Système 5'
                              )
                            "
                            @error="handleImageError"
                          />
                        </div>
                        <h5 class="font-semibold text-gray-800 text-center">
                          Système 5
                        </h5>
                        <div class="mt-2">
                          <span
                            class="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                            >Système</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400"
                >
                  <p class="text-gray-800 text-sm">
                    <strong>ℹ️ Note :</strong>
                    Ces éléments sont nécessaires pour le suivi et la gestion de
                    la partie mais ne sont pas des cartes jouables.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Mode Coopératif - COMMENTÉ TEMPORAIREMENT -->
      <!-- <section id="cooperatif" class="mb-12">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-4 sm:p-8">
            <h2
              class="text-2xl sm:text-4xl font-bold text-red-600 border-b-4 border-red-500 pb-4 mb-8"
            >
              🤖 Mode Coopératif - Boom Squad
            </h2>

            <div
              class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-8"
            >
              <h3 class="text-2xl font-bold mb-4">1-2 joueurs vs IA</h3>
              <p class="text-lg mb-4">
                <strong>Affrontez la Machine</strong>, une IA explosive
                déterminée à faire sauter le compteur.
              </p>
              <p class="opacity-90">
                Tenez bon ensemble… ou sautez ensemble 💥
              </p>
            </div>

            <h3 class="text-2xl font-bold text-orange-600 mb-6">
              ⚙️ Mise en Place
            </h3>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-lg font-bold text-blue-700 mb-4">
                  Configuration
                </h4>
                <ul class="space-y-2 text-blue-700">
                  <li>• Deck IA de <strong>22 cartes</strong></li>
                  <li>• Chaque joueur pioche <strong>4 cartes</strong></li>
                  <li>• Compteur sur <strong>0</strong></li>
                  <li>• Choisir la difficulté</li>
                </ul>
              </div>

              <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h4 class="text-lg font-bold text-red-700 mb-4">
                  Niveaux de Difficulté
                </h4>
                <div class="space-y-2">
                  <div class="flex justify-between text-sm">
                    <span class="font-medium">Débutant</span>
                    <span>7 tours, seuil 19</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="font-medium">Normal</span>
                    <span>8 tours, seuil 17</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="font-medium">Expert</span>
                    <span>11 tours, seuil 15</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="font-medium">Légende</span>
                    <span>13 tours, seuil 12</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="font-medium text-red-600">Impossible</span>
                    <span>15 tours, seuil 10</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="text-2xl font-bold text-orange-600 mb-6">
              🔁 Déroulement d'un Tour
            </h3>

            <div class="space-y-4 mb-8">
              <div
                class="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg"
              >
                <h4 class="font-bold text-red-800 mb-2">
                  1. Tour de la Machine (IA)
                </h4>
                <p class="text-red-700">
                  L'IA pioche 1 carte de son deck et applique son effet
                  immédiatement
                </p>
              </div>

              <div
                class="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg"
              >
                <h4 class="font-bold text-blue-800 mb-2">
                  2. Tour des Joueurs
                </h4>
                <p class="text-blue-700">
                  <strong>En duo :</strong> chaque joueur joue 1 carte, pioche
                  <span class="block">1</span>
                  <span class="block"
                    ><strong>En solo :</strong> joue 2 cartes, pioche 2</span
                  >
                  Les joueurs coopèrent librement
                </p>
              </div>

              <div
                class="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg"
              >
                <h4 class="font-bold text-yellow-800 mb-2">3. Fin du Tour</h4>
                <p class="text-yellow-700">
                  Si le compteur ≥ seuil d'explosion → <strong>Défaite</strong>
                  Sinon → Continuer jusqu'à la fin des tours
                </p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 class="text-2xl font-bold text-orange-600 mb-6">
                  🤖 Deck IA (22 cartes avec logo 🤖)
                </h3>
                <div class="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <p class="text-sm text-red-700 mb-4">
                    Cartes exclusivement utilisées par l'IA (celles avec le logo
                    🤖 en haut à droite)
                  </p>
                  <div class="space-y-2">
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge +1"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge +1')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge +1</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge +2"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge +2')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge +2</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 4</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge +3"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge +3')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge +3</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 3</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge +4"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge +4')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge +4</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge +5"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge +5')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge +5</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 1</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge X"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge X')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge X</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Blocage"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/placeholder-card.png', 'Blocage')
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-yellow-700">Blocage</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 1</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Seuil réduit"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Seuil réduit'
                            )
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-yellow-700"
                          >Seuil réduit</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Sabotage"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/placeholder-card.png', 'Sabotage')
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-yellow-700"
                          >Sabotage</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-2xl font-bold text-orange-600 mb-6">
                  🙋‍♂️ Deck Joueur (41 cartes)
                </h3>
                <div
                  class="bg-green-50 border-2 border-green-200 rounded-lg p-4"
                >
                  <p class="text-sm text-green-700 mb-4">
                    Cartes disponibles pour les joueurs (quantités pour le mode
                    coopératif)
                  </p>
                  <div class="space-y-2">
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge +2"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge +2')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge +2</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 3</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge +3"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge +3')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge +3</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge +4"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge +4')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge +4</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Charge +5"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Charge +5')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-red-700">Charge +5</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 1</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Décharge -1"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/placeholder-card.png', 'Décharge -1')
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-green-700"
                          >Décharge -1</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Décharge -2"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/placeholder-card.png', 'Décharge -2')
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-green-700"
                          >Décharge -2</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Décharge -3"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/placeholder-card.png', 'Décharge -3')
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-green-700"
                          >Décharge -3</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 5</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Décharge X"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="openCardModal('/placeholder-card.png', 'Décharge X')"
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-green-700"
                          >Décharge X</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Blocage"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal('/placeholder-card.png', 'Blocage')
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-yellow-700">Blocage</span>
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 2</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Seuil augmenté"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Seuil augmenté'
                            )
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-yellow-700"
                          >Seuil augmenté</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 3</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Seuil réduit"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Seuil réduit'
                            )
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-yellow-700"
                          >Seuil réduit</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 1</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Contrebande"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Contrebande'
                            )
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-yellow-700"
                          >Contrebande</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 4</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Manipulation"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Manipulation'
                            )
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-yellow-700"
                          >Manipulation</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 1</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Intervention hasardeuse"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Intervention hasardeuse'
                            )
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-yellow-700"
                          >Intervention hasardeuse</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 1</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-between items-center bg-white p-2 rounded border"
                    >
                      <div class="flex items-center space-x-3">
                        <img
                          src="/placeholder-card.png"
                          alt="Tablier de Protection"
                          loading="lazy"
                          class="w-8 h-10 object-cover rounded cursor-zoom-in hover:scale-110 transition-transform"
                          @click="
                            openCardModal(
                              '/placeholder-card.png',
                              'Tablier de Protection'
                            )
                          "
                        
                        @error="handleImageError"/>
                        <span class="font-medium text-purple-700"
                          >⚡ Tablier de Protection</span
                        >
                      </div>
                      <div class="text-right">
                        <span
                          class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full"
                          >× 4</span
                        >
                        <div class="text-xs text-gray-500 mt-1">quantité</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8"
            >
              <h4 class="font-bold text-yellow-800 mb-4">
                ⚠️ Règles Spéciales
              </h4>
              <ul class="text-yellow-700 space-y-2">
                <li>
                  • Les cartes <strong>Blocage</strong> de l'IA affectent le
                  joueur suivant dans l'ordre
                </li>
              </ul>
            </div>

            <div
              class="bg-green-100 border-2 border-green-500 rounded-lg p-6 text-center"
            >
              <h4 class="text-xl font-bold text-green-800 mb-2">
                🎯 Condition de Victoire
              </h4>
              <p class="text-green-700">
                <strong>Survivez jusqu'à la fin du dernier tour</strong> sans
                que le compteur dépasse le seuil d'explosion !
              </p>
            </div>
          </div>
        </div>
      </section> -->

      <!-- FAQ -->
      <section id="faq" class="mb-12 relative overflow-hidden rounded-3xl">
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"
        ></div>
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-8 left-8 text-5xl">❓</div>
          <div class="absolute top-16 right-12 text-3xl">💡</div>
          <div class="absolute bottom-20 left-1/4 text-4xl">🤔</div>
          <div class="absolute bottom-12 right-1/3 text-2xl">💬</div>
        </div>

        <div
          class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden relative z-10"
        >
          <div class="p-6 sm:p-10">
            <div class="text-center mb-10">
              <h2
                class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
              >
                Questions Fréquentes
              </h2>
              <div
                class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"
              ></div>
              <p class="text-gray-600 text-lg font-medium">
                Toutes les réponses aux questions sur les règles du jeu
              </p>
            </div>

            <div class="space-y-6 max-w-4xl mx-auto">
              <div
                v-for="faq in faqs"
                :key="faq.question"
                class="bg-white/90 backdrop-blur-sm border-2 border-orange-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div class="text-white text-sm font-bold">Q</div>
                  </div>
                  <div class="flex-1">
                    <h3
                      class="text-lg font-bold text-gray-800 mb-4 leading-tight"
                    >
                      {{ faq.question }}
                    </h3>
                    <div
                      class="bg-orange-50/70 backdrop-blur-sm rounded-lg p-4 border border-orange-200/50"
                    >
                      <p
                        class="text-gray-700 leading-relaxed"
                        v-html="faq.answer"
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mode Coopératif -->
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
                1-2 Joueurs • Unis contre la machine folle
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 shadow-lg"
            >
              <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">
                🤖 L'Histoire : La Machine Devenue Folle
              </h3>

              <div class="space-y-6 text-gray-700">
                <p class="leading-relaxed">
                  Dans les cuisines automatisées du futur, le système d'intelligence artificielle qui contrôle tous les fours a subi un dysfonctionnement critique. La machine, jadis fidèle assistante des pâtissiers, est maintenant <strong class="text-red-600">devenue folle</strong> et cherche à faire exploser tous les gâteaux !
                </p>

                <div class="bg-white/60 rounded-xl p-6 border border-orange-200">
                  <h4 class="font-bold text-lg text-gray-800 mb-4">Votre Mission :</h4>
                  <p class="mb-4">
                    En tant que derniers pâtissiers humains encore présents dans la cuisine, vous devez <strong class="text-blue-600">travailler ensemble</strong> pour :
                  </p>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <span class="text-orange-500 mr-3 text-xl">🎯</span>
                      <span>Contrecarrer les sabotages de l'IA rebelle qui tente de surchauffer le four</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-500 mr-3 text-xl">🛡️</span>
                      <span>Maintenir la température du four sous contrôle malgré les attaques</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-500 mr-3 text-xl">⏰</span>
                      <span>Survivre jusqu'à la fin du minuteur avant l'explosion finale</span>
                    </li>
                  </ul>
                </div>

                <p class="leading-relaxed text-center italic text-gray-600">
                  La machine joue contre vous, utilisant des cartes d'action pour saboter vos efforts. Saurez-vous déjouer ses plans et empêcher la catastrophe culinaire ultime ?
                </p>

                <!-- Work in Progress -->
                <div class="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl p-6 border-2 border-yellow-400 mt-8">
                  <div class="flex items-center justify-center mb-4">
                    <div class="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                      <span class="text-2xl">🚧</span>
                    </div>
                  </div>
                  <h4 class="text-xl font-bold text-yellow-800 text-center mb-3">
                    Work In Progress
                  </h4>
                  <p class="text-yellow-700 text-center">
                    Ce mode est actuellement en développement. Les règles détaillées et les mécaniques spécifiques seront bientôt disponibles. Restez connectés pour découvrir cette nouvelle façon palpitante de jouer à Boom Badaboom !
                  </p>
                  <div class="flex justify-center mt-4 space-x-2">
                    <div class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Remerciements -->
      <section
        id="remerciements"
        class="mb-12 relative overflow-hidden rounded-3xl"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"
        ></div>
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-8 left-8 text-5xl">🙏</div>
          <div class="absolute top-16 right-12 text-3xl">❤️</div>
          <div class="absolute bottom-20 left-1/4 text-4xl">🎉</div>
          <div class="absolute bottom-12 right-1/3 text-2xl">👏</div>
        </div>

        <div
          class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden relative z-10"
        >
          <div class="p-6 sm:p-10">
            <div class="text-center mb-10">
              <h2
                class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
              >
                Remerciements
              </h2>
              <div
                class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"
              ></div>
              <p class="text-gray-600 text-lg font-medium">
                Merci aux contributeurs qui ont rendu ce jeu possible
              </p>
            </div>

            <div
              class="bg-gradient-to-br from-orange-50/80 to-red-50/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 shadow-lg"
            >
              <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">
                Merci aux contributeurs du projet
              </h3>

              <!-- Grille fixe avec taille homogène -->
              <div
                class="grid grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8"
              >
                <!-- Laura Ruelle -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      LR
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Laura</div>
                      <div>Ruelle</div>
                    </h4>
                  </div>
                </div>

                <!-- Mathieu Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      ML
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Mathieu</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Amélia Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      AL
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Amélia</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Malone Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      MA
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Malone</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Hugues Ruelle -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      HR
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Hugues</div>
                      <div>Ruelle</div>
                    </h4>
                  </div>
                </div>

                <!-- Evelyne Ruelle -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      ER
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Evelyne</div>
                      <div>Ruelle</div>
                    </h4>
                  </div>
                </div>

                <!-- Julie Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      JL
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Julie</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Marie Lecomte -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      MC
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Marie</div>
                      <div>Lecomte</div>
                    </h4>
                  </div>
                </div>

                <!-- Oscar Verquin -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      OV
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Oscar</div>
                      <div>Verquin</div>
                    </h4>
                  </div>
                </div>

                <!-- Thibaut Debruille -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      TD
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Thibaut</div>
                      <div>Debruille</div>
                    </h4>
                  </div>
                </div>

                <!-- Paulyne Meermans -->
                <div
                  class="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-14 h-14 bg-rose-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3"
                    >
                      PM
                    </div>
                    <h4
                      class="font-semibold text-gray-800 text-center text-sm leading-tight"
                    >
                      <div>Paulyne</div>
                      <div>Meermans</div>
                    </h4>
                  </div>
                </div>
              </div>

              <!-- Message de remerciement simple -->
              <div class="text-center">
                <div
                  class="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50"
                >
                  <p class="text-gray-700 font-medium text-lg mb-3">
                    Leurs retours ont permis d'affiner la recette parfaite de ce
                    jeu
                  </p>
                  <p class="text-orange-600 font-bold text-xl">
                    Merci à toute l'équipe ! 👨‍🍳🎉
                  </p>
                </div>
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

    <!-- Mode Compteur -->
    <div
      v-if="showCounterMode"
      class="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div class="w-full h-full relative overflow-hidden">
        <!-- Background avec effet coloré design -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-red-900"
        >
          <!-- Effet de grille -->
          <div
            class="absolute inset-0 opacity-20"
            style="
              background-image: radial-gradient(
                circle at 2px 2px,
                rgba(255, 255, 255, 0.15) 1px,
                transparent 0
              );
              background-size: 40px 40px;
            "
          ></div>
          <!-- Cercles décoratifs -->
          <div
            class="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-xl animate-pulse"
          ></div>
          <div
            class="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-lg animate-pulse"
            style="animation-delay: 1s"
          ></div>
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-2xl animate-pulse"
            style="animation-delay: 2s"
          ></div>
        </div>

        <!-- Overlay semi-transparent -->
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>

        <!-- Interface utilisateur -->
        <div class="relative z-10 h-full flex flex-col">
          <!-- Header -->
          <div
            class="flex justify-between items-center p-4 bg-black bg-opacity-70"
          >
            <h2
              class="text-white text-lg sm:text-xl font-bold flex items-center"
            >
              <span>🎯</span>
              <span class="ml-1 text-sm sm:text-xl">Compteur</span>
            </h2>

            <!-- Timer et informations centrés -->
            <div class="flex-1 text-center">
              <div v-if="elapsedTime" class="text-white text-sm opacity-60">
                ⏱️ {{ elapsedTime }}
              </div>
              <div class="text-white text-sm opacity-70 mt-1">
                👥 {{ playerCount }} joueur{{ playerCount > 1 ? "s" : "" }}
              </div>
              <div
                v-if="turnNumber > 0"
                class="text-white text-xs opacity-50 mt-1"
              >
                <span
                  v-if="finalCountdownRevealed"
                  class="text-red-300 font-bold"
                  >🚨 DERNIER TOUR 🚨</span
                >
                <span v-else
                  >Tour {{ turnNumber }} |
                  {{
                    eventDeck.length > 0
                      ? eventDeck.length + " événements max restants"
                      : "Tous les événements révélés"
                  }}</span
                >
              </div>
            </div>

            <div class="flex space-x-2">
              <button
                @click="finalCountdownRevealed ? endGame() : drawNextEvent()"
                :disabled="
                  gameOver ||
                  (eventDeck.length === 0 && !finalCountdownRevealed)
                "
                :class="{
                  'bg-purple-500 hover:bg-purple-600':
                    !gameOver &&
                    eventDeck.length > 0 &&
                    !finalCountdownRevealed,
                  'bg-red-500 hover:bg-red-600':
                    !gameOver && finalCountdownRevealed,
                  'bg-gray-600 opacity-50 cursor-not-allowed':
                    gameOver ||
                    (eventDeck.length === 0 && !finalCountdownRevealed),
                }"
                class="text-white px-2 sm:px-3 py-2 rounded-lg font-bold transition-colors text-xs sm:text-sm flex items-center space-x-1"
              >
                <span>🎲</span>
                <span class="hidden xs:inline sm:inline">
                  {{
                    finalCountdownRevealed
                      ? "Fin de partie"
                      : eventDeck.length > 0
                      ? "Nouveau Tour"
                      : "Plus d'événements"
                  }}
                </span>
              </button>
              <button
                @click="showHistoryModal = true"
                class="bg-gray-700 hover:bg-gray-800 text-white px-2 sm:px-3 py-2 rounded-lg font-bold transition-colors text-xs sm:text-sm flex items-center space-x-1"
              >
                <span>📋</span>
                <span class="hidden xs:inline sm:inline">Historique</span>
              </button>
              <button
                @click="showCloseConfirmModal = true"
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-bold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          <!-- Zone principale avec pions -->
          <div class="flex-1 relative">
            <!-- Ligne principale unique -->
            <div
              class="absolute h-0.5 bg-gradient-to-r from-blue-400 to-red-400 opacity-60 transition-all duration-300"
              :style="{
                left: '10%',
                right: '10%',
                top: '50%',
              }"
            ></div>

            <!-- Flèche et label Seuil -->
            <div
              class="absolute transition-all duration-500 z-30"
              :style="{
                left: `${Math.max(20, Math.min(80, getThresholdPosition()))}%`,
                top: '20%',
                transform: 'translateX(-50%)',
              }"
            >
              <!-- Label avec flèche -->
              <div class="text-center mb-2">
                <div
                  class="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white whitespace-nowrap"
                >
                  💀 SEUIL
                </div>
                <!-- Flèche pointant vers le bas -->
                <div
                  class="w-0 h-0 border-l-3 border-r-3 border-t-5 border-l-transparent border-r-transparent border-t-red-500 mx-auto mt-1"
                ></div>
              </div>
            </div>

            <!-- Pion Seuil (rouge) - Design amélioré -->
            <div
              class="absolute w-14 h-14 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 border-4 border-white shadow-2xl flex items-center justify-center transform -translate-x-7 md:-translate-x-9 -translate-y-7 md:-translate-y-9 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-yellow-300 cursor-pointer"
              :style="{
                left: `${getThresholdPosition()}%`,
                top: '50%',
                filter: 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.6))',
              }"
            >
              <!-- Cercle intérieur avec effet de profondeur -->
              <div
                class="absolute inset-1 rounded-full bg-gradient-to-t from-red-800 to-red-400 opacity-80"
              ></div>

              <!-- Contenu du pion - Seulement le chiffre -->
              <div class="relative text-white font-bold text-center z-10">
                <div class="text-2xl md:text-3xl font-black drop-shadow-lg">
                  {{ thresholdValue }}
                </div>
              </div>

              <!-- Effet de brillance -->
              <div
                class="absolute top-2 left-3 w-3 h-3 md:w-4 md:h-4 bg-white bg-opacity-40 rounded-full blur-sm"
              ></div>

              <!-- Pulse ring pour l'attention -->
              <div
                class="absolute inset-0 rounded-full bg-red-500 opacity-30 animate-ping"
              ></div>
            </div>

            <!-- Flèche et label Compteur -->
            <div
              class="absolute transition-all duration-500 z-20"
              :style="{
                left: `${Math.max(20, Math.min(80, getCounterPosition()))}%`,
                top: '20%',
                transform: 'translateX(-50%)',
              }"
            >
              <!-- Label avec flèche dynamique -->
              <div class="text-center mb-2">
                <div
                  class="text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white transition-all duration-300 whitespace-nowrap"
                  :class="{
                    'bg-blue-500': counterValue < thresholdValue - 3,
                    'bg-orange-500':
                      counterValue >= thresholdValue - 3 &&
                      counterValue < thresholdValue,
                    'bg-red-600': counterValue >= thresholdValue,
                  }"
                >
                  {{
                    counterValue < thresholdValue - 3
                      ? "💣 COMPTEUR"
                      : counterValue >= thresholdValue
                      ? "💥 BOOM"
                      : "⚠️ DANGER"
                  }}
                </div>
                <!-- Flèche pointant vers le bas - couleur dynamique -->
                <div
                  class="w-0 h-0 border-l-3 border-r-3 border-t-5 border-l-transparent border-r-transparent mx-auto mt-1 transition-all duration-300"
                  :class="{
                    'border-t-blue-500': counterValue < thresholdValue - 3,
                    'border-t-orange-500':
                      counterValue >= thresholdValue - 3 &&
                      counterValue < thresholdValue,
                    'border-t-red-600': counterValue >= thresholdValue,
                  }"
                ></div>
              </div>
            </div>

            <!-- Pion Compteur (bleu) - Design amélioré -->
            <div
              class="absolute w-14 h-14 md:w-18 md:h-18 rounded-full border-4 border-white shadow-2xl flex items-center justify-center transform -translate-x-7 md:-translate-x-9 -translate-y-7 md:-translate-y-9 transition-all duration-500 hover:scale-110 hover:shadow-3xl hover:border-yellow-300 cursor-pointer z-10"
              :style="{
                left: `${getCounterPosition()}%`,
                top: '50%',
              }"
              :class="{
                // États dynamiques
                'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700':
                  counterValue < thresholdValue - 3,
                'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600':
                  counterValue >= thresholdValue - 3 &&
                  counterValue < thresholdValue,
                'bg-gradient-to-br from-red-500 via-red-600 to-red-800':
                  counterValue >= thresholdValue,
              }"
            >
              <!-- Cercle intérieur avec effet de profondeur -->
              <div
                class="absolute inset-1 rounded-full opacity-80"
                :class="{
                  'bg-gradient-to-t from-blue-800 to-blue-400':
                    counterValue < thresholdValue - 3,
                  'bg-gradient-to-t from-orange-800 to-yellow-400':
                    counterValue >= thresholdValue - 3 &&
                    counterValue < thresholdValue,
                  'bg-gradient-to-t from-red-900 to-red-500':
                    counterValue >= thresholdValue,
                }"
              ></div>

              <!-- Contenu du pion - Seulement le chiffre -->
              <div class="relative text-white font-bold text-center z-10">
                <div class="text-2xl md:text-3xl font-black drop-shadow-lg">
                  {{ counterValue }}
                </div>
              </div>

              <!-- Effet de brillance -->
              <div
                class="absolute top-2 left-3 w-3 h-3 md:w-4 md:h-4 bg-white bg-opacity-40 rounded-full blur-sm"
              ></div>

              <!-- Pulse ring conditionnel -->
              <div
                v-if="counterValue >= thresholdValue - 3"
                class="absolute inset-0 rounded-full opacity-40 animate-ping"
                :class="{
                  'bg-yellow-500':
                    counterValue >= thresholdValue - 3 &&
                    counterValue < thresholdValue,
                  'bg-red-500': counterValue >= thresholdValue,
                }"
              ></div>

              <!-- Glow effect quand proche du seuil -->
              <div
                v-if="counterValue >= thresholdValue - 2"
                class="absolute inset-0 rounded-full"
                :style="{
                  filter:
                    counterValue >= thresholdValue
                      ? 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.8))'
                      : 'drop-shadow(0 0 16px rgba(234, 179, 8, 0.6))',
                }"
              ></div>
            </div>

            <!-- Indicateurs min/max -->
            <div class="absolute bottom-8 left-4 text-white text-xs opacity-75">
              <div class="bg-black bg-opacity-50 px-2 py-1 rounded">MIN: 0</div>
            </div>
            <div
              class="absolute bottom-8 right-4 text-white text-xs opacity-75"
            >
              <div class="bg-black bg-opacity-50 px-2 py-1 rounded">
                MAX: 30
              </div>
            </div>
          </div>

          <!-- Contrôles du compteur -->
          <div class="p-4 bg-black bg-opacity-70">
            <!-- Événement actuel -->
            <div
              v-if="currentEvent && currentEvent.name !== 'Minuteur final'"
              class="mb-4 p-3 bg-purple-900 bg-opacity-50 border border-purple-400 rounded-lg"
            >
              <div class="text-purple-200 text-xs mb-1">
                🎲 Événement actuel
              </div>
              <div class="text-yellow-300 font-bold text-sm mb-1">
                {{ currentEvent.name }}
              </div>
              <div
                class="text-white text-xs opacity-90"
                v-html="currentEvent.effect"
              ></div>
            </div>

            <!-- Événement final -->
            <div
              v-if="currentEvent && currentEvent.name === 'Minuteur final'"
              class="mb-4 p-3 bg-red-900 bg-opacity-70 border-2 border-red-500 rounded-lg"
            >
              <div class="text-red-200 text-xs mb-1">🚨 Événement spécial</div>
              <div class="text-yellow-300 font-bold text-sm mb-1">
                {{ currentEvent.name }}
              </div>
              <div
                class="text-white text-xs font-bold"
                v-html="currentEvent.effect"
              ></div>
            </div>

            <div class="mb-4">
              <h3 class="text-white font-bold mb-2">Compteur de la Bombe</h3>

              <!-- Boutons compacts sur une ligne -->
              <div class="flex flex-wrap gap-1 justify-center">
                <!-- Boutons de diminution -->
                <button
                  v-for="delta in [-3, -2, -1]"
                  :key="delta"
                  @click="adjustCounter(delta)"
                  :disabled="gameOver"
                  :class="{
                    'bg-green-500 hover:bg-green-600': !gameOver,
                    'bg-gray-600 opacity-50 cursor-not-allowed': gameOver,
                  }"
                  class="text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors active:scale-95"
                >
                  {{ delta }}
                </button>

                <!-- Séparateur visuel -->
                <div class="w-px bg-gray-500 mx-1"></div>

                <!-- Boutons d'augmentation -->
                <button
                  v-for="delta in [+1, +2, +3, +4, +5]"
                  :key="delta"
                  @click="adjustCounter(delta)"
                  :disabled="gameOver"
                  :class="{
                    'bg-red-500 hover:bg-red-600': !gameOver,
                    'bg-gray-600 opacity-50 cursor-not-allowed': gameOver,
                  }"
                  class="text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors active:scale-95"
                >
                  +{{ delta }}
                </button>
              </div>
            </div>

            <!-- Contrôles du seuil -->
            <div class="mb-4">
              <h3 class="text-white font-bold mb-2">Seuil d'Explosion</h3>
              <div class="flex justify-center space-x-2">
                <button
                  @click="adjustThreshold(-1)"
                  :disabled="gameOver || thresholdValue <= minThreshold"
                  class="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-lg transition-colors active:scale-95"
                >
                  -1
                </button>
                <div
                  class="bg-white bg-opacity-20 text-white font-bold py-3 px-6 rounded-lg flex items-center"
                >
                  Seuil: {{ thresholdValue }}
                </div>
                <button
                  @click="adjustThreshold(+1)"
                  :disabled="gameOver || thresholdValue >= maxThreshold"
                  class="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-lg transition-colors active:scale-95"
                >
                  +1
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modale Explosion -->
        <div
          v-if="gameOver && !showEndGameModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-85"
        >
          <div
            class="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <!-- Header -->
            <div
              class="bg-gradient-to-r from-red-600 to-red-700 p-6 text-center"
            >
              <div class="text-4xl mb-4">💥</div>
              <h3 class="text-2xl font-bold text-white mb-2">Explosion !</h3>
              <p class="text-red-100 text-sm">
                La bombe a explosée - Compteur: {{ counterValue }} / Seuil:
                {{ thresholdValue }}
              </p>
            </div>

            <!-- Content -->
            <div class="p-6 space-y-6">
              <!-- Temps de partie -->
              <div
                class="text-center bg-gray-700 rounded-xl p-4 border border-gray-600"
              >
                <div class="text-yellow-400 text-sm font-medium mb-2">
                  ⏱️ Temps de partie
                </div>
                <div class="text-white text-2xl font-bold">
                  {{ gameDuration || "Non disponible" }}
                </div>
              </div>

              <!-- Résultat de la partie -->
              <div class="bg-gray-700 rounded-xl p-6 border border-gray-600">
                <h4 class="text-xl font-bold text-red-400 mb-4 text-center">
                  🎯 Résultat de la Partie
                </h4>

                <div class="text-center">
                  <!-- Saboteurs gagnants -->
                  <div
                    class="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-center max-w-md mx-auto"
                  >
                    <div class="text-3xl mb-4">💀</div>
                    <h5 class="text-xl font-bold text-white mb-4">
                      SABOTEURS VICTORIEUX !
                    </h5>
                    <div class="text-red-100 text-sm space-y-2">
                      <div class="font-semibold text-red-200">
                        🏆 Les Saboteurs ont gagné !
                      </div>
                      <div>• La bombe a explosé</div>
                      <div>• Leur mission de sabotage est accomplie</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Boutons -->
              <div class="flex justify-center pt-4">
                <button
                  @click="quitGame"
                  class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  ✕ Quitter la partie
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Contact -->
    <section id="contact" class="mb-12 relative overflow-hidden rounded-3xl">
      <div
        class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"
      ></div>
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-8 left-8 text-5xl">📧</div>
        <div class="absolute top-16 right-12 text-3xl">💌</div>
        <div class="absolute bottom-20 left-1/4 text-4xl">📝</div>
        <div class="absolute bottom-12 right-1/3 text-2xl">✉️</div>
      </div>

      <div
        class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden relative z-10"
      >
        <div class="p-6 sm:p-10">
          <div class="text-center mb-10">
            <h2
              class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4"
            >
              Contact
            </h2>
            <div
              class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"
            ></div>
            <p class="text-gray-600 text-lg font-medium">
              Une question sur le jeu ? Une suggestion ? Envoyez-nous un message
              !
            </p>
          </div>

          <div
            class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-orange-200/50"
          >
            <form
              method="POST"
              action="https://formspree.io/f/xkgzkgjw"
              class="space-y-6"
              @submit="handleFormSubmit"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- Prénom -->
                <div>
                  <label
                    for="prenom"
                    class="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>

                <!-- Nom -->
                <div>
                  <label
                    for="nom"
                    class="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <!-- Bouton d'envoi -->
              <div class="text-center">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100 transition-all duration-300"
                >
                  <span v-if="isSubmitting" class="flex items-center">
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Envoi en cours...
                  </span>
                  <span v-else> 📧 Envoyer le message </span>
                </button>
              </div>

              <!-- Message de confirmation -->
              <div
                v-if="submitMessage"
                class="text-center p-4 rounded-lg"
                :class="
                  submitSuccess
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                "
              >
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-center py-12 relative overflow-hidden"
    >
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-4 left-8 text-3xl">🍰</div>
        <div class="absolute top-8 right-12 text-2xl">👨‍🍳</div>
        <div class="absolute bottom-6 left-1/4 text-4xl">🔥</div>
        <div class="absolute bottom-4 right-1/3 text-2xl">💥</div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 relative z-10">
        <div class="mb-6">
          <h3
            class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent mb-2"
          >
            Boom Badaboom
          </h3>
          <p class="text-lg font-semibold text-orange-300 mb-3">
            Chaos en Cuisine
          </p>
          <div
            class="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-4"
          ></div>
        </div>

        <p class="text-gray-300 text-base leading-relaxed max-w-md mx-auto">
          Jeu de cartes à rôles cachés dans l'univers culinaire
        </p>
        <p class="text-gray-400 text-sm mt-2">Bluff • Tension • Stratégie</p>

        <div class="mt-8 pt-6 border-t border-gray-700">
          <!-- Logo de la maison d'édition -->
          <div class="mb-4 text-center">
            <p class="text-gray-400 text-xs mb-2">Édité par</p>
            <div class="inline-block bg-white/90 rounded-lg px-4 py-2">
              <img
                src="/LaRuelleAuxJeuxLogo.png"
                alt="La Ruelle Aux Jeux"
                class="h-10 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <p class="text-gray-500 text-sm">
            © {{ getCurrentYear() }} La Ruelle Aux Jeux - Créé avec passion pour
            les amateurs de jeux de société
          </p>
        </div>
      </div>
    </footer>

    <!-- Card Modal -->
    <div
      v-if="showCardModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-75"
      @click="closeCardModal"
    >
      <div
        class="relative max-w-lg w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
        @click.stop
      >
        <!-- Close button -->
        <button
          @click="closeCardModal"
          class="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          ✕
        </button>

        <!-- Card image -->
        <div class="p-4 sm:p-6">
          <img
            v-if="selectedCard"
            :src="selectedCard.image"
            :alt="selectedCard.name"
            loading="lazy"
            class="w-full h-auto object-contain rounded-xl shadow-lg"
            @error="handleImageError"
          />
        </div>
      </div>
    </div>

    <!-- Modale Historique -->
    <div
      v-if="showHistoryModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      @click="showHistoryModal = false"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-96 overflow-hidden"
        @click.stop
      >
        <div class="p-4 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-800">📋 Historique</h3>
            <button
              @click="showHistoryModal = false"
              class="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
        <div class="p-4 max-h-80 overflow-y-auto">
          <div
            v-if="unifiedHistory.length === 0"
            class="text-center text-gray-500 py-8"
          >
            Aucune action enregistrée
          </div>
          <div v-else class="space-y-3">
            <div
              v-for="(item, index) in unifiedHistory.slice().reverse()"
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
                  <span class="text-xs text-purple-500">{{
                    item.timestamp
                  }}</span>
                </div>
                <div
                  class="text-xs text-purple-600 ml-6"
                  v-html="item.effect"
                ></div>
              </div>

              <!-- Modification du compteur -->
              <div v-else-if="item.type === 'counter'">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="text-blue-600 text-sm font-bold">📊</span>
                    <span class="text-sm font-medium text-blue-700">
                      Compteur {{ item.action }}
                    </span>
                    <span
                      class="text-sm text-blue-600 font-mono bg-blue-100 px-2 py-1 rounded"
                    >
                      {{ item.oldValue }} → {{ item.newValue }}
                    </span>
                  </div>
                  <span class="text-xs text-blue-500">{{
                    item.timestamp
                  }}</span>
                </div>
              </div>

              <!-- Modification du seuil -->
              <div v-else-if="item.type === 'threshold'">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="text-orange-600 text-sm font-bold">🛡️</span>
                    <span class="text-sm font-medium text-orange-700">
                      {{ item.action }}
                    </span>
                    <span
                      class="text-sm text-orange-600 font-mono bg-orange-100 px-2 py-1 rounded"
                    >
                      {{ item.oldValue }} → {{ item.newValue }}
                    </span>
                  </div>
                  <span class="text-xs text-orange-500">{{
                    item.timestamp
                  }}</span>
                </div>
              </div>

              <!-- Initialisation -->
              <div v-else-if="item.type === 'init'">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <span class="text-green-600 text-sm font-bold">🎯</span>
                    <span class="text-sm font-medium text-green-700">
                      {{ item.action }}
                    </span>
                    <span
                      class="text-sm text-green-600 font-mono bg-green-100 px-2 py-1 rounded"
                    >
                      {{ item.oldValue }} → {{ item.newValue }}
                    </span>
                  </div>
                  <span class="text-xs text-green-500">{{
                    item.timestamp
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modale Événement -->
    <div
      v-if="showEventModal && currentEvent"
      class="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-80"
      @click="closeEventModal"
    >
      <div
        :class="[
          'bg-gradient-to-br from-purple-900 to-indigo-900 border-2 border-purple-400 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transform',
          { 'animate-pulse': eventModalPulse },
        ]"
        @click.stop
      >
        <div class="p-4 sm:p-6 text-center">
          <div class="text-4xl sm:text-6xl mb-4 sm:mb-4">🎲</div>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
            Tour {{ turnNumber }}
          </h3>
          <div
            class="text-base sm:text-lg font-bold text-purple-200 mb-4 sm:mb-4"
          >
            Événement Révélé
          </div>

          <!-- Image de l'événement -->
          <div class="mb-4 sm:mb-4">
            <img
              :src="currentEvent.image"
              :alt="currentEvent.name"
              loading="lazy"
              class="w-24 h-32 sm:w-32 sm:h-44 mx-auto object-contain rounded-lg bg-white bg-opacity-10 p-2"
            />
          </div>

          <!-- Nom de l'événement -->
          <h4 class="text-lg sm:text-xl font-bold text-yellow-300 mb-2 sm:mb-4">
            {{ currentEvent.name }}
          </h4>

          <!-- Effet de l'événement -->
          <div
            class="bg-black bg-opacity-30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-4 text-white text-center text-sm sm:text-base"
            v-html="currentEvent.effect"
          ></div>

          <!-- Instructions pour les joueurs -->
          <div
            class="bg-yellow-900 bg-opacity-50 border border-yellow-600 rounded-lg p-2 sm:p-3 mb-4 sm:mb-4"
          >
            <div class="text-yellow-300 text-xs font-bold mb-1">
              📋 Instructions
            </div>
            <div class="text-yellow-100 text-xs">
              C'est aux joueurs d'appliquer les effets de cet événement pendant
              ce tour.
            </div>
          </div>

          <button
            @click="closeEventModal"
            class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full text-sm sm:text-base"
          >
            ✓ Compris
          </button>
        </div>
      </div>
    </div>

    <!-- Modale Instructions de début de partie -->
    <div
      v-if="showGameStartModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-85"
      @click="closeGameStartModal"
    >
      <div
        class="bg-gradient-to-br from-blue-900 to-purple-900 border-2 border-blue-400 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-4 sm:p-6 text-center">
          <div class="text-4xl sm:text-5xl mb-4">🎯</div>
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-4">
            Nouvelle Partie
          </h3>

          <!-- Instructions principales -->
          <div
            class="bg-black bg-opacity-30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-4 text-left"
          >
            <div
              class="text-blue-200 font-bold text-xs sm:text-sm mb-2 sm:mb-4"
            >
              📋 Rappel important :
            </div>
            <div class="text-white text-xs sm:text-sm space-y-1 sm:space-y-2">
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">1.</span>
                <span
                  >Le <strong>premier événement</strong> s'affiche
                  automatiquement au démarrage de la partie.</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">2.</span>
                <span
                  >Les <strong>joueurs</strong> sont responsables d'appliquer
                  les effets des événements.</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">3.</span>
                <span
                  >Cliquez "<strong>Nouveau Tour</strong>" pour révéler
                  l'événement suivant.</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">4.</span>
                <span
                  >Un événement reste actif pendant
                  <strong>tout le tour</strong>.</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <span class="text-yellow-400 font-bold">5.</span>
                <span
                  >Il y a <strong>10 événements</strong> au total. Le "Compte à
                  rebours final" apparaît aux tours 8, 9 ou 10.</span
                >
              </div>
            </div>
          </div>

          <!-- Note importante -->
          <div
            class="bg-orange-900 bg-opacity-50 border border-orange-500 rounded-lg p-2 sm:p-3 mb-4 sm:mb-4"
          >
            <div class="text-orange-300 text-xs font-bold mb-1">
              ⚠️ Important
            </div>
            <div class="text-orange-100 text-xs">
              Cette application gère le compteur et les événements. Les joueurs
              gèrent cartes et actions !
            </div>
          </div>

          <button
            @click="startGame"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors w-full text-sm sm:text-base"
          >
            ✓ C'est parti !
          </button>
        </div>
      </div>
    </div>

    <!-- Modale Confirmation Fermeture Partie -->
    <div
      v-if="showCloseConfirmModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-75"
      @click="cancelCloseGame"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-4 sm:p-6 text-center">
          <div class="text-4xl sm:text-5xl mb-4 sm:mb-4">⚠️</div>
          <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-4">
            Quitter la partie ?
          </h3>
          <p class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Êtes-vous sûr de vouloir fermer la partie en cours ?
            <strong>Toutes les données seront perdues.</strong>
          </p>
          <div class="flex space-x-2 sm:space-x-3">
            <button
              @click="cancelCloseGame"
              class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base"
            >
              Annuler
            </button>
            <button
              @click="confirmCloseGame"
              class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base"
            >
              ✕ Quitter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modale Sélection Mode de Jeu -->
  <div
    v-if="showGameModeModal"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
    @click="closeGameModeModal"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-center">
        <h3 class="text-xl font-bold text-white mb-2">
          🎯 Choisissez votre Mode
        </h3>
        <p class="text-red-100 text-sm">Comment souhaitez-vous jouer ?</p>
      </div>
      <!-- Content -->
      <div class="p-6 space-y-4">
        <!-- Mode Rôles cachés -->
        <button
          @click="selectCompetitiveMode"
          class="w-full group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <div class="flex items-center justify-between">
            <div class="text-left">
              <div class="font-bold text-lg mb-1">🎭 Mode Rôles cachés</div>
              <div class="text-red-100 text-sm">
                1-2 (Coopératif) ou 3-5 (Rôles cachés) • Rôles cachés
              </div>
            </div>
            <div
              class="text-2xl opacity-80 group-hover:opacity-100 transition-opacity"
            >
              ⚔️
            </div>
          </div>
        </button>
        <!-- Mode Coopératif -->
        <button
          @click="selectCooperativeMode"
          class="w-full group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <div class="flex items-center justify-between">
            <div class="text-left">
              <div class="font-bold text-lg mb-1">🤖 Mode Coopératif</div>
              <div class="text-blue-100 text-sm">1-2 joueurs vs IA</div>
            </div>
            <div
              class="text-2xl opacity-80 group-hover:opacity-100 transition-opacity"
            >
              🤝
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>

  <!-- Modale Sélection Difficulté IA -->
  <div
    v-if="showAIDifficultyModal"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
    @click="closeAIDifficultyModal"
  >
    <div
      class="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all duration-300 scale-100"
      @click.stop
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 text-center">
        <h3 class="text-xl font-bold text-white mb-2">
          🎯 Choisissez la Difficulté
        </h3>
        <p class="text-blue-100 text-sm">Mode Coopératif vs IA</p>
      </div>
      <!-- Content -->
      <div class="p-6 space-y-3">
        <div
          v-for="difficulty in aiDifficultyLevels"
          :key="difficulty.name"
          @click="selectAIDifficulty(difficulty)"
          class="w-full group cursor-pointer rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 border-transparent hover:border-opacity-50"
          :class="{
            'bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 hover:border-green-400':
              difficulty.color === 'green',
            'bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 hover:border-blue-400':
              difficulty.color === 'blue',
            'bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 hover:border-orange-400':
              difficulty.color === 'orange',
            'bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 hover:border-red-400':
              difficulty.color === 'red',
            'bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 hover:border-purple-400':
              difficulty.color === 'purple',
          }"
        >
          <div class="flex items-center justify-between">
            <div class="text-left flex-1">
              <div
                class="font-bold text-lg mb-1"
                :class="{
                  'text-green-800': difficulty.color === 'green',
                  'text-blue-800': difficulty.color === 'blue',
                  'text-orange-800': difficulty.color === 'orange',
                  'text-red-800': difficulty.color === 'red',
                  'text-purple-800': difficulty.color === 'purple',
                }"
              >
                {{ difficulty.name }}
              </div>
              <div
                class="text-sm opacity-80"
                :class="{
                  'text-green-700': difficulty.color === 'green',
                  'text-blue-700': difficulty.color === 'blue',
                  'text-orange-700': difficulty.color === 'orange',
                  'text-red-700': difficulty.color === 'red',
                  'text-purple-700': difficulty.color === 'purple',
                }"
              >
                {{ difficulty.turns }} tours • Seuil
                {{ difficulty.threshold }} • Taux de victoire
                {{ difficulty.winRate }}
              </div>
            </div>
            <div
              class="text-xl opacity-70 group-hover:opacity-100 transition-opacity"
              :class="{
                'text-green-600': difficulty.color === 'green',
                'text-blue-600': difficulty.color === 'blue',
                'text-orange-600': difficulty.color === 'orange',
                'text-red-600': difficulty.color === 'red',
                'text-purple-600': difficulty.color === 'purple',
              }"
            >
              🎯
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mode IA Coopératif -->
  <div
    v-if="showAIMode"
    class="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center"
  >
    <div class="w-full h-full relative overflow-hidden">
      <!-- Background avec effet coloré design -->
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
              circle at 25% 25%,
              #3b82f6 1px,
              transparent 1px
            ),
            radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px);
          background-size: 50px 50px;
        "
      ></div>
      <!-- Header -->
      <div
        class="relative z-10 bg-black bg-opacity-30 border-b border-blue-400"
      >
        <div
          class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center"
        >
          <h1 class="text-2xl font-bold text-white flex items-center gap-3">
            🤖 Mode Coopératif vs IA
          </h1>
          <button
            @click="closeAIMode"
            class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            ✕ Fermer
          </button>
        </div>
      </div>
      <!-- Main content -->
      <div class="relative z-10 max-w-4xl mx-auto p-4 h-full overflow-auto">
        <!-- Informations de partie -->
        <div class="mb-6 text-center space-y-4">
          <!-- Difficulté sélectionnée -->
          <div
            v-if="selectedDifficulty"
            class="inline-block bg-black bg-opacity-50 text-white px-6 py-4 rounded-2xl shadow-lg border border-blue-400"
          >
            <div class="text-sm opacity-90 mb-1">Difficulté</div>
            <div class="text-xl font-bold">{{ selectedDifficulty.name }}</div>
            <div class="text-sm opacity-80">
              {{ selectedDifficulty.turns }} tours • Seuil
              {{ selectedDifficulty.threshold }}
            </div>
          </div>
        </div>

        <!-- Placeholder pour le contenu du mode IA -->
        <div
          class="text-center text-white bg-black bg-opacity-30 rounded-xl p-8"
        >
          <div class="text-4xl mb-4">🚧</div>
          <h3 class="text-xl font-bold mb-4">Mode en développement</h3>
          <p class="text-blue-200 mb-6">
            Le mode coopératif vs IA sera bientôt disponible avec toutes les
            nouvelles règles !
          </p>
          <button
            @click="closeAIMode"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Retour au menu
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modale Fin de Partie -->
  <div
    v-if="showEndGameModal"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-85"
    @click="closeEndGameModal"
  >
    <div
      class="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-400 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <!-- Header -->
      <div
        class="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-center"
      >
        <div class="text-4xl mb-4">🏆</div>
        <h3 class="text-2xl font-bold text-white mb-2">Fin de Partie !</h3>
        <p class="text-yellow-100 text-sm">Le "Minuteur final" a été révélé</p>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <!-- Temps de partie -->
        <div
          class="text-center bg-gray-700 rounded-xl p-4 border border-gray-600"
        >
          <div class="text-yellow-400 text-sm font-medium mb-2">
            ⏱️ Temps de partie
          </div>
          <div class="text-white text-2xl font-bold">
            {{ gameDuration || "Non disponible" }}
          </div>
        </div>

        <!-- Conditions de victoire -->
        <div class="bg-gray-700 rounded-xl p-6 border border-gray-600">
          <h4 class="text-xl font-bold text-yellow-400 mb-4 text-center">
            🎯 Conditions de Victoire par Rôle
          </h4>

          <div class="grid gap-6 md:grid-cols-3">
            <!-- Démineurs -->
            <div
              class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-center"
            >
              <div class="text-2xl mb-4">🛡️</div>
              <h5 class="text-lg font-bold text-white mb-4">DÉMINEURS</h5>
              <div class="text-blue-100 text-sm space-y-2">
                <div class="font-semibold text-blue-200">
                  Victoire par Élimination :
                </div>
                <div>• Tous les Saboteurs sont éliminés</div>
                <div>• L'Agent Double n'a pas gagné immédiatement</div>
                <div>• La bombe n'a pas explosé</div>
              </div>
            </div>

            <!-- Saboteurs -->
            <div
              class="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-4 text-center"
            >
              <div class="text-2xl mb-4">💥</div>
              <h5 class="text-lg font-bold text-white mb-4">SABOTEURS</h5>
              <div class="text-red-100 text-sm space-y-2">
                <div class="font-semibold text-red-200">Victoire si :</div>
                <div>• La bombe explose</div>
                <div class="text-xs opacity-80">(Compteur ≥ Seuil)</div>
              </div>
            </div>

            <!-- Agent Double -->
            <div
              class="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-4 text-center"
            >
              <div class="text-2xl mb-4">🎭</div>
              <h5 class="text-lg font-bold text-white mb-4">AGENT DOUBLE</h5>
              <div class="text-yellow-100 text-sm space-y-2">
                <div class="font-semibold text-yellow-200">
                  Victoire immédiate :
                </div>
                <div>• A au moins 2 cartes objectifs en main</div>
                <div>• ET le compteur est entre 15-18</div>
                <div>• A son tour seulement !</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Boutons -->
        <div class="flex justify-center pt-4">
          <button
            @click="quitGame"
            class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            ✕ Quitter la partie
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modale Sélection Nombre de Joueurs -->
  <div
    v-if="showPlayerCountModal"
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
          @click="selectPlayerCount(3)"
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
          @click="selectPlayerCount(4)"
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
          @click="selectPlayerCount(5)"
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
      </div>

      <button
        @click="closePlayerCountModal"
        class="w-full mt-6 p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200"
      >
        ← Retour
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Custom cursor for images */
.cursor-zoom-in {
  cursor: zoom-in;
}

/* Custom sizes for tokens */
.w-18 {
  width: 4.5rem;
}
.h-18 {
  height: 4.5rem;
}
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 30px rgba(0, 0, 0, 0.15);
}

/* Modal scroll improvements for mobile */
.max-h-\[90vh\] {
  max-height: 90vh;
}

@media (max-height: 600px) {
  .max-h-\[90vh\] {
    max-height: 95vh;
  }
}

/* Custom arrow border sizes */
.border-l-3 {
  border-left-width: 6px;
}
.border-r-3 {
  border-right-width: 6px;
}
.border-t-5 {
  border-top-width: 8px;
}

/* Enhanced glow effects */
.token-glow-blue {
  filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.7));
}
.token-glow-yellow {
  filter: drop-shadow(0 0 18px rgba(234, 179, 8, 0.8));
}
.token-glow-red {
  filter: drop-shadow(0 0 25px rgba(239, 68, 68, 0.9));
}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Analytics } from "@vercel/analytics/vue";

// Fonction pour gérer les images manquantes
const handleImageError = (event) => {
  event.target.src = "/placeholder-card.png";
  event.target.onerror = null; // Éviter les boucles infinies
};

// Navigation
const navLinks = [
  { id: "concept", label: "Concept" },
  { id: "contenu", label: "Contenu" },
  { id: "mise-en-place", label: "Mise en Place" },
  { id: "deroulement", label: "Déroulement" },
  { id: "victoire", label: "Victoire" },
  { id: "cartes", label: "Matériel" },
  { id: "faq", label: "FAQ" },
  { id: "cooperative-mode", label: "Mode Coopératif" },
  { id: "remerciements", label: "Remerciements" },
  { id: "contact", label: "Contact" },
];

// Cards data

const actionCards = [
  {
    name: "Coup d'oeil gourmand",
    type: "Action",
    effect:
      "Regardez secrètement la main d'un joueur et volez une carte au choix",
    quantity: 3,
    image: "/placeholder-card.png",
  },
  {
    name: "Accident de cuisine",
    type: "Action",
    effect: "Un joueur de votre choix passe complètement son prochain tour",
    quantity: 3,
    image: "/placeholder-card.png",
  },
  {
    name: "Maladresse",
    type: "Action",
    effect:
      "Un joueur de votre choix doit jouer une carte au hasard de sa main",
    quantity: 2,
    image: "/placeholder-card.png",
  },
  {
    name: "Four élargi",
    type: "Action",
    effect: "Augmentez la capacité du four d'une valeur mystère",
    quantity: 3,
    image: "/placeholder-card.png",
  },
  {
    name: "Four rétréci",
    type: "Action",
    effect: "Diminuez la capacité du four d'une valeur mystère",
    quantity: 3,
    image: "/placeholder-card.png",
  },
  {
    name: "Récupération d'ingrédient",
    type: "Action",
    effect: "Reprenez une carte au choix dans la défausse",
    quantity: 4,
    image: "/placeholder-card.png",
  },
  {
    name: "Échange de Tablier",
    type: "Action",
    effect: "Échangez votre main avec celle d'un joueur de ton choix",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Inspection du frigo",
    type: "Action",
    effect: "Regardez les 3 prochaines cartes de la pioche et changez l'ordre",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Pincée de hasard",
    type: "Action",
    effect:
      "Piochez une carte de valeur aléatoire et modifiez la taille du gâteau : 1 ou 2 = +3 / 3 = 0 / 4 ou 5 = -3",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Changement de toque",
    type: "Action",
    effect: "Échangez votre carte Rôle avec celle face cachée",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Nettoyage complet",
    type: "Action",
    effect: "Défaussez toutes vos cartes et piochez-en le même nombre",
    quantity: 1,
    image: "/placeholder-card.png",
  },
  {
    name: "Remixage total",
    type: "Action",
    effect:
      "Mélangez toutes les cartes en main avec la défausse. Redistribuez 5 cartes par joueur",
    quantity: 1,
    image: "/placeholder-card.png",
  },
];

// Setup steps
const setupSteps = [
  "<strong>Séparez les cartes système du reste</strong> (rôles, événements, premier joueur)",
  "<strong>Sélectionnez les cartes selon le nombre de joueurs :</strong><span class='block mt-2'>• <strong>3 joueurs :</strong> Prenez uniquement les cartes marquées 3+</span><span class='block'>• <strong>4 joueurs :</strong> Ajoutez les cartes marquées 4+</span><span class='block'>• <strong>5 joueurs :</strong> Ajoutez aussi les cartes marquées 5+</span><span class='block mt-2'><em>Les indicateurs se trouvent en haut à droite des cartes</em></span>",
  "<strong>Mélangez toutes les cartes de jeu séléctionnées</strong>",
  "Chaque joueur reçoit <strong>5 cartes</strong>",
  "<strong>Assemblez la jauge :</strong> placez les 3 cartes piste côte à côte <span class='text-blue-600 text-sm'>(<em>Peut être passé si vous utilisez l'application</em>)</span>",
  "Placez le jeton <strong>taille du gâteau sur le nombre de joueurs</strong> (3, 4 ou 5) et le jeton <strong>capacité du four sur 20</strong> <span class='text-blue-600 text-sm'>(<em>Peut être passé si vous utilisez l'application</em>)</span>",
  '<strong>Désignez le premier joueur</strong> et donnez-lui la carte "Premier Joueur" qu\'il place devant lui',
  '<strong>Préparez les événements :</strong><span class="block mt-2">• Piochez 9 cartes Événement au hasard (hors Minuteur final)</span><span class="block">• Prenez 2 cartes au hasard de ce paquet + la carte "Minuteur final"</span><span class="block">• Mélangez ces 3 cartes et placez-les <strong>sous la pile</strong> d\'événements</span><span class="block mt-2"><span class="text-blue-600 text-sm">(<em>Peut être passé si vous utilisez l\'application</em>)</span></span>',
  "<strong>Distribuez les rôles</strong> selon le tableau de répartition avec incertitude :<div class='mt-4'></div><div class='bg-gradient-to-r from-yellow-50 to-orange-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-400 mb-4'><div class='text-sm text-yellow-800'><strong>🎭 Principe :</strong> Prenez plus de cartes rôles que de joueurs, mélangez-les et distribuez-en une par joueur. La carte non distribuée reste secrète, créant de l'incertitude sur la composition exacte.</div></div><div class='overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0'><div class='inline-block min-w-full'><table class='min-w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden'><thead><tr class='bg-gradient-to-r from-red-500 to-orange-500 text-white'><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Joueurs</th><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Cartes</th><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Composition</th><th class='border border-gray-200 px-2 py-3 sm:px-4 sm:py-3 font-bold text-xs sm:text-sm text-left'>Distribuées</th></tr></thead><tbody><tr class='bg-gray-50'><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-bold text-red-600 text-xs sm:text-sm'>3</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>4 cartes</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>1 Pâtissier + 2 Farceurs + 1 Glouton</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-semibold text-green-600 text-xs sm:text-sm'>3 <span class='text-gray-500 text-xs block sm:inline'>(1 retirée)</span></td></tr><tr class='bg-white'><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-bold text-red-600 text-xs sm:text-sm'>4</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>5 cartes</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>2 Pâtissiers + 2 Farceurs + 1 Glouton</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-semibold text-green-600 text-xs sm:text-sm'>4 <span class='text-gray-500 text-xs block sm:inline'>(1 retirée)</span></td></tr><tr class='bg-gray-50'><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-bold text-red-600 text-xs sm:text-sm'>5</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>6 cartes</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm'>2 Pâtissiers + 3 Farceurs + 1 Glouton</td><td class='border border-gray-200 px-2 py-2 sm:px-4 sm:py-3 font-semibold text-green-600 text-xs sm:text-sm'>5 <span class='text-gray-500 text-xs block sm:inline'>(1 retirée)</span></td></tr></tbody></table></div></div>",
];

// Game steps
const gameSteps = [
  "<strong>Révélez un événement</strong> (au début du tour du premier joueur uniquement)",
  "<strong>Jouez 1 carte</strong> de votre main",
  "<strong>Appliquez l'effet</strong> de la carte (modification du compteur, action spéciale...)",
  "<strong>Piochez autant de carte que nécessaire</strong> pour revenir à 5 cartes en main (sauf si votre tour est sauté)",
  "<strong>Fin de manche :</strong> Une fois que tous les joueurs ont joué, la carte Premier Joueur passe au joueur de gauche et on dévoile un nouvel événement",
];

// Events
const events = [
  {
    name: "Échange d'Ingrédients",
    effect: "Tous les joueurs passent leur main au joueur à leur gauche",
    image: "/placeholder-card.png",
  },
  {
    name: "Four en panne",
    effect: "Personne ne pioche à la fin de son tour ce tour-ci",
    image: "/placeholder-card.png",
  },
  {
    name: "Inventaire surprise",
    effect: "Tous les joueurs révèlent 1 carte au hasard de leur main",
    image: "/placeholder-card.png",
  },
  {
    name: "Cuisine ouverte",
    effect: "Pendant ce tour, toutes les cartes piochées doivent être révélées",
    image: "/placeholder-card.png",
  },
  {
    name: "Four déréglé",
    effect:
      "Les effets des cartes influant sur la piste sont inversés (les + deviennent des - et les - des +)",
    image: "/placeholder-card.png",
  },
  {
    name: "Éclaboussures",
    effect:
      "Si une carte refroidissement est jouée, le joueur dévoile une carte de la pioche et applique son effet immédiatement",
    image: "/placeholder-card.png",
  },
  {
    name: "Double intensité",
    effect:
      "Chaque carte chaleur/refroidissement 🌡️ compte double (Coup de Boost interdite ce tour)",
    image: "/placeholder-card.png",
  },
  {
    name: "Maladresse",
    effect:
      "Ce tour, après avoir joué votre carte, défaussez immédiatement une autre carte de votre main au hasard",
    image: "/placeholder-card.png",
  },
  {
    name: "Panne d'électricité",
    effect: "Toutes les cartes actions 🔧 ⚡ sont interdites ce tour",
    image: "/placeholder-card.png",
  },
  {
    name: "Service express",
    effect:
      "À son tour, chaque joueur pioche une carte et la joue immédiatement",
    image: "/placeholder-card.png",
  },
  {
    name: "Cuisine en désordre",
    effect: "L'ordre de jeu s'inverse pour le reste de ce tour",
    image: "/placeholder-card.png",
  },
  {
    name: "Gonflement progressif",
    effect:
      "À la fin du tour de chaque joueur qui joue, la taille du gâteau augmente de 1",
    image: "/placeholder-card.png",
  },
  {
    name: "Ventilation d'urgence",
    effect:
      "Si la taille du gâteau est à plus de 15 à la fin du tour, retirer 3",
    image: "/placeholder-card.png",
  },
  {
    name: "Réchauffage automatique",
    effect:
      "Si la taille du gâteau est à moins de 10 à la fin du tour, ajouter 2",
    image: "/placeholder-card.png",
  },
  {
    name: "Minuteur final",
    effect:
      "Dernier tour ! Chaque joueur joue une dernière fois, puis la partie s'arrête",
    image: "/placeholder-card.png",
  },
];

// AI difficulty levels
const aiDifficultyLevels = [
  { name: "Débutant", turns: 7, threshold: 19, winRate: "90%", color: "green" },
  { name: "Normal", turns: 8, threshold: 17, winRate: "70%", color: "blue" },
  { name: "Expert", turns: 11, threshold: 15, winRate: "40%", color: "orange" },
  { name: "Légende", turns: 13, threshold: 12, winRate: "15%", color: "red" },
  {
    name: "Impossible",
    turns: 15,
    threshold: 10,
    winRate: "5%",
    color: "purple",
  },
];

// FAQs
const faqs = [
  {
    question:
      "Que se passe-t-il si la taille du gâteau devrait descendre sous 0 ?",
    answer:
      "<strong>La taille du gâteau ne peut jamais descendre sous 0.</strong> Si une carte devait le faire descendre en dessous, il reste à 0.",
  },
  {
    question: "Puis-je regarder la défausse ?",
    answer:
      '<strong>Non.</strong> Il est interdit de fouiller la défausse. Seule la dernière carte posée sur la pile de défausse est visible de tous. Le seul moyen de voir le contenu de la défausse est via une carte Action comme "Récupération d’ingrédient".',
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
    question: "Four rétréci - Règles importantes",
    answer:
      "<span class='block'>• Cette carte <strong>ne peut jamais</strong> déclencher l'explosion</span><span class='block'>• La nouvelle capacité du four doit être <strong>au minimum</strong> à (taille du gâteau actuel + 1)</span><span class='block'>• Le montant de réduction est déterminé par une carte numérotée tirée au hasard</span><span class='block'>• Si la réduction diminuerait la capacité du four trop bas, la carte ne peut pas être jouée</span>",
  },
  {
    question: "Comment fonctionne la carte Renvoi de spatule ?",
    answer:
      "La carte Renvoi de spatule peut :<span class='block mt-2'>• <strong>Rediriger une action</strong> dirigée contre vous vers son auteur</span><span class='block'>• <strong>Inverser le signe</strong> d'une carte refroidissement/chaleur (+ devient -, - devient +)</span>",
  },
  {
    question: "Peut-on jouer Coup de boost sur une carte Renvoi de spatule ?",
    answer:
      "<strong>Non.</strong> La carte Coup de boost ne peut pas être jouée sur une carte Renvoi de spatule. Le Renvoi de spatule est une carte réactive spéciale qui ne peut pas être surchargée.",
  },
  {
    question: "Maladresse et cartes objectif",
    answer:
      "Si la carte jouée au hasard par Maladresse est une <strong>carte objectif du Glouton</strong> (Cerises confites, Spirale de caramel, Macarons dorés, Rosace de chantilly, Bonbons gélifiés), elle est <strong>défaussée sans effet</strong>.",
  },
  {
    question: "Que faire si je ne peux pas ou ne veux pas jouer de carte ?",
    answer:
      "<span class='block mb-2'><strong>Si aucune carte de votre main ne peut être jouée :</strong> Défaussez une carte de votre choix.</span><span class='block'><strong>Si vous pouvez jouer au moins une carte :</strong> Vous êtes <strong>obligé(e) de la jouer</strong>, même si cela ne vous arrange pas stratégiquement.</span>",
  },
  {
    question: "Comment distribuer les cartes avec Remixage total ?",
    answer:
      "Après avoir mélangé toutes les cartes des mains et de la défausse :<span class='block mt-2'>• Distribuez <strong>1 carte à la fois</strong> en tournant dans le sens des aiguilles d'une montre</span><span class='block'>• Continuez jusqu'à ce que chaque joueur ait <strong>5 cartes</strong></span><span class='block'>• <strong>S'il n'y a pas assez de cartes</strong> dans la pile, distribuez tout de même jusqu'à épuisement (certains joueurs peuvent avoir moins de 5 cartes)</span>",
  },
];

// Back to top functionality
const showBackToTop = ref(false);

// Card modal functionality
const selectedCard = ref(null);
const showCardModal = ref(false);

// Mobile menu functionality
const isMobileMenuOpen = ref(false);
// Counter mode functionality
const showCounterMode = ref(false);
const playerCount = ref(3); // Nombre de joueurs (3, 4 ou 5)
const counterValue = ref(0);
const thresholdValue = ref(20);
const minThreshold = ref(10);
const maxThreshold = ref(30);
const counterHistory = ref([]);
const showExplosion = ref(false);
const gameOver = ref(false);
const showHistoryModal = ref(false);
const gameStartTime = ref(null);
const gameDuration = ref(null);
const currentTime = ref(Date.now());

// Event system
const currentEvent = ref(null);
const eventDeck = ref([]);
const usedEvents = ref([]);
const turnNumber = ref(0);
const showEventModal = ref(false);
const eventModalPulse = ref(false);
const showGameStartModal = ref(false);
const finalCountdownRevealed = ref(false);
const showCloseConfirmModal = ref(false);
const showEndGameModal = ref(false);

// Game mode selection
const showGameModeModal = ref(false);
const showPlayerCountModal = ref(false);

// AI mode functionality
const showAIMode = ref(false);
const showAIDifficultyModal = ref(false);
const aiTurnNumber = ref(0);
const aiCounterValue = ref(0);
const aiThresholdValue = ref(20);
const aiCounterHistory = ref([]);
const aiGameOver = ref(false);
const aiShowExplosion = ref(false);
const aiGameStartTime = ref(null);
const aiGameDuration = ref(null);
const showAIHistoryModal = ref(false);
const selectedDifficulty = ref(null);
const currentAICard = ref(null);
const showAICardModal = ref(false);

// Timer interval reference for cleanup
let timerInterval = null;

// Computed property for current elapsed time
const elapsedTime = computed(() => {
  if (!gameStartTime.value || gameOver.value) return null;
  const elapsed = Math.max(0, currentTime.value - gameStartTime.value);
  return formatDuration(elapsed);
});

// Computed property for unified history (events + counter changes)
const unifiedHistory = computed(() => {
  const allItems = [...usedEvents.value, ...counterHistory.value];

  // Sort by timestamp (convert to comparable format)
  return allItems.sort((a, b) => {
    const timeA = new Date(`1970-01-01 ${a.timestamp}`);
    const timeB = new Date(`1970-01-01 ${b.timestamp}`);
    return timeA - timeB;
  });
});

// Contact form
const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.pageYOffset > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Get current year
const getCurrentYear = () => {
  return new Date().getFullYear();
};

// Card modal functions
const openCardModal = (cardImage, cardName) => {
  // Use placeholder if image doesn't exist
  const imagePath = cardImage || "/placeholder-card.png";
  selectedCard.value = { image: imagePath, name: cardName };
  showCardModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeCardModal = () => {
  showCardModal.value = false;
  selectedCard.value = null;
  document.body.style.overflow = "auto";
};

// Mobile menu functions
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Counter mode functions
const openCounterMode = () => {
  showCounterMode.value = true;

  // Initialize counter values
  counterValue.value = playerCount.value;
  thresholdValue.value = 20;
  counterHistory.value = [];
  showExplosion.value = false;
  gameOver.value = false;
  gameStartTime.value = null;
  gameDuration.value = null;

  // Initialize event system
  currentEvent.value = null;
  usedEvents.value = [];
  turnNumber.value = 0;
  showEventModal.value = false;
  showGameStartModal.value = true;
  eventModalPulse.value = false;
  finalCountdownRevealed.value = false;
  showCloseConfirmModal.value = false;
  showEndGameModal.value = false;
  initializeEventDeck();

  document.body.style.overflow = "hidden";
  // Timer will start when user clicks "C'est parti!"
};

const closeCounterMode = () => {
  showCounterMode.value = false;
  document.body.style.overflow = "auto";
};

const quitGame = () => {
  // Fermer toutes les modals
  showCounterMode.value = false;
  showEndGameModal.value = false;
  showHistoryModal.value = false;
  showEventModal.value = false;
  showPlayerCountModal.value = false;

  // Remettre à zéro tous les états du jeu
  counterValue.value = playerCount.value;
  thresholdValue.value = 20;
  minThreshold.value = 10;
  maxThreshold.value = 30;
  counterHistory.value = [];
  showExplosion.value = false;
  gameOver.value = false;
  gameStartTime.value = null;
  gameDuration.value = null;

  // Remettre à zéro le système d'événements
  currentEvent.value = null;
  eventDeck.value = [];
  usedEvents.value = [];

  // Restaurer le scroll
  document.body.style.overflow = "auto";
};

const triggerExplosion = () => {
  gameOver.value = true;

  // Calculer la durée de la partie
  if (gameStartTime.value) {
    const duration = Date.now() - gameStartTime.value;
    gameDuration.value = formatDuration(duration);
  }

  // Aller directement à la modale de fin de partie sans écran intermédiaire
  showExplosion.value = false;
};

const formatDuration = (ms) => {
  // Ensure we never have negative time
  const safeDuration = Math.max(0, ms);
  const seconds = Math.floor(safeDuration / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (minutes > 0) {
    return `${minutes}m ${remainingSeconds.toString().padStart(2, "0")}s`;
  }
  return `${remainingSeconds}s`;
};

// Contact form handling
const handleFormSubmit = async (event) => {
  event.preventDefault();
  isSubmitting.value = true;
  submitMessage.value = "";

  try {
    const formData = new FormData(event.target);

    const response = await fetch("https://formspree.io/f/xkgzkgjw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      submitSuccess.value = true;
      submitMessage.value =
        "✅ Message envoyé avec succès ! Nous vous répondrons rapidement.";
      // Reset form
      event.target.reset();
    } else {
      throw new Error("Erreur lors de l'envoi");
    }
  } catch (error) {
    submitSuccess.value = false;
    submitMessage.value =
      "❌ Erreur lors de l'envoi. Veuillez réessayer plus tard.";
  } finally {
    isSubmitting.value = false;
    // Hide message after 5 seconds
    setTimeout(() => {
      submitMessage.value = "";
    }, 5000);
  }
};

const adjustCounter = (delta) => {
  const newValue = Math.max(0, counterValue.value + delta); // Minimum à 0

  counterHistory.value.push({
    action: delta > 0 ? `+${delta}` : `${delta}`,
    oldValue: counterValue.value,
    newValue: newValue,
    timestamp: new Date().toLocaleTimeString(),
    type: "counter",
  });
  counterValue.value = newValue;

  // Check for explosion
  if (counterValue.value >= thresholdValue.value) {
    triggerExplosion();
  }
};

const adjustThreshold = (delta) => {
  const newValue = thresholdValue.value + delta;
  if (newValue >= minThreshold.value && newValue <= maxThreshold.value) {
    const oldValue = thresholdValue.value;
    thresholdValue.value = newValue;

    // Enregistrer dans l'historique
    counterHistory.value.push({
      action: delta > 0 ? `Seuil +${delta}` : `Seuil ${delta}`,
      oldValue: oldValue,
      newValue: newValue,
      timestamp: new Date().toLocaleTimeString(),
      type: "threshold",
    });
  }
};

const getCounterPosition = () => {
  // Position du compteur : 0 au bord gauche, 30 au bord droit
  const maxScale = 30;
  const percentage = Math.min((counterValue.value / maxScale) * 100, 100);

  // 0 = 10% (bord gauche), 30 = 90% (bord droit)
  const minLeft = 10; // Position 0 (%)
  const maxLeft = 90; // Position 30 (%)
  return minLeft + (percentage / 100) * (maxLeft - minLeft);
};

const getThresholdPosition = () => {
  // Position du seuil : même échelle que le compteur
  const maxScale = 30;
  const percentage = Math.min((thresholdValue.value / maxScale) * 100, 100);

  // 0 = 10% (bord gauche), 30 = 90% (bord droit)
  const minLeft = 10; // Position 0 (%)
  const maxLeft = 90; // Position 30 (%)
  return minLeft + (percentage / 100) * (maxLeft - minLeft);
};

// Handle escape key for modal
const handleEscape = (event) => {
  if (event.key === "Escape") {
    if (showCloseConfirmModal.value) {
      cancelCloseGame();
    } else if (showEndGameModal.value) {
      closeEndGameModal();
    } else if (showAIMode.value) {
      closeAIMode();
    } else if (showAIDifficultyModal.value) {
      closeAIDifficultyModal();
    } else if (showPlayerCountModal.value) {
      closePlayerCountModal();
    } else if (showGameModeModal.value) {
      closeGameModeModal();
    } else if (showCounterMode.value) {
      showCloseConfirmModal.value = true; // Show confirmation instead of direct close
    } else if (showCardModal.value) {
      closeCardModal();
    } else if (showEventModal.value) {
      showEventModal.value = false;
    } else if (showGameStartModal.value) {
      closeGameStartModal();
    }
  }
};

// Event management functions
const initializeEventDeck = () => {
  // Get all events except "Minuteur final"
  const normalEvents = events.filter(
    (event) => event.name !== "Minuteur final"
  );
  const finalEvent = events.find((event) => event.name === "Minuteur final");

  // Shuffle normal events and take 9 (to make 10 total with final event)
  const shuffledEvents = [...normalEvents].sort(() => Math.random() - 0.5);
  const selectedNormalEvents = shuffledEvents.slice(0, 9);

  // Create deck with 10 cards total
  const deck = [...selectedNormalEvents];

  // Insert final event at position 7, 8, or 9 (0-indexed) which corresponds to turns 8, 9, or 10
  const finalPositions = [7, 8, 9]; // Positions 8, 9, 10 in 1-indexed terms
  const finalPosition =
    finalPositions[Math.floor(Math.random() * finalPositions.length)];

  console.log(
    `Carte "Minuteur final" placée à la position ${finalPosition} (tour ${
      finalPosition + 1
    })`
  );

  // Insert the final event at the chosen position
  deck.splice(finalPosition, 0, finalEvent);

  eventDeck.value = deck;
};

const drawNextEvent = () => {
  if (eventDeck.value.length === 0 || gameOver.value) return;

  turnNumber.value += 1;
  const drawnEvent = eventDeck.value.shift();
  currentEvent.value = drawnEvent;

  // Add timestamp and turn number to the event for history
  const eventWithTimestamp = {
    ...drawnEvent,
    timestamp: new Date().toLocaleTimeString(),
    turn: turnNumber.value,
    type: "event",
  };

  usedEvents.value.push(eventWithTimestamp);
  showEventModal.value = true;
  eventModalPulse.value = true;

  // Check if the final countdown has been revealed
  if (drawnEvent.name === "Minuteur final") {
    finalCountdownRevealed.value = true;
  }

  // Remove pulse effect after 2 seconds
  setTimeout(() => {
    eventModalPulse.value = false;
  }, 2000);
};

const closeEventModal = () => {
  showEventModal.value = false;
};

const endGame = () => {
  // Stop the timer and calculate final duration
  if (gameStartTime.value && !gameOver.value) {
    const now = Date.now();
    const duration = now - gameStartTime.value;
    gameDuration.value = formatDuration(duration);
    gameOver.value = true;
  }
  showEndGameModal.value = true;
};

const closeEndGameModal = () => {
  showEndGameModal.value = false;
};

const startGame = () => {
  showGameStartModal.value = false;
  // Set both times synchronously to ensure they start together
  const now = Date.now();
  gameStartTime.value = now;
  currentTime.value = now;

  // Automatically trigger the first event
  setTimeout(() => {
    drawNextEvent();
  }, 500); // Small delay to ensure modal is closed
};

const closeGameStartModal = () => {
  showGameStartModal.value = false;
  // Don't start timer when just closing the modal
};

const confirmCloseGame = () => {
  showCloseConfirmModal.value = false;
  closeCounterMode();
};

const cancelCloseGame = () => {
  showCloseConfirmModal.value = false;
};

// Game mode selection functions
const openGameModeSelection = () => {
  showGameModeModal.value = true;
};
const closeGameModeModal = () => {
  showGameModeModal.value = false;
};
const selectCompetitiveMode = () => {
  console.log("selectCompetitiveMode called");
  console.log("showPlayerCountModal BEFORE:", showPlayerCountModal.value);
  closeGameModeModal();
  showPlayerCountModal.value = true;
  console.log("showPlayerCountModal AFTER:", showPlayerCountModal.value);

  // Force une re-render après un court délai pour tester
  setTimeout(() => {
    console.log(
      "showPlayerCountModal after timeout:",
      showPlayerCountModal.value
    );
  }, 100);
};
const selectCooperativeMode = () => {
  closeGameModeModal();
  showAIDifficultyModal.value = true;
};

// Player count selection functions
const selectPlayerCount = (count) => {
  playerCount.value = count;
  closePlayerCountModal();
  openCounterMode();

  // Ajouter l'initialisation dans l'historique APRÈS l'ouverture du mode
  counterHistory.value.push({
    action: "Initialisation compteur",
    oldValue: 0,
    newValue: count,
    timestamp: new Date().toLocaleTimeString(),
    type: "init",
    icon: "🎯",
  });
};

const closePlayerCountModal = () => {
  showPlayerCountModal.value = false;
};

// AI difficulty selection functions
const selectAIDifficulty = (difficulty) => {
  selectedDifficulty.value = difficulty;
  showAIDifficultyModal.value = false;
  openAIMode();
};
const closeAIDifficultyModal = () => {
  showAIDifficultyModal.value = false;
};

// AI mode functions
const openAIMode = () => {
  showAIMode.value = true;
  // Initialize AI mode values
  aiCounterValue.value = 0;
  aiThresholdValue.value = selectedDifficulty.value?.threshold || 20;
  aiCounterHistory.value = [];
  aiTurnNumber.value = 0;
  aiShowExplosion.value = false;
  aiGameOver.value = false;
  aiGameStartTime.value = null;
  aiGameDuration.value = null;
  document.body.style.overflow = "hidden";
};
const closeAIMode = () => {
  showAIMode.value = false;
  document.body.style.overflow = "auto";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("keydown", handleEscape);

  // Start timer interval on client side only
  timerInterval = setInterval(() => {
    currentTime.value = Date.now();
  }, 1000);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleEscape);

  // Clean up timer interval
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

// SEO
useHead({
  title: "Boom Badaboom - Règles du Jeu | Jeu de cartes à rôles cachés",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les règles complètes de Boom Badaboom, un jeu de cartes à rôles cachés mêlant bluff, tension et stratégie pour 1-5 joueurs.",
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
    { property: "og:image", content: "/logo.png" },
    { property: "og:type", content: "website" },
  ],
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "icon", type: "image/png", href: "/logo.png" },
    { rel: "apple-touch-icon", href: "/logo.png" },
    { rel: "shortcut icon", href: "/favicon.ico" },
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
