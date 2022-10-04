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
              I am a Full-Stack Developer, with over 4 years of Software
              Development.
            </p>
          </FooterAboutContainer>
          <FooterContactContainer className="animated fadeIn">
            <h3>Contact</h3>
            <p>
              <a href="mailto:fillipusgeraldo@gmail.com" title="Contact me">
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
              <a
                href={config.github}
                target="_blank"
                rel="noreferrer"
                title="Visit my Github profile"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href={config.twitter}
                target="_blank"
                rel="noreferrer"
                title="Visit my Twitter profile"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href={config.instagram}
                target="_blank"
                rel="noreferrer"
                title="Visit my Instagram profile"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href={config.linkedin}
                target="_blank"
                rel="noreferrer"
                title="Visit my LinkedIn profile"
              >
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
