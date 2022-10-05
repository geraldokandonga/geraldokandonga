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
              I am a Full-Stack Web Developer, with over 4 years of Software
              Development.
            </p>
            <p className="about-text">
              Subscribe to my{" "}
              <a
                href={config.youtube}
                target="_blank"
                rel="noreferrer"
                title="YouTube"
              >
                YouTube Channel
              </a>{" "}
              for more experience on web development journey.
            </p>
            <p className="hashtag-group">
              <span className="hashtag">#javascript</span>
              <span className="hashtag">#reactjs</span>
              <span className="hashtag">#nodejs</span>
              <span className="hashtag">#php</span>
              <span className="hashtag">#api</span>
              <span className="hashtag">#mongodb</span>
              <span className="hashtag">#sequelize</span>
            </p>
          </FooterAboutContainer>
          <FooterContactContainer className="animated fadeIn">
            <h3>Contact</h3>
            <p>
              <a
                href="mailto:fillipusgeraldo@gmail.com"
                title="Contact me"
                className="color-black"
              >
                fillipusgeraldo@gmail.com
              </a>
            </p>
            <p>+264 85 695 443 4</p>
          </FooterContactContainer>
        </FooterSection>
        <BottomFooter className="animated fadeIn">
          <p>
            @ <FooterLink to={"/"}>Geraldo Kandonga.</FooterLink>
          </p>
          <ul>
            <li>
              <a
                href={config.github}
                target="_blank"
                rel="noreferrer"
                className="color-black"
                title="Github"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href={config.twitter}
                target="_blank"
                rel="noreferrer"
                className="color-black"
                title="Twitter"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href={config.instagram}
                target="_blank"
                rel="noreferrer"
                className="color-black"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href={config.linkedin}
                target="_blank"
                rel="noreferrer"
                className="color-black"
                title="LinkedIn"
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
