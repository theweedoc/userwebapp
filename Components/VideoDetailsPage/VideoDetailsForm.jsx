import React, { Fragment ,useEffect,useState} from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as Yup from "yup";
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import ImageDropzone from "../Dropzone/ImageDropzone";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const VideoDetailsForm = (props) => {
  
  const [checked, setChecked] = React.useState([1]);


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#121212',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:"20px"
  
  }));
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
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
  
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
            Enter Video Details
          </Typography>

          <Grid container spacing={1}>
            <Grid item  xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="left"  >
                Movie Name:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} >
              <TextField
                required
                id="fullname"
                name="fullname"
                fullWidth
                label="Enter Movie Name"
                margin="dense"
                {...register("fullname")}
                align="left"
                error={errors.fullname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message}
              </Typography>
            </Grid>
            <Grid item  xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Poster :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10.4} mt={2}>
              <ImageDropzone title={"Upload Poster"}/>
            </Grid>

            <Grid item  xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Description :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10.5}>
              <Grid item xs={12} sm={6} mt={3}>
                <TextField
                  id="outlined-multiline-static"
                  label="Enter Description"
                  multiline
                  rows={4}
                  defaultValue="Movie Value"
                  className="descBox"
                />
              </Grid>
              <br />
            </Grid>

            <Grid item  xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Cast And Crew :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10.5}>
            <FormControl sx={{ marginTop: 1, width: 325 }}>
        <InputLabel id="demo-multiple-chip-label">Cast & Crew</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </Grid>

            <Grid item xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Genre :
              </Typography>
            </Grid>
            <Grid item xs={12}
            sm={10.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Stack spacing={3} className="chipauto" >
      <Autocomplete
        multiple
        id="tags-standard"
        options={props.genres}
        getOptionLabel={(option) => option.name}
        placeholder="Genre"
        

        renderInput={(params) => (
          <TextField label={"Select the Genres"}

            {...params}
          />
        )}
      />
    </Stack>
            </Grid>

            <Grid item xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Languages :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10.5}>
              {/* <ChipAutoComplete labelValue="Select The Languages"/> */}
            </Grid>

            <Grid item xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Country :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10.5}>
              <DropDownC label="Select The Country"/>
            </Grid>
            <Grid item xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                State:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <DropDownC label="Select The State"/>
            </Grid>

            <Grid item xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                City:
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <DropDownC label="Select The City"/>
            </Grid>

            <Grid item xs={12}
            sm={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography variant="h6" align="left" sx={{ marginTop: 2 }}>
                Age Barrier :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10.5}>
              <DropDownC label="Select The Age-Barrier"/>
            </Grid>
          </Grid>
          <Grid>
          <Grid item xs={12} sm={6} >
             <Box sx={{border:'1px solid white',borderWidth: 'thin',width:'100%',paddingLeft:2,}} mt={2}
             > <Typography variant="h6" align="left" sx={{ marginTop: 1 }}>
            Terms and Conditions
           </Typography>
           <List sx={{ width: '100%', maxWidth: 360}}>
      {[1, 2, 3].map((value) => (
          <>
        <ListItem
          key={value}
          disableGutters
        
        >
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
          </>
      ))}
    </List>


             </Box>
            </Grid>
          </Grid>

          <Box mt={3}  display="flex"
            justifyContent="center"
            alignItems="center">
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
        </Box>
      </Paper>
    </Container>
  );
};

export default VideoDetailsForm;
// bgcolor: 'background.paper' 