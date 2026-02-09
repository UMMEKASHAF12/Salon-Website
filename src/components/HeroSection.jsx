import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1600245029101-f32b5f27b29e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1590502593745-3f8e77d3c8e5?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1584270354949-dc46df3e4bbf?auto=format&fit=crop&w=1600&q=80"
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image slider */}
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: index * 3 }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
          Bridal Bliss
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6 max-w-2xl">
          Elegant bridal makeovers to make your special day unforgettable.
        </p>
        <button className="bg-white text-bridalDark px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform">
          Book Your Appointment
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
