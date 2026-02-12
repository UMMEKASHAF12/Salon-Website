import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

/* Letter animation variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const title = "Zakia Rukia Salon";

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={hero}
        alt="Salon Hero"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">

        {/* Animated Heading */}
        <motion.h1
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wide leading-tight"
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="mt-4 text-white text-base sm:text-lg md:text-xl max-w-xl"
        >
          Luxury Bridal & Signature Makeovers
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-6 bg-white text-[rgb(90,14,36)] px-8 sm:px-10 py-2 sm:py-3 rounded-full font-medium shadow-xl text-sm sm:text-base"
        >
          Book Your Appointment
        </motion.button>

      </div>
    </section>
  );
};

export default HeroSection;





