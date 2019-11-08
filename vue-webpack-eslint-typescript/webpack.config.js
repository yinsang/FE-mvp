const { VueLoaderPlugin } = require('vue-loader')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  entry: './src/index.ts',
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
        options: { appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
          // getCustomTransformers: () => ({
          //   before: [tsImportPluginFactory(
          //     {
          //       libraryName: '@mx/vix',
          //       libraryDirectory: '',
          //       style: true
          //     }
          //   )]
          // }),
          compilerOptions: {
            module: 'es2015'
          }
        }
      },
      {
        test: /\.(le|c)ss$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          'style-loader', 'css-loader', 'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
    // new BundleAnalyzerPlugin()
  ]
}
