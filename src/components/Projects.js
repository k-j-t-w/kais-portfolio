import React, { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css';
import gunner from '../images/Gunner.jpg';
import design from '../images/DowntimeTea2.jpg'
import photolabs from '../images/photolabs-home.jpg'
import port from '../images/stock-analysis.png'

import CodeProjectOne from './CodeProjectOne';
import CodeProjectTwo from './CodeProjectTwo';
import DesignWork from './DesignWork';
import Paintings from './Paintings';


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
        <div className="project-content" onClick={() => openModal(<CodeProjectOne/>)} >
          <img src={photolabs} alt="Photolabs Landing Page" className="project-img" />
          <h1 className="project-title">Photolabs</h1>
          <div className="project-description">A React based photo app</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content" onClick={() => openModal(<CodeProjectTwo/>)}>
          <img src={port} alt="Portfolio Prophet" className="project-img" />
          <h1 className="project-title">Portfolio Prophet</h1>
          <div className="project-description">A React based app that organizes stock data</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content">
          <img src={design} alt="Design" className="project-img" onClick={() => openModal(<DesignWork/>)} />
          <h1 className="project-title">Design Work</h1>
          <div className="project-description">Various design work from the past years</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content">
          <img src={gunner} alt="Painting" className="project-img" onClick={() => openModal(<Paintings/>)}/>
          <h1 className="project-title">Paintings</h1>
          <div className="project-description">A collection of my paintings</div>
        </div>
      </Tilt>
    </div>
  );
};

export default Projects;
