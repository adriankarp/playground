import React from 'react';
import renderer from 'react-test-renderer';
import LoadingButton from './LoadingButton';

it('matches snapshot', () => {
  const component = renderer.create(<LoadingButton />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
