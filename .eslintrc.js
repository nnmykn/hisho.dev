module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['testing-library'],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/?(*.)+(component.spec).tsx'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
