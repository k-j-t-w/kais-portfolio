import design from '../images/DowntimeTea2.jpg'
import design3 from '../images/DownTimeTea1.jpg'
import design4 from '../images/Album1.jpg'
import design5 from '../images/Album2.jpg'
import design6 from '../images/Album3.jpg'
import design7 from '../images/Magazine1.png'
import design8 from '../images/Magazine2.jpg'
import design9 from '../images/Magazine3.jpg'
import design10 from '../images/Menu1.jpg'
import design11 from '../images/Menu2.jpg'


const DesignWork = () => {
  const designWorkImages = [ design, design3, design4, design5, design6, design7, design8, design9, design10, design11]
  return (
    <div>
        <h1 className='modal-title'>Design Work</h1>
        <div className='modal-desc'>A collection of my design work. Projects pictured include: <br /> <br /> Dowtime Tea: A creative graphical exploration of tea flavours mixed with a calming colour pallet to reflect a calm evening at home.<br /> <br /> Mirage Magazine: A multiplatform photography magazine. The project focused on formatting between print, mobile and tablet layouts.<br /> <br /> Blush Album: Conceptual album design for Canadian artist Blush's debut album.<br /> <br /> Golden Pearl Menu:  A creative study focused on branding a high end seafood restaurant.</div>
        <div>
        </div>
        <div className='modal-skills'>
          <div className='modal-skill'>Photoshop</div>
          <div className='modal-skill'>Indesign</div>
          <div className='modal-skill'>Illustrator</div>
          <div className='modal-skill'>Figma</div>
        </div>
      <div className='img-cont'>
        <div className='additional-img'>
        <div className='sub-img'>
            <img src={design} alt="Portfolio Prophets stock page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design3} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design4} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design5} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design6} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design7} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design8} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design9} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design10} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={design11} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignWork;