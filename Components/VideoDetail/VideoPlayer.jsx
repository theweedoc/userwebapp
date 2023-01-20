import React,{ memo, useEffect, useState } from "react";

import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
const VideoPlayer = () => {

    const VideoContainer= styled(Container)(({ theme }) => {
        return {
          padding: theme.spacing(2.5),
        
         
      
        };
      });
  return (
    <div>

<VideoContainer>
  <div className='player-wrapper'>
        {/* <ReactPlayer
        
          className='react-player'
          url='https://theweedoc.com/testvideo/Anbarivu_2022_HD.mp4'
          width='100%'
          height='100%'
          controls={true}
        /> */}
        <video width="840" controls>
  <source src="https://theweedoc.com/testvideo/Anbarivu_2022_HD.mp4" type="video/mp4"/>
</video>

      </div>

  </VideoContainer>
    </div>
  )
}

export default memo(VideoPlayer)