import React, { useState } from 'react'
import './Testimonials.css'
import testimonialsData from '../../data/testimonialsData'
import lArrow from '../../assets/leftArrow.png'
import rArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

function Testimonials() {
    const transition={
        type:"spring",
        duration: 3,
      }
    const [selected,setSelected] =useState(0);
    let tlenth =testimonialsData.length
  return (
    <div className='testimonials'>
        <div className="tLeft">
            <span>TESTIMONIALS</span>
            <span className='strokeText'>WHAT THEY</span>
            <span>SAY ABOUT US</span>
            {
               <div className='tstDetails'>
                <motion.p 
                 key={selected}
                 initial={{opacity:0,x:-100}}
                 animate={{opacity:1,x:0}}
                 exit={{opacity:0,x:-100}}
                 transition={transition}>
                {testimonialsData[selected].review}
                </motion.p>
               <span> { testimonialsData[selected].name}{" "}</span>
              <span>-{testimonialsData[selected].status}</span>
               </div>
            }

        </div>
        <div className="tRight">
                <div></div>
                <div></div>
                <motion.img 
                key={selected}
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={transition}
                src={testimonialsData[selected].image} alt=""/>
                <div className="arrows">
                    <img src={lArrow} alt="" onClick={()=>{
                        selected===0 ? setSelected(tlenth-1) : setSelected((prev)=> prev-1);
                    }} />
                    <img src={rArrow} alt="" onClick={()=>{
                        selected===tlenth-1 ? setSelected(0) : setSelected((prev)=> prev+1);
                    }}/>
                </div>
        </div>
    </div>
  )
}

export default Testimonials