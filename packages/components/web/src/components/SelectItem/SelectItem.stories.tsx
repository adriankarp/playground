import React from 'react';
import SelectItem from './SelectItem';

export default {
  title: 'Components/Forms/SelectItem'
};

// ----------------------------------------------------------------

export const Filled = (args) => <SelectItem {...args} />;
Filled.args = {
  label: 'label',
  value: 'value'
};
