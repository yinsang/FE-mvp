const merge = require('webpack-merge')
const webpackBase = require('./webpack.config')
const path = require('path');
  
module.exports = merge(webpackBase, {
  mode:'development',
  output:{
    filename: 'dist/main.js',
  }
})