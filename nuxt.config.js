/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },

  css: [
    '@/assets/css/app.css',
    '@/assets/css/tailwind.css',
  ],

  plugins: [
    {
      mode: 'client',
      src: '~/plugins/maska.js'
    }
  ],

  modules: [
    '@nuxtjs/harlem',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',
  ],

  googleFonts: {
    families: {
      Poppins: true
    }
  },

  compatibilityDate: '2024-07-12',
})