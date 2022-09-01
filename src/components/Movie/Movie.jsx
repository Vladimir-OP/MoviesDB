import React from "react";
import { useState, useEffect } from "react";
import {
  MovieCont,
  ImageCont,
  MoviesConteiner,
  MovieTitle,
  MovieDate,
  PopularityIcon
} from "./Movie.style";
import getImages from "../../services/images";

// customize date in right format
const customizeDate = (dateString) => {
    if (!dateString) return '';
    let date = new Date(dateString).toDateString();
    date = date.split(' ');
    date.pop();
    const [month, day, year] = date;
    return ''.concat(month, ' ', day, ', ', year);
  };


const Movie = ({ movie }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(getImages(movie.poster_path));
    console.log(movie);
  }, []);
  return (
    <MoviesConteiner>
      <MovieCont>
        <ImageCont src={image} />
        <MovieTitle>{movie.original_title}</MovieTitle>
        <MovieDate>{customizeDate(movie.release_date)}</MovieDate>
        <PopularityIcon popularity={movie.vote_average * 10}>
                 {movie.vote_average}
              </PopularityIcon>
      </MovieCont>
    </MoviesConteiner>
  );
};

export default Movie;
