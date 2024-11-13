// This file is used to build the library
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/install.ts',
      name: 'NinjaNirmouNavbars',
      fileName: (format) => `ninjanirmou-navbar.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
})
