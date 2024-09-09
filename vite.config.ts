import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  base: '/alphaafin-website/',
  plugins: [react()],
})
