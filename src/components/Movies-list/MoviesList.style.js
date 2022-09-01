import styled from "styled-components";

const MoviesCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 3rem;
  max-width: 76rem;
  

  @media screen and (max-width: 48rem) {
    padding: 0;
    justify-content: center;
    justify-content: space-around;
  }
`;

export { MoviesCont };
