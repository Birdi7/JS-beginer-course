const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: '/src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: []
  },
  plugins: [new ESLintPlugin()]
}
