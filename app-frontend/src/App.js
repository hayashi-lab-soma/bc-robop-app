import React from 'react';
import './App.css'
import Header from './compornents/Header';
import ImagesUploader from './compornents/ImagesUploader';

function App() {

  return (
    <div className="App">
      <Header />
      <ImagesUploader></ImagesUploader>
    </div>
  );
}

export default App;