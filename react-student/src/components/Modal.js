// Modal.js

import React from "react";
import ReactDOM from "react-dom";
//import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">
        <button className="close-btn" onClick={props.onClose}>
          Close
        </button>
        {props.children} {/* Render children (e.g., form) here */}
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
