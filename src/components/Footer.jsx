import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#2a0a14] via-[#1a060c] to-black text-white pt-16 sm:pt-20 pb-10 overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(180,120,120,0.15),transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-12">

        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            style={{ fontFamily: "Great Vibes, Cursive" }}
            className="text-3xl sm:text-4xl md:text-5xl tracking-wide"
          >
            Zakia Rukia Salon
          </h2>

          <p className="text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Luxury Bridal & Signature Makeovers
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#b07c7c] to-transparent mb-10 md:mb-12"></div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Quick Links */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-xs sm:text-sm text-gray-400 mb-6">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-4 text-sm tracking-wider items-center md:items-start">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#appointment" },
              ].map((link, index) => (
                <li key={index} className="group w-fit">
                  <a
                    href={link.href}
                    className="relative text-gray-300 transition-colors duration-300 group-hover:text-white"
                  >
                    {link.name}

                    {/* Animated Underline */}
                    <span
                      className="
                        absolute left-0 -bottom-1
                        h-[1px] w-0
                        bg-gradient-to-r from-[#b07c7c] to-[#e6b7b7]
                        transition-all duration-500 ease-out
                        group-hover:w-full
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-xs sm:text-sm text-gray-400 mb-6">
              Contact
            </h3>

            <p className="text-gray-300 mb-3 text-sm sm:text-base">Pakistan</p>
            <p className="text-gray-300 mb-3 text-sm sm:text-base">
              +123 456 789 0
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              info@zakiarukia.com
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-xs sm:text-sm text-gray-400 mb-6">
              Follow Us
            </h3>

            <div className="flex justify-center md:justify-start gap-4 sm:gap-6">
              {[Instagram, Facebook, Mail].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 hover:bg-[#b07c7c]/20 transition duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-12 md:mt-16 text-center text-gray-500 text-xs sm:text-sm tracking-wide">
          © {new Date().getFullYear()} Zakia Rukia Salon — Designed by Klab. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
