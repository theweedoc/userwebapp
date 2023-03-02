import React from "react";
import { DropzoneDialog } from "react-mui-dropzone";
import { Button } from "@mui/material";

//const classes = useStyles()
const ImageDropzone = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          {props.title}
        </Button>

        <DropzoneDialog
          acceptedFiles={["image/*"]}
          cancelButtonText={"cancel"}
          submitButtonText={"submit"}
          maxFileSize={5000000}
          open={open}
          onClose={() => setOpen(false)}
          onSave={(files) => {
            console.log("Files:", files);
            setOpen(false);
          }}
          showPreviews={true}
          showFileNamesInPreview={true}
        />
      </div>
    </>
  );
};

export default ImageDropzone;
