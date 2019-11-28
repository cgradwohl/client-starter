/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const Env = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Env({
      path: './.env.development',
    }),
  ],
  devServer: {
    hot: true,
  },
};
