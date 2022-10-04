import styled from "styled-components";
import { Container } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";

export const NavbarContainer = styled(Container)`
  position: relative;
  z-index: 100;
`;

export const NavContainer = styled.nav`
  margin-top: 40px;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & ul {
    list-style: none;
    margin: 0;
  }

  & ul li a {
    color: black;
  }

  & a {
    color: black;
  }

  @media only screen and (max-width: 550px) {
    justify-content: space-around;
  }

  @media only screen and (max-width: 750px) {
    justify-content: space-around;
  }
`;

export const Logo = styled.div`
  display: inline-block;
  font-weight: 500;
`;

export const CenterNav = styled.ul`
  text-align: center;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;

  & li:first-child {
  }

  & li {
    margin: 0 40px;
  }
`;

export const SideNav = styled.ul`
  & li {
    display: inline-block;
  }

  & a {
    color: #6d6d6d;
    transition: all 0.4s ease-in-out;
  }
`;

export const NavLink = styled(Link)``;
