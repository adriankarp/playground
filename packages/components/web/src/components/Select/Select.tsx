import React from 'react';
import { default as BaseTextField } from '@mui/material/TextField';

export const Select = ({
  children,
  label,
  value,
  variant,
  size,
  color,
  required,
  helperText,
  disabled,
  error,
  onChange,
  style
}: Props) => {
  return (
    <BaseTextField
      select
      label={label}
      value={value}
      variant={variant}
      size={size}
      color={color}
      required={required}
      helperText={helperText}
      disabled={disabled}
      error={error}
      onChange={onChange}
      sx={style}
    >
      {children}
    </BaseTextField>
  );
};

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  label: string;
  value?: string;
  variant?: 'filled' | 'outlined' | 'standard';
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  required?: boolean;
  helperText?: string;
  disabled?: boolean;
  error?: boolean;
  onChange?: () => void;
  style?: object;
};

export default Select;
