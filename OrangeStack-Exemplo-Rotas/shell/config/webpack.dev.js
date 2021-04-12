const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packgeJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        orange_pipe: 'orange_pipe@http://localhost:8081/remoteEntry.js',
        orange_auth: 'orange_auth@http://localhost:8082/remoteEntry.js'
      },
      shared: packgeJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};

module.exports = merge(commonConfig, devConfig)
