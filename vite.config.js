import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Set Content Security Policy headers
    csp: true,
    // Set up CORS headers
    // cors: true,
    // Enable HTTPS for development server (optional)
    // https: true
  },
  build: {
    // Enable file hashing
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 2000,
    // Enable minification and compression
    minify: true,
    brotliSize: false
  }
});
