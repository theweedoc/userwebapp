import { Button, Container } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";

import ProfileCard from "./ProfileCard";
import ProfilePosterSlider from "./ProfilePosterSlider";
import { styled } from "@mui/material/styles";
import MoviePosterSlider from "./MoviePosterSlider";
import "./ProfilePage.scss";
const ProfilePage = (props) => {
  const ProfileContainer = styled(Container)(({ theme }) => ({
    padding: 10,
  }));
  return (
    <div>
        <ProfileCard />
        <ProfilePosterSlider movies={props.movies} />
        <MoviePosterSlider movies={props.movies} />
       
    </div>
  );
};

export default ProfilePage;
