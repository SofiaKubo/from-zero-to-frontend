const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack'); // Подключение dotenv-webpack

module.exports = (envVars) => {
  const { env } = envVars; // Получаем значение env (например, 'dev')
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig, {
    devServer: {
      allowedHosts: 'all',
    }
  });

  return config;
};