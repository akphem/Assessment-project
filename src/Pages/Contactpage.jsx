import React from 'react';
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Icons for WhatsApp and Email

const Contactpage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-5xl font-semibold text-white text-center mb-12 tracking-wide animate-fade-in pt-7">
          Contact Us
        </h1>

        <p className="text-lg text-white text-center mb-12 max-w-2xl mx-auto font-light animate-fade-in">
          We offer support and services in <span className="font-semibold">emotional intelligence, mental health, and wellbeing, relationship management</span> (between employees and employers, marriages), as well as <span className="font-semibold">spiritual intelligence and wellbeing.</span> Connect with us for counseling, workshops, seminars, conferences, conventions, and training and capacity building.
        </p>

        <div className="max-w-lg mx-auto bg-white bg-opacity-80 rounded-lg shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex items-center mb-6 animate-fade-in-up">
            <FaWhatsapp
              size={28}
              className="text-green-600 mr-4 transform hover:scale-110 transition-transform duration-300"
            />
            <span className="text-gray-800 text-lg font-medium">WhatsApp: +31 687877318</span>
          </div>

          <div className="flex items-center mb-6 animate-fade-in-up delay-200">
            <FaEnvelope
              size={28}
              className="text-red-600 mr-4 transform hover:scale-110 transition-transform duration-300"
            />
            <span className="text-gray-800 text-lg font-medium">Email: akanlegbenga@gmail.com</span>
          </div>

          <p className="text-center text-purple-700 font-semibold mt-4 animate-fade-in-up delay-400">
            We look forward to assisting you on your journey to personal and spiritual growth!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
