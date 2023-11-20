import type { Config } from 'tailwindcss'

import containerQueries from '@tailwindcss/container-queries'
import { range } from 'lodash'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.ts', './src/**/*.tsx'],
  plugins: [
    containerQueries.handler,
    /**
     * @see https://tailwindcss.com/docs/plugins#static-variants
     */
    plugin(({ addComponents, addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus']),
        addVariant('group-hocus', [
          ':merge(.group):hover &',
          ':merge(.group):focus &',
        ]),
        addComponents({
          '.wrapper': {
            '--gap': '20px',
            marginInline: 'auto',
            maxWidth: 'calc(600px + var(--gap) * 2)',
            paddingInline: 'var(--gap)',
            width: '100%',
          },
        })
    }),
  ],
  theme: {
    extend: {
      animation: {
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      colors: {
        accent: '#4ECCA3',
        'error/red': '#DC1010',
        primary: '#232931',
        red: '#dc2626',
        secondary: '#393E46',
        transparent: 'transparent',
        write: '#EEEEEE',
      },
      keyframes: {
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      spacing: {
        inherit: 'inherit',
        ...Object.fromEntries(range(0, 211).map((n) => [n / 2, `${n / 8}rem`])),
      },
    },
    fontFamily: {
      body: ['system-ui'],
    },
    fontSize: Object.fromEntries(
      range(10, 81, 1).map((n) => [n, `${n / 16}rem`])
    ),
    lineHeight: Object.fromEntries(
      range(100, 201, 5).map((n) => [n / 100, String(n / 100)])
    ),
    maxWidth: {
      none: 'none',
      ...Object.fromEntries(
        range(0, 1201, 2).map((n) => [n / 4, `${n / 16}rem`])
      ),
    },
  },
} satisfies Config
