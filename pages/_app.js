import '../styles/globals.css'
import '../styles/home.scss'
import '../styles/Card.scss'
import '../styles/Header.scss'
import '../styles/SearchBox.scss'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Theme } from '../Theme';
import Header from '../Components/Widget/Header'
function MyApp({ Component, pageProps }) {
  return (   <ThemeProvider theme={Theme}>
    <CssBaseline/> <Header/>     <Component {...pageProps} /> </ThemeProvider> )     
}

export default MyApp
