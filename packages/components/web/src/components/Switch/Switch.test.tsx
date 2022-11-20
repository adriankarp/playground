import React from 'react';
import renderer from 'react-test-renderer';
import Switch from './Switch';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Switch value="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
