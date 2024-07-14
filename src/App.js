import React, { useState, useEffect } from "react";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import './styles/global.css';
import Modal from './components/Modal.js'

function App() {

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
      />
      <TopNav/>
      <Home
        openModal={openModal}
      />
    </div>
  )
}

export default App;