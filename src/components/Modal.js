import React from "react";
import '../styles/Modal.css'

const Modal = ({ isModalOpen, modalContent, onClose }) => {
  if (isModalOpen !== true) {
    return null;
  }
  return (
    <section className="modal">
      <article className="modal-content p-lg-4">
        <div className="exit-icon text-end" onClick={onClose}>X</div>
        <main className="modal-mainContents">
          <h5 className="modal-title">Title</h5>
          <hr />
          <div className="modal-image text-center mt-lg-2">

          </div>
          <p className="mt-lg-3 modalText">Content</p>
          <div className="modal-button text-end">
            <button>button</button>
          </div>
        </main>
      </article>
    </section>
  );
 };
 
 export default Modal;