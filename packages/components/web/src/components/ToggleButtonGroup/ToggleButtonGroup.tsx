import React from 'react';
import { default as BaseToggleButtonGroup } from '@mui/material/ToggleButtonGroup';

export const ToggleButtonGroup = ({
  children,
  color,
  disabled,
  exclusive,
  fullWidth,
  onChange,
  orientation,
  size,
  value,
  style
}: Props) => {
  return (
    <BaseToggleButtonGroup
      aria-label="alignment toggle button group"
      color={color}
      disabled={disabled}
      exclusive={exclusive}
      fullWidth={fullWidth}
      onChange={onChange}
      orientation={orientation}
      size={size}
      value={value}
      sx={style}
    >
      {children}
    </BaseToggleButtonGroup>
  );
};

type Props = {
  children: React.ReactNode | React.ReactNode[];
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  disabled?: boolean;
  exclusive?: boolean;
  fullWidth?: boolean;
  onChange?: () => void;
  orientation?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large' | undefined;
  value?: string;
  style?: object;
};

export default ToggleButtonGroup;
