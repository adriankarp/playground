import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from './RadioButton';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<RadioButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
