import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { setEmail } from "../Reducers/User/loginSlice";
import CircularIndeterminate from "../Components/CircularProgress/circularProgress";
import * as Yup from "yup";
import { LoginUserAuth } from "../Reducers/User/loginSlice";
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

const Login = () => {
  const initialUser = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
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

  const onSubmit = (data) => {
    dispatch(setEmail(data.email));
    dispatch(LoginUserAuth({ email: data.email, password: data.password }));
  };

  const email = useSelector((state) => state.userAuth.email);
  const loading = useSelector((state) => state.userAuth.loading);


  return (
    <Container>
      <Paper sx={{ height: 500 }}>
        <Box px={3} py={2} mt={5} sx={{ padding: 8 }}>
         {loading === true ? (<CircularIndeterminate/>): ( <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" align="center" mb={5}>
              Login {email}
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={3} sm={2}>
                {/* <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Email :
              </Typography> */}
              </Grid>

              <Grid item xs={8} sm={8}>
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
              <Grid item xs={8} sm={2}></Grid>

              <Grid item xs={3} sm={2}>
                {/* <Typography variant="h6" align="right" sx={{ marginTop: 2 }}>
                Password :
              </Typography> */}
              </Grid>
              <Grid item xs={8} sm={8}>
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
            </Grid>

            <Box mt={3} sx={{ marginLeft: "30%" }}>
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#ffffff",
                  width: 400,
                }}
              >
                Submit
              </Button>
            </Box>
          </form>)}
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
