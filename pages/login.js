import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { LoginUserAuth } from "../Reducers/User/loginSlice";
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
import { setEmail } from "../Reducers/User/registrationSlice";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email or User name is required"),
    // email: Yup.string().required("Email or User name is required").email("Email or User name is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
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
  const loading = useSelector((state) => state.userAuth.loading);
  const isLoggedIn = useSelector((state) => state.userAuth.isLoggedIn);
  const isOtpVerified = useSelector((state) => state.userAuth.isOtpVerified);

  const onSubmit = (data) => {
    console.log("data--", data)
    dispatch(setEmail(data.email));
    dispatch(LoginUserAuth({ email: data.email, password: data.password }));
    console.log("status", isLoggedIn);
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
    if (isLoggedIn && !isOtpVerified) {
      router.push("/OTPPage");
    }
  });

  console.log("isLoggedIn--", isLoggedIn);

  return (
    <Container>
      <Paper sx={{ height: 500 }}>
        <Box px={3} py={2} mt={5} sx={{ padding: 8 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" align="center" mb={5}>
              Login
            </Typography>

            <Grid
              container
              spacing={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={8}>
                <TextField
                  label="Email or User name"
                  align="center"
                  // required
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

              <Grid item xs={12} sm={8}>
                <TextField
                  // required
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
            </Grid>
            <Box
              mt={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Don't have an account? <Link href="/signup">&nbsp;<u>Sign up</u> </Link>
            </Box>
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
                {loading === true ? (
                  <CircularProgress size={25} style={{ color: "black" }} />
                ) : (
                  "Submit"
                )}
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
