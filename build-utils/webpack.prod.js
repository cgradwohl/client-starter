/* eslint-disable import/no-extraneous-dependencies */
const Environment = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Environment({
      path: './.env.production',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
