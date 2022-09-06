import React, { createContext, useState, useEffect, useMemo } from "react";

const MoviesContext = createContext();
export { MoviesContext };

export function MoviesContextProvider({ children }) {
  const DefaultFilter = {
    id: 1,
    value: "popularity.desc",
    name: "Popularity Descending",
  };
  const [filter, setFilter] = useState(DefaultFilter);
  const [movie, setMovie] = useState();
  const [applyFilter, setApplyFilter] = useState(1);

  return (
    <MoviesContext.Provider
      value={{
        filter,
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
