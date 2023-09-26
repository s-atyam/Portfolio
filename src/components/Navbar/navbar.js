import React from 'react'
import './navbar.css'
import logo_dp from './logos_black.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className='main-navbar'>
        <img src={logo_dp} className='navbar-logo' alt=''/>
        <div className='navbar-menu'>
            <Link className='navbar-menu-item'>Home</Link>
            {/* <Link className='navbar-menu-item'>About</Link>
            <Link className='navbar-menu-item'>Contact</Link> */}
        </div>
        <div className='navbar-contact'>Contact</div>
    </div>
  )
}

export default Navbar