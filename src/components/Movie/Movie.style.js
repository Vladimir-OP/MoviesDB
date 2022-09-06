import styled from "styled-components";

const MoviesConteiner = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 7rem;
  margin-right: 3rem;
  border-radius: 3rem;
  @media screen and (max-width: 32rem) {
    margin: 0;
    justify-content: space-between;
  }
`;
const MovieCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 11.25rem;
  height: 23rem;
  box-shadow: 2px 2px 16px #e3e3e3;
  background: white;
  border-radius: 0.5rem;
`;
const ImageCont = styled.img`
  height: auto;
  width: 11.25rem;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const MovieTitle = styled.p`
  cursor: pointer;
  padding-left: 0.5rem;
  font-weight: 700;
  max-width: 9rem;
  font-size: 0.9rem;
  margin: 0;
  margin-top: 1.5rem;
  min-height: 2rem;

  :hover{
    color:#3ab3e2
  }
`;

const MovieDate = styled.p`
  padding-left: 0.5rem;
  font-weight: 200;
  font-size: 0.9rem;
`;

const PopularityIcon = styled.div(() => {
  return `
  margin-top:15.5rem;
  position:absolute;
  width:40px;
  height:40px;
  display:flex;
  justify-content:center; 
  align-items:center;
  background:black;
  border-radius: 50%;
  margin-left: 0.3rem;
  `;
});

const Precnet = styled.div(({ precent }) => {
  const calc = (popularity) => {
    return 100 - (100 * popularity) / 100;
  };

  const collor1 = (precent) => {
    if (precent > 75) {
      return "#6cc927";
    } else if (precent <= 75 && precent > 50) {
      return "#9fc929";
    } else if (precent <= 50 && precent >= 35) {
      return "#c6b528";
    } else if (precent < 35) {
      return "#c1521d";
    }
  };

  const collor2 = (precent) => {
    if (precent > 75) {
      return "#3b7220";
    } else if (precent <= 75 && precent >= 50) {
      return " #547321";
    } else if (precent < 50 && precent > 35) {
      return "#546d20";
    } else if (precent < 40) {
      return " #65371d";
    }
  };
  return `

> svg {
  position: absolute;
  width: 50px;
  height: 50px;
  top: -7px;
  left: -6px;
  > circle {
    width: 50px;
    height: 50px;
    fill: none;
    stroke-width: 3;
    stroke: #000;
    transform: translate(5px, 5px);
    stroke-dasharray: 120;
    stroke-dashoffset: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
  }
  circle:nth-child(1) {
    stroke-dashoffset 0;
    stroke:${collor2(precent)} ;
  }
  circle:nth-child(2) {
    stroke-dashoffset: ${calc(precent)};
    stroke: ${collor1(precent)};
  }
}
`;
});
const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  > h2 {
    color: white;
    font-size: 14px;
    position: absolute;
    left: 10px;
    > span {
      font-size: 9px;
      position: absolute;
    }
  }
`;
export {
  MoviesConteiner,
  MovieDate,
  ImageCont,
  MovieCont,
  MovieTitle,
  PopularityIcon,
  Precnet,
  Number,
};
