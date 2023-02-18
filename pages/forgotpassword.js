import EmailVerification from "../Components/ForgotPassword/EmailVerification";
import React, { useState, useCallback, useEffect } from "react";

import { toast } from "react-toastify";
import { Typography, Container } from "@mui/material";
import PassChangeVerification from "../Components/ForgotPassword/PassChangeVerification";
import { useSelector } from "react-redux";

const forgotpassword = () => {
  const verificationToggle = useSelector(
    (state) => state.userAuth.email_verification
  );
  const forgotpass = useSelector((state) => state.userAuth.forgotpass);

  const otpResponse = useSelector((state) => state.userAuth.otp_response);
  const reset_response = useSelector((state) => state.userAuth.reset_response);
  const resetPassSuccess = useSelector(
    (state) => state.userAuth.otp_verification
  );
  const resetPassFailed = useSelector(
    (state) => state.userAuth.resetpass_failed
  );
  const resetPassSuccessFunc = useCallback(() => {
    toast(reset_response, {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });
  }, [resetPassSuccess]);

  const resetPassFunc = useCallback(() => {
    toast(reset_response, {
      hideProgressBar: true,
      autoClose: 2000,
      type: "error",
    });
  }, [resetPassFailed]);

  const verificationToggleFunc = useCallback(() => {
    toast(otpResponse, {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });
  }, [otpResponse]);

  useEffect(() => {
    if (forgotpass) {
      verificationToggleFunc();
    }
    if (resetPassFailed) {
      resetPassFunc();
    }
    if (resetPassSuccess) {
      resetPassSuccessFunc();
    }
  }, [otpResponse, forgotpass, resetPassFailed, resetPassSuccess]);

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
