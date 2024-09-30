import React from 'react';
import './AboutSection.css'; // Import the CSS file
import about from '../../assets/about.jpeg'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6">
            <h2>About BASS TRAVELS</h2>
            <p>
              BASS TRAVELS, a leading tours and travels agency in Pondicherry with over ten years of experience, specializes in organizing tours and offering fleet & taxi services. We have gathered significant knowledge and exposure to design and offer you the best services and meet your requirements perfectly.
            </p>
            <p>
              We also accommodate custom trip requests to offer you the best we can at reasonable fares. Our professional drivers will guide and support you to ensure that your journey turns out to be a comfortable experience.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="col-md-6">
            <img src={about} alt="BASS TRAVELS" className="image-fluid" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;