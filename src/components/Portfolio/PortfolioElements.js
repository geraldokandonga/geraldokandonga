import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const PortfolioContainer = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-1600px")};
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "999" : "0")};
  transition: 0.3s ease-in-out;
`;

export const PortfolioWrap = styled.div`
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;

export const PortfolioContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  width: 50%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  background: white;
  outline: none;
  border: none;
  border-radius: 4px;
  z-index: 1001;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
  @media (max-width: 56.25em) {
    border-radius: 0px;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
  font-size: 4rem;
  cursor: pointer;
  &:hover {
    color: #e31837;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  cursor: pointer;
  outline: none;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectContainer = styled.div`
  flex: 1 16%;
  margin: 1rem;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  margin-bottom: 15px;

  &:hover {
    background: rgba(51, 51, 51, 0.04);
  }

  @media (max-width: 920px) {
    flex: 1 21%;
  }

  @media (max-width: 600px) {
    flex: 1 46%;
  }
`;

export const ProjectImage = styled.img`
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  padding: 12ppx;

  &:hover {
    filter: none;
  }
`;

export const ProjectDetailContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`;

export const ProjectDetailImage = styled.img`
  margin-top: 3rem;
  width: 100%;
`;

export const ProjectDetailDescription = styled.div`
  font-size: 14px;
  padding: 0 1.2rem;

  & .project-link {
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    padding: 1rem 0;
    cursor: pointer;
    color: #e31837;
  }

  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 755px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 920px) {
    margin-bottom: 4rem;
  }
`;
