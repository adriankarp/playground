import React from 'react';
import { default as BaseSwitch } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export const SwitchWithLabel = ({
  checked,
  checkedIcon,
  color,
  disabled,
  disableRipple,
  icon,
  required,
  size,
  style,
  value,
  label
}: Props) => {
  const [selected, setSelected] = React.useState(checked);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((event.target as HTMLInputElement).checked);
  };
  return (
    <FormControlLabel
      control={
        <BaseSwitch
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
      }
      label={label}
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
  label: string;
};

export default SwitchWithLabel;
