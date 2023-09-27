import React from 'react';
import './Navbar.css';

function NavBar() {
  return (
    <div className="Navbar">
      <ul className="NavMenu">
        <li><a href="#menu">Menu</a></li>
        <li><a href="#market">Market</a></li>
        <li><a href="#catering">Catering</a></li>
        <li className="LogoContainer">
          <img
            src={`${process.env.PUBLIC_URL}/logo/logo-no-background.png`}
            alt="Logo"
            className="NavLogo"
          />
        </li>
        <li><a href="#journal">Journal</a></li>
        <li><a href="#our-story">Our Story</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
