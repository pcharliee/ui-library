import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [ dts({ include: ['lib'] }) ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'ui-library',
      format: ['es']
    },
    //optimizeDeps: {
    //  exclude: ['@mui/**']
    //},
    //rollupOptions: {
    //  input: { main: './index.ts' }
    //},
  }
})
