import React, { useState } from 'react';
import '../App.css';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Rudra Electropower</h1>
        <button className="menu-toggle" onClick={toggleDrawer}>
          <span className="hamburger"></span>
        </button>
        <nav className={`nav ${isDrawerOpen ? 'open' : ''}`}>
          <button className="close-drawer" onClick={toggleDrawer}>
            ✕
          </button>
          <ul>
            <li><a href="#home" onClick={toggleDrawer}>Home</a></li>
            <li><a href="#services" onClick={toggleDrawer}>Services</a></li>
            <li><a href="#testimonials" onClick={toggleDrawer}>Testimonials</a></li>
            <li><a href="#contact" onClick={toggleDrawer}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;