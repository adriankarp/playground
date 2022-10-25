import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button
};

// ----------------------------------------------------------------

export const Primary = (args) => {
  <Button {...args} />;
};
Primary.args = { label: 'Primary button', onClick: () => {} };
