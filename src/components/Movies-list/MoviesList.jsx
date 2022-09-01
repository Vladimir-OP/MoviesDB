import React from "react";
import { useState, useEffect } from "react";
import getMovies from "../../services/movies";
import { MoviesCont } from "./MoviesList.style";
import Movie from "../Movie/Movie";
const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await getMovies();
      setMovies(results);
    })();
  }, []);
  return (
    <MoviesCont>
        {movies.length > 0
          ? movies.map((movie) => <Movie key={movie.id} movie={movie} />)
          : "no movies to show"}
    </MoviesCont>
  );
};

export default MoviesList;
