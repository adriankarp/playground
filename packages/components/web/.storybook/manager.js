const { addons } = require(`@storybook/addons`);
addons.setConfig({
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  showToolbar: true,
  sidebar: {
    showRoots: true
  }
});
