module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['testing-library'],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
