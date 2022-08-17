import React from 'react'
import CTA from './CTA'
import './header.css';
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
function Header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'M</h5>
        <h1>Abdullah AL-Lahham</h1>
        <h5 className='text-align'>Front End Developer</h5>
        <CTA />
        <HeaderSocial />
        <a href='#contact' className='scroll_down'>Scroll Down</a>
        <div className='me'>
          <img  src={me} alt=''/>
          
        </div>
        
      </div>
    </header>
  )
}

export default Header
