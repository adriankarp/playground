import React from 'react';
import renderer from 'react-test-renderer';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

it('matches snapshot', () => {
  const component = renderer.create(
    <ButtonGroup variant="contained">
      <Button label="Button1" />
      <Button label="Button2" />
    </ButtonGroup>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
