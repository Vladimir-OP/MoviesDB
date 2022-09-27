import { useLocation } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { MoviesContextProvider } from "./contexts/moviesContext";
import { Routes, Route } from "react-router-dom";
import NewMovie from "./components/AddNewMovie/NewMovie";

/**
 *  Creates App component configured with main elements of the page
 *  @returns {component} App component including the components of the page
 */
function App() {
  const location = useLocation();
  return (
    <MoviesContextProvider>
      {location.pathname !== "/register" && location.pathname !== "/" && (
        <Header />
      )}

      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/movie" element={<MovieInfo />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="newMovie" element={<NewMovie />} />
      </Routes>
      {location.pathname !== "/register" && location.pathname !== "/" && (
        <Footer />
      )}
    </MoviesContextProvider>
  );
}

export default App;
