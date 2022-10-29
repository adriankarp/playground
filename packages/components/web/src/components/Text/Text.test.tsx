import React from 'react';
import renderer from 'react-test-renderer';
import Text from './Text';

it('matches snapshot', () => {
  const component = renderer.create(<Text label="label" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
