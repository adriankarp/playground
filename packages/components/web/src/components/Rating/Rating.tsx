import React from 'react';
import { default as BaseRating } from '@mui/material/Rating';

export const Rating = ({
  defaultValue,
  disabled,
  icon,
  max,
  readOnly,
  size,
  style,
  precision
}: Props) => {
  const [value, setValue] = React.useState<number | null>(
    defaultValue ? defaultValue : 0
  );
  const handleChange = (event: React.ChangeEvent, newValue) => {
    setValue(newValue);
  };
  return (
    <BaseRating
      disabled={disabled}
      icon={icon}
      emptyIcon={icon}
      readOnly={readOnly}
      size={size}
      max={max}
      onChange={handleChange}
      sx={style}
      value={value}
      precision={precision}
    />
  );
};

type Props = {
  defaultValue?: number;
  disabled?: boolean;
  icon?: React.ReactNode;
  max?: number;
  readOnly?: boolean;
  size?: 'small' | 'medium';
  style?: object;
  precision: number;
};

export default Rating;
