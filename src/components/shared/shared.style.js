import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: var(--maxPrimaryPageWidth);
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;

  max-width: var(--maxPrimaryPageWidth);
  width: 100%;
  padding: 0 2.5rem;
  box-sizing: border-box !important;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  margin-top: 5rem;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerVertical = styled(Container)`
  align-items: flex-start;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 34rem) {
    flex-direction: column !important;
  }
`;

const Icon = styled.div(
  ({ white }) => `
  min-width: 1.5rem;
  min-height: 1.5rem;
  justify-content: center;
  align-content: center;
  display: flex;
  
  ${
    white &&
    `img {
      filter: invert(1);
    }`
  }

  :hover {
    cursor: pointer;
  }
`
);
const GlobalStyle = styled.div`

  margin: 0 auto;
`;
export { Container, Icon, GlobalStyle, Main, Content, ContainerVertical };
