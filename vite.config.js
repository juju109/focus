import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served at custom domain https://focus-agents.com/ (root path)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
