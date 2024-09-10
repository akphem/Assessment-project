import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20 lg:py-32">
      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-20 right-0 w-60 h-60 bg-pink-400 rounded-full filter blur-2xl opacity-40"></div>
      <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-blue-300 rounded-full filter blur-2xl opacity-50"></div>

      <div className="container mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          Discover Your True Potential
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto mb-8">
          Take our professional personality test to uncover the strengths and areas of growth that will drive your personal and career success.
        </p>
        
        {/* Call to Action */}
       
      </div>

      {/* Decorative Waves at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 lg:h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,106.7C96,149,192,235,288,245.3C384,256,480,192,576,160C672,128,768,128,864,160C960,192,1056,256,1152,272C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
