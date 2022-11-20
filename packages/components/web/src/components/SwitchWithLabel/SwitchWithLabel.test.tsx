import React from 'react';
import renderer from 'react-test-renderer';
import SwitchWithLabel from './SwitchWithLabel';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <SwitchWithLabel value="test" label="label" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
