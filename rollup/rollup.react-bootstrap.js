import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "@rollup/plugin-replace";
import esbuild from 'rollup-plugin-esbuild';

/** @type { import('rollup').RollupOptions } */
export default [
  {
    input: 'node_modules/react-bootstrap/esm/index.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react-bootstrap/react-bootstrap.js'
    },
    external: [
      'react', 'object-assign', 'scheduler', 'scheduler/tracing',
      'react/jsx-runtime', 'react-dom', 'react-is'
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          'process.env.NODE_ENV': '"development"'
        }
      })
    ]
  },
  {
    input: 'node_modules/react-bootstrap/esm/index.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react-bootstrap/react-bootstrap.min.js'
    },
    external: [
      'react', 'object-assign', 'scheduler', 'scheduler/tracing',
      'react/jsx-runtime', 'react-dom', 'react-is'
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          'process.env.NODE_ENV': '"production"'
        }
      }),
      esbuild({ minify: true, legalComments: 'none' })
    ]
  }
]
