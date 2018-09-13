const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  // entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'vue-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader', 'css-loader', 'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
