import { FaTwitter, FaFacebookF, FaLinkedinIn, FaAngleDoubleUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); // Adjust the divisor for speed
    const animateScroll = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(animateScroll);
      }
    };
    animateScroll();
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          
          {/* Logo and About Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-semibold mb-4">Life&apos;s Success Strategy Assessment Site</h2>
            <p className="text-gray-300 text-lg">
              We offer personality assessment tests to help you understand yourself better and find your path to success. Your results are confidential and personalized to guide you.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-16 text-center lg:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="assessmentpage" className="text-gray-300 hover:text-white transition-colors duration-300">Assessment Page</a></li>
                <li><a href="contactpage" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
            <div className="mt-6 lg:mt-0">
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaFacebookF className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaTwitter className="h-8 w-8" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaLinkedinIn className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center lg:text-left">
          <p className="text-gray-300 text-sm">
            © 2024 femzytech. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-gradient-to-r from-blue-500 to-purple-600 transition duration-300 transform hover:scale-105"
          aria-label="Scroll to top"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <span className="text-3xl"><FaAngleDoubleUp/></span> {/* Increased arrow size */}
        </button>
      )}
    </footer>
  );
};

export default Footer;
