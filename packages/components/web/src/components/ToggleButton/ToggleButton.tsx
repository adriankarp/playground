import React from 'react';
import { default as BaseToggleButton } from '@mui/material/ToggleButton';

export const ToggleButton = ({
  children,
  value,
  color,
  disabled,
  disableRipple,
  fullWidth,
  onChange,
  onClick,
  selected,
  size,
  style
}: Props) => {
  return (
    <BaseToggleButton
      value={value}
      aria-label={value}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      size={size}
      fullWidth={fullWidth}
      onChange={onChange}
      onClick={onClick}
      selected={selected}
      sx={style}
    >
      {children}
    </BaseToggleButton>
  );
};

type Props = {
  children: React.ReactNode | React.ReactNode[];
  value: string;
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  disabled?: boolean;
  disableRipple?: boolean;
  fullWidth?: boolean;
  onChange?: () => void;
  onClick?: () => void;
  selected?: boolean;
  size?: 'small' | 'medium' | 'large' | undefined;
  style?: object;
};

export default ToggleButton;
