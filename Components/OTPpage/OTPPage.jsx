
import React, { Fragment } from "react";

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


import { MuiOtpInput } from 'mui-one-time-password-input'
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { RegistrationOTPAuth } from "../../Reducers/User/registrationSlice";
const OTPPage = () => {
  const router = useRouter()
  const dispath =useDispatch()
  const [otp, setOtp] = React.useState('')
  const userData = router.query.data;
  console.log("userData",userData)
  const handleChange = (newValue) => {
    setOtp(newValue)
  }
  const handleSubmit =()=>{
    console.log("OTP");
    dispath(RegistrationOTPAuth({email:userData.email,otp:otp}))
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

