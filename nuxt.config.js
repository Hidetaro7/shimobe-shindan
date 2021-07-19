import Sass from 'sass'
import Fiber from 'fibers'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  mode: 'spa',
  generate: {
    dir: 'docs'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'シモベシンダン | neurona.jp',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'あなたのシモベ度を計ろう、これからもご主人様の生涯に付き従い、しもべ人生を全うしよう。' },
      { property: 'og:url',  content: 'https://shimobe-shindan.neurona.jp' },
      { property: 'og:type',  content: 'website' },
      { property: 'og:title',  content: 'シモベシンダン | neurona.jp' },
      { property: 'og:description',  content: 'あなたのシモベ度を計ろう、これからもご主人様の生涯に付き従い、しもべ人生を全うしよう。' },
      { property: 'og:site_name',  content: 'シモベシンダン' },
      { property: 'og:image',  content: 'https://shimobe-shindan.neurona.jp/ogp.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },
  router: {
    //base: '/shimobe-shindan/'
  },
}
