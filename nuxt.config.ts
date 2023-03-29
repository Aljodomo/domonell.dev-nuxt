// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // dom not loaded on mounted https://github.com/nuxt/framework/issues/3587
    app: {
        pageTransition: true,
        layoutTransition: true,
    },
    css: [
        '~/assets/css/main.scss',
    ],
    // Tailwind
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
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
