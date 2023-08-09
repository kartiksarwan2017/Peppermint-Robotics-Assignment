// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css'; // Update this CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-details">
          <div className="logo">
            <img src="./peppermintLogo.png" alt="Logo" className='footer-logo' />
          </div>
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
        </div>
        <div className="social-icons">
          <h3>Follow Us</h3>
          <div className="icon-list">
            <a href="#">
              <FaFacebook className="icon fb-icon" />
            </a>
            <a href="https://twitter.com/getpeppermint">
              <FaTwitter className="icon twitter-icon" />
            </a>
            <a href="#">
              <FaInstagram className="icon insta-icon" />
            </a>
            <a href="https://www.linkedin.com/company/getpeppermint/">
              <FaLinkedin className="icon linkedin-icon" />
            </a>
            <a href="https://www.youtube.com/@PeppermintRobotics">
              <FaYoutube className="icon yt-icon"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
