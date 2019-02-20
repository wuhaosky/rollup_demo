// rollup.config.js
import json from 'rollup-plugin-json';
const replace = require('rollup-plugin-replace');
import alias from 'rollup-plugin-alias';
import babel from 'rollup-plugin-babel';
const version = require('./package.json').version;
const banner =
  '/*!\n' +
  ' * Vue.js v' + version + '\n' +
  ' * (c) 2014-' + new Date().getFullYear() + ' Evan You\n' +
  ' * Released under the MIT License.\n' +
  ' */';

export default {
    input: 'index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        banner: banner
    },
    plugins: [ 
        json(),
        replace({
            __WEEX_VERSION__: version
        }),
        alias({
            resolve: ['.jsx', '.js', '.json', ''],
            pack: './package.json'
        }),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};