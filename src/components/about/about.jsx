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
              <small>1.5+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUserAlt className='about_icon'/>
              <h5>Clients</h5>
              <small>50+ woldWide</small>
            </article>
            <article className='about_card'>
              <FaRegFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p className='aboutMe'>Hi, my name is Abdullah , i am a web developer with specialization in React JS, Next JS Frameworks for website's Front End development, and various backend technologies as Sanity
            , firebase and so on.
            I studied computer systems engineering in Al-Azhar University Gaza  
            I got a training with Gaza Sky Geeks Company in the coding foundation course for front end web development and
             I Graduated from it with A+ Score  
            I am experienced in:
            - JavaScript (ES5, ES6, JSON , Ajax, Axios Fetch)
            - ReactJS, Next JS, Hooks, Redux,
            - Material UI,
            Tailwind,
            - HTML5/CSS3
            (Flex, Grid) - Other tech: NPM, Yarn
            package management – Git, GitHub
            I guarantee high-quality code and on-time delivery always. Please ping me and let’s discuss your projects.

</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
