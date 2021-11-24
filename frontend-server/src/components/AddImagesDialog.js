import React from 'react'
import { DropzoneDialog } from 'material-ui-dropzone'

export const AddImagesDialog = (props) => {
  return (
    <div>
      <DropzoneDialog
        dialogTitle='画像選択'
        acceptedFiles={['image/*']}
        filesLimit={1000}
        maxFileSize={5000000}

        open={props.isOpen}

        cancelButtonText={'キャンセル'}
        onClose={() => {
          console.log('Close dialog')
          props.handleClose()
        }}

        submitButtonText={'画像情報入力'}
        onSave={(files) => {
          console.log('Files:', files)
          props.handleSave()
          props.handleClose()
        }}

        showPreviews={true}
        showFileNamesInPreview={true}
      >
      </DropzoneDialog>
    </div>
  )
}
