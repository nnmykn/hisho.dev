import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: path.resolve(process.cwd(), './vitest.setup.ts'),
    exclude: [
      ...configDefaults.exclude,
      path.resolve(process.cwd(), './src/**/*.e2e.spec.ts'),
    ],
  },
})
