import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from './Button'

const onClickhandler = () => {}

describe('Button', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <React.Fragment>
          <Button onClick={onClickhandler} label={'label'} />
        </React.Fragment>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
