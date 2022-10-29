import React from 'react';
import Radio from '@mui/material/Radio';

export const RadioButton = ({
  checked,
  color,
  disabled,
  disableRipple,
  onChange,
  required,
  size,
  value,
  style
}: Props) => {
  return (
    <Radio
      checked={checked}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      onChange={onChange}
      required={required}
      size={size}
      value={value}
      style={style}
    />
  );
};

type Props = {
  checked?: boolean;
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  disabled?: boolean;
  disableRipple?: boolean;
  onChange?: () => void;
  required?: boolean;
  size?: 'small' | 'medium';
  value?: string;
  style?: object;
};

export default RadioButton;
