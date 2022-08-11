import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRadar from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteRadar({
      enableDev: false,
    analytics: {
      id: 'G-MCCJK1H53R',
    },
  })],
 
})
