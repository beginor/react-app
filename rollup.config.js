import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: ['./src/main.ts'],
  output: {
    dir: 'dist',
    chunkFileNames: production ? "chunks/[name]-[hash].js" : "chunks/[name].js",
    format: 'es',
    sourcemap: !production
  },
  treeshake: production,
  external: [
    "react", "react/jsx-runtime", "react-dom", "react-router-dom"
  ],
  plugins: [
    typescript({ tsconfig: 'tsconfig.json', sourceMap: !production }),
    css({ output: 'main.css' }),
    alias({}),
    nodeResolve({ mainFields: ['module', 'main'] }),
    commonjs({
      include: []
    }),
    replace({
      preventAssignment: false,
      values: {
        "process.env.NODE_ENV": production ? '"development"' : '"production"'
      }
    }),
    production && terser({
      format: { comments: false }
    })
  ],
  preserveEntrySignatures: false
}
