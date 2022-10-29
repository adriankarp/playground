import React from 'react';
import { default as BaseText } from '@mui/material/Typography';

export const Text = ({ onClick, label }: Props) => {
  return <BaseText onClick={onClick}>{label}</BaseText>;
};

type Props = {
  label: string;
  onClick?: () => void;
};

export default Text;
