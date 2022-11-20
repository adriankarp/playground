import React from 'react';
import Checkbox from './Checkbox';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default {
  title: 'Components/Inputs/Checkbox',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' }
    }
  }
};

// ----------------------------------------------------------------

export const Default = (args) => <Checkbox {...args} />;

Default.args = {
  checked: false
};

// ----------------------------------------------------------------

export const Checked = (args) => <Checkbox {...args} />;

Checked.args = {
  checked: true
};

// ----------------------------------------------------------------

export const Disabled = (args) => <Checkbox {...args} />;

Disabled.args = {
  disabled: true
};

// ----------------------------------------------------------------

export const Icon = (args) => (
  <Checkbox {...args} icon={<BookmarkIcon />} checkedIcon={<BookmarkIcon />} />
);

Icon.args = {};
