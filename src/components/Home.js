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
          <h2 id='work'>Work.</h2>
          <Projects/>
          <h2 id='about'>About.</h2>
          <div className='about-para'>With a diploma in web development, a certificate in graphic design, and a background rooted in the art and print industry, my passion for design and technology has been a lifelong pursuit. From early beginnings, I've been immersed in the world behind screens, meticulously deconstructing designs and websites to uncover their craftsmanship.</div>
          <div className='about-para'>My journey started as a freelance web designer and developer while pursuing my education. Over time, this evolved into a deep-seated passion for creating impactful digital solutions. I thrive on the challenge of blending creativity with technical expertise, crafting seamless and innovative user experiences.</div>
          <div className='about-para'>For the past years, I have dedicated myself to full-time web development, collaborating with diverse clients and projects that continually expand my skill set. I prioritize honesty and transparency in my work, finding fulfillment in partnering with like-minded companies and teams to build exceptional digital products.</div>
          <h2 id='contact'>Get in touch</h2>
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