const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // убирает минификацию
  entry: {
    main: './src/index.js', // чанки
  },
  output: {
    filename: '[name].[contenthash].js', // что взять, 2 патерка
    path: path.resolve(__dirname, 'dist'), // куда положить
  },
  plugins: [new htmlWebpackPlugin({
    title: 'webpack-learn'
  })],
}
