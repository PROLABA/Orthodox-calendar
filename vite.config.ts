import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'The Orthodox calendar',
        short_name: 'The Orthodox calendar',
        icons: [
          {
            src: 'isus.jpg',
            sizes: '192x192',
            type: 'image/jpg',
          },
          {
            src: 'isus.jpg',
            sizes: '256x256',
            type: 'image/jpg',
          },
          {
            src: 'isus.jpg',
            sizes: '384x384',
            type: 'image/jpg',
          },
          {
            src: 'isus.jpg',
            sizes: '512x512',
            type: 'image/jpg',
          },
        ],
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
      },
    }),
  ],
});