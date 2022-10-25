const fs = require('fs');
const webpack = require('webpack');

const stories = eval(
  `__tmp=${fs.readFileSync('./.storybook/stories.json').toString()}`
);

module.exports = {
  features: {
    storyStoreV7: true
  },
  typescript: {
    reactDocgen: 'react-docgen'
  },
  core: {
    builder: 'webpack5'
  },
  stories: [...stories.map((s) => `../${s}/**/*.stories.@(js|tsx)`)],
  addons: ['@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  webpackFinal: async (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        process: {
          env: {}
        }
      })
    );

    config.module.rules.push({
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader']
    });

    config.module.rules = config.module.rules.map((rule) => {
      if (
        String(rule.test) ===
        String(
          /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        )
      ) {
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
        };
      }

      return rule;
    });

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  framework: '@storybook/react'
};
