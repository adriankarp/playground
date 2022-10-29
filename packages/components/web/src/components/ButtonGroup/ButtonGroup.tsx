import React from 'react';
import { default as BaseButtonGroup } from '@mui/material/ButtonGroup';

export const ButtonGroup = ({
  children,
  variant,
  color,
  orientation,
  size,
  fullWidth,
  disabled,
  style
}: Props) => {
  return (
    <BaseButtonGroup
      aria-label="alignment button group"
      variant={variant}
      color={color}
      orientation={orientation}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={style}
    >
      {children}
    </BaseButtonGroup>
  );
};

type Props = {
  children: React.ReactNode | React.ReactNode[];
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  orientation?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large' | undefined;
  fullWidth?: boolean;
  disabled?: boolean;
  style?: object;
};

export default ButtonGroup;
