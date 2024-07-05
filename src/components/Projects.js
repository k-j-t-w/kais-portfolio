import React, { useRef, useEffect } from 'react';
import '../styles/Projects.css';
import gunner from '../images/Gunner.jpg';

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

const Projects = () => {
  return (
    <div className="projects-cont">
      <Tilt>
        <div className="project-content">
          <img src={gunner} alt="Painting" className="project-img" />
          <h1 className="project-title">Title</h1>
          <div className="project-description">Description</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content">
          <img src={gunner} alt="Painting" className="project-img" />
          <h1 className="project-title">Title</h1>
          <div className="project-description">Description</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content">
          <img src={gunner} alt="Painting" className="project-img" />
          <h1 className="project-title">Title</h1>
          <div className="project-description">Description</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content">
          <img src={gunner} alt="Painting" className="project-img" />
          <h1 className="project-title">Title</h1>
          <div className="project-description">Description</div>
        </div>
      </Tilt>
    </div>
  );
};

export default Projects;
