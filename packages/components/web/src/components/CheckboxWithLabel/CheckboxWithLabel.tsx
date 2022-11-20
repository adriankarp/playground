import React from 'react';
import { default as BaseCheckbox } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const CheckboxWithLabel = ({
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
    setSelected(event?.target.checked);
  };
  return (
    <FormControlLabel
      control={
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

export default CheckboxWithLabel;
