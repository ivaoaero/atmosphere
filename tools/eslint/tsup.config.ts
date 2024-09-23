import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: false,
  minify: true,
  dts: true,
  format: ['esm'],
});
