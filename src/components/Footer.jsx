import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-gradient-border" />
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Ishan<span className="dot">.</span>
          </a>
          <p className="footer-tagline">Digital Product Creator</p>
        </div>

        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-connect">
          <h4>Connect</h4>
          <a href="mailto:ishanverma7413@gmail.com" className="footer-email">ishanverma7413@gmail.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ishan Verma. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
