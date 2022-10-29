import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button'
};

// ----------------------------------------------------------------

export const Primary = (
  args: JSX.IntrinsicAttributes & {
    label: string;
    onClick?: (() => void) | undefined;
  }
) => <Button {...args} />;
Primary.args = { label: 'Primary button' };
