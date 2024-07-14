import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.jpg"
import "./Navbar.css"
import { Link } from 'react-scroll';
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {

  const [sticky , setSticky] = useState(false);

  useEffect(()=>{
window.addEventListener("scroll" , ()=>{
  window.scrollY > 50 ? setSticky(true) : setSticky(false)
})
  },[])

  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = ()=>{
mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky && "dark-nav"}`}>
      <img src={logo} alt="logo" className='logo'/>
      
      <ul className={mobileMenu ? "" : "mobile-menu"}>
        <li><Link to="home" smooth={true} offset={0} duration={500} className='point'>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-390} duration={500}>Program</Link></li>
        <li><Link to="About" smooth={true}offset={-120} duration={500}>About us</Link></li>
        <li><Link to="Campus" smooth={true} offset={-280} duration={500}>Campus</Link></li>
        <li><Link to="testimony" smooth={true} offset={-330} duration={500}>Testimony</Link></li>
        <li><Link to="Contact" smooth={true} offset={-250} duration={500}><button className='btn'>Contact us</button></Link></li>
      </ul>
      <FaBarsStaggered  className="menu" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
