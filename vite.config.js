import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' // Импортируем 'resolve' из 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ВАЖНО: Убедитесь, что свойство base здесь убрано или закомментировано,
  // если вы заливаете игру на основной домен, а не в подпапку.
  // base: '/montage_game/', 

  // --- ДОБАВЬТЕ ЭТОТ БЛОК ---
  build: {
    rollupOptions: {
      input: {
        // Указываем Vite, что наша точка входа теперь game.html
        main: resolve(__dirname, 'game.html'),
      },
    },
  },
})