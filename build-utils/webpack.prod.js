/* eslint-disable import/no-extraneous-dependencies */
const Env = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Env({
      path: './.env.production',
    }),
  ],
};
