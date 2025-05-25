import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  css: {
    postcss: './postcss.config.js', // keep if you use PostCSS config
    modules: false
  }
})
