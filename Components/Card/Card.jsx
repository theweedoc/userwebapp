import React from "react";

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
