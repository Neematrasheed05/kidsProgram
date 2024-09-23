import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaList, FaHeart, FaLightbulb, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-500 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-lg font-bold text-white">
          <Link to="/" className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
            <FaHome className="text-yellow-300 hover:text-white" />
            <span>MyKidsWebsite</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-lg hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            <FaHome className="text-pink-500 hover:text-yellow-300 transition-transform transform duration-300" />
            <span>Home</span>
          </Link>

          {/* About with Dropdown */}
          <div className="relative">
            <div className="flex items-center space-x-2 text-lg">
              <Link to="/about" className="flex items-center space-x-2 hover:text-yellow-300">
                <FaInfoCircle className="text-green-500 transition-transform duration-300" />
                <span>About</span>
              </Link>

              {/* SVG Dropdown Indicator */}
              <svg
                onClick={() => setDropdownOpen(!dropdownOpen)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <motion.div
                className="absolute left-0 mt-2 py-2 w-48 bg-blue-400 text-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/values"
                  className="block px-4 py-2 text-sm hover:bg-blue-500 hover:scale-110 transform transition-all duration-300"
                >
                  <FaHeart className="inline-block text-red-500 hover:text-yellow-300 mr-2" />
                  Values
                </Link>
                <Link
                  to="/philosophy"
                  className="block px-4 py-2 text-sm hover:bg-blue-500 hover:scale-110 transform transition-all duration-300"
                >
                  <FaLightbulb className="inline-block text-purple-500 hover:text-yellow-300 mr-2" />
                  Philosophy
                </Link>
              </motion.div>
            )}
          </div>

          <Link
            to="/services"
            className="flex items-center space-x-2 text-lg hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            <FaList className="text-orange-500 hover:text-yellow-300 transition-transform transform duration-300" />
            <span>Services</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center space-x-2 text-lg hover:text-yellow-300 transition duration-300 transform hover:scale-110"
          >
            <FaEnvelope className="text-teal-500 hover:text-yellow-300 transition-transform transform duration-300" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
