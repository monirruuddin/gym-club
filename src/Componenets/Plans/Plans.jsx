import React from 'react'
import './Plans.css'
import Plan from '../../data/plansData'
import Thik from '../../assets/whiteTick.png'

function Plans() {
  return (
    <div className='plans-container'>
      <div className="blur blurPlan-1"></div>
      <div className="blur blurPlan-2"></div>
        <div className="programHead" style={{gap:"0.2rem"}}>
        <span className='strokeText'>READY TO START</span>
        <span>OUR JOURNEY</span>
        <span className='strokeText'>NOW WITHUS</span>
        </div>
        <div className="plan">
            {
               Plan.map((item,index)=>{
                 return <div className="planItem" key={index}>
                  <div className="icon">  {item.icon}</div>
                   <h3> {item.name}</h3>
                   <p>$ {item.price}</p>
                    <div className="planFEatures">
                    {
                      
                        item.features.map((feature,i)=> <p key={i}><img src={Thik} alt="" /> {feature}</p>
                        )
                    }
                    </div>
                  
                    <span> See more benefits </span>
                   <div> <button className='btn'>Join Now</button></div>
                </div>
               
               })
            }
        </div>
    </div>
  )
}

export default Plans