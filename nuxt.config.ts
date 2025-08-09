// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Modules Nuxt
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

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
        { name: "theme-color", content: "#dc2626" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        { name: "apple-mobile-web-app-title", content: "Boom Badaboom" },
        { name: "msapplication-TileColor", content: "#dc2626" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/logo.png" },
        { rel: "mask-icon", href: "/logo.png", color: "#dc2626" }
      ],
    },
  },

  // Configuration PWA
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20
    },
    manifest: {
      name: 'Boom Badaboom - Jeu de cartes',
      short_name: 'Boom Badaboom',
      description: 'Jeu de cartes à rôles cachés mêlant bluff, tension et stratégie',
      theme_color: '#dc2626',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: '/icon-96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: '/icon-72.png',
          sizes: '72x72',
          type: 'image/png'
        }
      ]
    }
  },
});
