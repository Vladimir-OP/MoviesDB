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

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { filter, applyFilter } = useContext(MoviesContext);

  useEffect(() => {
    (async () => {
      const { results } = await getMovies();
      setMovies(results);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const newMovies = await getMovies(page,filter.value);
      movies.unshift(...newMovies.results);
    })();
  }, [page]);

  useEffect(() => {
    (async () => {
      const {results} = await getMovies(page, filter.value);
      setMovies(results);
    })();
  },[applyFilter]);
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
