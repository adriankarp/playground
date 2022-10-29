import React from 'react';
import { Text } from './Text';

export default {
  title: 'Components/Text'
};

// ----------------------------------------------------------------

export const Primary = (
  args: JSX.IntrinsicAttributes & {
    label: string;
    onClick?: (() => void) | undefined;
  }
) => <Text {...args} />;
Primary.args = { label: 'Primary Text' };
