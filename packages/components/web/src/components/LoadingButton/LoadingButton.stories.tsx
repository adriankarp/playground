import React from 'react';
import { LoadingButton } from './LoadingButton';

export default {
  title: 'Components/Buttons/LoadingButton',
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    loadingPosition: {
      options: ['center', 'start', 'end'],
      control: { type: 'select' }
    }
  }
};

// ----------------------------------------------------------------

export const Default = (args) => <LoadingButton {...args} />;
Default.args = {
  label: 'loading',
  disabled: true,
  loading: true,
  loadingPosition: 'center',
  variant: 'outlined',
  size: 'medium',
  style: {}
};

// ----------------------------------------------------------------
