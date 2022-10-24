import React from 'react';
import { default as BaseButton } from '@mui/material/Button';

export const Button = ({ onClick, label }: Props) => {
  return <BaseButton onClick={onClick}>{label}</BaseButton>;
};

type Props = {
  onClick: () => void;
  label: string;
};
console.log('asda');
console.log('asda');

export default Button;
