import React from 'react';
import renderer from 'react-test-renderer';
import Text from './Text';

describe('Text', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Text variant="h1">Snapshot</Text>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains text', () => {
    const component = renderer.create(<Text variant="h1">Test text</Text>);
    expect(component).toContain('Test text');
  });
});
