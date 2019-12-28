const Encore = require('@symfony/webpack-encore');

const outputDirectory = Encore.isProduction()
  ? 'dist'
  : 'build'

Encore
  // directory where compiled assets will be stored
  .setOutputPath(outputDirectory)
  .setPublicPath('/' + outputDirectory)
  .addEntry('icons.encore', './icons.js')
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

module.exports = Encore.getWebpackConfig()
