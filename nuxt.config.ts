// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Modules Nuxt
  modules: ["@nuxtjs/tailwindcss"],

  // Configuration CSS
  css: [
    // Tailwind est géré par le module @nuxtjs/tailwindcss
  ],

  // Configuration du head pour le SEO
  app: {
    head: {
      title: "Boom Badaboom - Règles du Jeu",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Découvrez les règles complètes de Boom Badaboom, un jeu de cartes à rôles cachés mêlant bluff, tension et stratégie.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
