import React, { useState, useEffect } from "react";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import './styles/global.css';
import Modal from './components/Modal.js'
import Lightbox from "./components/Lightbox.js";

function App() {

  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (content, index) => {
    setIsLightboxOpen(true);
    setLightboxImages(content);
    setLightboxIndex(index);
   };

   const closeLightbox = () => {
    setIsLightboxOpen(false);
   };


  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
   };

   const closeModal = () => {
    setIsModalOpen(false);
   };


  return (
    <div>
      <Modal
        isModalOpen={isModalOpen}
        modalContent={modalContent}
        onClose={closeModal}
        isLightboxOpen={isLightboxOpen}

        lightboxImages={lightboxImages}
        setLightboxImages={setLightboxImages}
        openLightbox={openLightbox}
      />
      <Lightbox
        isLightboxOpen={isLightboxOpen}
        closeLightbox={closeLightbox}
        lightboxImages={lightboxImages}
        lightboxIndex={lightboxIndex}
        setLightboxIndex={setLightboxIndex}
      />
      <TopNav/>
      <Home
        openModal={openModal}
        openLightbox={openLightbox}
      />
    </div>
  )
}

export default App;