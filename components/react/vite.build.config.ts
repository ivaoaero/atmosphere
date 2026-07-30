import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import analyzer from 'rollup-plugin-analyzer';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      bundleTypes: true,
      tsconfigPath: './tsconfig.build.json',
      exclude: [
        'node_modules/**',
        'dist/**',
        '**/*.stories.tsx',
        './*.config.ts',
      ],
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'atmosphere-react',
      formats: ['es'],
      fileName: 'atmosphere-react',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        sourcemapExcludeSources: false,
      },
      plugins: [analyzer({ stdout: true, limit: 10 })],
    },
    sourcemap: true,
    minify: true,
  },
});
