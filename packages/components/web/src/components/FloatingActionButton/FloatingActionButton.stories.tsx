import React from 'react';
import { FloatingActionButton } from './FloatingActionButton';
import AddIcon from '@mui/icons-material/Add';

export default {
  title: 'Components/Inputs/FloatingActionButton',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' }
    }
  }
};

// ----------------------------------------------------------------

export const Default = (args) => <FloatingActionButton {...args} />;
Default.args = {
  icon: <AddIcon />,
  color: 'primary',
  size: 'medium',
  onClick: () => {},
  disabled: false,
  style: {}
};

// ----------------------------------------------------------------

export const Label = (args) => <FloatingActionButton {...args} />;
Label.args = {
  icon: <AddIcon />,
  label: 'With label',
  color: 'primary',
  size: 'medium',
  onClick: () => {},
  disabled: false,
  style: {}
};
