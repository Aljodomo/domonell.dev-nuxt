// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    // Tailwind
    css: ["~/assets/css/main.scss"],
    build: {
        // Tailwind
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        // naive-ui
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer'
                ]
                : ['@juggle/resize-observer']
    },
    // naive-ui
    vite: {
        optimizeDeps: {
          include:
            process.env.NODE_ENV === 'development'
              ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
              : []
        }
      }
})
