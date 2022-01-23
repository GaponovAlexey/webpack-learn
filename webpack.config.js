const path = require('path')

module.exports = {
  mode: 'development',// убирает минификацию
  entry: {
    main: './src/index.js',// чанки 
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}