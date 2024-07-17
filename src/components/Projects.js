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
import port from '../images/stock-analysis.png'
import portTwo from '../images/register.jpg'
import portThree from '../images/search-result.jpg'
import design2 from '../images/search-result.jpg'
import design3 from '../images/DownTimeTea1.jpg'
import design4 from '../images/Album1.jpg'
import design5 from '../images/Album2.jpg'
import design6 from '../images/Album3.jpg'
import design7 from '../images/Magazine1.png'
import design8 from '../images/Magazine2.jpg'
import design9 from '../images/Magazine3.jpg'
import design10 from '../images/Menu1.jpg'
import design11 from '../images/Menu2.jpg'
import painting1 from '../images/Painting2.jpg'
import painting2 from '../images/Painting3.jpg'
import painting3 from '../images/Painting4.jpg'
import painting4 from '../images/Painting5.jpg'
import painting5 from '../images/Painting6.jpg'



const codeProjectOne = () => {
  return (
    <div>
        <h1 className='modal-title'>Photolabs</h1>
        <div className='modal-desc'>A react based site that displays photos and stores users favourites. Developed as part of my education at Lighthouse Labs.</div>
        <div>
          <div className='modal-links'>
            <a className='modal-link' href="https://github.com/k-j-t-w/photolab" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="github logo" className="github-logo" />
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
            <img src={photolabsTwo} alt="Photolabs Vertical modal" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsThree} alt="Photolabs Horizontal modal" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsFour} alt="Photolabs dark horizontal modal" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsFive} alt="Photolabs dark vertical modal" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

const codeProjectTwo = () => {
  return (
    <div>
        <h1 className='modal-title'>Portfolio Prophet</h1>
        <div className='modal-desc'>A react based site that retrieves data from an api, and then; cleans, organizes and calculates the data to display on the front end. Developed for my final project at Lighthouse Labs.</div>
        <div>
          <div className='modal-links'>
            <a className='modal-link' href="https://github.com/k-j-t-w/Final_Project" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="github logo" className="github-logo" />
              <div>Github</div>
            </a>
          </div>
        </div>
        <div className='modal-skills'>
          <div className='modal-skill'>React</div>
          <div className='modal-skill'>Axios</div>
          <div className='modal-skill'>Express</div>
          <div className='modal-skill'>Chart.js</div>
          <div className='modal-skill'>PostgreSQL</div>
        </div>
      <div className='img-cont'>
        <div className='additional-img'>
        <div className='sub-img'>
            <img src={port} alt="Portfolio Prophets stock page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={portTwo} alt="Portfolio Prophets register page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={portThree} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

const designWork = () => {
  return (
    <div>
        <h1 className='modal-title'>Design Work</h1>
        <div className='modal-desc'>A collection of my design work. Projects pictured include: <br /> <br /> Dowtime Tea: A creative graphical exploration of tea flavours mixed with a calming colour pallet to reflect a calm evening at home.<br /> <br /> Mirage Magazine: A multiplatform photography magazine. The project focused on formatting between print, mobile and tablet layouts.<br /> <br /> Blush Album: Conceptual album design for Canadian artist Blush's debut album.<br /> <br /> Golden Pearl Menu:  A creative study focused on branding a high end seafood restaurant.</div>
        <div>
        </div>
        <div className='modal-skills'>
          <div className='modal-skill'>Photoshop</div>
          <div className='modal-skill'>Indesign</div>
          <div className='modal-skill'>Illustrator</div>
          <div className='modal-skill'>Figma</div>
        </div>
      <div className='img-cont'>
        <div className='additional-img'>
        <div className='sub-img'>
            <img src={design} alt="Portfolio Prophets stock page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design3} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design4} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design5} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design6} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design7} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design8} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design9} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design10} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design11} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

const paintingsHTML = () => {
  return (
    <div>
        <h1 className='modal-title'>Paintings</h1>
        <div className='modal-desc'>Paintings done with posca pens and mixed media on 10"x10" boards.</div>
        <div>
        </div>
      <div className='img-cont'>
        <div className='additional-img'>
        <div className='sub-img'>
            <img src={gunner} alt="Portfolio Prophets stock page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting1} alt="Portfolio Prophets register page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting2} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting3} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting4} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting5} alt="Portfolio Prophets search result page" className="modal-img-sub" />
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
          <img src={port} alt="Portfolio Prophet" className="project-img" />
          <h1 className="project-title">Portfolio Prophet</h1>
          <div className="project-description">A React based app that organizes stock data</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content">
          <img src={design} alt="Design" className="project-img" onClick={() => openModal(designWork)} />
          <h1 className="project-title">Design Work</h1>
          <div className="project-description">Various design work from the past years</div>
        </div>
      </Tilt>
      <Tilt>
        <div className="project-content">
          <img src={gunner} alt="Painting" className="project-img" onClick={() => openModal(paintingsHTML)}/>
          <h1 className="project-title">Paintings</h1>
          <div className="project-description">A collection of my paintings</div>
        </div>
      </Tilt>
    </div>
  );
};

export default Projects;
