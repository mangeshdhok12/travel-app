import React from 'react';
import './BookNow.css'; 
import bookbus from '../../assets/bookbus.jpeg'

const BookNow = () => {
  return (
    <div className="image-container">
      <img src={bookbus} alt="Book Your Travel" />
      <div className="overlay">
        <h3>Book Online Now to Enjoy Comfort Travel!</h3>
        <p>Call us: +91 94432 79915 | Email: bookings@basstravels.in</p>
        <button>BOOK NOW </button>
      </div>
    </div>
  );
};

export default BookNow;