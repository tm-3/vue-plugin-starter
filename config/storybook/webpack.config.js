const path = require('path');
module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true, // used with ForkTsCheckerWebpackPlugin
          },
        },
      ],
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader',
    },
  );
  config.resolve.extensions.push('.ts', '.tsx', '.vue');
  return config;
};
