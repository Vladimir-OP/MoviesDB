import styled from "styled-components";

const MainCont = styled.div`
  display: flex;
  max-width: 75rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 48rem) {
    padding: 0;
    justify-content: center;
    justify-content: space-around;
  }
`;

const MoviesCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3rem;
  max-width: 76rem;
  height: auto;

  > div {
    page-break-before: always;
    break-before: always;
  }
  @media screen and (max-width: 48rem) {
    padding: 0;
    justify-content: center;
    justify-content: space-around;
  }
`;

const LoadPage = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  height: 3rem;
  justify-content: center;
  background-color: #3ab3e2;
  margin-top: 3rem;
  border-radius: 0.5rem;
`;

const LoadMoreBtn = styled.h1`
  color: white;
  cursor: pointer;
  font-size: 20px;

  :hover {
    color: black;
  }
`;
export { MoviesCont, LoadPage, MainCont, LoadMoreBtn };
