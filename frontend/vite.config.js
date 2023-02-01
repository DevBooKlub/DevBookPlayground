import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/uploads": "http://localhost:5555",
      "/api": {
        target: "http://localhost:5555",
        changeOrigin: true,
      },
    },
  },
})
