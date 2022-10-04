import React, { forwardRef, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import { ModalTitle } from "./ModalElements";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  const { fullscreen } = props;

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <BootstrapModal
        show={open}
        onHide={close}
        aria-labelledby={props.title}
        fullscreen={fullscreen ? fullscreen : false}
      >
        <BootstrapModal.Header closeButton>
          <ModalTitle id={props.title}>{props.title}</ModalTitle>
        </BootstrapModal.Header>
        <BootstrapModal.Body>{props.children}</BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>,
      document.getElementById("modal-root")
    );
  }
  return null;
});

export default Modal;
