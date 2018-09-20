const merge = require('webpack-merge')
const webpackBase = require('./webpack.config')
module.exports = merge(webpackBase, {
  mode: 'development',
  output: {
    filename: 'dist/main.js'
  }
})
