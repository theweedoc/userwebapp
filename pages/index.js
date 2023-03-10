import React from "react";
import Card from "../Components/Card/Card";
import { useState } from "react";
import { Box } from "@mui/system";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const MTTBox = styled(Box)(({ theme }) => {
  return {
    paddingRight: theme.spacing(2.5),
    marginTop: theme.spacing(2),
  };
});

const MTTGrid = styled(Grid)(({ theme }) => {
  return {};
});
const Home = (props) => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a3c9d74d7b143516baae458fa05dedda";
  const [movies, setMovies] = useState(props.movies);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  return (
    <MTTBox
      xs={{ marginLeft: 0 }}
      sx={{ flexGrow: 1, marginLeft: 6, marginRight: 3 }}
    >
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        {movies.map((item, index) => {
          return (
            <Grid xs={4} sm={4} md={4} key={index}>
              <Link href={`/video/${item.title}`} style={{ textDecoration: "none" }}>
                <Card movie={item} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </MTTBox>
  );
};

export default Home;
export async function getStaticProps() {
  const resposne = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=a3c9d74d7b143516baae458fa05dedda"
  ).then((response) => response.json());
  console.log("apida", resposne.results);
  const movieResponse = resposne.results;
  return {
    props: {
      movies: movieResponse,
    },
  };
}
