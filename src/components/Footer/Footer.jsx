import React from "react";
import { FooterCont, FooterLeft,FooterMenu } from "./footer.style";
import logo from "/home/vladimir/Desktop/Movies/movies/src/assets/logo.svg";
const Footer = () => {
  return (
    <FooterCont>
      <FooterLeft>
        <img src={logo} />
        <div>Join the community</div>
      </FooterLeft>
      <FooterMenu>
          <h3>The Basics</h3>
          <ul>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </FooterMenu>
        <FooterMenu>
          <h3>Get Involved</h3>
          <ul>
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </FooterMenu>
        <FooterMenu>
          <h3>Community</h3>
          <ul>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
            <li>Twitter</li>
          </ul>
        </FooterMenu>
        <FooterMenu>
          <h3>Legal</h3>
          <ul>
            <li>Terms of Use</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </FooterMenu>
    </FooterCont>
  );
};

export default Footer;
