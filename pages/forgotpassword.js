
  

  import EmailVerification from "../Components/ForgotPassword/EmailVerification";
  import React, { useState, useCallback, useEffect } from "react";
  
  import { Typography, Container } from "@mui/material";
  import PassChangeVerification from "../Components/ForgotPassword/PassChangeVerification";
  import { useSelector } from "react-redux";
  
  const forgotpassword = () => {
    const verificationToggle = useSelector(
      (state) => state.userAuth.email_verification
    );
  

    return (
      <Container sx={{ border: "1px dotted white", marginTop: 15 }}>
        <Typography variant="h4" align="center" mb={5} mt={5}>
          Forgot password
        </Typography>
        {verificationToggle === true ? (
          <PassChangeVerification />
        ) : (
          <EmailVerification />
        )}
      </Container>
    );
  };
  
  export default forgotpassword;
  