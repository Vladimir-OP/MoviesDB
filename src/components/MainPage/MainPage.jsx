import React from "react";
import Filter from "../FIlters/Filter";
import MoviesList from "../Movies-list/MoviesList";
import { GlobalStyle } from "../shared/shared.style";
import { Main } from "../shared/shared.style";

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
