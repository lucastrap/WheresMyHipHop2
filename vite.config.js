import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    csp: true,
  },
  build: {
    // Générer des assets avec des chemins relatifs (crucial pour Ionos)
    assetsDir: 'assets',
    // Utiliser des chemins relatifs pour les assets
    base: './',
    // Configuration standard pour la production
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 2000,
    minify: true,
    brotliSize: false
  }
});