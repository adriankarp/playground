import React from 'react';
import { default as BaseIconButton } from '@mui/material/IconButton';

export const IconButton = ({
  children,
  color,
  disabled,
  disableRipple,
  onClick,
  size,
  edge,
  style
}: Props) => {
  return (
    <BaseIconButton
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      onClick={onClick}
      size={size}
      edge={edge}
      sx={style}
    >
      {children}
    </BaseIconButton>
  );
};

type Props = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  disabled?: boolean;
  disableRipple?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large' | undefined;
  edge?: false | 'end' | 'start' | undefined;
  style?: object;
};

export default IconButton;
