/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const getPlugins = (pluginsArgs) => {
  const plugins = Array.isArray(pluginsArgs)
    ? pluginsArgs
    : [pluginsArgs];

  return plugins
    .filter(Boolean)
    .map((name) => require(`./plugins/webpack.${name}.js`));
};

module.exports = ({ environment, plugin }) => {
  const environmentConfig = require(`./webpack.${environment}.js`);

  return webpackMerge(commonConfig, environmentConfig, ...getPlugins(plugin));
};
