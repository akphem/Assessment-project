import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          
          {/* Logo and About Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Life's Success Strategy Assessment Site</h2>
            <p className="text-gray-300">
              We offer personality assessment tests to help you understand yourself better and find your path to success. Your results are confidential and personalized to guide you.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-16 text-center lg:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Assessment Page</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div className="mt-6 lg:mt-0">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-600 pt-6 text-center lg:text-left">
          <p className="text-gray-300">
            © 2024 femzytech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
