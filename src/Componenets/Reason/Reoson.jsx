import React from 'react'
import './Reoson.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidus from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

function Reoson() {
  return (
    <div className='reoson'>
        <div className="rLeft">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <div className="rRight">
            <span>Some Reoson</span>
            <div>
                <span className='strokeText'>Why</span>
                <span>Choose Us</span>
                <div className="detailsR">
                    <div>
                        <img src={tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
            </div>
            <div className="partner">
                    <span>OUR PARTNERS</span>
                    <img src={nike} alt="" />
                    <img src={nb} alt="" />
                    <img src={adidus} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Reoson