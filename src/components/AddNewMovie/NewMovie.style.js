import styled from "styled-components";

const NewMovieForm = styled.form`
  display: flex;
  width: 50rem;
  height: 44rem;
  margin-top: 5rem;
  box-shadow: 1px 1px 8px #e3e3e3;
  margin-left: 32rem;
  flex-direction: column;

  > div {
    margin-left: 5rem;
  }
`;

const MovieOverview = styled.textarea`
  width: 25rem;
  min-height: 5rem;
  height: auto;
  resize: none;
  margin-left: 5rem;
  background-color: #cbc8c8;
`;
const Title = styled.h1`
  color: #0e233f;
  margin-left: 16rem;
`;

const InputName = styled.label`
  color: steelblue;
  display: block;
  margin-left: 5rem;
  margin-top: 4rem;
`;

const NewMovieInput = styled.input`
  width: 25rem;
  height: 2.5rem;
  margin: 0.25rem 0;
  padding: 0 0.5rem;
  font-size: 1rem;
  background-color: #cbc8c8;
  border: none;
  margin-left: 5rem;

  :focus {
    outline: none !important;
  }
`;

const MovieAddBtn = styled.button`
  width: 7rem;
  height: 2rem;
  dispaly: flex;
  align-items: center;
  justify-content: center;
  background: #0e233f;
  align-self: flex-end;
  margin-right: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white;
`;
export {
  NewMovieForm,
  MovieAddBtn,
  Title,
  InputName,
  MovieOverview,
  NewMovieInput,
};
