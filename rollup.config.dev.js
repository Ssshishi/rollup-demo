import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import alias from '@rollup/plugin-alias'

const path = require('path')
const resolveDir = (dir) => path.join(__dirname, dir)

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/index.esm.js', // package.json 中 "module": "dist/index.esm.js"
      format: 'esm', // es module 形式的包， 用来import 导入， 可以tree shaking
      sourcemap: false,
    },
    {
      file: 'dist/index.cjs.js', // package.json 中 "main": "dist/index.cjs.js",
      format: 'cjs', // commonjs 形式的包， require 导入
      sourcemap: false,
    },
    {
      file: 'dist/index.iife.js',
      name: 'iife',
      format: 'iife', // iife 一个自动执行的功能，适合作为<script>标签
      sourcemap: false,
    },
    {
      file: 'dist/index.umd.js',
      name: 'GLWidget',
      format: 'umd', // umd 兼容形式的包， 可以直接应用于网页 script
      sourcemap: false,
    },
  ],
  plugins: [
    postcss(), //编译css
    resolve(), //rollup-plugin-node-resolve 插件允许我们加载第三方模块
    commonjs(), //@rollup/plugin-commons 插件将它们转换为ES6版本
    typescript(),
    terser(), //转译es6+语法 的 解析器，mangler和压缩器工具包       uglify-js只能翻译es5语法
    babel({
      exclude: 'node_modules/*',
    }),
    alias({
      entries: [{ find: '@', replacement: resolveDir('src') }],
    }),
    livereload(),
    serve({
      open: true,
      port: 3000,
      contentBase: '',
    }),
  ],
  external: ['loadsh'], //配置external 不打包 loadsh 第三方包内容， 但是需要外部引入loadsh
}
