import { Button, Container } from "@mui/material";
import React ,{useState,useEffect}from "react";
import Box from "@mui/material/Box";
import axios  from "axios";
import ProfileCard from "../Components/profileComponents/ProfileCard"
import ProfilePosterSlider from "../Components/profileComponents/ProfilePosterSlider";
import { styled } from "@mui/material/styles";
import MoviePosterSlider from "../Components/profileComponents/MoviePosterSlider";
import { useSelector, useDispatch } from "react-redux";

const ProfilePage = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userAuth.user);


  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=a3c9d74d7b143516baae458fa05dedda"
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    axios.get(API_URL).then((response)=>{
      setMovies(response.data.results)
    })
  },[])
  const ProfileContainer = styled(Container)(({ theme }) => ({
    padding: 10,
  }));
  return (
    <div>
      <ProfileCard user={userData.data} />
      <ProfilePosterSlider movies={movies} />
      <MoviePosterSlider movies={movies} />
    </div>
  );
};

export default ProfilePage;
