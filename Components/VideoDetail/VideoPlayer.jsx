import React,{ memo, useEffect, useState } from "react";

import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import ReactPlayer from "react-player";
import { useDispatch } from 'react-redux';
import { postVideoViewsCount } from "../../Reducers/Video/VideoSlice";

const VideoPlayer = (props) => {
  
  const dispatch = useDispatch()

    const VideoContainer= styled(Container)(({ theme }) => {
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
  const videoHandler =()=>{
    console.log("VIDEO STARTS")
    if(play===1){
    dispatch(postVideoViewsCount())
    setPlay(play+1)
    }
  }
  return (
    <div>

<VideoContainer>
  <div className='player-wrapper'>

 {/* {hasWindow && <ReactPlayer
          url="https://theweedoc.com/testvideo/Anbarivu_2022_HD.mp4"
          
        />} */}
        <video width="840" controls autoplay  onPlay={videoHandler} >
  <source src={"https://theweedoc.com/testvideo/Anbarivu_2022_HD.mp4"} type="video/mp4"  />
</video>


      </div>

  </VideoContainer>
    </div>
  )
}

export default memo(VideoPlayer)