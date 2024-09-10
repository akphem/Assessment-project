import React from 'react';
import Picture from '../assets/Picture.png';

export const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16">
          {/* Author's Picture */}
          <div className="mb-12 lg:mb-0 w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={Picture}  
                alt="Author"
                className="rounded-2xl shadow-2xl w-64 h-64 lg:w-80 lg:h-80 object-cover z-10 relative"
              />
              <div className="absolute inset-0 bg-purple-200 rounded-2xl transform rotate-6 -z-10"></div>
            </div>
          </div>
          {/* Author's Bio and View about Assessment */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-8">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Meet the Author
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              The free assessment is designed to help participants identify three emotional states and their relative positions. It addresses those who are overwhelmed by emotions and aware of feelings, but struggle to differentiate, understand, or appropriately respond to various emotions. 
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Based on years of research on emotional intelligence by Olugbenga Akanle, this user-friendly assessment tool and resource offers valuable insights into your emotional landscape.
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                The Author's View on Personality Tests
              </h3>
              <blockquote className="text-xl italic text-gray-700 border-l-4 border-purple-500 pl-4 py-2">
                "Personality tests are not just tools for assessing behavior or characteristics; they serve as mirrors to the soul. These tests provide a comprehensive understanding of one's strengths, weaknesses, and hidden potential. With the right guidance, these assessments can open doors to personal and professional growth, enabling individuals to navigate life's complexities with confidence. My goal with this test is to offer a simple yet effective tool that anyone can use to better understand themselves."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;