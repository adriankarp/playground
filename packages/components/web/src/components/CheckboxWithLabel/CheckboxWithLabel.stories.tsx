import React from 'react';
import CheckboxWithLabel from './CheckboxWithLabel';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default {
  title: 'Components/Inputs/CheckboxWithLabel',
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

export const Default = (args) => <CheckboxWithLabel {...args} />;

Default.args = {
  label: 'Default',
  checked: false
};

// ----------------------------------------------------------------

export const Checked = (args) => <CheckboxWithLabel {...args} />;

Checked.args = {
  label: 'Checked',
  checked: true
};

// ----------------------------------------------------------------

export const Disabled = (args) => <CheckboxWithLabel {...args} />;

Disabled.args = {
  label: 'Disabled',
  disabled: true
};

// ----------------------------------------------------------------

export const Icon = (args) => (
  <CheckboxWithLabel
    {...args}
    icon={<BookmarkIcon />}
    checkedIcon={<BookmarkIcon />}
  />
);

Icon.args = {
  label: 'Icon'
};
