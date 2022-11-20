import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/Inputs/RadioButton',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: ['medium', 'small'],
      control: { type: 'radio' }
    }
  }
};

// ----------------------------------------------------------------

export const Default = (args) => <RadioButton {...args} />;
Default.args = {
  checked: false,
  color: 'primary',
  disabled: false,
  disableRipple: false,
  onChange: () => {},
  required: false,
  size: 'medium',
  style: {}
};
