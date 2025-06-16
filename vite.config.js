// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-multifunction-portfolio/', // 👈 必須和 GitHub repo 名稱相同！
  plugins: [react()],
})
