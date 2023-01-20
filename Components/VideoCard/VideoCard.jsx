import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Chip from '@mui/material/Chip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import TodayIcon from '@mui/icons-material/Today';
import FaceIcon from '@mui/icons-material/Face';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
export default function VideoCard() {
  const theme = useTheme();
  return (
    <>
    <Card sx={{ display: 'flex', padding:4}}>
        <CardMedia
        component="img"
        sx={{ width: 181 }}
        image="photo.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           Movie-Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Actors
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>         
        <Stack direction="row" spacing={1}>
        <Stack direction="row" spacing={1}>
      <Chip icon={<ThumbUpAltIcon />} label="48" variant="outlined" />
      <Chip icon={<ThumbDownAltIcon />} label="8" variant="outlined" />
      <Chip icon={<VisibilityIcon />} label="27K" variant="outlined" />

      
      <Chip icon={<TodayIcon />} label="01-01-2023" variant="outlined" />


    </Stack>
     
    </Stack>
         
        </Box>
      </Box>
    

    </Card>
    <hr/>
    </>
  );
}
