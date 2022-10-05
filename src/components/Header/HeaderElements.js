import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-bottom: 80px;
  margin-top: 100px;
  z-index: 100;
`;

export const HeaderHeading = styled.div`
  width: 40%;
  margin: 0px auto;
  animation-duration: 8s;

  @media only screen and (max-width: 745px) {
    width: 100%;
  }

  @media only screen and (max-width: 836px) {
    width: 95%;
  }

  @media only screen and (max-width: 1200px) {
    width: 85%;
  }
`;

export const HeaderWorkLine = styled.div`
  & h4 {
    font-size: 20px;
    text-align: center;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;
