import React, { Fragment } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import './AdPaymentLanding.scss'
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, description) {
  return { name ,description};
}

const rows = [
  createData('All content', "Yes"),
  createData('Watch on TV or Laptop', "Yes"),
  createData('Ads free movies and shows (except sports)', "Yes"),
  createData('Number of devices that can be logged in', "Yes"),
  createData('Price', "₹356"),
];
const AdPaymentLanding = () => {
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
      <Paper>
        <Box px={1} py={2} mt={5}>
          <Typography variant="h5" align="center">
           Test-Page
          </Typography>

          <TableContainer>
      <Table className="ad-Table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                <Typography variant="h6">  {row.name}</Typography>
              </TableCell>
              <TableCell align="center">  <Typography variant="h6">  {row.description}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          <Box mt={3}  display="flex"
  justifyContent="center" alignItems="center">
            <Button
              variant="outlined"
              onClick={handleSubmit(onSubmit)}
             className="btn-landing"
             style={{
              borderColor: "#ffffff",
              color:"white",
              width:400
            }}

            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
  );
};

export default AdPaymentLanding;
