import React from "react";
import {
  CenterNav,
  Logo,
  NavbarContainer,
  NavContainer,
  SideNav,
  NavLink,
} from "./NavbarElements";

import Resume from "../../assets/resume.pdf";

const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer>
      <NavContainer className="animated fadeIn">
        <Logo>Geraldo.</Logo>
        <CenterNav>
          <li>
            <NavLink onClick={toggle}>Work</NavLink>
          </li>
        </CenterNav>
        <SideNav>
          <li>
            <a href={Resume} download="Resume" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </SideNav>
      </NavContainer>
    </NavbarContainer>
  );
};

export default Navbar;
