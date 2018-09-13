const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use:[
          'style-loader','css-loader', 'less-loader'
        ]
      },
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}