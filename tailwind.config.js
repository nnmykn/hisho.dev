/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts', './src/**/*.tsx'],
  plugins: [require('@tailwindcss/container-queries')],
  theme: {
    extend: {
      /**
       * Colors
       * @see https://colorhunt.co/palette/232931393e464ecca3eeeeee
       */
      colors: {
        accent: '#4ECCA3',
        primary: '#232931',
        red: '#dc2626',
        secondary: '#393E46',
        transparent: 'transparent',
        write: '#EEEEEE',
      },
    },
    fontFamily: {
      body: ['system-ui'],
    },
  },
}
