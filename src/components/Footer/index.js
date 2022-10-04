import React from "react";
import {
  BottomFooter,
  FooterAboutContainer,
  FooterContactContainer,
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLink,
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./FooterElements";

import config from "../../config";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterAboutContainer className="animated fadeIn">
            <h3>About</h3>
            <p className="about-text">
              I'm Geraldo, a Software Developer and Consultant in Windhoek
              Namibia. I have worked for many companies around the world,
              helping build stunning designs, and provide a creative direction
              across multiple platforms and mediums. My skillsinclude: Websites,
              Branding, UI and UX, Graphic design, Photography, and Videography.
            </p>
          </FooterAboutContainer>
          <FooterContactContainer className="animated fadeIn">
            <h3>Contact</h3>
            <p>
              <a href="mailto:fillipusgeraldo@gmail.com">
                fillipusgeraldo@gmail.com
              </a>
            </p>
            <p>+264 85 695 443 4</p>
          </FooterContactContainer>
        </FooterSection>
        <BottomFooter className="animated fadeIn">
          <p>
            @ <FooterLink to={"/"}>Geraldo Kandonga</FooterLink>
          </p>
          <ul>
            <li>
              <a href={config.github} target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href={config.twitter} target="_blank" rel="noreferrer">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href={config.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href={config.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </BottomFooter>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
