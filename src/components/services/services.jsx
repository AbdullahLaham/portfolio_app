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
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut minima dicta voluptatum numquam, consectetur sint inventore ipsa similique dolores vero doloribus facilis asperiores eveniet rem error laudantium delectus amet?</p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut minima dicta voluptatum numquam, consectetur sint inventore ipsa similique dolores vero doloribus facilis asperiores eveniet rem error laudantium delectus amet?</p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut minima dicta voluptatum numquam, consectetur sint inventore ipsa similique dolores vero doloribus facilis asperiores eveniet rem error laudantium delectus amet?</p>
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
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut minima dicta voluptatum numquam, consectetur sint inventore ipsa similique dolores vero doloribus facilis asperiores eveniet rem error laudantium delectus amet?</p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut minima dicta voluptatum numquam, consectetur sint inventore ipsa similique dolores vero doloribus facilis asperiores eveniet rem error laudantium delectus amet?</p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut minima dicta voluptatum numquam, consectetur sint inventore ipsa similique dolores vero doloribus facilis asperiores eveniet rem error laudantium delectus amet?</p>
            </li>
            

          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='list'>
            <li>
              <FaCheckCircle className='icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut minima dicta voluptatum numquam, consectetur sint inventore ipsa similique dolores vero doloribus facilis asperiores eveniet rem error laudantium delectus amet?</p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut minima dicta voluptatum numquam, consectetur sint inventore ipsa similique dolores vero doloribus facilis asperiores eveniet rem error laudantium delectus amet?</p>
            </li>
            <li>
              <FaCheckCircle className='icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ut minima dicta voluptatum numquam, consectetur sint inventore ipsa similique dolores vero doloribus facilis asperiores eveniet rem error laudantium delectus amet?</p>
            </li>
            

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services