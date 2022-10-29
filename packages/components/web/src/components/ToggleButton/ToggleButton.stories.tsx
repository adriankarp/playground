import React from 'react';
import { ToggleButton } from './ToggleButton';
import { FormatBold } from '@mui/icons-material';

export default {
  title: 'Components/Inputs/ToggleButton',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    }
  }
};

// ----------------------------------------------------------------

export const Small = (args) => (
  <ToggleButton {...args}>
    <FormatBold />
  </ToggleButton>
);
Small.args = {
  color: 'primary',
  size: 'small',
  fullWidth: false,
  disabled: false,
  disableRipple: false,
  onChange: () => {},
  onClick: () => {},
  selected: true,
  value: 'value',
  style: {}
};

// ----------------------------------------------------------------

export const Medium = (args) => (
  <ToggleButton {...args}>
    <FormatBold />
  </ToggleButton>
);
Medium.args = {
  color: 'primary',
  size: 'medium',
  fullWidth: false,
  disabled: false,
  disableRipple: false,
  onChange: () => {},
  onClick: () => {},
  selected: true,
  value: 'value',
  style: {}
};

// ----------------------------------------------------------------

export const Large = (args) => (
  <ToggleButton {...args}>
    <FormatBold />
  </ToggleButton>
);
Large.args = {
  color: 'primary',
  size: 'large',
  fullWidth: false,
  disabled: false,
  disableRipple: false,
  onChange: () => {},
  onClick: () => {},
  selected: true,
  value: 'value',
  style: {}
};
