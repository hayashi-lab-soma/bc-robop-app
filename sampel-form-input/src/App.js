
import { useState } from 'react';
import './App.css';
import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, DialogContent, TextField } from '@mui/material';

function App() {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <Button
        variant='outlined'
        onClick={handleOpen}>
        Open form dialog
      </Button>

      <Dialog
        open={isOpen}
        onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ここにダイアログの説明文を入れる
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='label1'
            label='ラベル1'
            type='text'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
