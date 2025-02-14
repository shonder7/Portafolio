import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite el acceso en la red local
    port: 5173, // Puedes cambiar el puerto si lo deseas
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
