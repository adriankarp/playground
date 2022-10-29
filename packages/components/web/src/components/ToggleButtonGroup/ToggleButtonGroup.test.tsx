import React from 'react';
import renderer from 'react-test-renderer';
import ToggleButtonGroup from './ToggleButtonGroup';
import ToggleButton from '../ToggleButton/ToggleButton';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined
} from '@mui/icons-material';

it('matches snapshot', () => {
  const component = renderer.create(
    <ToggleButtonGroup>
      <ToggleButton value="bold">
        <FormatBold />
      </ToggleButton>
      <ToggleButton value="italic">
        <FormatItalic />
      </ToggleButton>
      <ToggleButton value="underline">
        <FormatUnderlined />
      </ToggleButton>
    </ToggleButtonGroup>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
