import React, { Fragment, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import * as Yup from "yup";
import { RegistrationUserAuth } from "../Reducers/User/registrationSlice";
import { useDispatch } from "react-redux";
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

const SignUp = () => {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    profilename: Yup.string()
      .required("Password is required")
      .min(3, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 6 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(3, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    cnfrmpassword: Yup.string()
      .required("conform password is required")
      .min(3, "conform must be at least 6 characters")
      .max(40, "conform must not exceed 40 characters"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    axios
      .all([
        axios.get(process.env.NEXT_PUBLIC_THEWEEDOC_GENRES),
        // axios.get('https://api.github.com/users/phantomjs')
      ])
      .then((responseData) => {
        //this will be executed only when all requests are complete
        setGenres(responseData[0].data.data);
        console.log("Date created: ", responseData[0].data.data);
      });
  }, []);
  const onSubmit = (data) => {
    console.log("Registration done");
    dispatch(
      RegistrationUserAuth({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation:data.cnfrmpassword,
        profileName: data.profilename,
        country: data.country,
        state: data.state,
        city: data.city,
      })
    );
  };

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
              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  Profile Name :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <TextField
                  required
                  label="profilename"
                  id="profilename"
                  name="profilename"
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
                  required
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
                  required
                  id="password"
                  name="password"
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
                  Retype Password :
                </Typography>
              </Grid>
              <Grid item xs={8} sm={10}>
                <TextField
                  required
                  id="cnfrmpassword"
                  name="cnfrmpassword"
                  label="cnfrmpassword"
                  fullWidth
                  margin="dense"
                  {...register("cnfrmpassword")}
                  align="left"
                  error={errors.cnfrmpassword ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.cnfrmpassword?.message}
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
                    required
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
                  {genres.map((genre) => {
                    return <MenuItem value={genre.name}>{genre.name}</MenuItem>;
                  })}
                </Select>
              </Grid>

              <Grid item xs={3} sm={2}>
                <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                  State:
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Select {...register("state", { required: true })} fullWidth>
                  {genres.map((genre) => {
                    return <MenuItem value={genre.name}>{genre.name}</MenuItem>;
                  })}
                </Select>
              </Grid>

              <Grid item xs={3} sm={1.5}>
                <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                  City:
                </Typography>
              </Grid>

              <Grid item xs={8} sm={4}>
                <Select {...register("city", { required: true })} fullWidth>
                  {genres.map((genre) => {
                    return <MenuItem value={genre.name}>{genre.name}</MenuItem>;
                  })}
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
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
