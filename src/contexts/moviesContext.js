import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
// context to share data realted to user
export const MoviesContext = createContext();

/**
 * Creates context provider to serve as a one source of shared data between different components on different levels
 * @param {node} children
 * @returns {contextProvider} Context provider containing the children with shared data
 */
export function MoviesContextProvider({ children }) {
  // default filter for movies
  const DefaultFilter = {
    id: 1,
    value: "popularity.desc",
    name: "Popularity Descending",
  };

  const [filter, setFilter] = useState(DefaultFilter);
  const [movie, setMovie] = useState();
  const [applyFilter, setApplyFilter] = useState(1);
  const [registrationSection, setRegistrationSection] = useState(false);
  const [user, setUser] = useState([]);
  const [deleteMovie, setDeleteMovie] = useState(1);
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider
      value={{
        user,
        deleteMovie,
        movies,
        setDeleteMovie,
        setMovies,
        registrationSection,
        setRegistrationSection,
        filter,
        setUser,
        setFilter,
        applyFilter,
        setApplyFilter,
        movie,
        setMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

MoviesContextProvider.propTypes = {
  children: PropTypes.node,
};
