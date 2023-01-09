import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';

import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
const CCCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    paddingTop: theme.spacing(2),
    color: theme.palette.text.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:15
  
  }));
const CastAndCrew = () => {
    

  return (

<Card sx={{height:62, width:220,minWidth: 60,borderRadius:15 ,paddingBottom:8.2}} raised={true}>
      <CardContent >
        <Stack direction={"row"} spacing={1}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
   
        <Box spacing={2}>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" >
          Name
          <Typography variant="h6" component="div">
          Crew Member
        </Typography>
        </Typography>
        </Box>
        </Stack>

               
      </CardContent>

    </Card>
  )
}

export default CastAndCrew