import React, { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";
import * as Yup from "yup";

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
import DatePicker from "../../Components/DateModule/DatePicker";
import DropDownC from "../../Components/DropDownC/DropDownC";

const ProfileEditForm = () => {
  const [city, setCity] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    Title: Yup.string()
      .required("Title is required")
      .min(3, "Title must be at least 6 characters")
      .max(20, "Title must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Container>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h5" align="center">
            Edit Profile
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Name :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <TextField
                required
                id="fullname"
                name="fullname"
                fullWidth
                margin="dense"
                {...register("fullname")}
                error={errors.fullname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message}
              </Typography>
            </Grid>
            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Title :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <TextField
                required
                id="Title"
                name="Title"
                fullWidth
                variant="standard"
                margin="dense"
                {...register("Title")}
                error={errors.Title ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.username?.message}
              </Typography>
            </Grid>

            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Gender :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ marginTop: 2 }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="transgender"
                    control={<Radio />}
                    label="Transgender"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Email :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <TextField
                required
                id="email"
                name="email"
                fullWidth
                variant="standard"
                margin="dense"
                {...register("email")}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>

            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Phone No:
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <TextField
                required
                id="phone"
                name="phone"
                fullWidth
                variant="standard"
                type={"number"}
                margin="dense"
                {...register("Phone No")}
                error={errors.Title ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.username?.message}
              </Typography>
            </Grid>

            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Country :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <FormControl sx={{ minWidth: 330 }}>
                <Select
                  value={city}
                  onChange={handleChange}
                  displayEmpty
                  variant="standard"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Test</MenuItem>
                  <MenuItem value={20}>Test</MenuItem>
                  <MenuItem value={30}>Test</MenuItem>
                  <MenuItem value={30}>Test</MenuItem>
                  <MenuItem value={30}>Test</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                State:
              </Typography>
            </Grid>
            <Grid item xs={8} sm={4}>
              <FormControl sx={{ minWidth: 330 }}>
                <Select
                  value={city}
                  onChange={handleChange}
                  displayEmpty
                  variant="standard"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Test</MenuItem>
                  <MenuItem value={20}>Test</MenuItem>
                  <MenuItem value={30}>Test</MenuItem>
                  <MenuItem value={30}>Test</MenuItem>
                  <MenuItem value={30}>Test</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                City:
              </Typography>
            </Grid>

            <Grid item xs={8} sm={4}>
              <FormControl sx={{ minWidth: 330 }}>
                <Select
                  value={city}
                  variant="standard"
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={10}>Test</MenuItem>
                  <MenuItem value={20}>Test</MenuItem>
                  <MenuItem value={30}>Test</MenuItem>
                  <MenuItem value={30}>Test</MenuItem>
                  <MenuItem value={30}>Test</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                DOB :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <DatePicker />
            </Grid>

            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Password :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <TextField
                required
                id="password"
                name="password"
                variant="standard"
                type="password"
                fullWidth
                margin="dense"
                {...register("password")}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3} sx={{ marginLeft: "30%" }}>
            <Button
              variant="outlined"
              onClick={handleSubmit(onSubmit)}
              sx={{ width: 400, height: 50 }}
              style={{
                borderColor: "#ffffff",
                color: "white",
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfileEditForm;
