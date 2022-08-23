import { createOptions, esbuild } from './scripts/esbuild-helper.mjs';

const options = createOptions(
  [
    './src/main.tsx'
  ],
  './dist/'
);
esbuild(options);
