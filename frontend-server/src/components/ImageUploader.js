import React, { useState } from 'react'
import { Button, Box, } from '@mui/material'
import { AddImagesDialog } from './AddImagesDialog'
import { InputImagesInfoDialog } from './InputImagesInfoDialog'

function ImageUploader() {
  const [isOpenAddImagesDialog, setOpenAddImagesDialog] = useState(false)
  const [isOpenImageInfoDialog, setOpenImageInfoDialog] = useState(false)
  const [date, setDate] = useState(new Date())

  const handleAddImagesButtonClicked = () => {
    setOpenAddImagesDialog(true)
  }

  const handleCloseAddImagesDialog = () => {
    setOpenAddImagesDialog(false)
  }

  const handleOpenImageInfoDialog = () => {
    setOpenImageInfoDialog(true)
  }

  const handleCloseImageInfoDialog = () => {
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
        handleSave={handleOpenImageInfoDialog}
        handleClose={handleCloseAddImagesDialog}
      ></AddImagesDialog>

      <InputImagesInfoDialog
        isOpen={isOpenImageInfoDialog}
        handleClose={handleCloseImageInfoDialog}
        date={date}
        handleDateChanged={handleDateChanged}>
      </InputImagesInfoDialog>
    </div>
  )
}

export default ImageUploader
