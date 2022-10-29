import React from 'react';
import renderer from 'react-test-renderer';
import Select from './Select';
import SelectItem from '../SelectItem/SelectItem';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <Select label="label">
        <SelectItem value="value" label="label" />
        <SelectItem value="value" label="label" />
      </Select>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
