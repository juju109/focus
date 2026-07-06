import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project page served at https://juju109.github.io/focus/
export default defineConfig({
  base: '/focus/',
  plugins: [react()],
})
