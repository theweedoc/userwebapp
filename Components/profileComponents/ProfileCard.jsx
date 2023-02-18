import { Container, Card, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid"; // Grid version 1
import Link from "next/link";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useSelector, useDispatch } from "react-redux";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRouter } from "next/router";
import { setProfileEdit } from "../../Reducers/User/userSlice";

const ProfileCard = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [hide, setHide] = useState(false);
  const [edit, setEdit] = useState(false);

  const userData = useSelector((state) => state.userAuth.user);
  const user = userData.data;

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
    backgroundColor:
      theme.palette.mode === "dark" ? "transparent" : "transparent",
  }));

  const ProfileCard = styled(Card)(({ theme }) => ({
    padding: 25,
    marginBottom: 20,
  }));

  const editHandler = () => {
    console.log("!edit", !edit);
    setEdit(!edit);
    dispatch(setProfileEdit(!edit));
  };

  const showEditProfile = () => {
    setHide(!edit);
    router.push("/profileedit");
  };

  return (
    <ProfileContainer>
      <div className="profile__datacard">
        {hide === true ? (
          <label htmlFor="btn-upload">
            <input
              id="btn-upload"
              name="btn-upload"
              style={{ display: "none" }}
              type="file"
            />
            <div class="image-div">
              <img src={user.pImage} className="profile__image" />
              <FileUploadIcon
                fontSize="large"
                className="hidden_img"
                sx={{ fontSize: 100 }}
              />
            </div>
          </label>
        ) : (
          <label htmlFor="btn-upload">
            <div class="image-div">
              <img
                src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png"
                className="profile__image"
              />
            </div>
          </label>
        )}

        <Grid container spacing={2}>
          <Grid item xs={5} md={5} sx={{ marginLeft: "5px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h4">
                  {user.pName}
                </Typography>
                <div className="profile__card">
                  <Typography component="div" variant="h5">
                    {user.uName}
                  </Typography>
                </div>

                <div className="profile__card">
                  <Link href={user.pSocialLinks[0]} target="_blank">
                    <InstagramIcon />
                  </Link>{" "}
                  <Link href={user.pSocialLinks[1]} target="_blank">
                    <FacebookIcon />
                  </Link>{" "}
                  <Link href={user.pSocialLinks[2]} target="_blank">
                    {" "}
                    <TwitterIcon />
                  </Link>
                </div>
              </CardContent>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 2, sm: 2, md: 3 }}
            >
              <Grid item xs={1} md={6}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Followers
                  </Typography>
                  <div className="follow">
                    {" "}
                    <Typography component="div" variant="h5">
                      {user.pFollowerCount}
                    </Typography>
                  </div>
                </CardContent>
              </Grid>
              <Grid item xs={1} md={6}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    Following
                  </Typography>
                  <div className="follow">
                    {" "}
                    <Typography component="div" variant="h5">
                      {user.pFollowCount}
                    </Typography>
                  </div>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
          <Container>
            <Box alignItems={"center"} justifyContent={"center"}>
              {" "}
              <Button
                variant="outlined"
                sx={{ width: 400, height: 50, marginLeft: 50 }}
                style={{
                  borderColor: "#ffffff",
                  color: "white",
                }}
                type="click"
                onClick={editHandler}
              >
                {edit === false ? "Edit Profile" : " View Profile"}
              </Button>
            </Box>
          </Container>
        </Grid>
      </div>
    </ProfileContainer>
  );
};

export default ProfileCard;
