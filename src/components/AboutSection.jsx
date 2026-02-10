import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import aboutImg from "../assets/about.jpg";
import aboutVideo from "/videos/about.mp4";

const AboutSection = () => {
    return (
        <section className="bg-[#faf7f5] py-8 px-2 md:px-25 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-15 items-center">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.08 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Video file placed in public/videos/about.mp4 */}
                    <video
                        src="/videos/about.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="rounded-[40px] shadow-2xl w-full h-full object-cover"
                    />
                </motion.div>



                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >

                    {/* Heading just above paragraph */}
                    <h2
                        style={{ fontFamily: "'Great Vibes', cursive" }}
                        className="text-3xl md:text-4xl text-[rgb(120,40,60)]"
                    >
                        About Zakia Rukia Salon & Spa
                    </h2>

                    {/* Paragraphs */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Zakia Ruqaiya Salon & Spa is a refined beauty destination in Karachi,
                        offering luxury bridal makeovers and signature beauty services
                        crafted with elegance and precision.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        With branches in North Nazimabad, Gulistan-e-Johar and Tariq Road,
                        our professionally trained artists deliver personalized looks
                        from bridal and party makeup to hair styling and complete beauty
                        treatments.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        Trusted by celebrity clients, models and influencers, our bridal
                        packages are thoughtfully curated for Barat, Valima and Engagement
                        occasions, ensuring a timeless and unforgettable experience.
                    </p>

                    {/* Counters */}
                    <div className="flex gap-16 pt-10">

                        {/* Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-4xl text-[rgb(120,40,60)] font-semibold">
                                <CountUp
                                    end={10}
                                    duration={6}
                                    delay={0.3}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />+
                            </h3>
                            <p className="text-gray-600 mt-1">Years of Experience</p>
                        </motion.div>

                        {/* Clients */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-4xl text-[rgb(120,40,60)] font-semibold">
                                <CountUp
                                    end={5000}
                                    duration={6}
                                    delay={0.3}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />+
                            </h3>
                            <p className="text-gray-600 mt-1">Happy Clients</p>
                        </motion.div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;



