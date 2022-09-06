import { useContext, useState, useEffect } from "react";
import {
  InfoCont,
  NavBarMenu,
  NavMenuItem,
  SubMenu,
  BackgroundImage,
  MainImage,
  MovieInfoCont,
  MovieInfoItems,
  MovieDetails,
} from "./MovieInfo.style";
import { MoviesContext } from "../../contexts/moviesContext";
import { getBackgroundImage } from "../../services/moviesInfo";
import getImages from "../../services/images";

const GetYear = (date) => {
  if (!date) return "";
  let year = new Date(date).getFullYear().toString();
  return year;
};

const MovieInfo = () => {
  const { movie } = useContext(MoviesContext);
  const [backgroundImage, setBackgroundImage] = useState();
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    console.log(movie);
    setBackgroundImage(getBackgroundImage(movie.backdrop_path));
    setMainImage(getImages(movie.poster_path));
  }, []);
  return (
    <InfoCont>
      <NavBarMenu>
        <NavMenuItem>
          <a href="#">Overview</a>
          <SubMenu>
            <a href="#">Main</a>
            <a href="#">Alternative Titles</a>
            <a href="#">Cast & Crew</a>
            <a href="#">Relase Date</a>
            <a href="#">Translations</a>
            <a href="#"></a>
            <a href="#">Changes</a>
          </SubMenu>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Media</a>
          <SubMenu>
            <a href="#">Backdrops</a>
            <a href="#">Logos</a>
            <a href="#">Posters</a>
            <a href="#">Relase Date</a>
            <a href="#">Videos</a>
          </SubMenu>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Fandom</a>
          <SubMenu>
            <a href="#">Discussions</a>
            <a href="#">Reviews</a>
          </SubMenu>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Share</a>
          <SubMenu>
            <a href="#">Share Link</a>
            <a href="#">Facebook</a>
            <a href="#">Tweet</a>
          </SubMenu>
        </NavMenuItem>
      </NavBarMenu>
      <BackgroundImage image={backgroundImage}>
        <MovieInfoCont>
          <MovieInfoItems>
            <MainImage src={mainImage} />
            <MovieDetails>
              <h1>
                {movie.title} <span>({GetYear(movie.release_date)})</span>
              </h1>
            </MovieDetails>
          </MovieInfoItems>
        </MovieInfoCont>
      </BackgroundImage>
    </InfoCont>
  );
};

export default MovieInfo;
