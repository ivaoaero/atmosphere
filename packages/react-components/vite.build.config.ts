import react from '@vitejs/plugin-react';
import path from 'node:path';
import analyzer from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['node_modules', 'dist', 'src/stories'],
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'react-components',
      formats: ['es'],
      fileName: 'react-components',
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        '@carbon/icons-react',
      ],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          '@carbon/icons-react': '@carbon/icons-react',
        },
        sourcemapExcludeSources: false,
      },
      plugins: [analyzer()],
    },
    sourcemap: true,
    minify: false,
  },
});
