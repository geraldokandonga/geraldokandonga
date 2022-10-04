import React from "react";
import {
  HeaderContainer,
  HeaderHeading,
  HeaderWorkLine,
} from "./HeaderElements";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderHeading className="animated fadeIn">
        <h1>
          I"m Geraldo Kandonga, a Software Developer and consultant. I do API
          Design, Websites design, Software consultation and development.
        </h1>
      </HeaderHeading>
      <HeaderWorkLine className="animated fadeIn">
        <div className="vertical-line"></div>
      </HeaderWorkLine>
    </HeaderContainer>
  );
};

export default Header;
