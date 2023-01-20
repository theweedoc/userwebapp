import { Button, Container, Grid, Typography } from '@mui/material';
import React,{useState,useEffect } from 'react'
import { lazy , Suspense } from "react";

import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import NearMeIcon from '@mui/icons-material/NearMe';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CandC from '../Components/VideoDetail/CandC';

const OtherComponent = React.lazy(() => import('../Components/VideoDetail/VideoPlayer'));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#121212',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft:"20px"

}));
const ItemBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#121212',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

}));
const VideoDetailContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#121212',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
const IconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, -4, 0, 0),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap:"1px"
}));
const VideoDetail = () => {
  const API_URL="https://api.themoviedb.org/3/movie/278/similar?api_key=a3c9d74d7b143516baae458fa05dedda&language=en-US&page=1";
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [suggestions, setSuggestions] = useState([])

  useEffect(()=>{
    axios.get(API_URL).then((response)=>{
      setSuggestions(response.data.results)
    })
    console.log("RERENDER")

  },[])
  //https://api.themoviedb.org/3/movie/278/similar?api_key=a3c9d74d7b143516baae458fa05dedda&language=en-US&page=1

  const [checked, setChecked] = React.useState([1]);

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
  
  return (<Suspense fallback={<div><h1>Loading...</h1></div>}> 
 <OtherComponent/>
 
  <Container >
  <Stack   direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }} >
<ItemBox>
<Item><ThumbUpAltIcon/><p className='thumb'>99</p>
      </Item>
    <Item><ThumbDownAltIcon/><p className='thumb'>24 </p></Item>
    <Item><p className='thumb'>Language : English </p> </Item>
    <Item><p className='thumb'> Published Date : 24 Nov 2022</p> </Item>
    <Item> <VisibilityIcon/> <p className='thumb'> 1.2K</p></Item>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
         <Item {...bindTrigger(popupState)}> <NearMeIcon/><p className='thumb'>Suggest</p> </Item>

         
          <Menu {...bindMenu(popupState)}>
          <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  placeholder='Search Creator'
  variant="filled"
  size="small"
/>
            <List dense sx={{ width: '100%' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Creator ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
            
          </Menu>
        </React.Fragment>
      )}
    </PopupState>

    </ItemBox>
  </Stack>
  
  </Container>
  
  
  <Container>
    <div> 
    <h1>The Shawshank Redemption</h1>
    <h5>Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.</h5>
    <h5> Genre Drama</h5>
    <h4>Writers
    Stephen King(based on the short novel "Rita Hayworth and the Shawshank Redemption")</h4>
    <Stack direction="row" spacing={1}>
  </Stack>
  </div>
  </Container>
      <Container sx={{marginBottom:2}}>
        <Stack direction={"row"}>
        <CandC/>   <CandC/>   <CandC/>  
        </Stack>
      </Container>
      <Container>
        <hr/>
        <br/>
        <Typography variant='h5'>
          Review
        </Typography>
        <br/>
        <Grid item xs={8} sm={6}>
        <TextField
          id="outlined-multiline-static"
          label="Your Review"
          multiline
          rows={4}
          defaultValue="Default Value"
          style={{ width: 800 }}
        />
      
        </Grid>
        <br/>
        <Button variant='contained'   size='large'>Post Your Review</Button>
      </Container>
 </Suspense>
    
  )
}

export default VideoDetail