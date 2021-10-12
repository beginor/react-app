import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import esbuild from 'rollup-plugin-esbuild';
import replace from '@rollup/plugin-replace';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

/** @type { import('rollup').RollupOptions } */
export default [
  {
    input: ['./src/main.ts'],
    output: {
      dir: 'dist',
      chunkFileNames: production ? "chunks/[name]-[hash].js" : "chunks/[name].js",
      format: 'es',
      sourcemap: !production
    },
    watch: { buildDelay: 0 },
    treeshake: production,
    external: [
      'tslib', 'bootstrap', '@popperjs/core',
      'react', 'react/jsx-runtime', 'react-dom', 'react-router-dom',
      'react-is', 'react-bootstrap'
    ],
    plugins: [
      esbuild({ tsconfig: 'tsconfig.json', sourceMap: !production, minify: !!production }),
      scss({
        output: 'dist/main.css', sass: require('sass'), sourceMap: !production,
        outputStyle: !production ? 'expanded' : 'compressed'
      }),
      alias({}),
      nodeResolve({ mainFields: ['module', 'main'] }),
      commonjs({
        include: []
      }),
      replace({
        preventAssignment: false,
        values: {
          'process.env.NODE_ENV': production ? '"development"' : '"production"'
        }
      })
    ],
    preserveEntrySignatures: false
  }
]
