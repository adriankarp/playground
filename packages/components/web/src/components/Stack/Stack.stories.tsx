import React from 'react';
import Stack from './Stack';
import Box from '../Box/Box';

export default {
  title: 'Components/Layout/Stack',
  argTypes: {
    direction: {
      options: ['column', 'column-reverse', 'row', 'row-reverse'],
      control: { type: 'select' }
    },
    alignItems: {
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      control: { type: 'select' }
    },
    justifyContent: {
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly'
      ],
      control: { type: 'select' }
    },
    spacing: {
      options: [0, 0.5, 1, 2, 3, 4, 8, 12],
      control: { type: 'select' }
    }
  }
};

// ----------------------------------------------------------------

export const Default = (args) => (
  <Stack {...args} alignItems={'flex-end'}>
    <Box style={{ backgroundColor: '#f12', width: 100, height: 100 }} />
    <Box style={{ backgroundColor: '#f99', width: 100, height: 100 }} />
    <Box style={{ backgroundColor: '#f66', width: 100, height: 100 }} />
  </Stack>
);

Default.args = {
  style: {
    border: '1px solid black'
  },
  spacing: 1,
  direction: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
};
