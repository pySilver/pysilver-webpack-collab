const webpack = require('webpack')
const path = require('path')

const outputDirectory = process.env.OUT

module.exports = {
  entry: './icons.js',
  output: {
    filename: 'icons.webpack.js',
    path: path.resolve(__dirname, outputDirectory)
  }
}
