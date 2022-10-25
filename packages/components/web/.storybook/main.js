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
  stories: ['./src/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  framework: '@storybook/react'
};
