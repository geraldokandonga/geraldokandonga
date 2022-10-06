import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMedium,
} from "react-icons/fa";

export const FooterContainer = styled.footer`
  & h3 {
    font-size: 22px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
`;

export const FooterContent = styled(Container)`
  margin-top: 80px;
  margin-bottom: 50px;
  z-index: 100;

  @media only screen and (max-width: 550px) {
    margin-top: 60px;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 750px) {
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

export const FooterSection = styled.section`
  zoom: 1;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 550px) {
    margin: 0 22px;
    flex-direction: column;
  }
`;

export const FooterAboutContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 550px) {
    width: 100%;
    margin-top: 22px;
    margin: 1% 0 1% 0%;
  }

  @media only screen and (max-width: 750px) {
    width: 90%;
    margin: 1% 0 1% 0%;
  }
`;

export const FooterContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 550px) {
    margin-top: 22px;
    margin: 1% 0 1% 0%;
  }

  @media only screen and (max-width: 750px) {
    margin: 1% 0 1% 0%;
  }
`;

export const BottomFooter = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 14px;
  }

  & ul li:first-child {
    margin-left: 0px;
  }

  ul {
    margin: 0px;
    padding: 0px;
  }

  & svg {
    font-size: 22px;
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;

    & p {
      margin: 10px 22px;
    }

    & ul {
      margin: 10px 22px;
    }
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;
    padding-bottom: 20px;

    & p {
      margin: 10px 22px;
    }

    & ul {
      margin: 10px 22px;
    }
  }
`;

export const FooterLink = styled(Link)`
  color: black;
`;

export const GithubIcon = styled(FaGithub)``;
export const InstagramIcon = styled(FaInstagram)``;
export const TwitterIcon = styled(FaTwitter)``;
export const LinkedInIcon = styled(FaLinkedinIn)``;
export const MediumIcon = styled(FaMedium)``;
