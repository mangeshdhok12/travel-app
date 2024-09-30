
import React, { useEffect, useState } from 'react';
import './NavbarList.css';

const NavbarList = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsSticky(scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <ul className="navbar-menu">
        <li className="navbar-item active">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="#fleet">Fleet</a>
        </li>
        <li className="navbar-item">
          <a href="#fares">Fares</a>
        </li>
        <li className="navbar-item">
          <a href="#booking">Booking</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="search-icon">
        <a href="#search">🔍</a>
      </div>
    </nav>
  );
};

export default NavbarList;
