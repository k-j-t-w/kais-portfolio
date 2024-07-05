import React from 'react';
import '../styles/TopNav.css'

function TopNav({}) {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className ='top-nav'>
    <div className='top-nav-span'>
      <div className='top-nav-logo'>Kai Wingfield.</div>

      <div className='top-nav-items'>
        <div className='top-nav-item' onClick={() => scrollToSection('work')}>Work</div>
        <div className='top-nav-item' onClick={() => scrollToSection('about')}>About</div>
        <div className='top-nav-item'>Resume</div>
        <div className='top-nav-item' onClick={() => scrollToSection('contact')}>Contact</div>
        <div className='top-nav-item'>dark</div>
      </div>
      
    </div>
    </div>
  )
}

export default TopNav;