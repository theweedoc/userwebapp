import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function CandC() {
  
  return (
    <List sx={{ width:180,height:'auto'  ,border:'1px solid white',paddingLeft:2,marginRight:1,borderRadius:2}}>
      <ListItem  alignItems="flex-start"  >
      <div>
      <img src="../lap.png" className='img__box'  style={{alignItems:"center" ,justifyContent:"center",display:"flex"}} />
      </div>    
      </ListItem>
      <div className='crew'>
        <h4>Crew Member</h4>
      </div>
      <div className='crew'>
        <h5>Member Name</h5>
      </div>
    </List>
  );
}