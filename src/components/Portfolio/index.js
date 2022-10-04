import React, { useState, useRef } from "react";
import {
  PortfolioContainer,
  PortfolioWrap,
  PortfolioContent,
  CloseIcon,
  Icon,
  ProjectsContainer,
  ProjectImage,
  ProjectContainer,
  ProjectDetailContainer,
  ProjectDetailDescription,
  ProjectDetailImage,
  ProjectDetailLink,
} from "./PortfolioElements";

import { projects } from "../../data";
import Modal from "../Modal";

const Portfolio = ({ isOpen, toggle }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const ref = useRef(null);
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  console.log(selectedProject);

  return (
    <PortfolioContainer isOpen={isOpen} onClick={toggle} ref={ref}>
      <Icon title="Close">
        <CloseIcon onClick={toggle} />
      </Icon>
      <PortfolioWrap>
        <PortfolioContent isOpen={isOpen}>
          <ProjectsContainer>
            {projects.map((project) => (
              <>
                <ProjectContainer
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setTimeout(() => {
                      openModal();
                    }, 300);
                  }}
                >
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
      {selectedProject && (
        <>
          <Modal
            title={selectedProject.name}
            ref={modalRef}
            fullscreen={true}
            size="lg"
          >
            <ProjectDetailContainer>
              <ProjectDetailDescription>
                {selectedProject.description}{" "}
                <ProjectDetailLink>Project Detail</ProjectDetailLink>
              </ProjectDetailDescription>
              <ProjectDetailImage
                src={selectedProject.thumbnail}
                alt={selectedProject.name}
              />
            </ProjectDetailContainer>
          </Modal>
        </>
      )}
    </PortfolioContainer>
  );
};

export default Portfolio;
