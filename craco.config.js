/* eslint-disable */

const { loaderByName, getLoader } = require('@craco/craco');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const { isFound: foundBabel, match: babelLoaderOld } = getLoader(
        webpackConfig,
        loaderByName('babel-loader')
      );

      if (!foundBabel) {
        return webpackConfig;
      }

      const babelLoader = {
        loader: babelLoaderOld.loader.loader,
        options: babelLoaderOld.loader.options,
      };

      const astroturfLoader = {
        loader: require.resolve('astroturf/loader'),
        options: {
          extension: '.module.scss',
        },
      };

      babelLoaderOld.loader.use = [babelLoader, astroturfLoader];

      delete babelLoaderOld.loader.loader;
      delete babelLoaderOld.loader.options;

      return webpackConfig;
    },
  },
};
