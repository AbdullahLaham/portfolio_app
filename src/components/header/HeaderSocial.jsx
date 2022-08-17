import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";



function HeaderSocial() {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com' target='_blank'><FaLinkedin /></a>
      <a href='https://www.github.com' target='_blank'><FaGithub /></a>
      <a href='https://www.dribbble.com' target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocial
