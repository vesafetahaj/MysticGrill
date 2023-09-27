import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
  return (
    <div className="Navbar">
      <ul className="NavMenu">
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/market">Market</Link></li>
        <li><Link to="/catering">Catering</Link></li>
        <li className="LogoContainer">
          <img
            src={`${process.env.PUBLIC_URL}/logo/logo-no-background.png`}
            alt="Logo"
            className="NavLogo"
          />
        </li>
        <li><Link to="/journal">Journal</Link></li>
        <li><Link to="/story">Our Story</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
