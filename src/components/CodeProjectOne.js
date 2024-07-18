import photolabs from '../images/photolabs-home.jpg'
import photolabsTwo from '../images/photolabs-vertical-modal.jpg'
import photolabsThree from '../images/photoLabs-wide-modal.jpg'
import photolabsFour from '../images/photolabs-dark.jpg'
import photolabsFive from '../images/photolabs-dark-vert.jpg'
import githubLogo from '../images/github-mark-white.png'

const CodeProjectOne = ({ openLightbox }) => {
  const codeProjectOneImages = [photolabs, photolabsTwo, photolabsThree, photolabsFour, photolabsFive]


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
        <div className='sub-img' key='0' onClick={() => openLightbox(codeProjectOneImages, 0)} >
            <img src={photolabs} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='1' onClick={() => openLightbox(codeProjectOneImages, 1)}>
            <img src={photolabsTwo} alt="Photolabs Vertical modal" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='2' onClick={() => openLightbox(codeProjectOneImages, 2)}>
            <img src={photolabsThree} alt="Photolabs Horizontal modal" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='3' onClick={() => openLightbox(codeProjectOneImages, 3)}>
            <img src={photolabsFour} alt="Photolabs dark horizontal modal" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='4' onClick={() => openLightbox(codeProjectOneImages, 4)}>
            <img src={photolabsFive} alt="Photolabs dark vertical modal" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeProjectOne;