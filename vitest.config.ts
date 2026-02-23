import { fileURLToPath } from 'node:url'
import { defineConfig, configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 1. Configuración de Construcción (Vite)
  // Esto es lo que permite que la web funcione en GitHub Pages
  base: '/Pr5-Gesti-n-de-eventos-y-formularios-en-JS-2025-26/',

  plugins: [vue()],

  // 2. Configuración de Pruebas (Vitest)
  // Se añade dentro del mismo objeto de configuración
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    exclude: [...configDefaults.exclude, 'e2e/**'],
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
})
