import React from 'react';
import SwitchWithLabel from './SwitchWithLabel';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default {
  title: 'Components/Inputs/SwitchWithLabel',
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

export const Default = (args) => <SwitchWithLabel {...args} />;

Default.args = {
  label: 'Default',
  checked: false
};

// ----------------------------------------------------------------

export const Checked = (args) => <SwitchWithLabel {...args} />;

Checked.args = {
  label: 'Checked',
  checked: true
};

// ----------------------------------------------------------------

export const Disabled = (args) => <SwitchWithLabel {...args} />;

Disabled.args = {
  label: 'Disabled',
  disabled: true
};

// ----------------------------------------------------------------

export const Icon = (args) => (
  <SwitchWithLabel
    {...args}
    icon={<BookmarkIcon />}
    checkedIcon={<BookmarkIcon />}
  />
);

Icon.args = {
  label: 'Icon'
};
