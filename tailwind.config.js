const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography, forms],
}
