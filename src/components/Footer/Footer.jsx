import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#" className="icon"><i className="fab fa-facebook"></i></a>
        <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" className="icon"><i className="fab fa-skype"></i></a>
      </div>
      <p className="copyright">
        &copy; 2017 BASS TRAVELS | Powered by <a href="#">DIGITAL FACTORY</a>
      </p>
    </footer>
  );
};

export default Footer;
