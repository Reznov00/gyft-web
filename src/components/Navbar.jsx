import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="main" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label for="menu-btn" className="menu-icon">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="main" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="features">Features</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="subscribe">Subscribe</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
        <Link to="#" className="hey">
          App
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
