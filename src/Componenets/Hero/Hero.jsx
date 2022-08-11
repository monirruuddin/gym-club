import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import HeroImg from '../../assets/hero_image.png'
import HeroImgB from '../../assets/hero_image_back.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

function Hero() {
  const transition={
    type:"spring",
    duration: 3,
  }
  return (
    <div className="hero" id="home">
      <div className='blur heroBlur'></div>
        <div className="leftH">
            <Header></Header>
            {/* heroText header */}
            <div className="heroText">
                <div>
                  <span className='strokeText'>Shape </span>
                  <span>Your</span>
                </div>
                <div>
                  <span> Body Builder</span>
                </div>
                <div>
                  <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            {/* figures */}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay='4' preFix='+' />
                </span>
                <span>Expert Choches</span>
              </div>
              <div>
                <span> 
                  <NumberCounter end={940} start={815} delay='4' preFix='+' />
                  </span>

                <span>Members joined</span>
              </div>
              <div>
                <span>
                <NumberCounter end={90} start={60} delay='4' preFix='+' />
                </span>
                <span>Fitness Program</span>
              </div>
            </div>
             {/* figures  btn*/}
             <div className="figuresBtn">
              <button>Get Started</button>
              <button>Learn More</button>
             </div>
        </div>
        <div className="rightH">
            <button className='btnJoin'>Join Us</button>
            <img src={HeroImg} alt=""  className='HeroImg'/>
            <motion.img
            initial={{right:"11rem"}}
            whileInView={{right:"20rem"}}
            transition={transition} src={HeroImgB} alt=""  className='HeroImgB'/>
        </div>
    </div>
  )
}

export default Hero