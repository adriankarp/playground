import React from 'react';
import { TextInput } from './TextInput';

export default {
  title: 'Components/Inputs/TextInput',
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'standard'],
      control: { type: 'radio' }
    },
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' }
    },
    type: {
      options: ['text', 'password', 'email', 'tel', 'number'],
      control: { type: 'select' }
    }
  }
};

// ----------------------------------------------------------------

export const Filled = (args) => <TextInput {...args} />;
Filled.args = {
  label: 'input',
  placeholder: 'placeholder',
  name: 'name',
  variant: 'filled',
  size: 'medium',
  color: 'primary',
  required: false,
  helperText: 'helper text',
  type: 'text',
  disabled: false,
  error: false,
  onChange: () => {},
  fullWidth: false,
  maxRows: 10,
  minRows: 0,
  style: {}
};

// ----------------------------------------------------------------

export const Outlined = (args) => <TextInput {...args} />;
Outlined.args = {
  label: 'input',
  placeholder: 'placeholder',
  name: 'name',
  variant: 'outlined',
  size: 'medium',
  color: 'primary',
  required: false,
  helperText: 'helper text',
  type: 'text',
  disabled: false,
  error: false,
  onChange: () => {},
  fullWidth: false,
  maxRows: 10,
  minRows: 0,
  style: {}
};

// ----------------------------------------------------------------

export const Standard = (args) => <TextInput {...args} />;
Standard.args = {
  label: 'input',
  placeholder: 'placeholder',
  name: 'name',
  variant: 'standard',
  size: 'medium',
  color: 'primary',
  required: false,
  helperText: 'helper text',
  type: 'text',
  disabled: false,
  error: false,
  onChange: () => {},
  fullWidth: false,
  maxRows: 10,
  minRows: 0,
  style: {}
};
