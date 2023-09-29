import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterContent">
        <div className="FooterLogo">
          <img
            src={`${process.env.PUBLIC_URL}/images/download.png`}
            alt="Restaurant Logo"
          />
        </div>
        <div className="FooterLinks">
          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/story">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="FooterText">
        <p>&copy; {new Date().getFullYear()} Mystic Grill. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
