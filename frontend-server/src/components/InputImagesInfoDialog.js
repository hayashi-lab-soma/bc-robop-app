import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material'
import React from 'react'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'

export const InputImagesInfoDialog = (props) => {
  return (
    <div>
      <Dialog
        open={props.isOpen}>

        <DialogTitle>画像情報入力</DialogTitle>

        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Date'
              value={props.date}
              onChange={(newValue) => {
                props.handleDateChanged(newValue)
              }}
              renderInput={(props) => <TextField {...props} />}>
            </DatePicker>

          </LocalizationProvider>
        </DialogContent>

        <DialogActions>
          <Button onClick={props.handleClose}>キャンセル</Button>
          <Button onClick={() => {
            console.log("Date: ", props.date)
            props.handleClose()
            props.handleSubmit()
          }}>送信</Button>
        </DialogActions>

      </Dialog>
    </div>
  )
}
