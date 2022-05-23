import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.getElementById("modal_root");
function Modal({ child }) {
  const inputRef = useRef(null);
  if (inputRef.current == null) {
    inputRef.current = document.createElement("div");
  }
  useEffect(() => {
    modalRoot.appendChild(inputRef.current);
    return () => modalRoot.removeChild(inputRef.current);
  });

  useEffect(() => {});
  return createPortal(<div className="modal_container">{child}</div>, inputRef);
}

export default Modal;
