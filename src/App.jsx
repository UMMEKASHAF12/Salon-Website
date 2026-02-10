import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import OurServices from "./components/OurService";
import GallerySection from "./components/GallerySection";
import AppointmentSection from "./components/AppointmentSection";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OurServices />
      <GallerySection />
       <AppointmentSection />
    </div>
  );
}

export default App;
