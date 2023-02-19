import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  LoginUserAuth,
  ForgotPassAuth,
  setForgotPassEmail,
} from "../../Reducers/User/loginSlice";
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

const EmailVerification = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
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
  const otpResponse = useSelector((state) => state.userAuth.otp_response);
  const emailLoading = useSelector((state) => state.userAuth.email_loading);

  const onSubmit = (data) => {
    dispatch(ForgotPassAuth({ email: data.email }));
    dispatch(setForgotPassEmail(data.email));
  };

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
                <TextField
                  label="Email"
                  align="center"
                  required
                  id="email"
                  name="email"
                  fullWidth
                  margin="dense"
                  {...register("email")}
                  error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                </Typography>
              </Grid>

              {/* <Grid item xs={12} sm={8}>
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
              </Grid> */}
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
                {emailLoading === true ? (
                  <CircularProgress size={25} style={{ color: "black" }} />
                ) : (
                  "Next"
                )}
              </Button>
            </Box>
          </form>
        </Box>
      </div>
    </Container>
  );
};

export default EmailVerification;
