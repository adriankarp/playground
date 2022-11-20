import React from 'react';
import Rating from './Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default {
  title: 'Components/Inputs/Rating',
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' }
    }
  }
};

// ----------------------------------------------------------------

export const Default = (args) => <Rating {...args} />;

Default.args = {};
// ----------------------------------------------------------------

export const Custom = (args) => <Rating {...args} />;

Custom.args = {
  max: 10,
  defaultValue: 5
};

// ----------------------------------------------------------------

export const ReadOnly = (args) => <Rating {...args} />;

ReadOnly.args = {
  defaultValue: 3,
  readOnly: true
};

// ----------------------------------------------------------------

export const Precision = (args) => <Rating {...args} />;

Precision.args = {
  defaultValue: 3,
  precision: 0.5
};

// ----------------------------------------------------------------

export const Icon = (args) => <Rating {...args} icon={<FavoriteIcon />} />;

Icon.args = {
  style: {
    '& .MuiRating-iconFilled': {
      color: '#ff6d75'
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47'
    }
  }
};
