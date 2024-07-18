import githubLogo from '../images/github-mark-white.png'
import port from '../images/stock-analysis.png'
import portTwo from '../images/register.jpg'
import portThree from '../images/search-result.jpg'


const CodeProjectTwo = ({ openLightbox }) => {
  const codeProjectTwoImages = [port, portTwo, portThree]

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
        <div className='sub-img' key='0' onClick={() => openLightbox(codeProjectTwoImages, 0)}>
            <img src={port} alt="Portfolio Prophets stock page" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='1' onClick={() => openLightbox(codeProjectTwoImages, 1)}>
            <img src={portTwo} alt="Portfolio Prophets register page" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='2' onClick={() => openLightbox(codeProjectTwoImages, 2)}>
            <img src={portThree} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeProjectTwo;