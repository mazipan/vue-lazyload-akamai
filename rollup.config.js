import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const license = require('rollup-plugin-license')

export default {
  input: './vue-lazyload-akamai.js',
  output: {
    name: 'VueLazyloadAkamai',
    file: 'dist/vue-lazyload-akamai.min.js',
    format: 'umd'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      externalHelpers: true,
      runtimeHelpers: true
    }),
    uglify(),
    license({
      banner: `vue-lazyload-akamai v<%= pkg.version %>`,
    })
  ]
}
