import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from './IconButton';
import HomeIcon from '@mui/icons-material/Home';

it('matches snapshot', () => {
  const component = renderer.create(
    <IconButton>
      <HomeIcon />
    </IconButton>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
