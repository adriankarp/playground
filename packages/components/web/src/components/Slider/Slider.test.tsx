import React from 'react';
import renderer from 'react-test-renderer';
import Slider from './Slider';

it('matches snapshot', () => {
  const component = renderer.create(<Slider />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
