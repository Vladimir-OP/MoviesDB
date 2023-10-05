import React, { useState } from "react";
import {
  HeaderContainer,
  Sidebar,
  Col,
  Menu,
  MenuItem,
  SubMenu,
  Translate,
  List,
} from "./header.style";
import { Container, Icon } from "../shared/shared.style";
import logoText from "../../assets/logo-text.svg";
import plus from "../../assets//plus.svg";
import search from "../../assets/search.svg";
import burgerMenu from "../../assets/burger-menu.svg";
import logo from "../../assets/logo.svg";
import profileIcon from "../../assets/profile-icon.svg";

/**
 * Construct Header component
 *
 * @returns {component} Header component
 */
function Header() {
  // Sidebar open status
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <Col show="desktop">
          <Menu>
            <img src={logoText} alt="logo" height={20} />
            <MenuItem>
              <a href="/main">Movies</a>
              <SubMenu>
                <a>Popular</a>
                <a>Now Playing</a>
                <a>Upcoming</a>
                <a>Top Rated</a>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <a>TV Shows</a>
              <SubMenu>
                <a>Popular</a>
                <a>Airing Today</a>
                <a>On TV</a>
                <a>Top Rated</a>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <a>People</a>
              <SubMenu>
                <a>Popular People</a>
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <a>More</a>
              <SubMenu>
                <a>Discussions</a>
                <a>Leadboard</a>
                <a>Support</a>
                <a>API</a>
              </SubMenu>
            </MenuItem>
          </Menu>
        </Col>
        <Col show="desktop">
          <List>
            <img src={plus} alt="" height={22} />
            <Translate>en</Translate>
            <a
              onClick={() => {
                localStorage.removeItem("token");
              }}
              href="/"
            >
              Logout
            </a>

            <a href="/newMovie">Add New Movie</a>
            <img src={search} alt="" height={30} />
          </List>
        </Col>
        <Col show="tablet" onClick={() => setIsSidebarOpen((prev) => !prev)}>
          <Icon white>
            <img src={burgerMenu} alt="menu" />
          </Icon>
        </Col>
        <Col show="tablet">
          <img src={logo} alt="logo" />
        </Col>
        <Col show="tablet">
          <Icon white>
            <img src={profileIcon} alt="profile" />
          </Icon>
          <img src={search} alt="search" />
        </Col>
      </Container>
      <Sidebar show={isSidebarOpen}>
        <h5>
          <a href="/#">Movies</a>
        </h5>
        <h5>
          <a href="/#">TV Shows</a>
        </h5>
        <h5>
          <a href="/#">People</a>
        </h5>
        <p>
          <a href="/#">Contribution Bible</a>
        </p>
        <p>
          <a href="/#">Apps</a>
        </p>
        <p>
          <a href="/#">Discussions</a>
        </p>
        <p>
          <a href="/#">Leaderboard</a>
        </p>
        <p>
          <a href="/#">Contribute</a>
        </p>
        <p>
          <a href="/#">API</a>
        </p>
        <p>
          <a href="/#">Support</a>
        </p>
        <p>
          <a href="/#">About</a>
        </p>
        <p>
          <a href="/#">Login</a>
        </p>
      </Sidebar>
    </HeaderContainer>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
