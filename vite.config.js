import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  // Remove external completely unless you have specific reason to exclude something
  css: {
    postcss: './postcss.config.js',
    modules: false
  }
})
