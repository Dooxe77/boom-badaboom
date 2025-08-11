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
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "manifest", href: "/manifest.webmanifest" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/icon-180.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/icon-152.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/icon-120.png" },
        { rel: "mask-icon", href: "/logo.png", color: "#dc2626" }
      ],
    },
  },

  // Configuration PWA
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'favicon.png', 'robots.txt', 'icon-*.png'],
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      skipWaiting: true,
      clientsClaim: true,
      cleanupOutdatedCaches: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^(?!\/__|\/_nuxt\/hmr).*/],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365
            }
          }
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365
            }
          }
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cache',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 60 * 60 * 24 * 30
            }
          }
        },
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'pages-cache',
            networkTimeoutSeconds: 3,
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
            }
          }
        }
      ],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20
    },
    devOptions: {
      enabled: process.env.NODE_ENV === 'development',
      type: 'module',
      suppressWarnings: true
    },
    manifest: {
      name: 'Boom Badaboom - Jeu de cartes',
      short_name: 'Boom Badaboom',
      description: 'Jeu de cartes à rôles cachés mêlant bluff, tension et stratégie',
      theme_color: '#dc2626',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait-primary',
      scope: '/',
      start_url: '/',
      lang: 'fr',
      categories: ['games', 'entertainment'],
      display_override: ['window-controls-overlay'],
      icons: [
        {
          src: '/icon-72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: '/icon-96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: '/icon-120.png',
          sizes: '120x120',
          type: 'image/png'
        },
        {
          src: '/icon-144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: '/icon-152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: '/icon-180.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icon-192-maskable.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  },
});
