import React, { useState, } from 'react'
import { Button, Dialog, DialogTitle, TextField, DialogActions, DialogContent } from '@mui/material'
import { DropzoneDialog, } from 'material-ui-dropzone'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'

function ImageUploader() {
  const [isOpen, setOpen] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [date, setDate] = useState(new Date())

  const handleClickButton = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpenDialog = () => {
    setOpen2(true)
  }

  const handleCloseDialog = () => {
    setOpen2(false)
  }

  const handleSetDate = (value) => {
    setDate(value)
  }

  return (
    <div>
      <Button
        variant='outlined'
        onClick={handleClickButton}>
        画像アップロード
      </Button>

      <DropzoneDialog
        acceptedFiles={['image/*']}
        cancelButtonText={'キャンセル'}
        submitButtonText={'情報入力'}
        filesLimit={1000}
        maxFileSize={5000000}
        open={isOpen}
        onClose={() => {
          handleClose()
        }}
        onSave={(files) => {
          console.log('Files:', files)
          handleClose()
          handleOpenDialog()
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      >
      </DropzoneDialog>

      <Dialog
        open={isOpen2}
        onClose={handleCloseDialog}
      // fullWidth={'true'}
      >
        <DialogTitle>画像情報入力</DialogTitle>
        <DialogContent>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={date}
              onChange={(newValue) => {
                handleSetDate(newValue)
              }}
            />
          </LocalizationProvider>

          {/* <TextField
            id={'Date'}
            fullWidth={true}
            margin={'dense'}
            type={'date'}
            label={'撮影日時'}
            variant={'standard'}
            value={date}
            onChange={(event) => {
              console.log("Event:", event.target.value)
              handleSetDate(event.target.value)
              console.log("Set date:", date)
            }}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>キャンセル</Button>
          <Button onClick={handleCloseDialog}>アップロード</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ImageUploader
