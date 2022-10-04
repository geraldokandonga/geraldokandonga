import React from "react";
import {
  PortfolioContainer,
  PortfolioWrap,
  PortfolioContent,
  CloseIcon,
  Icon,
  ProjectsContainer,
  ProjectImage,
  ProjectContainer,
} from "./PortfolioElements";

import { projects } from "../../data";

const Portfolio = ({ isOpen, toggle }) => {
  return (
    <PortfolioContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <PortfolioWrap>
        <PortfolioContent isOpen={isOpen}>
          <ProjectsContainer>
            {projects.map((project) => (
              <>
                <ProjectContainer key={project.id}>
                  <ProjectImage
                    key={project.id}
                    src={project.thumbnail}
                    alt={project.name}
                    title={project.name}
                  />
                </ProjectContainer>
              </>
            ))}
          </ProjectsContainer>
        </PortfolioContent>
      </PortfolioWrap>
    </PortfolioContainer>
  );
};

export default Portfolio;
