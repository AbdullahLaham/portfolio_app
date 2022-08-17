import React, {useState} from 'react'
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import './nav.css'
function Nav() {
  const [active, setActive] = useState('')
  return (
    <nav>
      <a href='#' className={active == '' ? 'active' : ''} onClick={() => setActive('')}><FaHome /></a>
      <a href='#about' className={active == '#' ? 'active' : ''} onClick={() => setActive('#')}><FaUserAlt /></a>
      <a href='#experience' className={active == '##' ? 'active' : ''} onClick={() => setActive('##')}><FaRegBookmark /></a>
      <a href='#services' className={active == '###' ? 'active' : ''} onClick={() => setActive('###')}><FaServicestack /></a>
      <a href='#contact' className={active == '####' ? 'active' : ''} onClick={() => setActive('####')}><FaSms /></a>
    </nav>
  )
}

export default Nav
