import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import { MoviesContextProvider } from "./contexts/moviesContext";
import { Routes, Route } from "react-router-dom";


/**
 *  Creates App component configured with main elements of the page
 *  @returns {component} App component including the components of the page
 */
function App() {
  return (
    <MoviesContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie" element={<MovieInfo />} />
      </Routes>
      <Footer />
    </MoviesContextProvider>
  );
}

export default App;
