/* global process */

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/2024nodejs_midExamFront_HW4/' : '/',
  // base: '/2024nodejs_midExamFront_HW4/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // localhost 無法上傳圖片
  // server: {
  //   host: '127.0.0.1' // 設定伺服器的主機位址，可以是特定的 IP 位址或 'localhost'/'127.0.0.1'
  // }
})
