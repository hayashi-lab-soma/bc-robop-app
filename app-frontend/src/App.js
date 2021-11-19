import React from 'react';
import './App.css'
import Header from './compornents/Header';
import UploadButton from './compornents/UploadButton';
import { DropzoneDialog } from 'material-ui-dropzone'
import { Button } from '@material-ui/core';

function App() {
  const [open, setOpen] = React.useState(false)
  
  return (
    <div className="App">
      <Header />
      
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}>
          Add Images
      </Button>
      <DropzoneDialog
        acceptedFiles={['image/*']}
        filesLimit={200}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default App;