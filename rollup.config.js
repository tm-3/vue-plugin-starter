import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import ts from 'rollup-plugin-typescript2';
import pkg from './package.json';
// import { camelCase, upperFirst } from 'lodash';

const production = !process.env.ROLLUP_WATCH;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

let config = {
  input: 'src/index.ts',
  output: [
    {
      format: 'esm',
      file: 'dist/' + pkg.name + '.esm.js',
    },
    // {
    //   format: 'cjs',
    //   file: 'dist/' + pkg.name + '.cjs.js',
    // },
    // {
    //   format: 'iife',
    //   file: 'dist/' + pkg.name + '.min.js',
    //   name: upperFirst(camelCase(pkg.name)),
    // },
    // {
    //   format: 'umd',
    //   name: upperFirst(camelCase(pkg.name)),
    //   file: 'dist/' + pkg.name + '.umd.js',
    // },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve({
      extensions,
    }),
    ts({
      typescript: require('typescript'),

      clean: true,
      objectHashIgnoreUnknownHack: true,
    }),
    // babel({
    //   extensions,
    //   runtimeHelpers: true,
    //   include: ['src/**/*'],
    //   exclude: 'node_modules/**',
    // }),
    commonjs({
      include: '**/node_modules/**',
      namedExports: {},
    }),
    vue({
      defaultLang: { script: 'ts' },
    }),
  ],
};

if (production) {
  config.output.forEach(key => {
    key.sourcemap = false;
  });
  // config.plugins.push(uglify());
}

export default config;
