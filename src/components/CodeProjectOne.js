import photolabs from '../images/photolabs-home.jpg'
import photolabsTwo from '../images/photolabs-vertical-modal.jpg'
import photolabsThree from '../images/photoLabs-wide-modal.jpg'
import photolabsFour from '../images/photolabs-dark.jpg'
import photolabsFive from '../images/photolabs-dark-vert.jpg'
import githubLogo from '../images/github-mark-white.png'

const CodeProjectOne = () => {
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
        <div className='sub-img' >
            <img src={photolabs} alt="Photolabs Landing Page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsTwo} alt="Photolabs Vertical modal" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={photolabsThree} alt="Photolabs Horizontal modal" className="modal-img-sub" />
          </div>
          <div className='sub-img' >
            <img src={photolabsFour} alt="Photolabs dark horizontal modal" className="modal-img-sub" />
          </div>
          <div className='sub-img' >
            <img src={photolabsFive} alt="Photolabs dark vertical modal" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeProjectOne;