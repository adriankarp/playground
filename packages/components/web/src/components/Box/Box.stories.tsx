import React from 'react';
import Box from './Box';

export default {
  title: 'Components/Layout/Box'
};

// ----------------------------------------------------------------

export const Default = (args) => <Box {...args} />;

Default.args = {
  style: {
    display: 'flex',
    backgroundColor: 'primary.main',
    height: 500,
    width: 500
  }
};
