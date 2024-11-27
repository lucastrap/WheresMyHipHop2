import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // Define an alias for the assets directory
      '@assets': path.resolve(__dirname, './assets')
    }
  },
  server: {
    // Set Content Security Policy headers
    csp: true,
    // Set up CORS headers
    //cors: true,
    // Enable HTTPS for development server (optional)
    //https: true
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

