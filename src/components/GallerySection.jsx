import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import g1 from "../assets/gallery/g1.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g8 from "../assets/gallery/g8.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g4 from "../assets/gallery/g4.jpg";

const images = [g1, g8, g3, g6, g5, g4, g7];

const GalleryStacked = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  // check if section is in view
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#fdf8f6] to-[#f3ece8] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-4xl md:text-5xl text-gray-900 tracking-wide"
          >
            Gallery
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Luxury moments captured beautifully
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex justify-center items-center h-[480px] perspective-[1200px]">
          {images.map((img, index) => {
            const total = images.length;
            let offset = index - (active % total);

            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            return (
              <motion.img
                key={index}
                src={img}
                alt="gallery"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  x: offset * 260,
                  scale: offset === 0 ? 1.08 : 0.85,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  rotateY: offset * -15,
                  filter: offset === 0 ? "blur(0px)" : "blur(3px)",
                  zIndex: offset === 0 ? 20 : 5,
                }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="
                  absolute
                  w-[300px] md:w-[380px]
                  h-[420px]
                  object-cover
                  rounded-[36px]
                  shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                "
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default GalleryStacked;
