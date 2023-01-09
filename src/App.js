import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Components/Widget/Header'
import SearchBox from './Components/Search/SearchBox';
import Home from './Pages/Home/Home'
import ProfileSearchPage from './Pages/ProfileSearchPage/ProfileSearchPage';
import VideoDetailsPage from './Pages/VideoDetailsPage/VideoDetailsPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,useParams
} from "react-router-dom";
import axios from "axios";
import AdUpload from './Pages/AdUploadPage/AdUpload';

import VideoDetail from './Pages/VideoDetail/VideoDetail';
import VideoSearchPage from './Pages/VideoSearchResults/VideoSearchResults';
import ProfileCard from './Pages/ProfilePage/ProfileCard';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ProfileEditPage from './Pages/ProfilePage/ProfileEditPage';
import DynamicInput from './Components/DynamicInput/DynamicInput';
import SignUp from './Pages/RegistrationPage/SignUp';
import Login from './Pages/LoginPage/Login';
import OTPPage from './Pages/RegistrationPage/OTPPage';
function App() {
  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=a3c9d74d7b143516baae458fa05dedda"
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(API_URL).then((response)=>{
      setMovies(response.data.results)
    })
  },[])

  //ProfileSearchPage
  return (
    <div>

       <Router>
       <Header/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/video" element={<VideoDetail/>}></Route>
        <Route path="/videoresults" element={<VideoSearchPage/>}></Route>
        <Route path="/profile" element={<ProfilePage movies={movies}/>}></Route>
        <Route path="/profileresults" element={<ProfileSearchPage/>}></Route>
        <Route path="/profileedit" element={<ProfileEditPage/>}></Route>
        <Route path="/videoupload" element={<VideoDetailsPage/>}></Route>
        <Route path="/adupload" element={<AdUpload/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/otp" element={<OTPPage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>









      </Routes>
    </Router>
    </div>
  );
}

export default App;
