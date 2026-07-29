import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: false,
  clean: true,
  minify: true,
  dts: true,
  format: ['esm', 'cjs'],
  target: false,
});
