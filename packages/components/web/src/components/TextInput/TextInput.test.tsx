import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<TextInput label="label" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
