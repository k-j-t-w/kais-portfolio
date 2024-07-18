import React, { useState } from 'react';
import '../styles/TopNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function TopNav() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="top-nav">
      <div className="top-nav-span">
        <div className="top-nav-logo">Kai Wingfield.</div>

        <div className="top-nav-items">
          <div className="top-nav-item" onClick={() => scrollToSection('work')}>
            Work
          </div>
          <div className="top-nav-item" onClick={() => scrollToSection('about')}>
            About
          </div>
          <div className="top-nav-item" onClick={() => scrollToSection('skills')}>
            Skills
          </div>
          <div className="top-nav-item" onClick={() => scrollToSection('contact')}>
            Contact
          </div>
          <a href="https://flowcv.com/resume/f7uqoqd529" target="_blank" rel="noopener noreferrer" className="link">
            <div className="top-nav-item">Resume</div>
          </a>
        </div>

        <div className={`menu-dropdown ${dropdownOpen ? 'menu-active' : ''}`} onClick={toggleDropdown}>
          <div className="col">
            <div className="con">
              <button className="dropbtn">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
            </div>
          </div>
          <div className={`menu-content ${dropdownOpen ? '' : 'hidden'}`}>
            <ul>
              <li className="top-nav-item" onClick={() => scrollToSection('work')}>
                Work
              </li>
              <li className="top-nav-item" onClick={() => scrollToSection('about')}>
                About
              </li>
              <li className="top-nav-item" onClick={() => scrollToSection('skills')}>
                Skills
              </li>
              <li className="top-nav-item" onClick={() => scrollToSection('contact')}>
                Contact
              </li>
              <a href="https://flowcv.com/resume/f7uqoqd529" target="_blank" rel="noopener noreferrer" className="link">
                <li className="top-nav-item">Resume</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
