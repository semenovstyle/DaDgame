// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  // ...
  build: {
    rollupOptions: {
      input: {
        // Убедитесь, что здесь указан 'game.html'
        main: resolve(__dirname, 'game.html'), 
      },
    },
  },
})