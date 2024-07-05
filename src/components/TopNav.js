import React from 'react';
import '../styles/TopNav.css'

function TopNav({}) {

  return (
    <div className ='top-nav'>
    <div className='top-nav-span'>
      <div className='top-nav-logo'>Kai Wingfield.</div>

      <div className='top-nav-items'>
        <div className='top-nav-item'>Work</div>
        <div className='top-nav-item'>About</div>
        <div className='top-nav-item'>Resume</div>
        <div className='top-nav-item'>Contact</div>
        <div className='top-nav-item'>dark</div>
      </div>
      
    </div>
    </div>
  )
}

export default TopNav;