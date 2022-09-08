import { useContext, useState, useEffect } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import getImages from "../../services/images";
import { MinuteConvert, GetDate } from "../../utils/helpingFunc";
import {
  getOtherInfoAboutMovie,
  getBackgroundImage,
} from "../../services/moviesInfo";
import { getMoviesDetails } from "../../services/movies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListDots,
  faHeart,
  faBookmark,
  faStar,
  faPlay,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  InfoCont,
  NavBarMenu,
  NavMenuItem,
  ThirdSection,
  SectionIcons,
  SubMenu,
  BackgroundImage,
  SectionIconsItem,
  MainImage,
  MovieInfoCont,
  UnderContent,
  MovieInfoItems,
  MovieOverview,
  MovieDetails,
  NumberInfo,
  SecondSection,
  PrecnetInfo,
  PopularityIconInfo,
  FirstSection,
  TagLine,
  ScoreInfo,
  UserScore,
  PlayTrailerBtn,
} from "./MovieInfo.style";
/**
 * Creates MovieInfo components and keep main information about movie 
 * @returns {componetn}
 */
const MovieInfo = () => {
  // take movie information from context
  const { movie } = useContext(MoviesContext);
  // keep background image information
  const [backgroundImage, setBackgroundImage] = useState();
  // keep main image information
  const [mainImage, setMainImage] = useState();
  // keep information about Movie
  const [movieInfo, setMovieInfo] = useState();
  // keep other information about movie
  const [otherInfo, setOtherInfo] = useState();

  useEffect(() => {
    (async () => {
      try {
        // take information about movie details
        const response = await getMoviesDetails(movie.id);
        // get other information aboot movie
        const InfoResponse = await getOtherInfoAboutMovie(movie.id);
        setOtherInfo(InfoResponse);
        setMovieInfo(response);
      } catch (error) {
        console.log(error);
      }
    })();
    //set Backgroun image taken from DB
    setBackgroundImage(getBackgroundImage(movie.backdrop_path));
    // set Main Image taken from DB
    setMainImage(getImages(movie.poster_path));
  }, []);

  return (
    <InfoCont>
      <NavBarMenu>
        <NavMenuItem>
          <a href="#">Overview</a>
          <FontAwesomeIcon icon={faCaretDown} />
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
          <FontAwesomeIcon icon={faCaretDown} />
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
          <FontAwesomeIcon icon={faCaretDown} />
          <SubMenu>
            <a href="#">Discussions</a>
            <a href="#">Reviews</a>
          </SubMenu>
        </NavMenuItem>
        <NavMenuItem>
          <a href="#">Share</a>
          <FontAwesomeIcon icon={faCaretDown} />
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
                  <UserScore>
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
                  </UserScore>
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
                    <PlayTrailerBtn>
                      <FontAwesomeIcon icon={faPlay} />
                      <p>Play Trailer</p>
                    </PlayTrailerBtn>
                  </SectionIcons>
                </SecondSection>
                <ThirdSection>
                  <TagLine>{otherInfo && otherInfo.tagline}</TagLine>
                  <h3>Overview</h3>
                  <MovieOverview>
                    <p>{otherInfo && otherInfo.overview}</p>
                  </MovieOverview>
                </ThirdSection>
              </UnderContent>
            </MovieDetails>
          </MovieInfoItems>
        </MovieInfoCont>
      </BackgroundImage>
    </InfoCont>
  );
};

export default MovieInfo;
