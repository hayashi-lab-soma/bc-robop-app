import React, { useState } from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <NameInputText />
    </div>
  );
}

export const NameInputText = (props) => {
  const [name, setName] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  return (
    <input
      type='text'
      value={name}
      onChange={(event) => handleName(event)}
    />
  )
}


export default App;
