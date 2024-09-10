import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-purple-200">
      {/* Navbar */}
      <div className="bg-transparent py-4 flex justify-between items-center px-8">
        <div className="text-3xl font-bold text-gray-500">Logo.</div>
        <nav className="flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link> {/* Link for Home */}
          <Link to="/about" className="text-gray-700 hover:text-gray-900">About Us</Link> {/* Link for About Us */}
          <Link to="/assessmentpage" className="text-gray-700 hover:text-gray-900">Assessment Page</Link> {/* Link for Assessment Page */}
        </nav>
        <Link to="/assessmentpage" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Start Your Test Now
        </Link> {/* Button to Assessment Page */}
      </div>
    </div>
  );
};

export default Navbar;
