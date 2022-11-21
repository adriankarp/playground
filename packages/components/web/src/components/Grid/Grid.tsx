import React from 'react';
import { default as BaseGrid } from '@mui/material/Unstable_Grid2';

export const Grid = ({
  style,
  children,
  columns,
  columnSpacing,
  direction,
  alignItems,
  justifyContent,
  rowSpacing,
  spacing,
  container,
  xs,
  sm,
  md,
  lg,
  xl,
  disableEqualOverflow
}: Props) => {
  return (
    <BaseGrid
      sx={style}
      columns={columns}
      columnSpacing={columnSpacing}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
      rowSpacing={rowSpacing}
      spacing={spacing}
      container={container}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      disableEqualOverflow={disableEqualOverflow}
    >
      {children}
    </BaseGrid>
  );
};

type Props = {
  style?: object;
  children?: React.ReactNode | React.ReactNode[];
  columns?: number | object;
  columnSpacing?: number | object;
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  rowSpacing?: number | object;
  spacing?: number;
  container?: boolean;
  xs?: number | 'auto';
  sm?: number | 'auto';
  md?: number | 'auto';
  lg?: number | 'auto';
  xl?: number | 'auto';
  disableEqualOverflow?: boolean;
};

export default Grid;
