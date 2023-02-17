import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Paper, Box, Typography, Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(name, description) {
  return { name, description };
}

const rows = [
  createData("All content", "Yes"),
  createData("Watch on TV or Laptop", "Yes"),
  createData("Ads free movies and shows (except sports)", "Yes"),
  createData("Number of devices that can be logged in", "Yes"),
  createData("Price", "₹356"),
];
const AdPaymentLanding = () => {
  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: "100", 
    name: "The WeeDoc",
    description: "Test",
    image: "logo.png",
    handler: function(response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: "Kishore",
      contact: "1234567890",
      email: "demo@demo.com"
    },
    notes: {
      address: "test Address"
    },
    theme: {
      color: "#2E2E2E",
      hide_topbar: false
    }
  };

  const openPayModal = options => {
    var razorpayment = new window.Razorpay(options);
    razorpayment.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);


  const {
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Hi am data');
    openPayModal(options);
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
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography variant="h6"> {row.name}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Typography variant="h6"> {row.description}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={3} display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="outlined"
            onClick={handleSubmit(onSubmit)}
            className="btn-landing"
            style={{
              borderColor: "#ffffff",
              color: "white",
              width: 400,
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
