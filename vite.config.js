import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/comfyui-mac/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'ComfyUI on Mac — Deep Curriculum for M5 Pro',
        short_name: 'ComfyUI Mac',
        description: 'Build any ComfyUI workflow from scratch on Apple Silicon — image, video, audio, AI avatars, voice cloning, self-clones — all local.',
        theme_color: '#7c3aed',
        background_color: '#0f172a',
        display: 'standalone',
        scope: '/comfyui-mac/',
        start_url: '/comfyui-mac/',
        orientation: 'any',
        categories: ['education', 'productivity']
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff,woff2,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ],
        navigateFallback: '/comfyui-mac/index.html'
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@xyflow')) return 'vendor-flow'
            if (id.includes('recharts') || id.includes('d3')) return 'vendor-charts'
            if (id.includes('framer-motion')) return 'vendor-motion'
            if (id.includes('katex')) return 'vendor-katex'
            if (id.includes('react-router')) return 'vendor-router'
            return 'vendor'
          }
          const subjectMatch = id.match(/subjects\/([\d]+[a-z]?-[^/]+)/)
          if (subjectMatch) return `subject-${subjectMatch[1]}`
          if (id.includes('/src/models/')) return 'models-data'
        }
      }
    }
  }
})
