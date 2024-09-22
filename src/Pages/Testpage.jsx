import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Testpage = () => {
  // Define all 20 questions
  const questions = [
    {
      question: "How well do you handle criticisms ?",
      options: [
        { text: "Very well", points: 5 },
        { text: "Well", points: 4 },
        { text: "Adequately", points: 3 },
        { text: "Poorly", points: 2 },
        { text: "Very Poorly", points: 1 },
      ],
    },
    {
      question: "Can you stay calm in tough situations?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: "Do you stay calm when others disagree with you?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: "Do you often think about your emotions?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: "Can you understand how others feel easily?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: " Do you stay calm when someone is mad at you?",
      options: [
        { text: "Very easily", points: 5 },
        { text: "Easily", points: 4 },
        { text: "Somewhat easily", points: 3 },
        { text: "With difficulty", points: 2 },
        { text: "Very difficulty", points: 1 },
      ],
    },
    {
      question: "Can you stay motivated during hard tasks?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: "Do you help others manage their emotions?",
      options: [
        { text: "Most likely", points: 5 },
        { text: "Likely", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Unlikely", points: 2 },
        { text: "Most unlikely", points: 1 },
      ],
    },
    {
      question: "Are you good at making new friends?",
      options: [
        { text: "Very good", points: 5 },
        { text: "Good", points: 4 },
        { text: "Average", points: 3 },
        { text: "Poor", points: 2 },
        { text: "Very poor", points: 1 },
      ],
    },
    {
      question: "Do you handle stress well?",
      options: [
        { text: "Very well", points: 5 },
        { text: "Well", points: 4 },
        { text: "Adequately", points: 3 },
        { text: "Poorly", points: 2 },
        { text: "Very Poorly", points: 1 },
      ],
    },
    {
      question: "Do you resolve conflicts easily in a team?",
      options: [
        { text: "Very easily", points: 5 },
        { text: "Easily", points: 4 },
        { text: "Moderately easily", points: 3 },
        { text: "With difficulty", points: 2 },
        { text: "Very difficultly", points: 1 },
      ],
    },
    {
      question: "Are you good at communicating with others?",
      options: [
        { text: "Very good", points: 5 },
        { text: "Good", points: 4 },
        { text: "Average", points: 3 },
        { text: "Poor", points: 2 },
        { text: "Very poor", points: 1 },
      ],
    },
    {
      question: "Can you balance your needs with others' needs?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: "Do you stay calm when overwhelmed?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: "Do you celebrate successes well?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: " Do you handle feedback well?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: " Can you stay positive in tough times?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: " Do you keep focused on your goals?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
    {
      question: "Do you help others reach their goals?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },

    // Add the remaining questions here
    {
      question: "Do your actions match your values?",
      options: [
        { text: "Always", points: 5 },
        { text: "Often", points: 4 },
        { text: "Sometimes", points: 3 },
        { text: "Rarely", points: 2 },
        { text: "Never", points: 1 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [previousAnswers, setPreviousAnswers] = useState([]); // Store previous answers

  // Emotional categories based on score ranges
  const categories = [
    {
      name: "Highly Emotionally Intelligent",
      range: [90, 100],
      description:
        "You have a high level of emotional intelligence. You excel in understanding and managing your own emotions as well as recognizing and influencing the emotions of others.",
    },
    {
      name: "Moderately Emotionally Intelligent",
      range: [70, 89],
      description:
        "You have a moderate level of emotional intelligence. You are generally good at handling emotions and understanding others, but there is room for improvement.",
    },
    {
      name: "Developing Emotional Intelligence",
      range: [50, 69],
      description:
        "You are in the developing stage of emotional intelligence. You may face challenges in managing and understanding emotions, but with practice, you can improve.",
    },
    {
      name: "Emerging Emotional Intelligence",
      range: [0, 49],
      description:
        "You are at the early stage of developing emotional intelligence. You may find it challenging to manage and understand emotions, and would benefit from further growth and learning.",
    },
  ];

  // Determine the emotional category based on the score
  const getCategory = (score) => {
    return categories.find(
      (category) => score >= category.range[0] && score <= category.range[1]
    );
  };

  const handleOptionClick = (points) => {
    setSelectedOption(points);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      setPreviousAnswers([...previousAnswers, selectedOption]);

      setScore(score + selectedOption);
      setSelectedOption(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsFinished(true);
      }
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestion > 0) {
      const prevSelectedOption = previousAnswers[previousAnswers.length - 1];
      setScore(score - prevSelectedOption);
      setSelectedOption(prevSelectedOption);

      setPreviousAnswers(previousAnswers.slice(0, -1));
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  const category = isFinished ? getCategory(score) : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="w-full max-w-4xl p-6 bg-white text-gray-900 rounded-lg shadow-lg">
        {!isFinished ? (
          <div className="question-container">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="text-xl mb-6 text-center">
              {questions[currentQuestion].question}
            </p>

            <ul className="space-y-3 mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors duration-300 ${
                    selectedOption === option.points
                      ? "bg-purple-200 text-purple-900"
                      : "bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => handleOptionClick(option.points)}
                >
                  {option.text}
                </li>
              ))}
            </ul>

            {/* Wrapping buttons in a flex container for better alignment */}
            <div className="flex justify-between">
              <button
                onClick={handlePreviousClick}
                className={`bg-gray-500 text-white font-bold py-2 px-4 rounded ${
                  currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>

              <button
                onClick={handleNextClick}
                className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ${
                  selectedOption === null ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={selectedOption === null}
              >
                {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result-container text-center">
            <h2 className="text-3xl font-bold mb-6">Congratulations!</h2>
            <p className="text-xl mb-4">
              You have successfully completed the Emotional Intelligence
              Assessment.
            </p>
            <p className="text-lg mb-6">
              Based on your score, you belong to the category:{" "}
              <strong className="text-purple-600">{category.name}</strong>
            </p>
            <p className="text-md mb-6">{category.description}</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={resetTest}
                className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Retake Test
              </button>
              <Link
                to="/"
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
              >
                <FaArrowLeft className="inline-block mr-2" />
                Go Back to Home Page
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testpage;
