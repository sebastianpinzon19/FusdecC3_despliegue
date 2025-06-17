import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Agrupa las dependencias principales
          // Agrega más manualChunks según sea necesario
        },
      },
    },
    chunkSizeWarningLimit: 2000, // Ajusta este valor según sea necesario
  },
})
