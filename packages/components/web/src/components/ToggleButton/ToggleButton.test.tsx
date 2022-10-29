import React from 'react';
import renderer from 'react-test-renderer';
import ToggleButton from './ToggleButton';

it('matches snapshot', () => {
  const component = renderer.create(
    <ToggleButton value="text">Text</ToggleButton>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
