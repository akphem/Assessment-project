import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
      className={`lg:fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-purple-950 text-xl lg:text-3xl text-center lg:text-left animate-slideDown">
            Life&apos;s Success Strategies
          </h1>
          <span className="text-gray-800 text-xs lg:text-sm mt-1 text-center lg:text-left">
            ... but for His mercies
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navbar Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row w-full lg:w-auto mt-4 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-10 lg:items-center`}
        >
          <Link
            to="/"
            className="text-gray-700 font-semibold text-lg transition-all duration-500 hover:text-purple-600 hover:font-bold animate-fadeIn hover:tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-semibold text-lg transition-all duration-500 hover:text-purple-600 hover:font-bold animate-fadeIn hover:tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/assessmentpage"
            className="text-gray-700 font-semibold text-lg transition-all duration-500 hover:text-purple-600 hover:font-bold animate-fadeIn hover:tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            Assessment Page
          </Link>
          <Link
            to="/contactpage"
            className="text-gray-700 font-semibold text-lg transition-all duration-500 hover:text-purple-600 hover:font-bold animate-fadeIn hover:tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>

        {/* Call to Action Button */}
        <Link
          to="/assessmentpage"
          className="mt-4 lg:mt-0 w-40 sm:w-auto text-center lg:text-left bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 animate-slideUp"
        >
          Start Your Test Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
