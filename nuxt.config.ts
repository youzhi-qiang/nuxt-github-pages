// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path')
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production'
        ? '/nuxt-github-pages'  // 去除末尾斜杠
        : '/'
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // nitro: {
  //   output: {
  //     publicDir: path.join(__dirname, 'docs')
  //   }
  // },
  app: {
    baseURL: '/nuxt-github-pages/',
    // buildAssetsDir: 'nuxt_assets'
  },

  modules: [

    "nuxt-icon"
  ],
  css: [
    '~/assets/css/main.css',

  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Vite 配置
  vite: {
    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  },

  // experimental: { payloadExtraction: false }
})