import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Congrats from "../IMGS/Done.svg";
const modalRoot = document.getElementById("modal_root");
function Modal({ points, status, setStatus }) {
  // const inputRef = useRef(null);
  // if (inputRef.current == null) {
  //   inputRef.current = document.createElement("div");
  // }
  // useEffect(() => {
  //   modalRoot.appendChild(inputRef.current);
  //   return () => modalRoot.removeChild(inputRef.current);
  // });

  useEffect(() => {});
  return createPortal(
    <div className="modal_container">
      <div>
        <h2>Congratulations You Won!</h2>
        <h3>Points get: {points}/8</h3>
        <picture>
          <img src={Congrats} alt="Congratulations" />
        </picture>
        <button
          className="close_modal"
          onClick={() => setStatus((sta) => !sta)}
        >
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
