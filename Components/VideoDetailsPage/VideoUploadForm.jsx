import { border, borderRadius, Box, Container } from "@mui/system";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography,Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Link from "next/link";
import VideoDropzone from "../Dropzone/VideoDropzone";
const VideoUploadForm = () => {
  const Item = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#121212",

    border: `1px solid white`,
  }));
  return (
    <>
      <Container>
      
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
      
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={5}
        >
          <Link href="/adupload" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              style={{
                borderColor: "#ffffff",
                color: "white",
              }}
            >
              Click Here To Ad Upload
            </Button>
          </Link>{" "}
        </Box>
      </Container>
    </>
  );
};

export default VideoUploadForm;
