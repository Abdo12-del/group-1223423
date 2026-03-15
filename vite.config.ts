import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      external: ['workbox-window']
    }
  },
  plugins: [
    dyadComponentTagger(), 
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        'favicon.ico', 
        'robots.txt', 
        'Picture1.png', 
        'هيكل المؤسسة.png', 
        'mcd.png', 
        'مخطط تدفق المعلومات.png', 
        'مخطط الأجائات.png', 
        'مخطط الأرتباط الوضيفي.png',
        'WhatsApp Image 2026-03-15 at 9.30.47 AM.jpeg',
        'WhatsApp Image 2026-03-15 at 9.30.49 AM.jpeg',
        'WhatsApp Image 2026-03-15 at 9.30.49 AM (1).jpeg'
      ],
      manifest: {
        name: 'نظام تسيير الأمانة',
        short_name: 'تسيير الأمانة',
        description: 'نظام معلوماتي لمتابعة غيابات المتربصين - عرض مذكرة التخرج',
        theme_color: '#1d4ed8',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'landscape',
        dir: 'rtl',
        lang: 'ar',
        icons: [
          {
            src: 'Picture1.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'Picture1.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        // تضمين كافة أنواع الملفات في التخزين المؤقت المسبق
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,json,woff2}'],
        // زيادة الحد الأقصى لحجم الملف المسموح بتخزينه (5 ميجابايت) لضمان تخزين الصور عالية الجودة
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));