
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCdnPlugin = require('webpack-cdn-plugin');

module.exports = {
  mode:'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: './index.html',
      }
    ),
    new WebpackCdnPlugin(
      {
        optimize: true,
        modules: [
          { name: 'axios', var: 'axios', prodUrl: 'https://g.alicdn.com/code/lib/axios/0.21.1/axios.min.js' },
        ]
      }
    )
  ]
}
