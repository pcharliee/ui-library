// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({ include: ['lib'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'component-library',
      fileName: format => `main.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies
      // external: ['react', 'react-dom'],
      external: ['react', 'react-dom', '@mui/material'],
      output: {
        // Provide global variables to use
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'mui',
        },
      },
    },
  },
});

