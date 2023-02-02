import { border, borderRadius, Box, Container } from "@mui/system";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography ,Button} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import VideoDropzone from "../Dropzone/VideoDropzone";
const AdUploadForm = () => {
  const Item = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#121212",

    border: `1px solid white`,
  }));
  const ProfileContainer = styled(Container)(({ theme }) => ({
    padding: 20,
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#121212",

  }));

  return (
    <>
      <ProfileContainer>
       <Paper sx={{border:'1px dotted white'}}>
       <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "50vh" }}
        >
          <VideoDropzone/>
       
        </Grid>
       </Paper>
      </ProfileContainer>
    </>
  );
};

export default AdUploadForm;
