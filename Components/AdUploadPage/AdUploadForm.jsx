import { Container } from "@mui/system";
import React from "react";
import IconButton from "@mui/material/IconButton";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import VideoDropzone from "../Dropzone/VideoDropzone";
const AdUploadForm = () => {
 
  const ProfileContainer = styled(Container)(({ theme }) => ({
    padding: 20,
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#121212",
  }));

  return (
    <>
      <ProfileContainer>
        
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
      
      </ProfileContainer>
    </>
  );
};

export default AdUploadForm;
