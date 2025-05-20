import githubLogo from '../images/github-mark-white.png'
import et1 from '../images/et1.png'
import et2 from '../images/et2.png'
import et3 from '../images/et3.png'
import et4 from '../images/et4.png'
import et5 from '../images/et5.png'
import et6 from '../images/et6.png'
import et7 from '../images/et7.png'
import et8 from '../images/et8.png'


const CodeProjectFour = ({ openLightbox }) => {
  const codeProjectFourImages = [et1, et2, et3, et4, et5, et6, et7, et8]

  return (
    <div>
        <h1 className='modal-title'>Expense Trend</h1>
        <div className='modal-desc'>A dynamic personal finance app built with HTML and React, developed end-to-end by me.</div>
        <div>
          <div className='modal-links'>

            <a className='modal-link' href="https://www.expensetrend.com" target="_blank" rel="noopener noreferrer">
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
        <div className='sub-img' key='0' onClick={() => openLightbox(codeProjectFourImages, 0)}>
            <img src={et1} alt="Portfolio Prophets stock page" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='1' onClick={() => openLightbox(codeProjectFourImages, 1)}>
            <img src={et2} alt="Portfolio Prophets register page" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='2' onClick={() => openLightbox(codeProjectFourImages, 2)}>
            <img src={et3} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img' key='3' onClick={() => openLightbox(codeProjectFourImages, 3)}>
            <img src={et4} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
                    <div className='sub-img' key='3' onClick={() => openLightbox(codeProjectFourImages, 3)}>
            <img src={et5} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
                    <div className='sub-img' key='3' onClick={() => openLightbox(codeProjectFourImages, 3)}>
            <img src={et6} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
                    <div className='sub-img' key='3' onClick={() => openLightbox(codeProjectFourImages, 3)}>
            <img src={et7} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
                    <div className='sub-img' key='3' onClick={() => openLightbox(codeProjectFourImages, 3)}>
            <img src={et8} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeProjectFour;