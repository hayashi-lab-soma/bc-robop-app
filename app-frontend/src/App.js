import React from 'react';
import './App.css'
import Header from './compornents/Header';
import {DropzoneArea} from 'material-ui-dropzone'


function App() {
  return (
    <div className="App">
      <Header/>
      <DropzoneArea filesLimit={1000}/>
    </div>
  );
}

export default App;