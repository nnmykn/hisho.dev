// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require('lodash')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.ts', './src/**/*.tsx'],
  plugins: [require('@tailwindcss/container-queries')],
  theme: {
    extend: {
      animation: {
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
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
      keyframes: {
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      spacing: Object.fromEntries(
        _.range(0, 211).map((n) => [n / 2, `${n / 8}rem`])
      ),
    },
    fontFamily: {
      body: ['system-ui'],
    },
    fontSize: Object.fromEntries(
      _.range(10, 81, 1).map((n) => [n, `${n / 16}rem`])
    ),
    lineHeight: Object.fromEntries(
      _.range(100, 201, 5).map((n) => [n / 100, n / 100])
    ),
    maxWidth: {
      none: 'none',
      ...Object.fromEntries(
        _.range(0, 1201, 2).map((n) => [n / 4, `${n / 16}rem`])
      ),
    },
  },
}
