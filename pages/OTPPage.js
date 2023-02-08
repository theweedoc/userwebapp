
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

import { ToastContainer, toast } from 'react-toastify';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useDispatch,useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RegistrationOTPAuth } from "../Reducers/User/registrationSlice";
const OTPPage = (props) => {
  const router = useRouter()
  const [otp, setOtp] = React.useState('')
  const email = useSelector((state)=>state.registrationData.email)
  const dispatch = useDispatch()
  console.log("userData",email)
  const handleChange = (newValue) => {
    setOtp(newValue)
  }
  const otpVerified = useSelector((state)=>state.registrationData.otp_success)
  const handleSubmit =()=>{
    dispatch(RegistrationOTPAuth({email:email,otp:otp}))
    if(otpVerified){
    onClick()
    router.push('/login')
    }
  }
  const onClick = () => toast('Account Successfully Created', { hideProgressBar: true, autoClose: 2000, type: 'success' })

  return (
    <Container>
      <Paper>
       <Box px={3} py={5} mt={5}>
          <Typography variant="h5" align="center" py={2}>
           OTP Verification
          </Typography>
          <Box  px={12}>
          <MuiOtpInput
        length={6}
        value={otp}
        onChange={handleChange}
      />
   
          </Box>

          
          <Box mt={3} xs={2}   display="flex"
              justifyContent="center" alignItems="center" >
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{
                backgroundColor: "#ffffff",
                width:100
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



