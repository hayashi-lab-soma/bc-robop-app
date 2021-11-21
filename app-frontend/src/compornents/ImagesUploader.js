import React from 'react'
import { Button } from '@mui/material'
import {DropzoneDialog} from 'material-ui-dropzone'

const ImagesUploader = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <div>
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
    )
}

export default ImagesUploader;
