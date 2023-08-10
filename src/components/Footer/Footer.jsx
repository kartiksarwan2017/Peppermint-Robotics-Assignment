// components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css'; // Update this CSS file for styling

function Footer() {

  const quickLinks = [
    { title: 'Home', link: '#' },
    { title: 'FAQs', link: '#' },
    { title: 'Case Studies', link: '#' },
    { title: 'Products', link: '#' },
    { title: 'blogs', link: '#' },
  ];

  const recentPosts = [
    { title: 'Elevating Efficiency', link: '#' },
    { title: 'Autonomous Mobile Robots', link: '#' }
  ];
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-details">
          <div className="logo">
            <img src="./peppermintLogo.png" alt="Logo" className='footer-logo' />
          </div>
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: info@getpeppermint.co</p>
            <p>Phone: +91 89567 10044</p>
            <p>Address: Survey No 116, 3/1, <br />opp. ShubhTej Mangal Karyalay, <br />near Balaji Chowk, Jai Bhavani Nagar,<br /> Pashan, Pune, Maharashtra 411021</p>
          </div>
        </div>
        <div className="footer-links">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <ul>
              {recentPosts.map((post, index) => (
                <li key={index}>
                  <a href={post.link}>{post.title}</a>
                </li>
              ))}
            </ul>
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
