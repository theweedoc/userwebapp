import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { MuiOtpInput } from "mui-one-time-password-input";
import { LoginUserAuth, ResetPassAuth } from "../../Reducers/User/loginSlice";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Container,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const PassChangeVerification = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(3, "Password must be at least 3 characters")
      .max(40, "Password must not exceed 40 characters"),
    cnfrmpassword: Yup.string()
      .required("Password is required")
      .min(3, "Password must be at least 3 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();
  const router = useRouter();
  //   const loading = useSelector((state) => state.userAuth.loading);
  const email_loading = useSelector((state) => state.userAuth.email_loading);
  const otpVerification = useSelector(
    (state) => state.userAuth.otp_verification
  );
  const email_forVerification = useSelector(
    (state) => state.userAuth.forgot_pass_email
  );

  //resetpass_failed
  //otp_verification
  const [otp, setOtp] = React.useState("");
  const [otperr, setOtperr] = React.useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  const onSubmit = (data) => {
    if (otp.length <= 5) {
      setOtperr("Please Enter all the Digits");
    } else {
      setOtperr("");
      dispatch(
        ResetPassAuth({
          email: email_forVerification,
          otp: otp,
          password: data.password,
          password_confirmation: data.cnfrmpassword,
        })
      );
    }
  };

  useEffect(() => {
    if (otpVerification) {
      router.push("/profile");
    }
  });

  return (
    <Container>
      <div sx={{ height: 500 }}>
        <Box px={3} py={2} mt={5} sx={{ padding: 8 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={8}>
                <Typography variant="inherit" color="textSecondary">
                  OTP* :
                </Typography>
                <MuiOtpInput length={6} value={otp} onChange={handleChange} />
                <Typography variant="inherit" color="textSecondary">
                  {" "}
                  {otperr}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  type={"password"}
                  fullWidth
                  margin="dense"
                  {...register("password")}
                  align="center"
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  id="cnfrmpassword"
                  name="cnfrmpassword"
                  label="Confirm Password "
                  type={"cnfrmpassword"}
                  fullWidth
                  margin="dense"
                  {...register("cnfrmpassword")}
                  align="center"
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.cnfrmpassword?.message}
                </Typography>
              </Grid>
            </Grid>

            <Box
              mt={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#ffffff",
                  width: 400,
                }}
              >
                {email_loading === true ? (
                  <CircularProgress size={25} style={{ color: "black" }} />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </form>
        </Box>
      </div>
    </Container>
  );
};

export default PassChangeVerification;
