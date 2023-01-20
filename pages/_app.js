import "../styles/globals.css";
import "../styles/home.scss";
import "../styles/Card.scss";
import "../styles/Header.scss";
import "../styles/SearchBox.scss";
import "../styles/VideoPlayer.scss";
import "../styles/VideoDetail.scss";

import "../styles/AdDetailsForm.scss";
import "../styles/AdPaymentLanding.scss";


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
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
   
      <ThemeProvider theme={Theme}>
        <CssBaseline /> <Header /> <Component {...pageProps} />{" "}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
