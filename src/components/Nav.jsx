import React from 'react';
import { NavLink } from "react-router-dom";
import '../assets/css/Nav.css';
import Image from '../assets/images/Logo.png';

const Nav = () => {
  return (
    <nav className='nav-bar'>
      {/* Logo Section */}
      <div className='logo'>
        <img src={Image} alt="Company Logo" />
      </div>

      {/* Navigation Links */}
      <div className='Main_nav-links'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
        <NavLink to='/products' className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink>
        <NavLink to='/location' className={({ isActive }) => (isActive ? 'active' : '')}>Location</NavLink>
        <NavLink to='/contactus' className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
      </div>

      {/* Gallery Button */}
      <div className='gallery-button'>
        <NavLink to='/gallery'>Gallery</NavLink>
      </div>
    </nav>
  );
};

export default Nav;