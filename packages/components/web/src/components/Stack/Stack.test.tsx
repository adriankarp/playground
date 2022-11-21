import React from 'react';
import renderer from 'react-test-renderer';
import Stack from './Stack';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Stack />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
