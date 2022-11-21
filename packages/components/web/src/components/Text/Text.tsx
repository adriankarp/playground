import React from 'react';
import { default as BaseText } from '@mui/material/Typography';

export const Text = ({
  variant,
  align,
  noWrap,
  paragraph,
  children,
  style
}: Props) => {
  return (
    <BaseText
      variant={variant}
      align={align}
      noWrap={noWrap}
      paragraph={paragraph}
      sx={style}
    >
      {children}
    </BaseText>
  );
};

type Props = {
  variant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
    | 'inherit';
  children: React.ReactNode | React.ReactNode[];
  align?: 'center' | 'right' | 'left' | 'justify';
  noWrap?: boolean;
  paragraph?: boolean;
  gutterBottom?: boolean;
  style?: object;
};

export default Text;
