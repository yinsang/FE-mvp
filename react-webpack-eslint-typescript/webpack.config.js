module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.tsx', 'jsx']
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.less$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader', 'css-loader', 'less-loader'
        ]
      }
    ]
  }
}
