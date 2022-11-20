import React from 'react';
import { default as BaseButton } from '@mui/material/Fab';

export const FloatingActionButton = ({
  label,
  icon,
  onClick,
  color,
  size,
  disabled,
  style
}: Props) => {
  return (
    <BaseButton
      onClick={onClick}
      color={color}
      size={size}
      disabled={disabled}
      variant={label ? 'extended' : 'circular'}
      sx={style}
    >
      {icon}
      {label}
    </BaseButton>
  );
};

type Props = {
  label?: string;
  icon: React.ReactNode;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  disabled?: boolean;
  size?: 'small' | 'medium';
  style?: object;
};

export default FloatingActionButton;
