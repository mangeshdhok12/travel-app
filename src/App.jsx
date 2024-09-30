import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NavbarList from './components/NavbarList/NavbarList'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent/CarouselComponent'
import InfoGrid from './components/InfoGrid/InfoGrid'
import Fleet from './components/Fleet/Fleet'
import AboutSection from './components/AboutSection/AboutSection'
import BookNow from './components/BookNow/BookNow'
import BookingForm from './components/BookingForm/BookingForm'
import MainLayout from './components/MainLayout/MainLayout'
import FooterAbout from './components/FooterAbout/FooterAbout'
import Footer from './components/Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <NavbarList/>
      <CarouselComponent/>
      <InfoGrid/>
      <BookingForm/>
      <Fleet/>
      <AboutSection/>
      <BookNow/>
     < MainLayout/>
     <FooterAbout/>
     <Footer/>
    </div>
  )
}

export default App
