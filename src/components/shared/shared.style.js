import styled from 'styled-components';

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

export{Container,Icon}