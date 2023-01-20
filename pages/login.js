import React, { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
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
import DatePicker from "../Components/DateModule/DatePicker";
import DynamicInput from "../Components/DynamicInput/DynamicInput";
import ChipAutoComplete from "../Components/ChipAutoComplete/ChipAutoComplete";
import DropDownC from "../Components/DropDownC/DropDownC";

const Login = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    profilename: Yup.string().required("Profilename Should be Unique"),
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
      <Paper sx={{ height: 500 }}>
        <Box px={3} py={2} mt={5} sx={{ padding: 8 }}>
          <Typography variant="h4" align="center" mb={5}>
            Login
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
              onClick={handleSubmit(onSubmit)}
              style={{
                backgroundColor: "#ffffff",
                width: 400,
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
