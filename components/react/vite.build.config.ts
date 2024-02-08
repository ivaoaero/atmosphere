import path from 'node:path';

import react from '@vitejs/plugin-react';
import analyzer from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      exclude: [
        'node_modules/**',
        'dist/**',
        '**/*.stories.tsx',
        './*.config.ts',
      ],
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'atmosphere-react',
      formats: ['es'],
      fileName: 'atmosphere-react',
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
      plugins: [analyzer({ stdout: true })],
    },
    sourcemap: true,
    minify: true,
  },
});
