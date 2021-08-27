import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  output: [],
  plugins: [
    babel({
      exclude: 'node_modules/*',
    }),
  ],
}
