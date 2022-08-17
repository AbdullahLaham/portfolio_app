import React from 'react'
import Me from '../../assets/me-about.jpg'
import './about.css'
import { FaAward } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Me} />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experirence</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUserAlt className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ woldWide</small>
            </article>
            <article className='about_card'>
              <FaRegFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, vero provident beatae sed facere laudantium sunt nulla officiis consequatur doloribus rem, natus dolores animi iste nobis recusandae cumque sapiente. Necessitatibus.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
