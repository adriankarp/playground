import React from 'react';
import Select from './Select';
import SelectItem from '../SelectItem/SelectItem';

export default {
  title: 'Components/Inputs/Select',
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

export const Filled = (args) => (
  <Select {...args}>
    <SelectItem value="value1" label="label1" />
    <SelectItem value="value2" label="label2" />
  </Select>
);
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

export const Outlined = (args) => (
  <Select {...args}>
    <SelectItem value="value1" label="label1" />
    <SelectItem value="value2" label="label2" />
  </Select>
);
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

export const Standard = (args) => (
  <Select {...args}>
    <SelectItem value="value1" label="label1" />
    <SelectItem value="value2" label="label2" />
  </Select>
);
Standard.args = {
  label: 'input',
  variant: 'standard',
  size: 'medium',
  color: 'primary',
  required: false,
  helperText: 'helper text',
  disabled: false,
  error: false,
  onChange: () => {},
  style: {}
};
