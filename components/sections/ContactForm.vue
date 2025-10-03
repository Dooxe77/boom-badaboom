<template>
  <section id="contact" class="mb-12 relative overflow-hidden rounded-3xl">
    <div class="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/30 to-red-50/30"></div>
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-8 left-8 text-5xl">📧</div>
      <div class="absolute top-16 right-12 text-3xl">💌</div>
      <div class="absolute bottom-20 left-1/4 text-4xl">📝</div>
      <div class="absolute bottom-12 right-1/3 text-2xl">✉️</div>
    </div>

    <div class="bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50 rounded-3xl shadow-lg border border-orange-100/50 backdrop-blur-sm overflow-hidden relative z-10">
      <div class="p-6 sm:p-10">
        <div class="text-center mb-10">
          <h2 class="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-4">
            Contact
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"></div>
          <p class="text-gray-600 text-lg font-medium">
            Une question sur le jeu ? Une suggestion ? Envoyez-nous un message !
          </p>
        </div>

        <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-orange-200/50">
          <form
            method="POST"
            action="https://formspree.io/f/xkgzkgjw"
            class="space-y-6"
            @submit="handleFormSubmit"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Prénom -->
              <div>
                <label for="prenom" class="block text-sm font-medium text-gray-700 mb-2">
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
                <label for="nom" class="block text-sm font-medium text-gray-700 mb-2">
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
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
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
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
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
              :class="submitSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
            >
              {{ submitMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const isSubmitting = ref(false);
const submitMessage = ref("");
const submitSuccess = ref(false);

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
      submitMessage.value = "✅ Message envoyé avec succès ! Nous vous répondrons rapidement.";
      // Reset form
      event.target.reset();
    } else {
      throw new Error("Erreur lors de l'envoi");
    }
  } catch (error) {
    submitSuccess.value = false;
    submitMessage.value = "❌ Erreur lors de l'envoi. Veuillez réessayer plus tard.";
  } finally {
    isSubmitting.value = false;
    // Hide message after 5 seconds
    setTimeout(() => {
      submitMessage.value = "";
    }, 5000);
  }
};
</script>
