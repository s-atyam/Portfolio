import React from 'react'
import './navbar.css'
import logo_dp from './logos_black.png'
import {Link} from 'react-scroll';

const Navbar = () => {
 
  return (
    <div className='main-navbar'>
        <img src={logo_dp} className='navbar-logo' alt=''/>
        <div className='navbar-menu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className='navbar-menu-item'>About</Link>
            <Link activeClass='active' to='exp' spy={true} smooth={true} offset={-200} className='navbar-menu-item'>Experties</Link>
            <Link activeClass='active' to='pro' spy={true} smooth={true} offset={-200} className='navbar-menu-item'>Projects</Link>
        </div>
        <div className='navbar-menu-mobile'>
          <div className='menu-mobile'>Sections</div>
            <div className='menu-mobile-dropdown'>
              <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className='navbar-menu-item-m'>About</Link>
              <Link activeClass='active' to='exp' spy={true} smooth={true} offset={-200} className='navbar-menu-item-m'>Experties</Link>
              <Link activeClass='active' to='pro' spy={true} smooth={true} offset={-200} className='navbar-menu-item-m'>Projects</Link>
            </div>
        </div>
        <Link activeClass='active' to='cont' spy={true} smooth={true} offset={-100} className='navbar-contact'>Contact</Link>
    </div>
  )
}

export default Navbar