import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

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
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
      },
    }),
  ],
});