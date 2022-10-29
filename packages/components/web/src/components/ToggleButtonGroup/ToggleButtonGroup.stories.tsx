import React from 'react';
import { ToggleButtonGroup } from './ToggleButtonGroup';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined
} from '@mui/icons-material';

export default {
  title: 'Components/Buttons/ToggleButtonGroup',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' }
    }
  }
};

// ----------------------------------------------------------------

export const Horizontal = (args) => (
  <ToggleButtonGroup {...args}>
    <ToggleButton value="bold">
      <FormatBold />
    </ToggleButton>
    <ToggleButton value="italic">
      <FormatItalic />
    </ToggleButton>
    <ToggleButton value="underline">
      <FormatUnderlined />
    </ToggleButton>
  </ToggleButtonGroup>
);
Horizontal.args = {
  color: 'primary',
  orientation: 'horizontal',
  size: 'medium',
  exclusive: false,
  onChange: () => {},
  fullWidth: false,
  disabled: false,
  value: 'value',
  style: {}
};

// ----------------------------------------------------------------

export const Vertical = (args) => (
  <ToggleButtonGroup {...args}>
    <ToggleButton value="bold">
      <FormatBold />
    </ToggleButton>
    <ToggleButton value="italic">
      <FormatItalic />
    </ToggleButton>
    <ToggleButton value="underline">
      <FormatUnderlined />
    </ToggleButton>
  </ToggleButtonGroup>
);
Vertical.args = {
  color: 'primary',
  orientation: 'vertical',
  size: 'medium',
  exclusive: true,
  onChange: () => {},
  fullWidth: false,
  disabled: false,
  value: 'value',
  style: {}
};
