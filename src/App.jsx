import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import OurServices from "./components/OurService";
import GallerySection from "./components/GallerySection";
import AppointmentSection from "./components/AppointmentSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Add IDs for smooth scrolling */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <OurServices />
      </section>

      <section id="gallery">
        <GallerySection />
      </section>

      <section id="appointment">
        <AppointmentSection />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
