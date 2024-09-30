
import React, { useState, useEffect } from 'react';
import './CarouselComponent.css'; // Custom CSS file for the carousel
import bus from '../../assets/bus.png';
import bus1 from '../../assets/bus1.png';

const slides = [
  {
    image: bus,
    title: 'Travel In Luxury',
    description: 'Book your tours from our wide fleet of luxury coaches...',
    buttonText: 'Book Now',
  },
  {
    image: bus1,
    title: 'Welcome to BASS TRAVELS!',
    description: 'We are an Exclusive Tours & Travels Agency...',
    buttonText: 'About BASS TRAVELS',
  },
];

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeActive, setFadeActive] = useState(false);

  
  useEffect(() => {
    setFadeActive(true); 
  }, []);

  const handleNext = () => {
    setFadeActive(false); 
    setTimeout(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
      setFadeActive(true); 
    }, 500); 
  };

  const handlePrev = () => {
    setFadeActive(false); // Disable fade before changing slide
    setTimeout(() => {
      const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
      setCurrentSlide(prevSlide);
      setFadeActive(true); // Re-enable fade after slide change
    }, 500); 
  };

  return (
    <div className={`carousel-container ${fadeActive ? 'fade-active' : ''}`}>
      <div className="carousel-slide">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        <div className="carousel-content">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
          <button className="button-c"><span>{slides[currentSlide].buttonText}</span></button>
        </div>
      </div>

    
      <button className="prev" onClick={handlePrev}>&#10094;</button> 
      <button className="next" onClick={handleNext}>&#10095;</button> 
    </div>
  );
};

export default CarouselComponent;
