import React from 'react';
import renderer from 'react-test-renderer';
import Rating from './Rating';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Rating value="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
