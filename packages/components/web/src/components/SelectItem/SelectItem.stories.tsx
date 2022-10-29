import React from 'react';
import SelectItem from './SelectItem';

export default {
  title: 'Components/Forms/SelectItem'
};

// ----------------------------------------------------------------

export const Default = (args) => <SelectItem {...args} />;
Default.args = {
  label: 'label',
  value: 'value'
};