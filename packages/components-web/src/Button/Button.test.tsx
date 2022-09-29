import renderer from 'react-test-renderer'
import { Button } from './Button'

const onClickhandler = () => {}

describe('Button', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(<Button onClick={onClickhandler} label={'label'} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
