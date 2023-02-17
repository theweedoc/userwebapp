import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import { Container, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProfilePosterSlider = (props) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";


  const ProfileCard = styled(Card)(({ theme }) => ({
    padding: 40,
  }));
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //
  return (
    <Container>
      <div style={{padding:40}}>
        <h2>Posters</h2>
        <Slider {...settings}>
          <div>
            <img
              src="plus.png"
              width={"330px"}
              height={"340px"}
              className="poster__Image"
            />
          </div>
          {props.movies.map((singleMovie,i) => {
            return (
              <div key={i}>
                <img
                  src={API_IMG + singleMovie.poster_path}
                  width={"330px"}
                  height={"340px"}
                  className="poster__Image"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </Container>
  );
};

export default ProfilePosterSlider;
