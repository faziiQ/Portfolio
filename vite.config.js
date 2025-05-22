import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    build: {
    rollupOptions: {
      external: [
        'react-icons/md',
        'react-icons/im',
         'react-icons/fa'  

      ]
    }
  },
   optimizeDeps: {
    include: ['react-icons/md', 'react-icons/im']
  }
})


