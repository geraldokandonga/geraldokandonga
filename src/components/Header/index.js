import React from "react";
import {
  HeaderContainer,
  HeaderHeading,
  HeaderWorkLine,
} from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <HeaderContainer>
      <HeaderHeading className="animated fadeIn">
        <h1>I'm Geraldo Kandonga</h1>
        <h3 className="subtitle">Full-Stack Web Developer.</h3>
      </HeaderHeading>
      <HeaderWorkLine className="animated fadeIn">
        <div className="vertical-line"></div>
        <h4 onClick={toggle}>See My Work</h4>
      </HeaderWorkLine>
    </HeaderContainer>
  );
};

export default Header;
