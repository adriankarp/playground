import React from 'react';
import { default as BaseTextField } from '@mui/material/TextField';

export const TextInput = ({
  label,
  placeholder,
  value,
  defaultValue,
  name,
  variant,
  size,
  color,
  required,
  helperText,
  type,
  disabled,
  error,
  onChange,
  fullWidth,
  maxRows,
  minRows,
  style
}: Props) => {
  return (
    <BaseTextField
      label={label}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      name={name}
      variant={variant}
      size={size}
      color={color}
      required={required}
      helperText={helperText}
      type={type}
      disabled={disabled}
      error={error}
      onChange={onChange}
      fullWidth={fullWidth}
      maxRows={maxRows}
      minRows={minRows}
      sx={style}
    />
  );
};

type Props = {
  label: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  name?: string;
  variant?: 'filled' | 'outlined' | 'standard';
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  required?: boolean;
  helperText?: string;
  type?: 'text' | 'password' | 'email' | 'tel' | 'number';
  disabled?: boolean;
  error?: boolean;
  onChange?: () => void;
  fullWidth?: boolean;
  maxRows?: number | string;
  minRows?: number | string;
  style?: object;
};

export default TextInput;
