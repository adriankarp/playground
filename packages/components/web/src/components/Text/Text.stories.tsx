import React from 'react';
import { Text } from './Text';
import { faker } from '@faker-js/faker';

export default {
  title: 'Components/Atoms/Text'
};

// ----------------------------------------------------------------

export const Body1 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Body1.args = {
  variant: 'body1',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Body2 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Body2.args = {
  variant: 'body2',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Button = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Button.args = {
  variant: 'button',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Caption = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Caption.args = {
  variant: 'caption',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Header1 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Header1.args = {
  variant: 'h1',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Header2 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Header2.args = {
  variant: 'h2',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Header3 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Header3.args = {
  variant: 'h3',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Header4 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Header4.args = {
  variant: 'h4',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Header5 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Header5.args = {
  variant: 'h5',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Header6 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Header6.args = {
  variant: 'h6',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Overline = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Overline.args = {
  variant: 'overline',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Subtitle1 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Subtitle1.args = {
  variant: 'subtitle1',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Subtitle2 = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Subtitle2.args = {
  variant: 'subtitle2',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};

// ----------------------------------------------------------------

export const Inherit = (args) => <Text {...args}>{faker.lorem.lines()}</Text>;
Inherit.args = {
  variant: 'inherit',
  align: 'justify',
  noWrap: false,
  paragraph: false,
  gutterBottom: false,
  style: {}
};
