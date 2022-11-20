import React from 'react';
import Rating from './Rating';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default {
  title: 'Components/Forms/Rating',
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

export const Default = (args) => <Rating {...args} />;

Default.args = {
  checked: false
};

// ----------------------------------------------------------------

export const Checked = (args) => <Rating {...args} />;

Checked.args = {
  checked: true
};

// ----------------------------------------------------------------

export const Disabled = (args) => <Rating {...args} />;

Disabled.args = {
  disabled: true
};

// ----------------------------------------------------------------

export const Icon = (args) => (
  <Rating {...args} icon={<BookmarkIcon />} checkedIcon={<BookmarkIcon />} />
);

Icon.args = {};
