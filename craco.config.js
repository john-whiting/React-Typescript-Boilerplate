/* eslint-disable */

const {
  getLoader,
  loaderByName,
  addBeforeLoader,
  addAfterLoader,
} = require('@craco/craco');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const astroturfLoader = {
        test: /StyledComponents\.tsx$/,
        loader: 'astroturf/loader',
      };

      addBeforeLoader(
        webpackConfig,
        loaderByName('babel-loader'),
        astroturfLoader
      );

      return webpackConfig;
    },
  },
};
