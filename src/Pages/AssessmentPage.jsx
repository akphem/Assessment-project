import React from "react";
import { Link } from "react-router-dom";

const AssessmentPage = () => {
  return (
    <div className="relative z-50 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-xl transition duration-300 hover:shadow-2xl">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center">
          Emotional States Assessment Test
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Terms of Use and Data Privacy Agreement
        </h2>

        {/* Content Section */}
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          Before you begin, please read the following Terms of Use and Data
          Privacy Agreement. By continuing, you agree to the terms below.
        </p>

        <ul className="space-y-4 mb-8 text-gray-700">
          <li>
            <h3 className="font-semibold text-lg">Purpose of the Assessment</h3>
            <p>
              This assessment is designed to help you understand your emotional
              states. The information you provide is for your personal use only
              and will not be shared, stored, or used for any other purpose.
            </p>
          </li>

          <li>
            <h3 className="font-semibold text-lg">Data Collection and Use</h3>
            <p>
              <strong>Collection:</strong> We collect your answers during this
              session.</p>
              <p><strong>Use:</strong> Your responses are used only to
              give you feedback. No one else, including researchers or third
              parties, will have access to your results.
            </p>
          </li>

          <li>
            <h3 className="font-semibold text-lg">Data Storage and Confidentiality</h3>
            <p>
              <strong>Storage:</strong> No data will be saved after you finish
              the assessment. Your answers will be deleted automatically. 
              </p>
              <p><strong>Confidentiality:</strong> Your privacy is fully protected, as we do not keep any data.
            </p>
          </li>

          <li>
            <h3 className="font-semibold text-lg">Saving Your Report</h3>
            <p>
              We will not store your results after the test. Please save your
              report yourself before leaving the page if you wish to keep a copy.
            </p>
          </li>

          <li>
            <h3 className="font-semibold text-lg">Consent</h3>
            <p>
              By continuing with the assessment, you agree to the temporary
              collection of your data for personal feedback. No data will be
              kept after the assessment. If you disagree, please do not proceed.
            </p>
          </li>

          <li>
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <p>
              For any questions, please{" "}
              <Link to="/contactpage" className="text-blue-600 hover:text-blue-800 underline">
                contact us
              </Link>.
              By clicking "Start Assessment," you confirm that you’ve read and
              agree to the Terms of Use and Data Privacy Agreement.
            </p>
          </li>
        </ul>

        {/* Completion Time */}
        <div className="mb-8">
          <p className="text-lg text-gray-800 font-semibold">
            Estimated Completion Time: <span className="font-normal">Approximately 5 minutes.</span>
          </p>
        </div>

        {/* Instructions */}
        <p className="text-base text-gray-700 mb-6">
          You will be presented with a series of questions, each with 5 answer
          options. Read each question carefully and select the option that best
          represents your response. You can use the "Next" button to navigate
          through the questions and the "Previous" button to review or change
          your answers.
        </p>

        {/* Start Assessment Button */}
        <div className="flex justify-center">
          <Link
            to="/testpage"
            className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-2xl focus:outline-none focus:ring focus:ring-blue-400"
          >
            Start Assessment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;
