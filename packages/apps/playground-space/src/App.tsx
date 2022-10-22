import React from 'react'
import { Button } from '@playground/components-web'

export const App: React.FC = () => (
  <Button
    onClick={() => {
      console.log('clicked')
    }}
    label="Playground"
  />
)
