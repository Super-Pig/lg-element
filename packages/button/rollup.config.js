import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

module.exports = [{
  input: 'index.js',
  output: [{
    file: 'dist/index.js',
    fromat: 'es'
  }],
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    terser()
  ]
}]