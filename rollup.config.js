import vue from 'rollup-plugin-vue';
import ts from 'rollup-plugin-typescript2';
import buble from 'rollup-plugin-buble';
import pkg from './package.json';
import { camelCase, upperFirst } from 'lodash';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'esm',
      file: pkg.module,
    },
    {
      format: 'cjs',
      file: pkg.main,
    },
    {
      format: 'iife',
      name: upperFirst(camelCase(pkg.name)),
      file: pkg.unpkg,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    ts({
      typescript: require('typescript'),
      tsconfig: './tsconfig.json',
      clean: true,
    }),
    vue(),
    buble(),
  ],
};
