import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetFormatedDate, getRandomPosterImage } from "../../utils/helpingFunc";

import {
  NewMovieForm,
  Title,
  InputName,
  MovieOverview,
  MovieAddBtn,
  NewMovieInput,
} from "./NewMovie.style";

/**
 *  returns new Movie posting form
 * @returns {component}
 */
const NewMovie = () => {
  // keep movie relase date info
  const [startdate, setStartDate] = useState(new Date());
  // keep  movie title
  const [original_title, serOriginal_title] = useState("");
  // keep overview of movie
  const [overview, setOverview] = useState("");
  // keep original langiage of movie
  const [original_language, setOriginal_language] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // take date about movie and keep it, poster_path and backdrop_path have default values
    const movieData = {
      release_date: GetFormatedDate(startdate),
      original_language,
      original_title,
      overview,
      title: original_title,
      popularity: 0,
      poster_path: getRandomPosterImage(),
      backdrop_path: "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
      vote_average: Math.floor(Math.random() * 10),
    };
    // post new movies
    axios
      .post("http://localhost:3001/newMovie", movieData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    // clear inputs of form
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };
  return (
    <NewMovieForm onSubmit={onSubmit}>
      <Title>Add New Movie</Title>
      <InputName>Movie Name</InputName>
      <NewMovieInput
        onChange={(e) => serOriginal_title(e.target.value)}
        type="text"
        name="moviename"
      />
      <InputName>Relase Date</InputName>
      <div className="form-group">
        <DatePicker
          selected={startdate}
          onChange={(date) => setStartDate(date)}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <InputName>Overview</InputName>
      <MovieOverview
        onChange={(e) => setOverview(e.target.value)}
        type="text"
      />
      <InputName>Original Language</InputName>
      <NewMovieInput
        onChange={(e) => setOriginal_language(e.target.value)}
        type="text"
        name="language"
      />
      <MovieAddBtn
        type="submit"
        onClick={() => {
        }}
      >
        Add Movie
      </MovieAddBtn>
    </NewMovieForm>
  );
};

export default NewMovie;
