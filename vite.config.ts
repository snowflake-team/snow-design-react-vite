import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import SnowDesignVitePlugin from '@snow-design/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      SnowDesignVitePlugin({
          theme: '@snow-design/snow-theme-dark'
      })
  ],
})
