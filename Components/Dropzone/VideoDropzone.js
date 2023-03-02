
import React from 'react'
import {DropzoneArea} from 'react-mui-dropzone'

  
  //const classes = useStyles()
const VideoDropzone = () => {
  return (
    <><DropzoneArea
    showPreviews={true}
    showPreviewsInDropzone={false}
    useChipsForPreview
    previewGridProps={{container: { spacing: 1, direction: 'row' }}}
    //previewChipProps={{classes: { root: classes.previewChip } }}
    previewText="Selected files"
  /></>
  )
}

export default VideoDropzone
;

