import React from 'react';
import renderer from 'react-test-renderer';
import Text from './Text';

it('matches snapshot', () => {
  const component = renderer.create(<Text variant="h1">Example text</Text>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
