import React, { useEffect, useRef } from "react";
import '../styles/Lightbox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const Lightbox = ({ isLightboxOpen, lightboxImages, closeLightbox, lightboxIndex, setLightboxIndex }) => {
  const prevImage = () => {
    setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : lightboxImages.length - 1);
  };

  const nextImage = () => {
    setLightboxIndex((lightboxIndex + 1) % lightboxImages.length);
  };

  const lightboxContentRef = useRef();
  const prevIconRef = useRef();
  const nextIconRef = useRef();

  const handleClickOutside = (event) => {
    if (
      lightboxContentRef.current && !lightboxContentRef.current.contains(event.target) &&
      prevIconRef.current && !prevIconRef.current.contains(event.target) &&
      nextIconRef.current && !nextIconRef.current.contains(event.target)
    ) {
      closeLightbox();
    }
  };

  useEffect(() => {
    if (isLightboxOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLightboxOpen]);

  if (!isLightboxOpen) {
    return null;
  }

  return (
    <section className="lightbox">
      <div className='prev-icon' onClick={prevImage} ref={prevIconRef}><FontAwesomeIcon icon={faCaretLeft} /></div>
      <div className='lightbox-content' >
        <div className='img-wrapper'>
        <img className='lightbox-img' src={lightboxImages[lightboxIndex]} alt="Lightbox content" ref={lightboxContentRef} />
        </div>
      </div>
      <div className='next-icon' onClick={nextImage} ref={nextIconRef}><FontAwesomeIcon icon={faCaretRight} /></div>
    </section>
  );
};

export default Lightbox;
