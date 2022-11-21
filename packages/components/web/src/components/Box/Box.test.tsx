import React from 'react';
import renderer from 'react-test-renderer';
import Box from './Box';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Box />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
