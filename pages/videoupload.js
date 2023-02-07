import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VideoUploadForm from '../Components/VideoDetailsPage/VideoUploadForm';
import { Container } from '@mui/system';
import VideoDetailsForm from '../Components/VideoDetailsPage/VideoDetailsForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function VideoDetailsPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dataHandler =()=>{
    console.log("CLICKED");
  }
  const [genres, setGenres] = useState([]);
  const [lang, setLang] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem('token')
    const AuthValue = `Bearer ` + token
    

    axios
      .all([
        axios.get(process.env.NEXT_PUBLIC_THEWEEDOC_GENRES, { headers: { 'Content-Type': 'application/json', Authorization: AuthValue } }),
        axios.get(process.env.NEXT_PUBLIC_THEWEEDOC_LANG, { headers: { 'Content-Type': 'application/json', Authorization: AuthValue } })
      ])
      .then((responseData) => {
        //this will be executed only when all requests are complete
        setGenres(responseData[0].data.data);
        setLang(responseData[1].data.data)
        console.log("Date created: ", responseData[1].data.data);
      });
  }, []);
  return (
   <Container>
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Video Upload" {...a11yProps(0)} />
          <Tab label="Video Details" {...a11yProps(1)} onClick={dataHandler}/>
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
            <VideoUploadForm/>
      </TabPanel>
      <TabPanel value={value} index={1} >
       <VideoDetailsForm genres={genres} lang={lang}/>
      </TabPanel>
     
    </Box>
   </Container>
  );
}
