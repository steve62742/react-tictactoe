// In webpack.config.js
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        include: __dirname + '/app' ,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]

  },
  output: {
    filename: "bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [

        HTMLWebpackPluginConfig
        ,
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        })

      ]
};