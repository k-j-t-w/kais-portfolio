import React, { useEffect, useRef } from "react";
import '../styles/Modal.css';

const Modal = ({ isModalOpen, modalContent, onClose, isLightboxOpen }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isModalOpen && !isLightboxOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, isLightboxOpen]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <section className="modal">
      <article className="modal-content" ref={modalRef}>
        <main className="modal-mainContents">
          {modalContent}
        </main>
      </article>
    </section>
  );
};

export default Modal;
