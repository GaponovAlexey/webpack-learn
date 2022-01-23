const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // убирает минификацию
  entry: {
    main: './src/index.js', // чанки
  },
  output: {
    filename: '[name].bundle.js', // что взять
    path: path.resolve(__dirname, 'dist'), // куда положить
  },
  plugins: [new htmlWebpackPlugin()],
}
