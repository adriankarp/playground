import React from 'react';
import './App.css';
import { Button } from 'components-core';

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('clicked')} label="label" />
    </div>
  );
}

export default App;
