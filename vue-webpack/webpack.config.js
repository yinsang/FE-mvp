module.exports = {
  resolve:{
    extensions:['.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'vue-loader'
      }
    ]
  }
}