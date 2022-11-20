import React from 'react';
import renderer from 'react-test-renderer';
import Autocomplete from './Autocomplete';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <Autocomplete label="label" options={['option1', 'option2']} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
