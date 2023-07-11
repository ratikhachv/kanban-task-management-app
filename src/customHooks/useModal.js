import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]);

  const Modal = ({ children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div className="modal-backdrop" onClick={closeModal}>
        <div className="modal-content__wrapper">
          {children}
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  };
  
  return [Modal, openModal, closeModal];
};

export default useModal;
