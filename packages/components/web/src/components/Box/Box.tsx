import React from 'react';
import { default as BaseBox } from '@mui/material/Box';

export const Box = ({ style, children }: Props) => {
  return <BaseBox sx={style}>{children}</BaseBox>;
};

type Props = {
  style?: object;
  children?: React.ReactNode | React.ReactNode[];
};

export default Box;
