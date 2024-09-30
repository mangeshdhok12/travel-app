

import React from 'react';
import './FleetGallery.css'; 
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'
import enova from '../../assets/enova.png'
import indigo from '../../assets/indigo.png'
import itios from '../../assets/itios.png'


const FleetGallery = () => {
  const fleetData = [
    { name: '37 Seater A.C.', image: a1 },
    { name: '4 Seater IndigoCS', image: indigo },
    { name: '4 Seater Etios', image: itios },
    { name: '54 Seater Non-A.C.', image: a3 },
    { name: '7 Seater Innova', image: enova },
    { name: '37 Seater A.C.', image: a2 },
    { name: '33 Seater A.C.', image: enova},
    { name: '37 Seater Non-A.C.', image: a3 },
    { name: '54 Seater Non-A.C.', image: a1 }
  ];

  return (
    <div className="fleet-gallery">
      <h2>Fleet Gallery</h2>
      <div className="fleet-grid">
        {fleetData.map((fleet, index) => (
          <div className="fleet-item" key={index}>
            <img src={fleet.image} alt={fleet.name} />
            <p>{fleet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetGallery;


