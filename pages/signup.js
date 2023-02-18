import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Router from "next/router";
import { useRouter } from "next/router";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import { toast } from "react-toastify";
import RadioGroup from "@mui/material/RadioGroup";
import * as Yup from "yup";
import { setEmail } from "../Reducers/User/registrationSlice";
import { RegistrationUserAuth } from "../Reducers/User/registrationSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Button,
  Container,
} from "@mui/material";

const SignUp = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    profilename: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    name: Yup.string()
      .required("Name is required")
      .min(6, "Name must be at least 6 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmpassword: Yup.string()
      .required("Confirm Password is required")
      .min(6, "confirm must be at least 6 characters")
      .max(40, "confirm must not exceed 40 characters"),
  });

  const isRegistereed = useSelector(
    (state) => state.registrationData.isRegistereed
  );
  const loading = useSelector((state) => state.registrationData.loading);
  const message = useSelector((state) => state.registrationData.msg);
  const errorsValue = useSelector((state) => state.registrationData.errors);
  const isError = useSelector((state) => state.registrationData.isError);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Registration done");
    dispatch(
      RegistrationUserAuth({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmpassword,
        profile_name: data.profilename,
        country: data.country,
        state: data.state,
        city: data.city,
      })
    );
    dispatch(setEmail(data.email));
    console.log("errorsValue", errorsValue);
    if (isError) {
      onError();
    }
  };

  const onError = () => {
    toast("ERRPR", { hideProgressBar: true, autoClose: 2000, type: "success" });
  }

  useEffect(() => {
    if (isRegistereed) {
      Router.push("/OTPPage");
    }
  });

  return (
    <Container>
      <Paper>
        <Box px={3} py={2} mt={5}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" align="center">
              Registration
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Email :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <TextField
                  label="Email"
                  align="center"
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
              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Profile Name :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <TextField
                  id="profilename"
                  name="profilename"
                  label="Profile Name"
                  fullWidth
                  margin="dense"
                  {...register("profilename")}
                  align="left"
                  error={errors.profilename ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.profilename?.message}
                </Typography>
              </Grid>

              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Name :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <TextField
                  // required
                  label="Name"
                  id="name"
                  name="name"
                  fullWidth
                  margin="dense"
                  {...register("name")}
                  align="left"
                  error={errors.name ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.name?.message}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Password :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <TextField
                  // required
                  id="password"
                  name="password"
                  label="Password"
                  type={"password"}
                  fullWidth
                  margin="dense"
                  {...register("password")}
                  align="left"
                  error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.password?.message}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Confirm Password :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <TextField
                  // required
                  id="confirmpassword"
                  name="confirmpassword"
                  label="Confirm Password"
                  type={"password"}
                  fullWidth
                  margin="dense"
                  {...register("confirmpassword")}
                  align="left"
                  error={errors.confirmpassword ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.confirmpassword?.message}
                </Typography>
              </Grid>

              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Gender :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <FormControl>
                  <RadioGroup
                    row
                    name="gender"
                    sx={{ marginTop: 2 }}
                    // required
                    id="gender"
                    label="gender"
                  >
                    <FormControlLabel
                      value="female"
                      {...register("gender", { required: true })}
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      {...register("gender", { required: true })}
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="transgender"
                      {...register("gender", { required: true })}
                      control={<Radio />}
                      label="Transgender"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Country :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <Select {...register("country", { required: true })} fullWidth>
                  <MenuItem value={"Test"}>{"Test-country"}</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  State:
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Select {...register("state", { required: true })} fullWidth>
                  <MenuItem value={"Test"}>{"Test-State"}</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={3} sm={1.5}>
                <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                  City:
                </Typography>
              </Grid>

              <Grid item xs={8} sm={4}>
                <Select {...register("city", { required: true })} fullWidth>
                  <MenuItem value={"TestCity"}>{"Test-City"}</MenuItem>

                  {/* {cities.map((genre) => {
                    return <MenuItem value={city.id}>{city.name}</MenuItem>;
                  })} */}
                </Select>
              </Grid>
            </Grid>
            <Grid></Grid>

            <Box mt={3} sx={{ marginLeft: "35%" }}>
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

export default SignUp;
