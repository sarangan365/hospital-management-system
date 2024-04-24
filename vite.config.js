import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Alias for your 'src' directory
      'Components': '/src/components', // Alias for a 'components' subdirectory
      'Pages': '/src/pages', // Alias for a 'pages' subdirectory
      // Add more aliases as needed
    }
  }
});
