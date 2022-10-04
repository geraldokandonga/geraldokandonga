import React from "react";
import {
  CenterNav,
  Logo,
  NavbarContainer,
  NavContainer,
  SideNav,
  NavLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer>
      <NavContainer className="animated fadeIn">
        <Logo>Geraldo</Logo>
        <CenterNav>
          <li>
            <NavLink onClick={toggle}>Work</NavLink>
          </li>
        </CenterNav>
        <SideNav>
          <li>
            <NavLink>Resume</NavLink>
          </li>
        </SideNav>
      </NavContainer>
    </NavbarContainer>
  );
};

export default Navbar;
