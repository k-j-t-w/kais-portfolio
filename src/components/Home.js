import React from 'react';
import '../styles/Home.css'
import Projects from './Projects';
import StackIcon from "tech-stack-icons";
import portrait from '../images/Portrait.jpg'
import logo from '../images/logo-white.png'

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Home({ openModal, openLightbox }) {

  return (
    <div className='home-cont'>
      <div className='home'>
        <div className='logo-cont'>
          <img src={logo} alt="Logo" className="logo-img-top"></img>
        </div>  
          <div className='home-blurb'>
            <div className='type'>
              <div className='blurb1'>Hi, I'm Kai,</div>
              <div className='blurb2'>a full stack developer</div>
              <div className='blurb3'>and designer</div>
              <div className='blurb4'>based in Victoria B.C.</div>
            </div>
            <img src={logo} alt="Logo" className="logo-img"></img>
          </div>
          <div className='home-socials'>
            <a href="https://github.com/k-j-t-w" target="_blank" rel="noopener noreferrer" className='link'>
              <div className='social'>Github</div>
            </a>
            <a href="https://github.com/k-j-t-w" target="_blank" rel="noopener noreferrer" className='link'>
              <div className='social'>Linkedin</div>
            </a>
            <a href="https://github.com/k-j-t-w" target="_blank" rel="noopener noreferrer" className='link'>
              <div className='social'>Email</div>
            </a>
          </div>
          <FadeInSection>
          <h2 id='work'>Works</h2>
          <Projects openModal={openModal} openLightbox={openLightbox}/>
          </FadeInSection>
          <FadeInSection>
          <div className='about-cont'>
            <h2 id='about'>About</h2>
            <div className='about-content'> 
            <img src={portrait} alt="Photo of Kai" className="portrait rounded-full w-96 h-96" />
            <div>
              <div className='about-para'>With a diploma in web development, a certificate in graphic design, and a background rooted in the art and print industry, my passion for design and technology has been a lifelong pursuit. I’m constantly immersed in the world behind the screen; creating, coding, deconstructing, and solving complex problems one line of code at a time.</div>
              <div className='about-para'>For the past couple years, I have dedicated myself to full-time web development, collaborating with diverse clients and projects that continually expand my skill set. I prioritize honesty and transparency in my work, finding fulfillment in partnering with like-minded companies and teams to build exceptional digital products.</div>
              <div className='about-para'>In my free time, if I’m not coding, you can find me exploring nature on Vancouver Island (I’m big on hiking and swimming), playing video games (such as elden ring and Valorant) or creating something (paintings, models, crafts, sculptures).</div>
            </div>
            </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <h2 id='skills'>Skills</h2>
          <div className='skills'>
            <div className='skill'>
              <StackIcon name="reactjs" className="icon"/>
              <h3>React</h3>
            </div>
            <div className='skill'>
              <StackIcon name="nodejs" className="icon"/>
              <h3>Node.js</h3>
            </div>
            <div className='skill'>
              <StackIcon name="js" className="icon"/>
              <h3>Javascript</h3>
            </div>
            <div className='skill'>
              <StackIcon name="postgresql" className="icon"/>
              <h3>PostgreSQL</h3>
            </div>
            <div className='skill'>
            <StackIcon name="git" className="icon"/>
              <h3>Git</h3>
            </div>
            <div className='skill'>
            <StackIcon name="tailwindcss" className='icon'/>
              <h3>TailwindCSS</h3>
            </div>
            <div className='skill'>
              <StackIcon name="openai" className="icon"/>
              <h3>OpenAi</h3>
            </div>
            <div className='skill'>
              <StackIcon name="npm" className="icon"/>
              <h3>npm</h3>
            </div>
            <div className='skill'>
              <StackIcon name="ps" className="icon"/>
              <h3>Photoshop</h3>
            </div>
            <div className='skill'>
              <StackIcon name="ruby" className="icon"/>
              <h3>Ruby</h3>
            </div>
            <div className='skill'>
              <StackIcon name="id" className="icon"/>
              <h3>Indesign</h3>
            </div>
            <div className='skill'>
              <StackIcon name="figma" className="icon"/>
              <h3>Figma</h3>
            </div>
            <div className='skill'>
              <StackIcon name="ai" className="icon"/>
              <h3>Illustrator</h3>
            </div>
          </div>
          </FadeInSection>
          <FadeInSection>
          <h2 id='contact'>Contact Me</h2>
          <div className='contact-blurb'>Feel free to contact me if you have any questions about me or my projects!</div>
          <div className='home-socials'>
            <a href="https://github.com/k-j-t-w" target="_blank" rel="noopener noreferrer" className='link'>
              <div className='social'>Github</div>
            </a>
            <a href="www.linkedin.com/in/kai-wingfield" target="_blank" rel="noopener noreferrer" className='link'>
              <div className='social'>Linkedin</div>
            </a>
            <a href="mailto:kaiwingfield17@gmail.com" target="_blank" rel="noopener noreferrer" className='link'>
              <div className='social'>Email</div>
            </a>
          </div>
          </FadeInSection>
      </div>
          <div className='footer'>Kai Wingfield 2024</div>
    </div>
  )
}

export default Home;