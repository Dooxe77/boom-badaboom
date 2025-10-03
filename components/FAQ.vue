<template>
  <section id="faq" class="mb-12 relative overflow-hidden rounded-3xl">
    <div class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"></div>
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-8 left-8 text-5xl">❓</div>
      <div class="absolute top-16 right-12 text-3xl">💡</div>
      <div class="absolute bottom-20 left-1/4 text-4xl">🤔</div>
      <div class="absolute bottom-12 right-1/3 text-2xl">💬</div>
    </div>

    <div class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden relative z-10">
      <div class="p-6 sm:p-10">
        <div class="text-center mb-10">
          <h2 class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4">
            Questions Fréquentes
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"></div>
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
              <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <div class="text-white text-sm font-bold">Q</div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold text-gray-800 mb-4 leading-tight">
                  {{ faq.question }}
                </h3>
                <div class="bg-orange-50/70 backdrop-blur-sm rounded-lg p-4 border border-orange-200/50">
                  <p class="text-gray-700 leading-relaxed" v-html="faq.answer"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import faqs from '~/data/faq';
</script>
