import React from 'react'
import './App.css'
import { Button } from '@playground/components-web'

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log('clicked')
        }}
        label="titlu aici"
      />
    </div>
  )
}

export default App
