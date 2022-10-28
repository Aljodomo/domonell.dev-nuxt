/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "p-dark-black": "#181818",
        "p-black": "#1D1D1D",
        "p-gray": "#8D8D8D",
        "p-fade": "#3C3C3D",
        "p-hightlight": "#08FDD8"
      },
      letterSpacing: {
        tightest: '-.08em',
      }
    },
  },
  plugins: [],
}

