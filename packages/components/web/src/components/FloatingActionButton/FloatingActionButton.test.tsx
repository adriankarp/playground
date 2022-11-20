import React from 'react';
import renderer from 'react-test-renderer';
import Button from './FloatingActionButton';
import AddIcon from '@mui/icons-material/Add';

it('matches snapshot', () => {
  const component = renderer.create(<Button icon={<AddIcon />} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
