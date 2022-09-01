import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filter from "./components/FIlters/Filter";
import { Main } from "./components/shared/shared.style";
import MoviesList from "./components/Movies-list/MoviesList";
import { GlobalStyle } from "./components/shared/shared.style";

function App() {
  return (
    <GlobalStyle>
      <Header />
      <Main>
        <Filter />
        <MoviesList />
      </Main>
      <Footer />
    </GlobalStyle>
  );
}

export default App;
