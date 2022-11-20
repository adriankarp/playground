import React from 'react';
import { default as BaseSlider } from '@mui/material/Slider';

export const Slider = ({
  color,
  disabled,
  min,
  max,
  name,
  orientation,
  size,
  step,
  track,
  style
}: Props) => {
  const [value, setValue] = React.useState<number | undefined>(0);

  const handleChange = (event: Event, newValue: number) => {
    setValue(newValue);
  };

  return (
    <BaseSlider
      color={color}
      disabled={disabled}
      max={max}
      min={min}
      name={name}
      orientation={orientation}
      size={size}
      step={step}
      track={track}
      sx={style}
      value={value}
      onChange={handleChange}
    />
  );
};

type Props = {
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  max?: number;
  min?: number;
  name?: string;
  orientation?: 'vertical' | 'horizontal';
  size?: 'small' | 'medium';
  step?: number;
  track?: 'inverted' | 'normal';
  style?: object;
};

export default Slider;
