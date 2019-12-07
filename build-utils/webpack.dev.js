/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const Environment = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Environment({
      path: './.env.development',
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
};
