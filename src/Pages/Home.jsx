import React from 'react'
import Hero from '../Componenets/Hero';
import About from '../Componenets/About';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Home = () => {
  return (
    <div className="bg-gray-50">
      <Hero/>
      <About/>
      <section className="bg-gradient-to-br from-pink-50 to-purple-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-purple-800 leading-tight">
                The Five Essential Emotional Intelligence Tools
              </h2>
              <p className="text-xl text-gray-700">
                Mastering these five components of emotional intelligence will lead to the most beneficial outcomes in both personal and professional life.
              </p>
              <ul className="space-y-4 text-lg text-gray-700">
                {[
                  "Self Awareness",
                  "Self Management",
                  "Empathy",
                  "Motivating yourself and others",
                  "Developing strong interpersonal skills"
                ].map((tool, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-600 text-white font-medium text-sm mr-3 mt-1">
                      {index + 1}
                    </span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://via.placeholder.com/500x500"
                alt="Emotional Intelligence Tools"
                className="w-full max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-purple-800 mb-8 text-center">
            How Does the Assessment Work?
          </h2>
          
          <div className="space-y-8 text-lg text-gray-700">
            <p>
              Our assessment consists of 30 carefully crafted questions, designed to evaluate your emotional intelligence in various scenarios. It takes approximately 10 minutes to complete and covers crucial aspects such as emotional control and interpersonal reactions.
            </p>
            
            <div>
              <p className="font-semibold mb-4">For each statement, you'll indicate how often it applies to you:</p>
              <ul className="grid grid-cols-2 gap-4 list-disc list-inside pl-4">
                <li>Rarely like me</li>
                <li>Occasionally like me</li>
                <li>Sometimes like me</li>
                <li>Often like me</li>
                <li>Always like me</li>
              </ul>
            </div>

            <p>
              Your responses are completely confidential. We use your answers to generate a personalized, in-depth report highlighting your strengths and areas for improvement in understanding and managing emotions, particularly in financial contexts. 
            </p>
            <p className="font-semibold">
              Remember to download your report upon completion, as it won't be stored online for privacy reasons.
            </p>
          </div>

          <div className="flex justify-center mt-12">
            
          <Link to="/assessmentpage" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
          Start Your Test Now
        </Link> {/* Button to Assessment Page */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;