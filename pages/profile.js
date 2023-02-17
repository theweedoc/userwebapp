import { Button, Container } from "@mui/material";
import React ,{useState,useEffect, Fragment}from "react";
import Box from "@mui/material/Box";
import axios  from "axios";
import ProfileCard from "../Components/profileComponents/ProfileCard"
import ProfilePosterSlider from "../Components/profileComponents/ProfilePosterSlider";
import { styled } from "@mui/material/styles";
import MoviePosterSlider from "../Components/profileComponents/MoviePosterSlider";
import { useSelector, useDispatch } from "react-redux";
import ProfileEditForm from "../Components/profileComponents/ProfileEditForm";

const ProfilePage = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.profileData.user);


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
  const profileEditClicked = useSelector((state)=>state.profileData.profileEdit)
  return (
    <div className="profile__usercard">
     <Container sx={{ border: "1px dotted white" }} style={{paddingBottom:2,marginBottom:10}}> <ProfileCard user={userData.data} /></Container> 
     {profileEditClicked ===false ?( <Container sx={{ border: "1px dotted white" }}><ProfilePosterSlider  movies={movies} />
      <MoviePosterSlider movies={movies} /></Container>):(
         <Container sx={{ border: "1px dotted white" }}> <ProfileEditForm /> </Container>)}
    </div>
  );
};

export default ProfilePage;
