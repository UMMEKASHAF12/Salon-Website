import React from "react";
import { motion } from "framer-motion";

const services = [
  { name: "Body", img: "/services/body.jpg" },
  { name: "Massages", img: "/services/massages.jpg" },
  { name: "Spa Packages", img: "/services/spa.jpg" },
  { name: "Couples", img: "/services/couples.jpg" },
  { name: "IV Therapy", img: "/services/iv.jpg" },
  { name: "Microblading", img: "/services/microblading.jpg" },
  { name: "Gift Cards", img: "/services/gift.jpg" },
  { name: "Our Products", img: "/services/products.jpg" },
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
        className="text-center mb-20"
      >
        <h2
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-5xl text-gray-900"
        >
          Our Services
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          A wide selection of luxury beauty & spa treatments
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer"
          >

            {/* Image */}
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-64 object-cover"
            />

            {/* Bottom maroon slide box */}
            <div
              className="
                absolute bottom-0 left-0 w-full
                bg-[rgb(90,14,36)]
                text-white
                text-center
                py-4
                translate-y-full
                group-hover:translate-y-0
                transition-transform duration-500 ease-out
              "
            >
              <h3 className="text-lg tracking-[0.25em] uppercase font-light">
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

