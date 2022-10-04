import styled from "styled-components";

import { Modal } from "react-bootstrap";

export const ModalTitle = styled(Modal.Title)`
  font-size: 22px;
  font-weight: 600;
  color: black;

  @media only screen and (max-width: 745px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 836px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 30px;
  }
`;
