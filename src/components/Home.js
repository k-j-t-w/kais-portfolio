import React from 'react';
import '../styles/Home.css'
import Projects from './Projects';

function Home({}) {

  return (
    <div className='home-cont'>
      <div className='home'>
          <div className='home-blurb'>
            <div className='type'>
              <div className='blurb1'>Hi, I'm Kai,</div>
              <div className='blurb2'>a full stack developer</div>
              <div className='blurb3'>and designer</div>
              <div className='blurb4'>based in Victoria B.C.</div>
            </div>
          </div>
          <div className='home-socials'>
            <div className='social'>Github</div>
            <div className='social'>Linkedin</div>
            <div className='social'>Email</div>
          </div>
          <h2>Work.</h2>
          <Projects/>
          <h2>About.</h2>
          <div>this is the about me paragraph</div>
          <h2>Get in touch</h2>
          <div className='home-socials'>
            <div className='social'>Github</div>
            <div className='social'>Linkedin</div>
            <div className='social'>Email</div>
          </div>
      </div>
    </div>
  )
}

export default Home;