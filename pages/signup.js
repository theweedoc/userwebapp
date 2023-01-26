import React, { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useNavigate } from "react-router-dom";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
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
import DatePicker from "../Components/DateModule/DatePicker";
import DynamicInput from "../Components/DynamicInput/DynamicInput";
import ChipAutoComplete from "../Components/ChipAutoComplete/ChipAutoComplete";
import DropDownC from "../Components/DropDownC/DropDownC";

const SignUp = () => {
  const dispatch = useDispatch()
  // const navigate =useNavigate()
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    name: Yup.string().required("name is required"),
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
  

  const onSubmit =  (data) => {
    console.log(data)
    console.log("asdasd");


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
                required
                id="email"
                name="email"
                value="email"
                fullWidth
                margin="dense"
                {...register("email")}
                align="left"
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

            {/* <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Cast And Crew :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10.5}>
              <DynamicInput />
            </Grid> */}

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
                id="confirmPassword"
                name="confirmPassword"
                fullWidth
                margin="dense"
                {...register("confirmPassword")}
                align="left"
               
              />
              {/* <Typography variant="inherit" color="textSecondary">
                {errors.confirmPassword?.message}
              </Typography> */}
               {/* error={errors.fullname ? true : false} */}
            </Grid>
            <Grid item xs={3} sm={2}>
          <Typography variant="h6" align="left"  sx={{marginTop:2}}>
          Gender :
          </Typography>
          </Grid>
            <Grid item xs={8} sm={10}>
            <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{marginTop:2}}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="transgender" control={<Radio />} label="Transgender" />
      </RadioGroup>
    </FormControl>
            </Grid> 

            <Grid item xs={3} sm={2}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Country :
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10}>
              <DropDownC />
            </Grid>
            <Grid item xs={3} sm={2}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                State:
              </Typography>
            </Grid>
            <Grid item xs={8} sm={4}>
              <DropDownC />
            </Grid>

            <Grid item xs={3} sm={1.5}>
              <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                City:
              </Typography>
            </Grid>

            <Grid item xs={8} sm={4}>
              <DropDownC />
            </Grid>



          </Grid>
          <Grid>
          </Grid>

          <Box mt={3} sx={{ marginLeft: "35%" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#ffffff",
                width:400
              }}
              type="submit"
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
