import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


import { CardActionArea } from "@mui/material";
import { useState } from "react";
import Chip from "@mui/material/Chip";
const Card = ({ movie }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card">
      <img src={API_IMG + movie.poster_path} />
      <div className="card__info">
        <h1>{movie.title}</h1>

      </div>
    </div>
  );
};

export default Card;
