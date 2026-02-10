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
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image with slow zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 mt-23">

        {/* Luxury animated heading */}
        <motion.h1
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="text-white text-6xl md:text-8xl tracking-wide"
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
          className="mt-2 text-white text-lg md:text-xl max-w-1xl"
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
          className="mt-6 bg-white text-[rgb(90,14,36)] px-10 py-3 rounded-full font-medium shadow-xl"
        >
          Book Your Appointment
        </motion.button>

      </div>
    </section>
  );
};

export default HeroSection;




