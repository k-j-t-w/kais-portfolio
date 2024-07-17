import gunner from '../images/Gunner.jpg';
import painting1 from '../images/Painting2.jpg'
import painting2 from '../images/Painting3.jpg'
import painting3 from '../images/Painting4.jpg'
import painting4 from '../images/Painting5.jpg'
import painting5 from '../images/Painting6.jpg'

const Paintings = () => {
  const paintingsImages = [gunner, painting1, painting2, painting3, painting4, painting5]
  return (
    <div>
        <h1 className='modal-title'>Paintings</h1>
        <div className='modal-desc'>Paintings done with posca pens and mixed media on 10"x10" boards.</div>
        <div>
        </div>
      <div className='img-cont'>
        <div className='additional-img'>
        <div className='sub-img'>
            <img src={gunner} alt="Portfolio Prophets stock page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting1} alt="Portfolio Prophets register page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting2} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting3} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting4} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
          <div className='sub-img'>
            <img src={painting5} alt="Portfolio Prophets search result page" className="modal-img-sub" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paintings;