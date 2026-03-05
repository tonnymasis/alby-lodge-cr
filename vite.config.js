import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Detectar si estamos en GitHub Pages
const isGitHubPages = process.env.GITHUB_REPOSITORY || process.env.GITHUB_ACTIONS

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/alby-lodge-cr/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 3000,
    host: true
  }
})