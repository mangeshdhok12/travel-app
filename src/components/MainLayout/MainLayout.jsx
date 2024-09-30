import React from 'react';

import './MainLayout.css'; 
import FleetGallery from '../FleetGallery/FleetGallery';
import CustomerOpinions from '../CustomerOpinions/CustomerOpinions';


const MainLayout = () => {
  return (
    <div className="main-layout">
      <FleetGallery/>
      <CustomerOpinions/>
    </div>
  );
};

export default MainLayout;
