import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
   <nav className={`container ${sticky ? "dark-nav" : ""} `}>
    <img src={logo} alt="" className='logo'/> 
    <ul className={mobileMenu ? "mobile-menu" : ""}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="programs" smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to="about" smooth={true} offset={-160} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-240} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to="contact" smooth={true} offset={-230} duration={500}>Contact us</Link></button></li>
    </ul>  
    <img src={menu_icon} alt="" className='menu-icon' onClick={handleMobileMenu}/>
   </nav>
  )
}

export default Navbar
