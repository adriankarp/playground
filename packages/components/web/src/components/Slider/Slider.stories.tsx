import React from 'react';
import { Slider } from './Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Stack from '@mui/material/Stack';

export default {
  title: 'Components/Inputs/Slider',
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

export const Default = (args) => <Slider {...args} />;
Default.args = {
  color: 'primary',
  disabled: false,
  min: 0,
  max: 100,
  name: 'Slider',
  orientation: 'horizontal',
  size: 'medium',
  track: 'normal',
  style: {}
};

// ----------------------------------------------------------------

export const Secondary = (args) => <Slider {...args} />;
Secondary.args = {
  color: 'secondary',
  disabled: false,
  min: 0,
  max: 100,
  name: 'Slider',
  orientation: 'horizontal',
  size: 'medium',
  track: 'normal',
  style: {}
};

// ----------------------------------------------------------------

export const Disabled = (args) => <Slider {...args} />;
Disabled.args = {
  color: 'primary',
  disabled: true,
  min: 0,
  max: 100,
  name: 'Slider',
  orientation: 'horizontal',
  size: 'medium',
  track: 'normal',
  style: {}
};

// ----------------------------------------------------------------

export const Inverted = (args) => <Slider {...args} />;
Inverted.args = {
  color: 'primary',
  disabled: false,
  min: 0,
  max: 100,
  name: 'Slider',
  orientation: 'horizontal',
  size: 'medium',
  track: 'inverted',
  style: {}
};

// ----------------------------------------------------------------

export const VolumeExample = (args) => (
  <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
    <VolumeDown />
    <Slider {...args} />
    <VolumeUp />
  </Stack>
);
VolumeExample.args = {
  color: 'primary',
  disabled: false,
  name: 'Slider',
  orientation: 'horizontal',
  size: 'medium',
  track: 'normal',
  style: {}
};
