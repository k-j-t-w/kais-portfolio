import React, { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css';
import gunner from '../images/Gunner.jpg';
import design from '../images/DowntimeTea2.jpg'
import photolabs from '../images/photolabs-home.jpg'
import photolabsTwo from '../images/photolabs-vertical-modal.jpg'
import photolabsThree from '../images/photoLabs-wide-modal.jpg'
import photolabsFour from '../images/photolabs-dark.jpg'
import photolabsFive from '../images/photolabs-dark-vert.jpg'
import githubLogo from '../images/github-mark-white.png'

const codeProjectOne = () => {
  return (
    <div>
        <h1 className='modal-title'>Photolabs</h1>
        <div className='modal-desc'>A  react based site that displays photos and stores users favourites. Developed as part of my education at Lighthouse Labs</div>
        <div>
          <div className='modal-links'>
            <a className='modal-link' href="https://github.com/k-j-t-w/photolab" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="Photolabs Landing Page" className="github-logo" />
              <div>Github</div>
            </a>
          </div>
        </div>
        <div className='modal-skills'>
          <div className='modal-skill'>React</div>
          <div className='modal-skill'>Sass</div>
          <div className='modal-skill'>Jest</div>
        </div>
      <div className='img-cont'>
        <div className='additional-img'>
        <div className='sub-img'>
            <img src={photolabs} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsTwo} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsThree} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsFour} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsFive} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

const codeProjectTwo = () => {
  return (
    <div>
        <h1 className='modal-title'>Photolabs</h1>
        <div className='modal-desc'>A  react based site that displays photos and stores users favourites. Developed as part of my education at Lighthouse Labs</div>
        <div>
          <div className='modal-links'>
            <a className='modal-link' href="https://github.com/k-j-t-w/photolab" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="Photolabs Landing Page" className="github-logo" />
              <div>Github</div>
            </a>
          </div>
        </div>
        <div className='modal-skills'>
          <div className='modal-skill'>React</div>
          <div className='modal-skill'>Sass</div>
          <div className='modal-skill'>Jest</div>
        </div>
      <div className='img-cont'>
        <div className='additional-img'>
        <div className='sub-img'>
            <img src={photolabs} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsTwo} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsThree} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsFour} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsFive} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Tilt = ({ children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const el = tiltRef.current;
    const height = el.clientHeight;
    const width = el.clientWidth;

    const handleMove = (e) => {
      const xVal = e.layerX;
      const yVal = e.layerY;
      const yRotation = 2 * ((xVal - width / 2) / width);
      const xRotation = -2 * ((yVal - height / 2) / height);
      const string = `perspective(500px) scale(1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      el.style.transform = string;
    };

    const handleMouseOut = () => {
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
    };

    const handleMouseDown = () => {
      el.style.transform = 'perspective(500px) scale(0.99) rotateX(0) rotateY(0)';
    };

    const handleMouseUp = () => {
      el.style.transform = 'perspective(500px) scale(1.01) rotateX(0) rotateY(0)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseout', handleMouseOut);
    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseup', handleMouseUp);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseout', handleMouseOut);
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="project" ref={tiltRef}>
      {children}
    </div>
  );
};

const Projects = ({ openModal }) => {

  return (
    <div className="projects-cont">

      <Tilt>
        <div className="project-content" onClick={() => openModal(codeProjectOne)} >
          <img src={photolabs} alt="Photolabs Landing Page" className="project-img" />
          <h1 className="project-title">Photolabs</h1>
          <div className="project-description">A React based photo app</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content" onClick={() => openModal(codeProjectTwo)}>
          <img src={gunner} alt="Painting" className="project-img" />
          <h1 className="project-title">Portfolio Prophet</h1>
          <div className="project-description">A React based app that organizes stock data</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content">
          <img src={design} alt="Painting" className="project-img" />
          <h1 className="project-title">Design Work</h1>
          <div className="project-description">Various design work from the past years</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content">
          <img src={gunner} alt="Painting" className="project-img" />
          <h1 className="project-title">Paintings</h1>
          <div className="project-description">A collection of my paintings</div>
        </div>
      </Tilt>
    </div>
  );
};

export default Projects;
