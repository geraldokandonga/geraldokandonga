import React from "react";
import {
  CenterNav,
  Logo,
  NavbarContainer,
  NavContainer,
  SideNav,
  NavLink,
} from "./NavbarElements";

import Resume from "../../assets/Geraldo_Kandonga_Resume.pdf";

const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer>
      <NavContainer className="animated fadeIn">
        <Logo>Geraldo.</Logo>
        <CenterNav>
          <li>
            <NavLink className="nav-link" onClick={toggle}>
              Work
            </NavLink>
          </li>
        </CenterNav>
        <SideNav>
          <li>
            <a
              className="nav-link"
              href={Resume}
              download="Geraldo Kandonga Resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </SideNav>
      </NavContainer>
    </NavbarContainer>
  );
};

export default Navbar;
