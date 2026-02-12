import React from "react";
import { motion } from "framer-motion";
import g6 from "../assets/gallery/g6.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g8 from "../assets/gallery/g8.jpg";

const services = [
  { name: "Baraat Makeup", img: g6 },
  { name: "Mehndi Makeup", img: g4 },
  { name: "Party Makeup", img: g7 },
  { name: "Glamorous Makeup", img: g8 },
];

const OurServices = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20"
      >
        <h2
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-3xl sm:text-4xl md:text-5xl text-gray-900"
        >
          Our Services
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          A wide selection of luxury beauty & spa treatments
        </p>
      </motion.div>

      {/* Square Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer aspect-square"
          >

            {/* Image */}
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Bottom Maroon Slide Box */}
            <div
              className="
                absolute bottom-0 left-0 w-full
                bg-[rgb(90,14,36)]
                text-white
                text-center
                py-3
                translate-y-full
                group-hover:translate-y-0
                transition-transform duration-500 ease-out
              "
            >
              <h3 className="text-sm sm:text-base tracking-[0.2em] uppercase font-light">
                {service.name}
              </h3>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default OurServices;


