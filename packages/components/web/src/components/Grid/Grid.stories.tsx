import React from 'react';
import Grid from './Grid';
import Text from '../Text/Text';

export default {
  title: 'Components/Layout/Grid',
  argTypes: {
    direction: {
      options: ['column', 'column-reverse', 'row', 'row-reverse'],
      control: { type: 'select' }
    },
    spacing: {
      options: [0, 0.5, 1, 2, 3, 4, 8, 12],
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
    }
  }
};

// ----------------------------------------------------------------

export const Default = (args) => (
  <Grid container spacing={2}>
    <Grid xs={8}>
      <Text>xs=8</Text>
    </Grid>
    <Grid xs={4}>
      <Text>xs=4</Text>
    </Grid>
    <Grid xs={4}>
      <Text>xs=4</Text>
    </Grid>
    <Grid xs={8}>
      <Text>xs=8</Text>
    </Grid>
  </Grid>
);

Default.args = {
  spacing: 1,
  direction: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
};

// ----------------------------------------------------------------

export const Breakpoints = (args) => (
  <Grid container spacing={2}>
    <Grid xs={6} md={8}>
      <Text>xs=6 md=8</Text>
    </Grid>
    <Grid xs={6} md={4}>
      <Text>xs=6 md=4</Text>
    </Grid>
    <Grid xs={6} md={4}>
      <Text>xs=6 md=4</Text>
    </Grid>
    <Grid xs={6} md={8}>
      <Text>xs=6 md=8</Text>
    </Grid>
  </Grid>
);

Breakpoints.args = {};
