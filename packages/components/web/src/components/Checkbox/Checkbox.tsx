import React from 'react';
import { default as BaseCheckbox } from '@mui/material/Checkbox';

export const Checkbox = ({
  checked,
  checkedIcon,
  color,
  disabled,
  disableRipple,
  icon,
  required,
  size,
  style,
  value
}: Props) => {
  const [selected, setSelected] = React.useState(checked);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((event.target as HTMLInputElement).checked);
  };
  return (
    <BaseCheckbox
      checked={selected}
      checkedIcon={checkedIcon}
      disabled={disabled}
      disableRipple={disableRipple}
      icon={icon}
      required={required}
      size={size}
      color={color}
      onChange={handleChange}
      sx={style}
      value={value}
    />
  );
};

type Props = {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'warning' | 'error' | 'info' | 'success';
  disabled?: boolean;
  disableRipple?: boolean;
  icon?: React.ReactNode;
  required?: boolean;
  size?: 'small' | 'medium';
  style?: object;
  value: string;
};

export default Checkbox;
