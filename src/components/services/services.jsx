import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import './services.css'
function Services() {
  return (
    <section id='services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI / UX Design</h3>
          </div>
          <ul className='list'>
            <li>
              <FaCheckCircle className='icon'/>
              <p></p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p></p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p></p>
            </li>
            

          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Devlopement</h3>
          </div>
          <ul className='list'>
            <li>
              <FaCheckCircle className='icon'/>
              <p></p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p></p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p></p>
            </li>
            

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
