import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { DropzoneDialog } from 'material-ui-dropzone'
import { Box } from '@mui/system'

const ImagesUploader = () => {
    const [isOpen, setOpen] = React.useState(false)
    const [isFormOpen, setFormOpen] = React.useState(false)

    return (
        <div>
            <Box sx={{ m: 1 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => { //click 'add images' button
                        setOpen(true)
                    }}>
                    add images
                </Button>
            </Box>

            <DropzoneDialog
                acceptedFiles={['image/*']}
                filesLimit={200}
                maxFileSize={5000000}
                open={isOpen}
                onClose={() => { //click 'cancel' button
                    console.log('Cancel upload images')
                    setOpen(false) // close dropzone dialog
                }}
                onSave={(files) => { //click 'submit' button
                    console.log('Number of added files:' + files.length)
                    setFormOpen(true)
                }}>
            </DropzoneDialog>

            <Dialog
                open={isFormOpen}>
                <DialogTitle>Upload information</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin='dense'
                        label='Date'
                        fullWidth
                        variant='standard'
                    />
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default ImagesUploader;
