import { Container, Card, Button } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Grid version 1
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useDispatch } from "react-redux";
import {
  decreaseFollowCount,
  increseFollowCount,
} from "../Reducers/User/loginSlice";
import ProfileSearchCards from "../Components/profileSearchCards/profileCardForSearch";
import TwitterIcon from "@mui/icons-material/Twitter";
const ProfileSearchCard = (props) => {
  const [follow, setFollow] = useState(false);
  const dispatch = useDispatch();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const Item1 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
  }));
  const ProfileContainer = styled(Container)(({ theme }) => ({
    padding: 20,
  }));

  const ProfileCard = styled(Card)(({ theme }) => ({
    padding: 20,
  }));
  const followHandler = () => {
    if (!follow) {
      setFollow(!follow);
      dispatch(increseFollowCount());
    } else {
      setFollow(!follow);
      dispatch(decreaseFollowCount());
    }
  };

  return (
    <div>
      <ProfileSearchCards/>
      
      <ProfileSearchCards/>
      <ProfileSearchCards/>
      <ProfileSearchCards/>
     
    </div>
  );
};

export default ProfileSearchCard;
