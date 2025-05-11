import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { compression } from 'vite-plugin-compression2'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/]
    })
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    }
  }
})
