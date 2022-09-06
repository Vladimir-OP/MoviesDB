import styled from "styled-components";

const InfoCont = styled.div`
  margin-top: 4rem;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MovieInfoItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15rem;
`;
const BackgroundImage = styled.div(
  ({ image }) =>
    `
background-image:url("${image}");
background-size: cover;
width:100%;
height:32rem;
dsiplay:flex:
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
`;

const MovieDetails = styled.div`
  display: flex;
  margin-left: 2rem;
  > h1 {
    color: white;
    font-weight: 700;
    >span{
      color:grey;
      font-weight: 450
    }
  }
`;

export {
  InfoCont,
  NavBarMenu,
  BackgroundImage,
  NavMenuItem,
  SubMenu,
  MovieInfoCont,
  MainImage,
  MovieInfoItems,
  MovieDetails,
};
