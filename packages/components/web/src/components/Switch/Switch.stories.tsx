import React from 'react';
import Switch from './Switch';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default {
  title: 'Components/Forms/Switch',
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

export const Default = (args) => <Switch {...args} />;

Default.args = {
  checked: false
};

// ----------------------------------------------------------------

export const Checked = (args) => <Switch {...args} />;

Checked.args = {
  checked: true
};

// ----------------------------------------------------------------

export const Disabled = (args) => <Switch {...args} />;

Disabled.args = {
  disabled: true
};

// ----------------------------------------------------------------

export const Icon = (args) => (
  <Switch {...args} icon={<BookmarkIcon />} checkedIcon={<BookmarkIcon />} />
);

Icon.args = {};
