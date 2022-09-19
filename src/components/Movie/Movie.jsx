import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { customizeDate } from "../../utils/helpingFunc";
import { MoviesContext } from "../../contexts/moviesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  MovieCont,
  ImageCont,
  MoviesConteiner,
  MovieTitle,
  MovieDate,
  DeleteBtn,
  PopularityIcon,
  Precnet,
  Number,
} from "./Movie.style";
import getImages from "../../services/images";
import axios from "axios";

// customize date in right format

/**
 *  create and give styles to all movies individually
 * @param {object} movie
 * @returns
 */
const Movie = ({ movie }) => {
  // keep image information as object
  const [image, setImage] = useState();
  // set movie and keep it in context for other components
  const { setMovie, setDeleteMovie,setMovies ,deleteMovie} = useContext(MoviesContext);
  const navigate = useNavigate();

  useEffect(() => {
    // seting image info using movie id
    setImage(getImages(movie.poster_path));
  }, []);


  useEffect(() => {
    // seting movies and geting it from DB
    (async () => {
      await axios
        .post(
          `http://localhost:3001/movies`,
          {},
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          const results = res.data;
          setMovies(results);
        });
    })();
  }, [deleteMovie]);
  return (
    <MoviesConteiner>
      <DeleteBtn
        onClick={() => {
          (async () => {
            console.log(movie.id);
            axios.delete("http://localhost:3001/deleteMovie", {
              data: { id: movie.id },
            });
          })();
          setMovie(movie);
          setDeleteMovie((prev) => ++prev);
        }}
      >
        <FontAwesomeIcon icon={faClose} />
      </DeleteBtn>

      <MovieCont>
        <ImageCont src={image} />
        <MovieTitle
          onClick={() => {
            navigate("/movie");
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
