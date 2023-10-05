import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0e233f;
  height: 4rem;
  width: 100%;
  z-index: 10;
  transition: top 0.2s linear;
  font-weight: 600;
`;

const Sidebar = styled.div(
  ({ show }) => `

  position: fixed;
  top: 4rem;
  left: -90%;
  left: -2.3em;
  width: 90%;
  height: 100%;
  padding: 2rem 0 0 5rem;
  line-height: 2;
  background:#263952;
  opacity: .9;
  z-index: 100;
  transform: ${show ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease ;

  h5>a {
    text-decoration: none;
    color: #fff !important;
    font-weight: 600;
    font-size: 1.3em;
  }

  p>a {
    text-decoration: none;
    color: #ffffff99;
  }

  @media screen and (min-width: 48rem) {
    display: none
  }
`
);

const SubMenu = styled.div`
  display: none;
  min-width: 10rem;
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
    font-size: 1rem;
    font-family: "Source Sans Pro", Arial, sans-serif;
    transform: translateY(0);
    padding: 0 1.25rem !important;

    :hover {
      background: #21252908;
    }
  }
`;

const MenuItem = styled.li`
  margin-right: 0.875rem;

  a {
    display: flex;
    align-items: center;
    white-space: nowrap;
    height: 2.5rem;
    padding: 0.5rem 0.5rem;
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;

    ${SubMenu} {
      display: block;
    }
  }
`;

const Menu = styled.ul`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-left: 13rem;

  img {
    margin-left: 0.625rem;
  }
`;

const List = styled.div`
  list-style: none;
  align-items: center;
  flex-direction: row;
  display: flex;
  margin-right: 16.5rem;
  font-size: 14px;

  span,
  img,
  a {
    margin-left: 1.875rem;
  }

  a {
    white-space: nowrap;
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }

  *:hover {
    cursor: pointer;
  }
`;

const Translate = styled.span`
  width: 1.75rem;
  height: 1.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 0.063rem solid #fff;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  transition: linear 0.1s;
  color: #fff;
  font-size: 0.9rem;
  text-transform: uppercase;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    color: blue;
    background-color: #fff;
  }
`;

const Col = styled.div(
  ({ show }) => `
  display: ${show == "desktop" ? "flex" : "none"};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > img {
    margin: 0 0.5rem;
    min-width: 1.5rem;
  }

  img[alt~="logo"] {
    min-width: 4rem;
  }

  @media screen and (max-width: 48rem) {
    display: ${show == "tablet" ? "flex" : "none"};
  }
`
);

export {
  HeaderContainer,
  Sidebar,
  Col,
  Menu,
  MenuItem,
  SubMenu,
  Translate,
  List,
};
