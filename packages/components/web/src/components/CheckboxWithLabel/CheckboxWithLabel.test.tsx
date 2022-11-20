import React from 'react';
import renderer from 'react-test-renderer';
import CheckboxWithLabel from './CheckboxWithLabel';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<CheckboxWithLabel value="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
