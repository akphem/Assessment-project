import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo (2).png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link to="/" className="flex flex-col items-center rounded-sm">
          <h1 className="font-bold text-purple-950 text-3xl text-center shadow-white">
            Life's Success Strategies
          </h1>
          <span className="text-grey-800 shadow-sm text-sm mt-1 text-center">
            .. But By His Mercies
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row w-full lg:w-auto mt-4 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-10 lg:items-center`}
        >
          <Link
            to="/"
            className="text-gray-700 hover:text-purple-600 hover:font-bold text-lg transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-purple-600 hover:font-bold text-lg transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/assessmentpage"
            className="text-gray-700 hover:text-purple-600 hover:font-bold text-lg transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Assessment Page
          </Link>
          <Link
            to="/contactpage"
            className="text-gray-700 hover:text-purple-600 hover:font-bold text-lg transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>

        <Link
          to="/assessmentpage"
          className="mt-4 lg:mt-0 w-full lg:w-auto text-center lg:text-left bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Start Your Test Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
