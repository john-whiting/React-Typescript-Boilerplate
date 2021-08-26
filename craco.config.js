/* eslint-disable */

const { loaderByName, addBeforeLoader } = require('@craco/craco');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const astroturfLoader = {
        test: /StyledComponents\.tsx$/,
        loader: 'astroturf/loader',
        options: { extension: '.module.scss' },
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
