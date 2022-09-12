import React from "react";
import Filter from "../FIlters/Filter";
import MoviesList from "../Movies-list/MoviesList";
import { GlobalStyle } from "../shared/shared.style";
import { Main } from "../shared/shared.style";

/**
 *  collect and keep all components that main page need
 * @returns {component}
 */
const MainPage = () => {
  return (
    <GlobalStyle>
      <Main>
        <Filter />
        <MoviesList />
      </Main>
    </GlobalStyle>
  );
};

export default MainPage;
