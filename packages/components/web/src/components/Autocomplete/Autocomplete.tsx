import React from 'react';
import { default as BaseAutocomplete } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const Autocomplete = ({
  label,
  options,
  autoComplete,
  autoHighlight,
  autoSelect,
  disabled,
  fullWidth,
  loading,
  readOnly,
  size,
  style
}: Props) => {
  const [value, setValue] = React.useState<string | null>(null);
  const handleChange = (event: React.ChangeEvent, newValue: string | null) => {
    setValue(newValue);
  };
  return (
    <BaseAutocomplete
      value={value}
      options={options}
      autoComplete={autoComplete}
      autoHighlight={autoHighlight}
      autoSelect={autoSelect}
      disabled={disabled}
      fullWidth={fullWidth}
      loading={loading}
      readOnly={readOnly}
      size={size}
      sx={style}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={handleChange}
    />
  );
};

type Props = {
  label: string;
  options: string[];
  autoComplete?: boolean;
  autoHighlight?: boolean;
  autoSelect?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  readOnly?: boolean;
  size?: 'small' | 'medium';
  style?: object;
};

export default Autocomplete;
