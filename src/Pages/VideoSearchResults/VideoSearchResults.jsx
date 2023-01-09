import { Container } from "@mui/system";
import React from "react";
import VideoCard from "../../Components/VideoCard/VideoCard";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
const VideoSearchResults = () => {
  const VResultsContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    color: theme.palette.text.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 10,
  }));
  return (
    <VResultsContainer>
      <h1>Search Results for: "Movie Search"</h1>
      <div className="videoresults__box">
        {" "}
        <VideoCard /> <VideoCard /> <VideoCard /> <VideoCard />{" "}
      </div>
    </VResultsContainer>
  );
};

export default VideoSearchResults;
