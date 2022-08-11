import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePluginRadar} from 'vite-plugin-radar'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginRadar({
      enableDev: false,
      analytics: {
        id: 'G-MCCJK1H53R',
      },
    }),
  react(),
   
], 
})
