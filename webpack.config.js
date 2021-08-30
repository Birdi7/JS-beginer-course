const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '/src/index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {}
        }
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
