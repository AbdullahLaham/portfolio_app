import React, { useRef } from 'react'
import { SiGmail } from "react-icons/si";
import { BsMessenger, BsWhatsapp} from "react-icons/bs";
import emailjs from 'emailjs-com';

import './contact.css';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log('h')
    emailjs.sendForm('service_pujao4l', 'template_d0z4kbz', form.current, 'rinwTThngov1CFGpv')
    console.log('h')
  }
  return (
    <section id='contact'>
      <h5>GET Un Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <SiGmail />
            <h4>Email</h4>
            <h5>abed26194@gmail.com</h5>
            <a href='mailto:abed26194@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsMessenger />
            <h4>Massenger</h4>
            <h5>عبدالله اللحام</h5>
            <a href='https://m.me/100003602820747'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>+972592311426</h5>
            <a href='https://wa.me/+972592311426'>Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={(e) => sendEmail(e)} >
          <input type='text' name='name' placeholder='your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
