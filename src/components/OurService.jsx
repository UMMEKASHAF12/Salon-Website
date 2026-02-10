import React from "react";
import { motion } from "framer-motion";

// Services data
const services = [
  { name: "Body", img: "/assets/body.jpg" },
  { name: "Massages", img: "/assets/massages.jpg" },
  { name: "Spa Packages", img: "/assets/spa.jpg" },
  { name: "Couples", img: "/assets/couples.jpg" },
  { name: "IV Therapy", img: "/assets/iv.jpg" },
  { name: "Microblading", img: "/assets/microblading.jpg" },
  { name: "Gift Cards", img: "/assets/giftcards.jpg" },
  { name: "Our Products", img: "/assets/products.jpg" },
];

const OurServices = () => {
  return (
    <section className="py-28 px-6 md:px-20 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Explore our wide selection of luxury spa treatments & beauty services
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
          >
            {/* Service Image */}
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">
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
