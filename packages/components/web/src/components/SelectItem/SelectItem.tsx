import React from 'react';
import { default as BaseSelectItem } from '@mui/material/MenuItem';

export const SelectItem = ({ value, label }: Props) => {
  return (
    <BaseSelectItem key={value} value={value}>
      {label}
    </BaseSelectItem>
  );
};

type Props = {
  value: string;
  label: string;
};

export default SelectItem;
