import React from 'react';
import renderer from 'react-test-renderer';
import SelectItem from './SelectItem';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <SelectItem value="value" label="label" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
