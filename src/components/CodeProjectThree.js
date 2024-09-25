import githubLogo from '../images/github-mark-white.png'
import chess from '../images/Opening.png'
import chess1 from '../images/Ruylopez.png'
import chess2 from '../images/Checkmate.png'
import chess3 from '../images/Promotion.png'


const CodeProjectThree = ({ openLightbox }) => {
  const codeProjectThreeImages = [chess, chess1, chess2, chess3]

  return (
    <div>
        <h1 className='modal-title'>Chess App</h1>
        <div className='modal-desc'>LIVE SITE ONLY WORKS ON DESKTOP. A react based site with a rudamentary chess application. An personal project to explore typescript and introductions to chess coding. A preliminary project for my next project; developing a chess ai</div>
        <div>
          <div className='modal-links'>
            <a className='modal-link' href="https://github.com/k-j-t-w/react-chess-app" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="github logo" className="github-logo" />
              <div>GITHUB</div>
            </a>
            <a className='modal-link' href="https://kais-chess.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div>LIVE SITE</div>
            </a>
          </div>
        </div>
        <div className='modal-skills'>
          <div className='modal-skill'>React</div>
          <div className='modal-skill'>Typescript</div>
        </div>
      <div className='img-cont'>
        <div className='additional-img'>
        <div className='sub-img' key='0' onClick={() => openLightbox(codeProjectThreeImages, 0)}>
            <img src={chess} alt="Portfolio Prophets stock page" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='1' onClick={() => openLightbox(codeProjectThreeImages, 1)}>
            <img src={chess1} alt="Portfolio Prophets register page" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='2' onClick={() => openLightbox(codeProjectThreeImages, 2)}>
            <img src={chess2} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='3' onClick={() => openLightbox(codeProjectThreeImages, 3)}>
            <img src={chess3} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeProjectThree;