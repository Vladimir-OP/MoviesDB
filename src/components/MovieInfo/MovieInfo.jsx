import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots,faHeart,faBookmark,faStar } from "@fortawesome/free-solid-svg-icons";
import {
  InfoCont,
  NavBarMenu,
  NavMenuItem,
  SectionIcons,
  SubMenu,
  BackgroundImage,
  SectionIconsItem,
  MainImage,
  MovieInfoCont,
  UnderContent,
  MovieInfoItems,
  MovieDetails,
  NumberInfo,
  SecondSection,
  PrecnetInfo,
  PopularityIconInfo,
  FirstSection,
  ScoreInfo,
} from "./MovieInfo.style";
import { MoviesContext } from "../../contexts/moviesContext";
import { getBackgroundImage } from "../../services/moviesInfo";
import getImages from "../../services/images";
import { getMoviesDetails } from "../../services/movies";
import { getOtherInfoAboutMovie } from "../../services/moviesInfo";
import { GetDate } from "../../utils/helpingFunc";
import { MinuteConvert } from "../../utils/helpingFunc";

const MovieInfo = () => {
  const { movie } = useContext(MoviesContext);
  const [backgroundImage, setBackgroundImage] = useState();
  const [mainImage, setMainImage] = useState();
  const [movieInfo, setMovieInfo] = useState();
  const [otherInfo, setOtherInfo] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await getMoviesDetails(movie.id);
        const InfoResponse = await getOtherInfoAboutMovie(movie.id);
        setOtherInfo(InfoResponse);
        console.log(InfoResponse, "other info");
        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      }
    })();
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
                {movie.title} <span>({GetDate(movie.release_date, true)})</span>
              </h1>
              <UnderContent>
                <FirstSection>
                  <span>PG-13</span>
                  <h3>
                    {GetDate(movie.release_date)}(
                    {movie.original_language.toUpperCase()})
                  </h3>
                  <div>
                    <span>&#9679;</span>
                    {movieInfo &&
                      movieInfo.genres.map((gener) =>
                        gener !==
                        movieInfo.genres[movieInfo.genres.length - 1] ? (
                          <a key={gener.name}>{gener.name},</a>
                        ) : (
                          <a key={gener.name}> {gener.name}</a>
                        )
                      )}
                    <span>&#9679;</span>
                    <span>{otherInfo && MinuteConvert(otherInfo.runtime)}</span>
                  </div>
                </FirstSection>
                <SecondSection>
                  <PopularityIconInfo>
                    <PrecnetInfo precent={movie.vote_average * 10}>
                      <svg>
                        <circle cx="25" cy="25" r="25" />
                        <circle cx="25" cy="25" r="25" />
                      </svg>
                      <NumberInfo>
                        {movie.vote_average === 0 ||
                        movie.vote_average === undefined ? (
                          <h2>NA</h2>
                        ) : (
                          <h2>
                            {movie.vote_average * 10}
                            <span>%</span>
                          </h2>
                        )}
                      </NumberInfo>
                    </PrecnetInfo>
                  </PopularityIconInfo>
                  <ScoreInfo>user Score</ScoreInfo>

                  <SectionIcons>
                    <SectionIconsItem>
                      <FontAwesomeIcon icon={faListDots} />
                    </SectionIconsItem>
                    <SectionIconsItem>
                      <FontAwesomeIcon icon={faHeart} />
                    </SectionIconsItem>
                    <SectionIconsItem>
                      <FontAwesomeIcon icon={faBookmark} />
                    </SectionIconsItem>
                    <SectionIconsItem>
                      <FontAwesomeIcon icon={faStar} />
                    </SectionIconsItem>
                  </SectionIcons>
                </SecondSection>
              </UnderContent>
            </MovieDetails>
          </MovieInfoItems>
        </MovieInfoCont>
      </BackgroundImage>
    </InfoCont>
  );
};

export default MovieInfo;
