import React from 'react'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
    Container,
    IconButton
  } from '@mui/material';
const DynamicInput = () => {
    const[counter,setCounter]=useState(1)
    const addField=()=>{
        setCounter(counter+1)
    }
    const handleInputField =()=>{

    }
  return (
    <>
  <Grid container spacing={1}>

<Grid item xs={10} sm={6}>
<Typography variant="h6" align="left" sx={{marginTop:2}}>
{Array.from(Array(counter)).map((c, index)=>{
            return(
             <div style={{marginTop:4}}>
          <TextField
            onChange={handleInputField}
            key={c}
            className={index}
            type="text"
            placeholder='Profile'
            style={{marginRight:5}}
            

          ></TextField> {""}
          <TextField
            onChange={handleInputField}
            key={c}
            className={index}
            type="text"
            placeholder='Title'
            style={{marginLeft:1}}

          ></TextField> <br/>   </div>
            )
        })}


</Typography>
</Grid>

  <Grid item xs={2} sm={1}>
  <IconButton aria-label="add" sx={{marginTop:3 ,color:'white' ,border:'1px solid white'}} size="small">
            <AddIcon onClick={addField}/>
</IconButton>
        
         
  </Grid>
  </Grid>











       



    
    </>
  )
}

export default DynamicInput