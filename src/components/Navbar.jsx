import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            style={{ backgroundColor: "rgb(90, 14, 36)" }}
            className="shadow-lg p-0"
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    <h1
  style={{ fontFamily: "'Great Vibes', cursive" }}
  className="text-xl md:text-3xl text-white tracking-wide"
>
  Zakia Rukia Salon
</h1>

                    {/* Menu - Desktop */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-white hover:text-pink-900 font-medium">
                            Home
                        </a>
                        <a href="#" className="text-white hover:text-pink-900 font-medium">
                            Services
                        </a>
                        <a href="#" className="text-white hover:text-pink-900 font-medium">
                            Gallery
                        </a>
                        <a href="#" className="text-white hover:text-pink-900 font-medium">
                            About
                        </a>
                        <a href="#" className="text-white hover:text-pink-900 font-medium">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-pink-700 focus:outline-none"
                        >
                            {isOpen ? (
                                <span className="text-2xl">&#10005;</span> // Cross
                            ) : (
                                <span className="text-2xl">&#9776;</span> // Hamburger
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-pink-50 px-4 pt-2 pb-4 space-y-2">
                    <a href="#" className="block text-pink-700 hover:text-pink-900 font-medium">
                        Home
                    </a>
                    <a href="#" className="block text-pink-700 hover:text-pink-900 font-medium">
                        Services
                    </a>
                    <a href="#" className="block text-pink-700 hover:text-pink-900 font-medium">
                        Gallery
                    </a>
                    <a href="#" className="block text-pink-700 hover:text-pink-900 font-medium">
                        About
                    </a>
                    <a href="#" className="block text-pink-700 hover:text-pink-900 font-medium">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;


