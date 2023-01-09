import React, { Fragment, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import "./AdDetailsForm.scss";
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
import DynamicInput from "../../Components/DynamicInput/DynamicInput";
import ChipAutoComplete from "../../Components/ChipAutoComplete/ChipAutoComplete";
import DropDownC from "../../Components/DropDownC/DropDownC";

const AdDetailsForm = () => {
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

  const [city, setCity] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Paper>
      <Box px={3} py={2}>
        <Typography variant="h5" align="center">
          Enter Advertisement Details
        </Typography>

        <Grid container spacing={1}>
          <Grid
            item
            xs={3}
            sm={1.6}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
              Title :
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={10}
            sx={{ display: { xs: "block", md: "block" } }}
          >
            <TextField
              required
              id="title"
              name="title"
              fullWidth
              label="Enter your title"
              margin="dense"
              {...register("title")}
              align="left"
              error={errors.fullname ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.fullname?.message}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <label htmlFor="btn-upload">
              <input
                id="btn-upload"
                name="btn-upload"
                style={{ display: "none" }}
                type="file"
              />
              <Button
                className="upload-btn"
                component="span"
                variant="outlined"
                style={{
                  borderColor: "#ffffff",
                  color: "white",
                }}
              >
                <FileUploadIcon></FileUploadIcon> Upload Your Poster
              </Button>
            </label>
          </Grid>

          <Grid
            item
            xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
              Description :
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10.5}>
            <Grid item xs={6} sm={6} mt={3}>
              <TextField
                id="outlined-multiline-static"
                label="Write Your Description"
                multiline
                sm={12}
                rows={4}
                className="description"
                defaultValue="Movie Value"
              />
            </Grid>
          </Grid>

          {/* <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Cast And Crew :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <DynamicInput />
            </Grid> */}

          <Grid
            item
            xs={3}
            sm={1.5}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
              Category :
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10.5}>
            <Stack spacing={3}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={Genre}
                getOptionLabel={(option) => option.type}
                placeholder="Genre"
                className="category"
                renderInput={(params) => (
                  <TextField label="Category" {...params} />
                )}
              />
            </Stack>
          </Grid>

          <Grid
            item
            xs={3}
            sm={1.5}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
              Languages :
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10.5}>
            <Stack spacing={3}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={Genre}
                getOptionLabel={(option) => option.type}
                placeholder="Genre"
                className="languages"
                renderInput={(params) => (
                  <TextField label="Languages" {...params} />
                )}
              />
            </Stack>
          </Grid>

          <Grid
            item
            xs={3}
            sm={1.5}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
              Country :
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10.5}>
            <DropDownC label="Select Your State" />
          </Grid>
          <Grid item xs={3} sm={1.5}>
            <Typography
              variant="h6"
              align="left"
              sx={{ marginTop: 2, display: { xs: "none", md: "block" } }}
            >
              State:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <DropDownC label="Select Your State" />
          </Grid>

          <Grid item xs={12} sm={1.5}>
            <Typography
              variant="h6"
              align="center"
              sx={{ marginTop: 2, display: { xs: "none", md: "block" } }}
            >
              City:
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <DropDownC label="Select Your City" />
          </Grid>

          <Grid item xs={3} sm={1.5}>
            <Typography
              variant="h6"
              align="left"
              sx={{ marginTop: 2, display: { xs: "none", md: "block" } }}
            >
              Age Barrier :
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10.5}>
            <DropDownC label="Select Your Age Barrier" />
          </Grid>
        </Grid>
        <Grid></Grid>
        <Grid
          item
          xs={12}
          sm={10.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box mt={3}>
            <Button
              variant="outlined"
              onClick={handleSubmit(onSubmit)}
              className="ad-formbtn"
              style={{
                borderColor: "#ffffff",
                color: "white",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Box>
    </Paper>
  );
};

export default AdDetailsForm;
const Genre = [
  { type: "Action" },
  { type: "Thriller" },
  { type: "Romance" },
  { type: "SuperHero" },
  { type: "Art" },
  { type: "Comedy" },
  { type: "Science Friction" },
  { type: "Tamil" },
  { type: "English" },

  ,
];
