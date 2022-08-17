import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import './experience.css'
function Experience() {
  return (
    <section id='experience'>
      <h5>ehat Skills I Have ? </h5>
      <h2>My Experience</h2>
      <div className='container experience_container experience_forntend'>
        <h3>FrontEnd Devlopment</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <FaCheckCircle className='icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            
          </article>
          <article className='experience_details'>
            <FaCheckCircle  className='icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            
            </div>
            </article>
          <article className='experience_details'>
            <FaCheckCircle  className='icon'/>
            <div>
              <h4>JAVASCRIPT</h4>
              <small className='text-light'>Experienced</small>
            
            </div>
            </article>
          <article className='experience_details'>
            <FaCheckCircle  className='icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
          
            </div>
            </article>
          <article className='experience_details'>
            <FaCheckCircle  className='icon'/>
            <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            
            </div>
            </article>
          <article className='experience_details'>
            <FaCheckCircle  className='icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
          
            </div>
             </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
