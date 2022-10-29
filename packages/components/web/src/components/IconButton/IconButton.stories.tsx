import React from 'react';
import { IconButton } from './IconButton';
import HomeIcon from '@mui/icons-material/Home';

export default {
  title: 'Components/Buttons/IconButton',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    edge: {
      options: [false, 'end', 'start'],
      control: { type: 'select' }
    }
  }
};

// ----------------------------------------------------------------

export const Default = (args) => (
  <IconButton {...args}>
    <HomeIcon />
  </IconButton>
);
Default.args = {
  color: 'primary',
  size: 'medium',
  edge: false,
  disabled: false,
  disableRipple: false,
  onClick: () => {},
  style: {}
};

// ----------------------------------------------------------------
