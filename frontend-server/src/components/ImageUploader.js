import React, { useState } from 'react'
import { Button, Box, } from '@mui/material'
import { AddImagesDialog } from './AddImagesDialog'
import { InputImagesInfoDialog } from './InputImagesInfoDialog'

function ImageUploader() {
  const [isOpenAddImagesDialog, setOpenAddImagesDialog] = useState(false)
  const [files, setImageFiles] = useState(null)
  const [isOpenImageInfoDialog, setOpenImageInfoDialog] = useState(false)
  const [date, setDate] = useState(new Date())

  const handleAddImagesButtonClicked = () => {
    setOpenAddImagesDialog(true)
  }

  const handleCloseAddImagesDialog = () => {
    setOpenAddImagesDialog(false)
  }

  const handleAddImageFiles = (files) => {
    setImageFiles(files)
  }

  const handleOpenImageInfoDialog = () => {
    setOpenImageInfoDialog(true)
  }

  const handleCloseImageInfoDialog = () => {
    setOpenImageInfoDialog(false)
  }

  const handleSubmit = () => {
    console.log("File: ", files)
    console.log("Date: ", date)
    setOpenImageInfoDialog(false)
  }

  const handleDateChanged = (value) => {
    setDate(value)
  }

  return (
    <div>

      <Box sx={{ m: 2 }}>
        <Button //Add images button
          variant='contained'
          onClick={handleAddImagesButtonClicked}>
          画像選択
        </Button>
      </Box>

      <AddImagesDialog
        isOpen={isOpenAddImagesDialog}
        handleSetFiles={handleAddImageFiles}
        handleSave={handleOpenImageInfoDialog}
        handleClose={handleCloseAddImagesDialog}
      />

      <InputImagesInfoDialog
        isOpen={isOpenImageInfoDialog}
        handleClose={handleCloseImageInfoDialog}
        handleSubmit={handleSubmit}
        date={Date()}
        handleDateChanged={handleDateChanged}
      />

    </div>
  )
}

export default ImageUploader
