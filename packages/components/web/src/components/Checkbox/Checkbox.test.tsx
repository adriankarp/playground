import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Checkbox value="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
