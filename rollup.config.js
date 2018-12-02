import replace from 'rollup-plugin-replace';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

const testEnv = process.env.TEST_ENV;

const input = './modules/index.js';
const name = 'valueEqual';

const external = id => !id.startsWith('.') && !id.startsWith('/');

const config = [];

if (!testEnv || testEnv === 'cjs') {
  config.push(
    {
      input,
      output: { file: `cjs/${pkg.name}.js`, format: 'cjs' },
      external,
      plugins: [
        replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
      ]
    },
    {
      input,
      output: { file: `cjs/${pkg.name}.min.js`, format: 'cjs' },
      external,
      plugins: [
        replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        uglify()
      ]
    }
  );
}

if (!testEnv) {
  config.push({
    input,
    output: { file: `esm/${pkg.name}.js`, format: 'esm' },
    external,
    plugins: [sizeSnapshot()]
  });
}

if (!testEnv || testEnv === 'umd') {
  config.push(
    {
      input,
      output: { file: `umd/${pkg.name}.js`, format: 'umd', name },
      plugins: [
        replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        sizeSnapshot()
      ]
    },

    {
      input,
      output: { file: `umd/${pkg.name}.min.js`, format: 'umd', name },
      plugins: [
        replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        sizeSnapshot(),
        uglify()
      ]
    }
  );
}

export default config;
