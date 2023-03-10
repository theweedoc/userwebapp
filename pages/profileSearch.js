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
      <ProfileContainer>
        <ProfileCard sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 181 }}
            image="lap.png"
            alt="Live from space album cover"
            class="profile__image"
          />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Name
                  </Typography>
                  <div className="profile__card">
                    <Typography component="div" variant="h6">
                      Title
                    </Typography>
                  </div>

                  <div className="profile__card">
                    <InstagramIcon /> &nbsp;
                    <FacebookIcon /> &nbsp;
                    <TwitterIcon />
                  </div>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      Follower
                    </Typography>
                    <div className="follow">
                      {" "}
                      <Typography component="div" variant="h6">
                        14
                      </Typography>
                    </div>
                  </CardContent>
                </Grid>
                <Grid item xs={4}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      Following
                    </Typography>
                    <div className="follow">
                      {" "}
                      <Typography component="div" variant="h6">
                        42
                      </Typography>
                    </div>
                  </CardContent>
                </Grid>
                <Grid item xs={2}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    {!follow && (
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={followHandler}
                      >
                        Follow
                      </Button>
                    )}
                    {follow && (
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={followHandler}
                      >
                        Following
                      </Button>
                    )}
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ProfileCard>
      </ProfileContainer>
    </div>
  );
};

export default ProfileSearchCard;
