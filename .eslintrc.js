module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['testing-library'],
  rules: {
    'react/display-name': 'off',
  },
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/?(*.)+(component.spec).tsx'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
