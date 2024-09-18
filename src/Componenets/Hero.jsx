import React from "react";
import { Link } from "react-router-dom";

// Keyframes for text animation
const textAnimation = `
  @keyframes textSlideIn {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Floating Animated Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-0 w-60 h-60 bg-pink-400 rounded-full filter blur-2xl opacity-40 animate-pulse delay-75"></div>
      <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-blue-300 rounded-full filter blur-2xl opacity-50 animate-pulse delay-100"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Heading with Animation */}
        <h1
          className="text-4xl lg:text-6xl font-bold mb-4"
          style={{ animation: 'textSlideIn 1s ease-out forwards' }}
        >
          <span className="inline-block">Discover</span>{" "}
          <span className="inline-block">Your</span>{" "}
          <span className="inline-block">True</span>{" "}
          <span className="inline-block">Potential</span>
        </h1>

        {/* Animated Paragraph */}
        <p
          className="text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto mb-8 opacity-0"
          style={{ animation: 'textSlideIn 1.5s ease-out forwards 0.5s' }}
        >
          Take our free Emotional Intelligence test to discover your strengths
          and improve on your areas of weakness. Build on what you do best and
          enhance where you need it most.
        </p>

        {/* CTA Button */}
        <Link
          to="/assessmentpage"
          className="bg-white text-purple-600 hover:bg-purple-100 px-8 py-3 rounded-full font-semibold text-lg inline-block transition duration-300 shadow-lg transform hover:scale-105"
          style={{ animation: 'textSlideIn 2s ease-out forwards 1s' }}
        >
          Start Your Assessment
        </Link>
      </div>

      {/* Bottom SVG Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 lg:h-24"
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

      {/* Inject Custom Keyframes for Animations */}
      <style>{textAnimation}</style>
    </section>
  );
};

export default Hero;
