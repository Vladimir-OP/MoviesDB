import React from "react";
import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { useState, useEffect } from "react";
import Movie from "../Movie/Movie";
import {
  MoviesCont,
  LoadPage,
  MainCont,
  LoadMoreBtn,
} from "./MoviesList.style";
import getMovies from "../../services/movies";
import axios from "axios";

/**
 * take all movies from Db and give single style for them
 * @returns {component}
 */
const MoviesList = () => {
  // keep all movies
  // keep info about page for pagination
  const [page, setPage] = useState(1);
  // take filter info from context
  const { filter, applyFilter, movies, setMovies, deleteMovie } =
    useContext(MoviesContext);

  useEffect(() => {
    // seting movies and geting it from DB
    (async () => {
      await axios
        .get(`http://localhost:3001/movies`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          const results = res.data;
          setMovies(results);
        });
    })();
  }, []);

  useEffect(() => {
    // applay filter and sort movies by it
    if (applyFilter != 1) {
      axios
        .post(
          `http://localhost:3001/filter`,
          { filter },
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
    }
  }, [applyFilter]);

  return (
    <MainCont>
      <MoviesCont>
        {movies.length > 0
          ? movies.map((movie) => <Movie key={movie.id} movie={movie} />)
          : "no movies to show"}
      </MoviesCont>
      <LoadPage>
        <LoadMoreBtn
          onClick={() => {
            movies.sort((a, b) => {
              return a.popularity - b.popularity;
            });
            setPage((prev) => ++prev);
          }}
        >
          Load More
        </LoadMoreBtn>
      </LoadPage>
    </MainCont>
  );
};

export default MoviesList;
