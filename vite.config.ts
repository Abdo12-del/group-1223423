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
        'institution_structure.png', 
        'mcd.png', 
        'data_flow_diagram.png', 
        'procedures_diagram.png', 
        'functional_linkage_diagram.png',
        'app_main.jpg',
        'app_reg.jpg',
        'app_reports.jpg'
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
            purpose: 'any'
          },
          {
            src: 'Picture1.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'Picture1.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,json,woff2}'],
        maximumFileSizeToCacheInBytes: 7 * 1024 * 1024, // 7MB لضمان استيعاب كافة المخططات
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 يوم
              },
            },
          },
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));