import React from 'react'
import { Button } from './Button'
import '@fontsource/roboto/400.css'

export default {
  title: 'Components/Button',
  component: Button,
}

type Props = React.ComponentProps<typeof Button>

const Container = (props) => (
  <div
    style={{
      width: '100%',
    }}
  >
    {props.children}
  </div>
)

export const Default = (args) => (
  <Container>
    <Button {...args} />
  </Container>
)

Default.args = {
  onClick: () => {},
  label: 'Button title',
} as Props
