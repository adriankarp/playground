import React from 'react';
import { default as BaseButton } from '@mui/material/Button';

export function Button({ onClick, label }: Props) {
  return <BaseButton onClick={onClick}>{label}</BaseButton>;
}

type Props = {
  onClick: () => void;
  label: string;
};

export default Button;
