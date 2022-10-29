import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

it('matches snapshot', () => {
  const component = renderer.create(<Button label="label" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
