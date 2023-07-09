module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:perfectionist/recommended-natural',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      extends: ['plugin:testing-library/react'],
      files: ['**/?(*.)+(component.spec).tsx'],
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'testing-library'],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'import/no-anonymous-default-export': 'off',
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'never', propElementValues: 'always', props: 'always' },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
}
