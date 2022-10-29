import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Inputs/Button',
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' }
    },
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

export const Contained = (args) => <Button {...args} />;
Contained.args = {
  label: 'Contained button',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  href: '',
  onClick: () => {},
  startIcon: null,
  endIcon: null,
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  style: {}
};

// ----------------------------------------------------------------

export const Outlined = (args) => <Button {...args} />;
Outlined.args = {
  label: 'Outlined button',
  variant: 'outlined',
  color: 'primary',
  size: 'medium',
  href: '',
  onClick: () => console.log('click'),
  startIcon: null,
  endIcon: null,
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  style: {}
};

// ----------------------------------------------------------------

export const Text = (args) => <Button {...args} />;
Text.args = {
  label: 'Text button',
  variant: 'text',
  color: 'primary',
  size: 'medium',
  href: '',
  onClick: () => console.log('click'),
  startIcon: null,
  endIcon: null,
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  style: {}
};

// ----------------------------------------------------------------

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  label: 'Primary button',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  href: '',
  onClick: () => console.log('click'),
  startIcon: null,
  endIcon: null,
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  style: {}
};

// ----------------------------------------------------------------

export const Secondary = (args) => <Button {...args} />;
Secondary.args = {
  label: 'Secondary button',
  variant: 'contained',
  color: 'secondary',
  size: 'medium',
  href: '',
  onClick: () => console.log('click'),
  startIcon: null,
  endIcon: null,
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  style: {}
};

// ----------------------------------------------------------------

export const Warning = (args) => <Button {...args} />;
Warning.args = {
  label: 'Warning button',
  variant: 'contained',
  color: 'warning',
  size: 'medium',
  href: '',
  onClick: () => console.log('click'),
  startIcon: null,
  endIcon: null,
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  style: {}
};

// ----------------------------------------------------------------

export const Error = (args) => <Button {...args} />;
Error.args = {
  label: 'Error button',
  variant: 'contained',
  color: 'error',
  size: 'medium',
  href: '',
  onClick: () => console.log('click'),
  startIcon: null,
  endIcon: null,
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  style: {}
};

// ----------------------------------------------------------------

export const Info = (args) => <Button {...args} />;
Info.args = {
  label: 'Info button',
  variant: 'contained',
  color: 'info',
  size: 'medium',
  href: '',
  onClick: () => console.log('click'),
  startIcon: null,
  endIcon: null,
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  style: {}
};

// ----------------------------------------------------------------

export const Success = (args) => <Button {...args} />;
Success.args = {
  label: 'Success button',
  variant: 'contained',
  color: 'success',
  size: 'medium',
  href: '',
  onClick: () => console.log('click'),
  startIcon: null,
  endIcon: null,
  disabled: false,
  disableElevation: false,
  disableRipple: false,
  style: {}
};

// ----------------------------------------------------------------

export const Disabled = (args) => <Button {...args} />;
Disabled.args = {
  label: 'Disabled button',
  variant: 'contained',
  color: 'success',
  size: 'medium',
  href: '',
  onClick: () => console.log('click'),
  startIcon: null,
  endIcon: null,
  disabled: true,
  disableElevation: false,
  disableRipple: false,
  style: {}
};
