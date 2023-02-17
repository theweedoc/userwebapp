import React, { memo, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { postVideoViewsCount } from "../../Reducers/Video/VideoSlice";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const VideoPlayer = (props) => {
  const dispatch = useDispatch();

  const VideoContainer = styled(Container)(({ theme }) => {
    return {
      padding: theme.spacing(2.5),
    };
  });
  const [hasWindow, setHasWindow] = useState(false);
  const [play, setPlay] = useState(1);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const videoHandler = () => {
    console.log("VIDEO STARTS");
    if (play === 1) {
      dispatch(postVideoViewsCount());
      setPlay(play + 1);
    }
  };



  return (
    <div>
       <Typography
      component="div"
      variant="body1"
      style={{
        width: '100%',
        position: 'relative',
      }}
    >
       <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.600',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
          border: '1px solid white',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'white' : 'grey.300',
          p: 1.5,
          borderRadius: 0.5,
          width: "100px",
          height: "13px",
          fontSize: '0.875rem',
          fontWeight: '500',
          padding: "5px 20px 25px 20px",
          position: 'absolute',
          bottom: 100,
          left: '55.5%',
          zIndex: 'tooltip',
          cursor: "pointer"
        }}
      
      >
        Skip Ads
      </Box>
      <VideoContainer>
        <div className="player-wrapper">
          <video width="750" controls autoplay={true} onPlay={videoHandler} controlsList="nodownload" style={{border
          :"1px solid white",padding:"3px"}}>
            <source
              src={"https://theweedoc.com/testvideo/Anbarivu_2022_HD.mp4"}
              type="video/mp4"        
            />
          </video>
        </div>
      </VideoContainer>
      </Typography>
    </div>
  );
};

export default memo(VideoPlayer);
