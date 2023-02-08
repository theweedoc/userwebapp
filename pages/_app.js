import "../styles/globals.css";
import "../styles/home.scss";
import "../styles/Card.scss";
import "../styles/Header.scss";
import "../styles/SearchBox.scss";
import "../styles/VideoPlayer.scss";
import "../styles/VideoDetail.scss";

import "../styles/AdDetailsForm.scss";
import "../styles/AdPaymentLanding.scss";

import "react-toastify/dist/ReactToastify.css";

import "../styles/ChipAutoComplete.scss";

import "../styles/ProfileCard.scss";
import "../styles/ProfilePage.scss";
import "../styles/ProfilePosterSlider.scss";

import "../styles/DropDownC.scss";

import "../styles/CastAndCrew.scss";
import "../styles/CandC.scss";
import "../styles/VideoDetailsForm.scss";

//
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Theme } from "../Theme";
import Header from "../Components/Widget/Header";
import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/store";
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  
  return (
    <React.Fragment>
      <Head>
      <title>WeeDoc</title>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

      </Head>
    
      <ThemeProvider theme={Theme}>

        <CssBaseline /><Provider store={store}>  <Header /> <Component {...pageProps} /><ToastContainer      position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover/> </Provider>{" "}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
