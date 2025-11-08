import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/my-study-log/",
  plugins: [preact(),tailwindcss(),],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        fallback: '404.html' // これが重要
      }
    }
  }
})
