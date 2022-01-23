const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development', // убирает минификацию
  entry: {
    main: './index.js', // чанки
  },
  output: {
    filename: '[name].[contenthash].js', // что взять, 2 патерка
    path: path.resolve(__dirname, 'dist'), // куда положить
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/i, // для работы сss
        use: ['style-loader', 'css-loader'] // для работы сss
      },
      {
        test: /\.(jpg)$/i,
        type:'asset/resource'
      }
    ]
  },
  
}
