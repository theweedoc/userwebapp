import { border, borderRadius, Box, Container } from "@mui/system";
import React from "react";
import IconButton from "@mui/material/IconButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
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
              <Typography
                variant="h4"
                align="center"
                sx={{ display: { xs: "none", md: "block" } }}
              >
                Click or drag to upload Adverisement Video
              </Typography>{" "}
              <Typography
                variant="h6"
                align="center"
                sx={{ display: { xs: "block", md: "none" } }}
              >
                Click or drag to upload Adverisement Video
              </Typography>{" "}
            </Box>
          </Grid>
        </Paper>
      </ProfileContainer>
    </>
  );
};

export default AdUploadForm;
