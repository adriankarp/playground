import React from 'react';
import { default as BaseButton } from '@mui/material/Button';

export const Button = ({
  label,
  variant,
  href,
  onClick,
  color,
  size,
  startIcon,
  endIcon,
  disabled,
  disableElevation,
  disableRipple,
  style
}: Props) => {
  return (
    <BaseButton
      variant={variant}
      href={href}
      onClick={onClick}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      disableElevation={disableElevation}
      disableRipple={disableRipple}
      sx={style}
    >
      {label}
    </BaseButton>
  );
};

type Props = {
  label: string;
  variant?: 'contained' | 'outlined' | 'text';
  href?: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large' | undefined;
  startIcon?: React.ReactNode | null;
  endIcon?: React.ReactNode | null;
  disabled?: boolean;
  disableElevation?: boolean;
  disableRipple?: boolean;
  style?: object;
};

export default Button;
