import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import g1 from "/gallery/g1.jpg";

const images = [
  "/gallery/g1.jpg",
  "/gallery/g1.jpg",
  "/gallery/g1.jpg",
  "/gallery/g1.jpg",
  "/gallery/g1.jpg",
];

const GalleryStacked = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => prev + 1); // ❗ no reset
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-28 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-5xl text-gray-900"
        >
          Gallery
        </h2>
        <p className="text-gray-600 mt-3">
          Luxury moments captured beautifully
        </p>
      </div>

      {/* Cards */}
      <div className="relative flex justify-center items-center h-[420px]">
        {images.map((img, index) => {
          const total = images.length;

          // circular offset (magic ✨)
          let offset = (index - (active % total));

          // wrap offsets
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          return (
            <motion.img
              key={index}
              src={img}
              alt="gallery"
              animate={{
                x: offset * 220,
                scale: offset === 0 ? 1 : 0.85,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: offset === 0 ? 10 : 5,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="
                absolute
                w-[280px] md:w-[340px]
                h-[380px]
                object-cover
                rounded-[28px]
                shadow-2xl
              "
            />
          );
        })}
      </div>
    </section>
  );
};

export default GalleryStacked;


