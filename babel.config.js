module.exports = {

  presets: [['@babel/preset-env', {targets: {node: 'current'}}],
  '@babel/preset-react',

  // '@babel/preset-typescript',
],
"plugins": [
["babel-plugin-react-css-modules",
{
  "generateScopedName": "[name]__[local]-[hash:base64:5]",
  // "exclude": "node_modules",
  "handleMissingStyleName": "warn",
  "webpackHotModuleReloading": true,
  "filetypes": {
    ".scss": {
      "syntax": "postcss-scss"
    }
  }
}],
]
  
};