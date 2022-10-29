import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Buttons/ButtonGroup',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
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
  <ButtonGroup {...args}>
    <Button label="First" />
    <Button label="Second" />
    <Button label="Third" />
  </ButtonGroup>
);
Horizontal.args = {
  variant: 'contained',
  color: 'primary',
  orientation: 'horizontal',
  size: 'medium',
  fullWidth: false,
  disabled: false,
  style: {}
};

// ----------------------------------------------------------------

export const Vertical = (args) => (
  <ButtonGroup {...args}>
    <Button label="First" />
    <Button label="Second" />
    <Button label="Third" />
  </ButtonGroup>
);
Vertical.args = {
  variant: 'contained',
  color: 'primary',
  orientation: 'vertical',
  size: 'medium',
  fullWidth: false,
  disabled: false,
  style: {}
};

// ----------------------------------------------------------------

export const FullWidthHorizontal = (args) => (
  <ButtonGroup {...args}>
    <Button label="First" />
    <Button label="Second" />
    <Button label="Third" />
  </ButtonGroup>
);
FullWidthHorizontal.args = {
  variant: 'contained',
  color: 'primary',
  orientation: 'horizontal',
  size: 'medium',
  fullWidth: true,
  disabled: false,
  style: {}
};
// ----------------------------------------------------------------

export const FullWidthVertical = (args) => (
  <ButtonGroup {...args}>
    <Button label="First" />
    <Button label="Second" />
    <Button label="Third" />
  </ButtonGroup>
);
FullWidthVertical.args = {
  variant: 'contained',
  color: 'primary',
  orientation: 'vertical',
  size: 'medium',
  fullWidth: true,
  disabled: false,
  style: {}
};

// ----------------------------------------------------------------

export const Disabled = (args) => (
  <ButtonGroup {...args}>
    <Button label="First" />
    <Button label="Second" />
    <Button label="Third" />
  </ButtonGroup>
);
Disabled.args = {
  variant: 'contained',
  color: 'primary',
  orientation: 'horizontal',
  size: 'medium',
  fullWidth: false,
  disabled: true,
  style: {}
};
