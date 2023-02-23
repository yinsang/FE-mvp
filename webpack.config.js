module.exports = {
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.module\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]-[hash:base64:5]'
              }
            }
          },
          'postcss-loader',

          'sass-loader',
        ]
      },
    ]
  }
}
