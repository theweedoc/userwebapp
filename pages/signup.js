import React, { use, useEffect, useState } from "react";
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

  const isRegistereed = useSelector(
    (state) => state.registrationData.isRegistereed
  );
  const loading = useSelector((state) => state.registrationData.loading);
  const message = useSelector((state) => state.registrationData.msg);
  const errorsValue = useSelector((state) => state.registrationData.errors);
  const isError = useSelector((state) => state.registrationData.isError);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    profile_name: Yup.string()
      .required("Profile Name is required")
      .min(6, "Profile Name must be at least 6 characters")
      .max(40, "Profile Name must not exceed 40 characters"),
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
      .max(40, "confirm must not exceed 40 characters")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    country: Yup.string().required("Country is a required"),
    state: Yup.string().required("State is a required"),
    city: Yup.string().required("City is a required"),
  });

  const {
    register,
    setValue,
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (Object.keys(errorsValue)?.length) {
      if (errorsValue && Object.keys(errorsValue).length && errorsValue.email) {
        setError("email", { message: errorsValue.email });
      }
      if (
        errorsValue &&
        Object.keys(errorsValue).length &&
        errorsValue.profile_name
      ) {
        setError("profile_name", { message: errorsValue.profile_name });
      }
    }
  }, [errorsValue]);

  const onSubmit = (data) => {
    console.log("Registration done");
    dispatch(
      RegistrationUserAuth({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmpassword,
        profile_name: data.profile_name,
        country: data.country,
        state: data.state,
        city: data.city,
      })
    );
    dispatch(setEmail(data.email));
    console.log("errorsValue", errorsValue);
    // if (isError) {
    //   onError();
    // }
  };

  // const onError = () => {
  //   toast("Something went wrong!", {
  //     hideProgressBar: true,
  //     autoClose: 2000,
  //     type: "error",
  //   });
  // };

  useEffect(() => {
    if (isRegistereed) {
      Router.push("/OTPPage");
    }
  });

  console.log("errors--", errors);
  console.log("errorsValue--", errorsValue);

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
                  // label="Email"
                  align="center"
                  id="email"
                  name="email"
                  fullWidth
                  margin="dense"
                  {...register("email")}
                  error={errors.email ? true : false}
                  // error={errors.email ? true : errorsValue.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.email?.message}
                  {/* {errorsValue &&
                  Object.keys(errorsValue).length &&
                  errorsValue.email
                    ? errorsValue.email
                    : ""} */}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Profile Name :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <TextField
                  id="profile_name"
                  name="profile_name"
                  fullWidth
                  margin="dense"
                  {...register("profile_name")}
                  align="left"
                  error={errors.profile_name ? true : false}
                  // error={
                  //   errors.profile_name
                  //     ? true
                  //     : errorsValue.profile_name
                  //     ? true
                  //     : false
                  // }
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.profile_name?.message}
                  {/* {errorsValue &&
                  Object.keys(errorsValue).length &&
                  errorsValue.profile_name
                    ? errorsValue.profile_name
                    : ""} */}
                </Typography>
              </Grid>

              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Name :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <TextField
                  name="name"
                  // label="Name"
                  id="name"
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
                <TextField // id="password" name="password"
                  type={"password"}
                  margin="dense"
                  {...register("password")}
                  align="left"
                  error={errors.password ? true : false}
                  fullWidth
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
                <TextField // id="confirmpassword" name="confirmpassword" label="Confirm Password"
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
                    sx={{ marginTop: 2 }} // required id="gender" label="gender"
                    defaultValue={"male"}
                  >
                    <FormControlLabel
                      value="male"
                      {...register("gender", { required: true })}
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      {...register("gender", { required: true })}
                      control={<Radio />}
                      label="Female"
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
                <Select
                  name="country"
                  {...register("country", { required: true })}
                  onChange={(e) =>
                    setValue("country", e.target.value, {
                      shouldValidate: true,
                    })
                  }
                  fullWidth
                  error={errors.country ? true : false}
                >
                  <MenuItem value={"Test"}>{"Test-country"}</MenuItem>
                </Select>
                <Typography variant="inherit" color="textSecondary">
                  {errors.country?.message}
                </Typography>
              </Grid>

              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  State:
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Select
                  name="state"
                  {...register("state", { required: true })}
                  onChange={(e) =>
                    setValue("state", e.target.value, { shouldValidate: true })
                  }
                  fullWidth
                  error={errors.state ? true : false}
                >
                  <MenuItem value={"Test"}>{"Test-State"}</MenuItem>
                </Select>
                <Typography variant="inherit" color="textSecondary">
                  {errors.state?.message}
                </Typography>
              </Grid>

              <Grid item xs={3} sm={1.5}>
                <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                  City:
                </Typography>
              </Grid>

              <Grid item xs={8} sm={4}>
                <Select
                  name="city"
                  {...register("city", { required: true })}
                  fullWidth
                  error={errors.city ? true : false}
                >
                  <MenuItem value={"TestCity"}>{"Test-City"}</MenuItem>
                  {/* {cities.map((genre) => {
                  return
                  <MenuItem value={city.id}>{city.name}</MenuItem>;
                  })} */}
                </Select>
                <Typography variant="inherit" color="textSecondary">
                  {errors.city?.message}
                </Typography>
              </Grid>
            </Grid>
            <Grid></Grid>

            <Box mt={3} sx={{ marginLeft: "35%" }}>
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "#ffffff", width: 400 }}
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
