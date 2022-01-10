import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "@rollup/plugin-replace";
import esbuild from 'rollup-plugin-esbuild';

/** @type {import('rollup').RollupOptions} */
const dev = {
  input: './rollup/react-router-dom.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/react/react-router-dom.js'
  },
  external: ['react', 'react-is', 'object-assign', 'scheduler', 'scheduler/tracing'],
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": '"development"'
      }
    })
  ]
};
/** @type {import('rollup').RollupOptions} */
const prod = {
  input: './rollup/react-router-dom.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/react/react-router-dom.min.js'
  },
  external: ['react', 'react-is', 'object-assign', 'scheduler', 'scheduler/tracing'],
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": '"production"'
      }
    }),
    esbuild({ minify: true, legalComments: 'none' })
  ]
};
export default [dev, prod]
