
import React, { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import * as Yup from "yup";

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
} from "@mui/material";
import DatePicker from "../../Components/DateModule/DatePicker";
import DynamicInput from "../../Components/DynamicInput/DynamicInput";
import ChipAutoComplete from "../../Components/ChipAutoComplete/ChipAutoComplete";
import DropDownC from "../../Components/DropDownC/DropDownC";

import { MuiOtpInput } from 'mui-one-time-password-input'

const OTPPage = () => {
  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }
  const handleSubmit =()=>{
    console.log("OTP");
  }

  return (
    <Container>
      <Paper>
        <Box px={3} py={5} mt={5}>
          <Typography variant="h5" align="center" py={2}>
           OTP Verification
          </Typography>
          <Box  px={12}>
          <MuiOtpInput value={otp} onChange={handleChange} />

          </Box>

          
          <Box mt={3} xs={2}  sx={{marginLeft:"40%"}}  >
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#ffffff",
                width:200
              }}
            >
              Submit
            </Button>
          </Box>

           
        
        

          
        </Box>
      </Paper>
    </Container>
  )
}
export default OTPPage;

