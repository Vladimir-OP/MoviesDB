import React from "react";
import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { useState, useEffect } from "react";
import getMovies from "../../services/movies";
import Movie from "../Movie/Movie";
import {
  MoviesCont,
  LoadPage,
  MainCont,
  LoadMoreBtn,
} from "./MoviesList.style";

/**
 * take all movies from Db and give single style for them
 * @returns {component}
 */
const MoviesList = () => {
  // keep all movies
  const [movies, setMovies] = useState([]);
  // keep info about page for pagination
  const [page, setPage] = useState(1);
  // take filter info from context
  const { filter, applyFilter } = useContext(MoviesContext);

  useEffect(() => {
    // seting movies and geting it from DB
    (async () => {
      const { results } = await getMovies();
      setMovies(results);
    })();
  }, []);

  useEffect(() => {
    // get new movies from other page and split it to movies
    (async () => {
      const newMovies = await getMovies(page, filter.value);
      movies.unshift(...newMovies.results);
    })();
  }, [page]);

  useEffect(() => {
    // applay filter and sort movies by it
    (async () => {
      const { results } = await getMovies(page, filter.value);
      setMovies(results);
    })();
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
