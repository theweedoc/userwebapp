import { Container } from '@mui/system'
import React from 'react'
import VideoCard from '../../Components/VideoCard/VideoCard'
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProfileCard from '../ProfilePage/ProfileCard';
import ProfileSearchCard from '../ProfilePage/ProfileSearchCard';
const ProfileSearchPage = (props) => {
  const PResultsContainer = styled(Container)(({ theme }) => ({
  
    paddingTop: theme.spacing(2),
    color: theme.palette.text.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:15,
    marginTop:10
  
  }));
  return (
    <PResultsContainer>
      <h1>Search Profile for: "Profile Search"</h1>
          <div className='videoresults__box'> 
           <ProfileSearchCard/> <ProfileSearchCard/>   <ProfileSearchCard/> <ProfileSearchCard/>
            </div>



    </PResultsContainer>
  )
}

export default ProfileSearchPage