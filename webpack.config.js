const path = require('path')

module.exports = {
  entry: './icons.js',
  output: {
    filename: 'icons.webpack.js',
    path: path.resolve(__dirname, 'dist')
  }
}
