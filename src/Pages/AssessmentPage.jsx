import React from "react";
import { Link } from "react-router-dom";

const AssessmentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 ">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 pt">
          Welcome to the Emotional Intelligence Assessment Test
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for participating in our Emotional Intelligence Assessment.
          This test is designed to evaluate various aspects of your emotional
          intelligence through a series of questions. Remember,
          "Always prioritize honesty in your responses to questions."
        </p>
        <p className="text-lg text-gray-700 mb-6">
          <strong>Estimated Completion Time:</strong> Approximately 5 minutes.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          You will be presented with a series of questions, each with 5 options.
          Please read each question carefully and select the answer that best
          represents your response. You can navigate through the questions using
          the "Next" button at the bottom of each page.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          If you need to review or change your answers, you can use the
          "Previous" button to go back to a previous question.
        </p>
        <div className="flex justify-center">
          <Link
            to="/testpage"
            className="px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800"
          >
            Start the Assessment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;
