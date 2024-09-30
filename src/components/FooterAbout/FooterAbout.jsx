import React from 'react';
import './FooterAbout.css'; // Import the CSS file

const FooterAbout = () => {
  return (
    <div className="footer-about">
      <div className="footer-section about-us">
        <h3>ABOUT US</h3>
        <p>
          BASS TRAVELS is a leading tours and travels agency in Pondicherry. With over 10 years
          of experience in organizing tours and providing fleet services, we have gathered significant
          knowledge in designing and offering you the best tour packages to meet your requirements perfectly.
        </p>
        <p>
          BASS TRAVELS also offers a wide range of travel services high-tech fleet services for
          private tours, seasonal temple tours, educational tours, corporate holiday outings, business
          tours and wedding trips. Our objective is to offer our clients a safe, comfortable and happy
          journey experience!
        </p>
      </div>

      <div className="footer-section quick-links">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><a href="/travel-policy">Travel Policy</a></li>
          <li><a href="/faqs">F.A.Qs</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/feedback">Feedback Form</a></li>
        </ul>
      </div>

      <div className="footer-section contact-details">
        <h3>CONTACT DETAILS</h3>
        <p>
          <i className="fas fa-map-marker-alt"></i> #20,21,ECR, 100FT ROAD, KARUVADIKUPPAM, PONDICHERRY-605008
        </p>
        <p>
          <i className="fas fa-phone-alt"></i> +919443279915 / +919791855051
          <br />Mon-Sat | 7:00 a.m. - 10:30 p.m.
        </p>
        <p>
          <i className="fas fa-envelope"></i> bookings@basstravels.in
          <br />We respond within 3 hours.
        </p>
      </div>
    </div>
  );
};

export default FooterAbout;
