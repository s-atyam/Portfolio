import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className='main-navbar'>
        <div className='navbar-logo'>LOGO</div>
        <div className='navbar-menu'>
            <Link className='navbar-menu-item'>Home</Link>
            <Link className='navbar-menu-item'>About</Link>
            <Link className='navbar-menu-item'>Contact</Link>
        </div>
        <div className='navbar-contact'>Contact</div>
    </div>
  )
}

export default Navbar