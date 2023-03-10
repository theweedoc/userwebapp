
import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, Fragment, useCallback } from "react";
import Link from "next/link";
import {
  CircularProgress
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import NearMeIcon from "@mui/icons-material/NearMe";
import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import {
  videoReviewPost,
  getVideoDetails,
  videoLikeDislike,
} from "../../../Reducers/Video/VideoSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import VideoPlayer from "../../../Components/VideoDetail/VideoPlayer";
import { suggestUserPost } from "../../../Reducers/Video/VideoSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundImage: "unset",
  background: "unset",
  padding: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "20px",
}));
const ItemBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#121212",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
const VideoDetail = () => {
  const [notLoggedIn, setnotLoggedIn] = useState(false);

  let isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
  //state.reviewed_success=true
  const videoDetail = useSelector((state) => state.videoData.video_details);
  let reviewResponse = useSelector((state) => state.videoData.review_response);
  let reviewed_success = useSelector(
    (state) => state.videoData.reviewed_success
  );
  let suggestedUsersList =useSelector(
    (state) => state.videoData.suggested_users
  );

  //suggested_users
  //review_loading
  let reviewLoading = useSelector(
    (state) => state.videoData.review_loading
  );
  let noSuggestedUserFound = useSelector(
    (state) => state.videoData.suggestion_empty
  );


  const arr = [1,2]

  const [checked, setChecked] = React.useState([1]);
  const [review, setReview] = useState("");
  const [like, setLike] = useState(1);
  const [likebool, setLikebool] = useState(true);
  const [dislike, setdisLike] = useState(2);
  const [dislikebool, setdisLikeebool] = useState(true);
  const [suggestion, setSuggestion] = useState([]);



  const dispatch = useDispatch();

  const reviewHandler = (e) => {
    setReview(e.target.value);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const likeHandler = () => {
    dispatch(videoLikeDislike(like));
    if (likebool) {
      setLike(0);
      setLikebool(false);
      setdisLikeebool(true);
    } else {
      setLike(1);
      setLikebool(true);
    }
  };
  const dislikeHandler = () => {
    setLikebool(true);
    //dislikebool
    dispatch(videoLikeDislike(dislike)); //dislikes
    if (dislikebool) {
      setdisLike(0);
      setdisLikeebool(false);
    } else {
      setdisLike(2);
      setdisLikeebool(true);
    }
  };

  const onReviewSubmit = useCallback((e) => {
    e.preventDefault();

    dispatch(getVideoDetails());
    if (isLoggedIn) {
      dispatch(videoReviewPost(review));
      setReview("");
     
      console.log("reviewResponse", reviewResponse);
    } else {
      toast("Kindly Login To Review", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "warning",
      });
      setnotLoggedIn(true);
    }
  });
  useEffect(() => {
    dispatch(getVideoDetails());
    if (reviewed_success) {
      toast(reviewResponse, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
    }
  }, [reviewed_success]);
  const VideoName_Formatted = videoDetail.movie_name?.charAt(0).toUpperCase() + videoDetail.movie_name?.slice(1)
  const suggestionHandler = (e)=>{
    dispatch(suggestUserPost(e.target.value))
    console.log("suggested Users",e.target.checked)

  }
  //suggestionsSender
  const suggestionsSender = (e)=>{
    console.log("suggested Users Kishore",e)
    console.log("suggested Users obj",suggestedUsersList)


  }
  useEffect(()=>{

  },[suggestedUsersList])


  return (
    <>
      <VideoPlayer video_url={videoDetail.video_url} />

      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <ItemBox>
            <Item>
              <ThumbUpAltIcon
                onClick={likeHandler}
                color={likebool === false ? "success" : "none"}
              />
              <p className="thumb">99</p>
            </Item>
            <Item>
              <ThumbDownAltIcon
                onClick={dislikeHandler}
                color={dislikebool === false ? "info" : "none"}
              />
              <p className="thumb">24 </p>
            </Item>
            <Item>
              <p className="thumb">Language : English </p>{" "}
            </Item>
            <Item>
              <p className="thumb">
                {" "}
                Published Date : {videoDetail.published_date}
              </p>{" "}
            </Item>
            <Item>
              {" "}
              <VisibilityIcon />{" "}
              <p className="thumb"> {videoDetail.view_count}</p>
            </Item>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Item {...bindTrigger(popupState)}>
                    {" "}
                    <NearMeIcon />
                    <p className="thumb">Suggest</p>{" "}
                  </Item>

                  <Menu {...bindMenu(popupState)}>
                    <TextField
                      hiddenLabel
                      id="filled-hidden-label-small"
                      placeholder="Search Creator"
                      variant="filled"
                      size="small"
                      // value={suggestion}
                      onChange={suggestionHandler}
                    />
                    {isLoggedIn === true ? (
                      <List
                        dense
                        sx={{
                          width: "100%",
                          maxWidth: 200,
                          bgcolor: "background.paper",
                          position: "relative",
                          overflow: "auto",
                          maxHeight: 200,
                          "& ul": { padding: 0 },
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                    {suggestedUsersList?.map((value) => {
                          const labelId = `checkbox-list-secondary-label-${value?.profile_name}`;
                          return (
                            <Fragment>
                              <ListItem
                                key={value}
                                
                                
                                onChange={suggestionsSender(value?.profile_name)}
                                secondaryAction={
                                  <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value?.profile_name)}
                                    inputProps={{ "aria-labelledby": labelId }}
                                    
                                    
                                  />
                                }
                                disablePadding
                              >
                                <ListItemButton>
                                  <ListItemAvatar>
                                    <Avatar
                                      // alt={`Avatar n??${value + 1}`}
                                      // src={`/static/images/avatar/${
                                      //   value + 1
                                      // }.jpg`}
                                    />
                                  </ListItemAvatar>
                                  <ListItemText
                                    id={labelId}
                                    primary={`${value?.profile_name}`}
                                
                                  />
                                </ListItemButton>
                              </ListItem>
                            </Fragment>
                          );
                        })}   
                    
                  
                      </List>
                    ) : (
                      <List dense sx={{ width: "100%" }}>
                        {" "}
                        <ListItem>
                          <ListItemText primary={"Login To Suggest!"} />
                        </ListItem>
                      </List>
                    )}
                    {isLoggedIn && <Button
                      variant="outline"
                      disabled={!isLoggedIn}
                      fullWidth
                      endIcon={<SendIcon />}
                      style={{
                        borderColor: "#ffffff",
                        color: "white",
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        marginTop: 12,
                        padding: 5,
                      }}
                    >
                      Send
                    </Button>}
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </ItemBox>
        </Stack>
      </Container>

      <Container>
        <div>
          <h1>{VideoName_Formatted}</h1>
          <h5>{videoDetail.description}</h5>
          <h5> Genre Drama</h5>
          <h4>
            Writers Stephen King(based on the short novel "Rita Hayworth and the
            Shawshank Redemption")
          </h4>
          <h4>Age-Barrier {videoDetail.age_barrier}</h4>
          <Stack direction="row" spacing={1}></Stack>
        </div>
      </Container>
      <Container sx={{ marginBottom: 2 }}>
        <Stack direction={"row"}></Stack>
      </Container>
      <Container>
        <hr />
        <br />
        <Typography variant="h5">Review</Typography>
        <br />
        <Grid item xs={12} sm={6}>
          <form onSubmit={onReviewSubmit}>
            <TextField
              id="outlined-multiline-static"
              label="Your Review"
              multiline
              rows={4}
              value={review}
              style={{ width: 800 }}
              onChange={reviewHandler}
            />
            <br />

            {notLoggedIn && (
              <Fragment>
                <p className="login">
                  Click Here To <Link href="/login">Login!</Link>
                </p>
              </Fragment>
            )}

            <Button
              size="large"
              variant="outlined"
              type="submit"
              style={{
                borderColor: "#ffffff",
                color: "white",
                marginTop: 10,
              }}
            >
             {reviewLoading===true?(<>
                  <CircularProgress size={22} style={{ color: "white",marginRight:10 }} />{" "} Posting ...</>
                ):("Post Your Review") }
            </Button>
          </form>
        </Grid>
      </Container>
    </>
  );
};

export default VideoDetail;
