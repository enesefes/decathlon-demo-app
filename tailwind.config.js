// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          gray: colors.coolGray,
          blue: colors.lightBlue,
          red: colors.rose,
          pink: colors.fuchsia,
        },
      },
    },
    variants: {},
    plugins: [
      require('daisyui'),
    ],

    daisyui: {
      styled: true,
      themes: [
        'light',
      ],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
    },
  }