import React from 'react'
import './Programs.css'
import programsData from '../../data/programsData'
import arrowEle from '../../assets/rightArrow.png'


function Programs() {
  return (
    <div className='program'>
        <div className="programHead">
        <span className='strokeText'>Explore Our</span>
        <span>Program</span>
        <span className='strokeText'>To shape you</span>
        </div>
        
        <div className="programAll">
        
            {
             programsData.map((item,index)=>{ 
             return <div className='programItem' key={index}> {item.image}  
             <h3>{item.heading}</h3> 
             <p>{item.details}</p>
             <div>
             <span>Join Us</span> <img src={arrowEle} alt="" />
             </div>
             </div>
            })
          }
        </div>
    </div>
    
  )
}

export default Programs