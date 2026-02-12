import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const AboutSection = () => {
  return (
    <section className="bg-[#faf7f5] py-12 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <video
            src="/videos/about.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          {/* Heading */}
          <h2
            style={{ fontFamily: "'Great Vibes', cursive" }}
            className="text-3xl sm:text-4xl md:text-5xl text-[rgb(120,40,60)]"
          >
            About Zakia Rukia Salon & Spa
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Zakia Ruqaiya Salon & Spa is a refined beauty destination in Karachi,
            offering luxury bridal makeovers and signature beauty services
            crafted with elegance and precision.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            With branches in North Nazimabad, Gulistan-e-Johar and Tariq Road,
            our professionally trained artists deliver personalized looks
            from bridal and party makeup to hair styling and complete beauty
            treatments.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Trusted by celebrity clients, models and influencers, our bridal
            packages are thoughtfully curated for Barat, Valima and Engagement
            occasions.
          </p>

          {/* Counters */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-8 pt-6">

            {/* Experience */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl text-[rgb(120,40,60)] font-semibold">
                <CountUp
                  end={10}
                  duration={5}
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </h3>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Years of Experience
              </p>
            </div>

            {/* Clients */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl text-[rgb(120,40,60)] font-semibold">
                <CountUp
                  end={5000}
                  duration={5}
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </h3>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Happy Clients
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
