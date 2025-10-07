// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/**/*.{vue,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#ff6b6b",
          600: "#e55555",
        },
      },
      spacing: {
        '18': '4.5rem',
      },
      boxShadow: {
        '3xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 30px rgba(0, 0, 0, 0.15)',
      },
      borderWidth: {
        '3': '6px',
        '5': '8px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.cursor-zoom-in': {
          cursor: 'zoom-in',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.token-glow-blue': {
          filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.7))',
        },
        '.token-glow-yellow': {
          filter: 'drop-shadow(0 0 18px rgba(234, 179, 8, 0.8))',
        },
        '.token-glow-red': {
          filter: 'drop-shadow(0 0 25px rgba(239, 68, 68, 0.9))',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};
