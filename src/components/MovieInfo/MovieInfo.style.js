import styled from "styled-components";

const InfoCont = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 48rem) {
    padding: 0;
    justify-content: center;
    justify-content: space-around;
    height: 100%;
  }
`;
const MovieInfoItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15rem;
  @media screen and (max-width: 48rem) {
    padding: 0;
    justify-content: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 0;
  }
`;
const BackgroundImage = styled.div(
  ({ image }) =>
    `
background-image:url("${image}");
background-size: cover;
width:100%;
height:32rem;
dsiplay:flex;


@media screen and (max-width: 48rem) {

  width:100%;
  z-index:100;
  background-size: none;
  max-width: 33rem;
  height: auto;
  min-height: 15rem;
}
`
);

const MovieInfoCont = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(52.5, 52.5, 94.5, 1) 150px,
    rgba(52.5, 52.5, 94.5, 0.84) 100%
  );
  @media screen and (max-width: 48rem) {
    flex-direction: column;
  }
`;
const NavBarMenu = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;

const SubMenu = styled.div`
  margin-top: 3rem;
  z-index: 100;
  display: none;
  min-width: 12rem;
  position: absolute;
  top: 4rem;
  color: #212529;
  background-color: #fff;
  box-sizing: border-box;
  border: 0.063rem solid #00000026;
  border-radius: 0.25rem;
  padding: 0.25rem 0;

  a {
    color: black !important;
    line-height: 1.5rem;
    font-stretch: 100%;
    font-style: normal;
    font-weight: 400;
    max-height: 51.625rem;
    overflow: auto;
    font-size: 0.8rem;
    font-family: "Source Sans Pro", Arial, sans-serif;
    transform: translateY(0);
    padding: 0 1.5rem !important;

    :hover {
      background: #21252908;
    }
  }
`;
const NavMenuItem = styled.li`
margin-right: 1.875rem;
display:flex;
align-items:center;
  a {
    display: flex;
    align-items: center;
    white-space: nowrap;
    height: 2.5rem;
    padding: 0.5rem 0.5rem;
    color: black;
    text-decoration: none;
    font-size:0.9rem;
  }

  &:hover {
    cursor: pointer;
    ${SubMenu} {
      display: block;
    }
`;

const MainImage = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 0.8rem;

  @media screen and (max-width: 48rem) {
    padding: 0;
    justify-content: center;
    justify-content: space-around;
    border-radius: 0.8rem;
    position: absolute;
    left: 20px;
    width: calc(((100vw / 2.222222) - 40px) / 1.5);
    min-width: calc(((100vw / 2.222222) - 40px) / 1.5);
    height: calc((100vw / 2.222222) - 40px);
    min-height: calc((100vw / 2.222222) - 40px);
    border-radius: var(--imageBorderRadius);
    z-index: 4;
  }
`;

const MovieDetails = styled.div`
  display: flex;
  margin-left: 2rem;
  flex-direction: column;
  align-items: unset !important;
  > h1 {
    margin: unset;
    color: white;
    font-weight: 700;
    > span {
      color: grey;
      font-weight: 450;
    }
  }
`;

const FirstSection = styled.div`
  margin-right: 4rem;
  display: flex;
  > span {
    border: 1px solid white;
    color: grey;
    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    align-content: center;
    padding: 0.06em 4px 0.15em 4px !important;
    line-height: 1;
    border-radius: 2px;
    margin-right: 7px;
  }

  > h3 {
    margin: unset;
    margin-left: 0.2rem;
    color: white;
    font-weight: 100;
    font-size: 1rem;
  }
  > div {
    display: flex;
    align-items: center;

    > span {
      color: white;
      margin-left: 0.3rem;
    }
    > aa {
      margin-left: 0.5rem;
      color: white;
    }
  }
`;

const UnderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PopularityIconInfo = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  border-radius: 50%;
`;

const PrecnetInfo = styled.div(({ precent }) => {
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
  width: 75px;
  height: 75px;
  top: -10px;
  left: -11px;
  > circle {
    position:absolute;
    width: 100px;
    height: 100px;
    fill: none;
    stroke-width: 3;
    stroke: #000;
    transform: translate(10px, 10px);
    stroke-dasharray: 153;
    stroke-dashoffset: 540;
    stroke-dashoffset: 540;
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

const NumberInfo = styled.div`
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
    left: 14px;
    > span {
      font-size: 9px;
      position: absolute;
    }
  }
`;

const SecondSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 25rem;
  align-items: unset;
  position: relative;
  margin-top: 1.5rem;
`;

const ScoreInfo = styled.h2`
  margin: unset;
  color: white;
  margin-left: 1rem;
  width: 5rem;
  font-size: 17px;
`;

const SectionIcons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 48rem) {
    max-width: auto;
  }
`;

const SectionIconsItem = styled.div`
  display: flex;
  align-items: center;
  width: 3rem;
  border-radius: 50%;
  color: white;
  height: 3rem;
  font-size: 13px;
  background: #092440;
  justify-content: center;
  margin-left: 1rem;
  cursor: pointer;
`;

const PlayTrailerBtn = styled.div`
  display: flex;
  margin-left: 2rem;
  color: white;
  font-size: 20px;
  align-items: center;
  > p {
    margin: unset;
    font-size: 16px;
    width: 6rem;
    margin-left: 1rem;
  }
`;

const ThirdSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > h3 {
    color: white;
    margin: unset;
    margin-top: 1rem;
  }
`;

const TagLine = styled.p`
  color: #fff;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;
`;

const MovieOverview = styled.div`
  width: 66rem;
  height: auto;
  color: white;
  @media screen and (max-width: 48rem) {
    width: 100%;
  }
`;

const UserScore = styled.div`

display:flex
position:relative;
`;
export {
  ThirdSection,
  UserScore,
  InfoCont,
  SectionIcons,
  MovieOverview,
  TagLine,
  PlayTrailerBtn,
  UnderContent,
  SecondSection,
  NavBarMenu,
  BackgroundImage,
  NavMenuItem,
  SubMenu,
  SectionIconsItem,
  MovieInfoCont,
  MainImage,
  MovieInfoItems,
  MovieDetails,
  NumberInfo,
  PrecnetInfo,
  PopularityIconInfo,
  FirstSection,
  ScoreInfo,
};
