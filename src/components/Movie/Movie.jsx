import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { MoviesContext } from "../../contexts/moviesContext";
import {
  MovieCont,
  ImageCont,
  MoviesConteiner,
  MovieTitle,
  MovieDate,
  PopularityIcon,
  Precnet,
  Number,
} from "./Movie.style";
import getImages from "../../services/images";

// customize date in right format
const customizeDate = (dateString) => {
  if (!dateString) return "";
  let date = new Date(dateString).toDateString();
  date = date.split(" ");
  date.pop();
  const [month, day, year] = date;
  return "".concat(month, " ", day, ", ", year);
};

/**
 *  create and give styles to all movies individually
 * @param {object} movie
 * @returns
 */
const Movie = ({ movie }) => {
  // keep image information as object
  const [image, setImage] = useState();
  // set movie and keep it in context for other components
  const { setMovie } = useContext(MoviesContext);
  const navigate = useNavigate();

  useEffect(() => {
    // seting image info using movie id
    setImage(getImages(movie.poster_path));
  }, []);

  return (
    <MoviesConteiner>
      <MovieCont>
        <ImageCont src={image} />
        <MovieTitle
          onClick={() => {
            navigate("/movie");
            setMovie(movie);
          }}
        >
          {movie.title}
        </MovieTitle>
        <PopularityIcon>
          <Precnet precent={movie.vote_average * 10}>
            <svg>
              <circle cx="20" cy="20" r="20" />
              <circle cx="20" cy="20" r="20" />
            </svg>
            <Number>
              {movie.vote_average === 0 || movie.vote_average === undefined ? (
                <h2>NA</h2>
              ) : (
                <h2>
                  {movie.vote_average * 10}
                  <span>%</span>
                </h2>
              )}
            </Number>
          </Precnet>
        </PopularityIcon>
        <MovieDate>{customizeDate(movie.release_date)}</MovieDate>
      </MovieCont>
    </MoviesConteiner>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
Movie.defaultProps = {
  movie: {},
};
export default Movie;
