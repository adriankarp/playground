import React from 'react';
import { default as BaseLoadingButton } from '@mui/lab/LoadingButton';

export const LoadingButton = ({
  label,
  disabled,
  loading,
  loadingPosition,
  size,
  style
}: Props) => {
  return (
    <BaseLoadingButton
      disabled={disabled}
      loading={loading}
      loadingPosition={loadingPosition}
      size={size}
      sx={style}
    >
      {label}
    </BaseLoadingButton>
  );
};

type Props = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  loadingPosition?: 'center' | 'start' | 'end';
  variant: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large' | undefined;
  style?: object;
};

export default BaseLoadingButton;
