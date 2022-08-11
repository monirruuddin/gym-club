import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

function Header() {
  const mobile = window.innerWidth <= 768 ? true: false;
  const [menuOpen,setMenuOpen]= useState(false)


  return (
   <div className="header">
    <img src={Logo} alt="" className="logo" />
    {(menuOpen=== false && mobile=== true)? (<div onClick={()=>setMenuOpen(true)} className='bars'><img src={Bars} alt="" /></div>) :
    <ul className='menuItem'>
    <li onClick={()=>setMenuOpen(false)}>
      <Link
      to='home'
      span={true}
      smooth={true}
      >Home</Link>
    </li>
    <li onClick={()=>setMenuOpen(false)}><Link
      onClick={()=>setMenuOpen(false)}
        to='program'
        span={true}
        smooth={true}>
          Program</Link></li>
    <li onClick={()=>setMenuOpen(false)}><Link
      onClick={()=>setMenuOpen(false)}
        to='reoson'
        span={true}
        smooth={true}>
          Why Us</Link></li>
    <li onClick={()=>setMenuOpen(false)}>
    <Link
      onClick={()=>setMenuOpen(false)}
        to='plan'
        span={true}
        smooth={true}>
          Plans</Link></li>
    <li onClick={()=>setMenuOpen(false)}>
    <Link
      onClick={()=>setMenuOpen(false)}
        to='testimonials'
        span={true}
        smooth={true}>
          Testimonials</Link>
      </li>
</ul>
    }
    
   </div>
  )
}

export default Header