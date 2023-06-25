module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:perfectionist/recommended-natural',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      extends: ['plugin:testing-library/react'],
      files: ['**/?(*.)+(component.spec).tsx'],
    },
  ],
  plugins: ['testing-library'],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'react/display-name': 'off',
  },
}
