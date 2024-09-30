

import React from 'react';
import './InfoGrid.css';

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <div className="feature-text">
        <h3>{title}</h3>
        <div className="underline"></div>
        <p>{description}</p>
      </div>
    </div>
  );
};

const InfoGrid = () => {
  return (
    <div className="feature-list">
      <FeatureItem
        icon="fas fa-calendar-check"
        title="Easy Online Booking"
        description="Just fill up basic details and choose the dates on our reservation form in this website to book your travel needs."
      />
    
      <FeatureItem
        icon="fas fa-bus"
        title="Professional Drivers"
        description="Our drivers are not only professional but also very supportive to ensure your journey is totally comfortable."
      />
        <FeatureItem
        icon="fas fa-shuttle-van"
        title="Wide Fleet of Vehicles"
        description="All our fleet that are in perfect condition before the journey to provide you a safe and pleasant travel experience."
      />
      <FeatureItem
        icon="fas fa-comments"
        title="Free Travel Insurance"
        description="Enjoy your travel in comfort with our free travel insurance that offers life coverage up to Rs. 2 Lacs. Conditions apply.."
      />
    </div>
  );
};

export default InfoGrid;

