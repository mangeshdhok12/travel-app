import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState({ hour: '01', minute: '00' });

  return (
    <div className="booking-container">
   
   <div className="sidebar">
        <div className="tab active">Distance</div>
        <div className="tab">Flat Rate</div>
      </div>
    <form className="pickup-form">
  
      <div className="form-group">
        <label htmlFor="pickup-address">Pick Up Address</label>
        <div className="input-wrapper">
          <input
            type="text"
            id="pickup-address"
            placeholder="Enter a location"
          />
          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="dropoff-address">Drop Off Address</label>
        <div className="input-wrapper">
          <input
            type="text"
            id="dropoff-address"
            placeholder="Enter a location"
          />
          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="pickup-date">Pick Up Date</label>
        <div className="input-wrapper">
          <input
            type="date"
            id="pickup-date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
          <i className="fas fa-calendar-alt"></i>
        </div>
      </div>

      <div className="form-group">
        <label>Pick Up Time</label>
        <div className="time-wrapper">
          <select
            value={pickupTime.hour}
            onChange={(e) =>
              setPickupTime({ ...pickupTime, hour: e.target.value })
            }
          >
            {[...Array(24)].map((_, i) => (
              <option key={i} value={String(i).padStart(2, '0')}>
                {String(i).padStart(2, '0')}
              </option>
            ))}
          </select>
          <span>:</span>
          <select
            value={pickupTime.minute}
            onChange={(e) =>
              setPickupTime({ ...pickupTime, minute: e.target.value })
            }
          >
            {[...Array(60)].map((_, i) => (
              <option key={i} value={String(i).padStart(2, '0')}>
                {String(i).padStart(2, '0')}
              </option>
            ))}
          </select>
        </div>
      </div>
      
        <button className="reserve-btn">
      <span>Reserve Now</span>
    </button>
    </form>
    </div>
  );
};

export default BookingForm;
