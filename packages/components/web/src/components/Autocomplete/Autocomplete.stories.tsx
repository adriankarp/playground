import React from 'react';
import Autocomplete from './Autocomplete';

export default {
  title: 'Components/Misc/Autocomplete',
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' }
    }
  }
};

// ----------------------------------------------------------------

export const Default = (args) => <Autocomplete {...args} />;

Default.args = {
  label: 'Default',
  options: ['Option1', 'Option2', 'Option3'],
  autoComplete: true,
  autoHighlight: true,
  autoSelect: false,
  disabled: false,
  fullWidth: false,
  loading: false,
  readOnly: false,
  size: 'medium'
};

// ----------------------------------------------------------------

export const ReadOnly = (args) => <Autocomplete {...args} />;

ReadOnly.args = {
  label: 'Default',
  options: ['Option1', 'Option2', 'Option3'],
  autoComplete: true,
  autoHighlight: true,
  autoSelect: false,
  disabled: false,
  fullWidth: false,
  loading: false,
  readOnly: true,
  size: 'medium'
};

// ----------------------------------------------------------------

export const Disabled = (args) => <Autocomplete {...args} />;

Disabled.args = {
  label: 'Default',
  options: ['Option1', 'Option2', 'Option3'],
  autoComplete: true,
  autoHighlight: true,
  autoSelect: false,
  disabled: true,
  fullWidth: false,
  loading: false,
  readOnly: false,
  size: 'medium'
};

// ----------------------------------------------------------------

export const Loading = (args) => <Autocomplete {...args} />;

Loading.args = {
  label: 'Default',
  options: ['Option1', 'Option2', 'Option3'],
  autoComplete: true,
  autoHighlight: true,
  autoSelect: false,
  disabled: false,
  fullWidth: false,
  loading: true,
  readOnly: false,
  size: 'medium'
};
