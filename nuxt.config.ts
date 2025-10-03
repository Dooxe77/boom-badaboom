// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Modules Nuxt
  modules: ["@nuxtjs/tailwindcss"],

  css: ["@/assets/styles/global.css"],
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
        { rel: "mask-icon", href: "/logo.png", color: "#dc2626" },
      ],
    },
  },

  nitro: {
    routeRules: {
      "/": {
        headers: {
          "Cache-Control": "max-age=0, must-revalidate, no-cache, no-store",
        },
      },
      "/**": {
        headers: {
          "Cache-Control": "max-age=3600, must-revalidate",
        },
      },
      "/api/**": {
        headers: {
          "Cache-Control": "max-age=0, no-cache, no-store, must-revalidate",
        },
      },
    },
  },
});
