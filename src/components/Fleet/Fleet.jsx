import React from 'react';
import './Fleet.css'; 
import tempo from '../../assets/tempo.png'
import enova from '../../assets/enova.png'
import itios from '../../assets/itios.png'
import indigo from '../../assets/indigo.png'


const Fleet = () => {
  const cars = [
    {
      name: '17S Tempo Traveller',
      image: tempo,
      price: '20',
      seats: '17 Seater',
      bags: '20 Bags',
    },
    {
      name: 'Innova',
      image: enova,
      price: '12',
      seats: '7 Seater',
      bags: '9 Bags',
    },
    {
      name: 'Etios',
      image: itios,
      price: '9',
      seats: '4 Seater',
      bags: '6 Bags',
    },
    {
      name: 'Indigo',
      image: indigo,
      price: '8.50',
      seats: '4 Seater',
      bags: '6 Bags',
    },
  ];

  return (
    <div className="fleet-section">
      <h2>Our Fleet</h2>
      <p>Choose from our wide range of luxury and budgeted fleet to meet your travel needs.</p>
      <div className="fleet-cards-container">
        {cars.map((car, index) => (
          <div className="fleet-card" key={index}>
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="price-tags">From Rs. {car.price}</div>
            <h3>{car.name}</h3>
            <div className="car-details">
              <div className="car-detail-item">✔ {car.seats}</div>
              <div className="car-detail-item">✔ {car.bags}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleet;
