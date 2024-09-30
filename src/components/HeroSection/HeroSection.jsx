import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Travel In Luxury</h1>
        <p>
          Book your tours from our wide fleet range of luxury coaches, mini-buses, and vans 
          designed for a comfortable travel experience!
        </p>
        <a href="#book" className="hero-btn">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
