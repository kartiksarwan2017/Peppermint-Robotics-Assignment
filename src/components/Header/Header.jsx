import "./Header.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container"> 
      <div className="navbar">
        <div className="navbar-logo">
          <img src="./peppermintLogo.png" />
        </div>
        <div className='navbar-header'>
          <h1>Peppermint Robotics</h1>
        </div>
      </div>
      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/careers">Careers</Link>
      </div>
    </div>
  )
}

export default Header;