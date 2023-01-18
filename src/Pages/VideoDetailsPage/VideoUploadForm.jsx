import { border, borderRadius, Box, Container } from "@mui/system";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const VideoUploadForm = () => {
  const Item = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#121212",

    border: `1px solid white`,
  }));
  return (
    <>
      <Container>
        <Paper sx={{ border: "1px dotted white" }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "50vh" }}
          >
            <Grid item xs={3}>
              <label htmlFor="btn-upload">
                <input
                  id="btn-upload"
                  name="btn-upload"
                  style={{ display: "none" }}
                  type="file"
                />
                <Button
                  className="btn-choose"
                  component="span"
                  style={{
                    borderRadius: 100,
                    width: 150,
                    border: "1px solid white",
                  }}
                >
                  <CloudUploadIcon
                    sx={{ fontSize: 100, color: "white" }}
                  ></CloudUploadIcon>
                </Button>
              </label>
            </Grid>
            <Box sx={{ textAlign: "left" }} mt={1}>
              <Typography variant="h4">Click or drag to upload file</Typography>{" "}
            </Box>
          </Grid>
        </Paper>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={5}
        >
          <Link to="/adupload" style={{ textDecoration: "none" }}>
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
