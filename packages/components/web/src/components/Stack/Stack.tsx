import React from 'react';
import { default as BaseStack } from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export const Stack = ({
  style,
  children,
  direction,
  alignItems,
  justifyContent,
  spacing,
  divider
}: Props) => {
  return (
    <BaseStack
      sx={style}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      spacing={spacing}
      divider={divider ? <Divider orientation="vertical" flexItem /> : null}
    >
      {children}
    </BaseStack>
  );
};

type Props = {
  style?: object;
  children?: React.ReactNode | React.ReactNode[];
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  spacing?: 0 | 0.5 | 1 | 2 | 3 | 4 | 8 | 12;
  divider?: boolean;
};

export default Stack;
