import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";

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
        "You have a high level of emotional intelligence, which means you possess a deep understanding of your own emotions and the ability to regulate them effectively. \n\n" +
        " You can recognize emotional triggers, manage stress, and maintain composure even in challenging situations\n\n" +
        " This self-awareness enables you to make thoughtful decisions and avoid impulsive reactions.\n\n" +
        "Additionally, your emotional intelligence extends to recognizing and empathizing with the emotions of others. \n\n" +
        " You are skilled at reading non-verbal cues, understanding what others may be feeling, and responding in ways that make them feel understood and valued.\n\n" +
        " This makes you a compassionate communicator who can build strong, trusting relationships.\n\n" +
        "Your ability to influence emotions means that you can positively impact the mood and morale of those around you.\n\n" +
         "Whether through active listening, offering support, or navigating difficult conversations, you create an environment of mutual respect and emotional harmony.\n\n" +
         "Your high emotional intelligence is a key factor in your personal and professional success, allowing you to foster teamwork, resolve conflicts effectively, and lead with empathy.",
    },
    {
      name: "Moderately Emotionally Intelligent",
      range: [70, 89],
      description:
        "You have a moderate level of emotional intelligence, which means you generally have a good grasp of your emotions and can manage them in most situations.\n\n" +
        " You are able to recognize your feelings and understand how they affect your behavior,\n\n" +
        " though there may be times when emotions can feel overwhelming or harder to control.\n\n" +
        "In terms of understanding others, you are typically aware of the emotions of those around you and can empathize with them.\n\n" +
         "You can build positive relationships and communicate effectively, but there may be instances where you struggle to fully connect with or influence the emotional state of others.\n\n" +
         " While you are capable of reading social cues and offering support, there is room to deepen your empathy and responsiveness in certain situations.\n\n" +
        "By further developing your emotional intelligence, you can improve your ability to handle stress, manage conflict, and navigate challenging interpersonal dynamics with more ease.\n\n" +
        " Working on self-awareness, emotional regulation, and empathy will enhance your ability to lead, collaborate, and foster stronger connections with others.",
    },
    {
      name: "Developing Emotional Intelligence",
      range: [50, 69],
      description:
        "You are in the developing stage of emotional intelligence, which means you may sometimes find it challenging to fully understand and manage your own emotions.\n\n" +
         "Situations that provoke stress or frustration may feel overwhelming, and you might struggle to regulate your emotional reactions in those moments. However,\n\n" +
          "recognizing these challenges is the first step toward growth.\n\n" +
        "When it comes to understanding others, you may find it difficult to accurately read emotional cues or respond effectively to their feelings.\n\n" +
        "This can sometimes lead to misunderstandings or difficulties in communication and relationship-building. However, with focused effort and practice, you can improve in these areas.\n\n" +
        "Developing emotional intelligence is a gradual process. By practicing mindfulness, increasing self-awareness, and learning to empathize with others, \n\n" +
        "you can improve your ability to manage your emotions and enhance your relationships. With time, you'll be better equipped to navigate social situations, handle conflicts,\n\n" +
        "and create positive connections with those around you.",
    },
    {
      name: "Emerging Emotional Intelligence",
      range: [0, 49],
      description:
        "You are at the early stage of developing emotional intelligence, which means you may often find it challenging to manage and fully understand your own emotions.\n\n" +
         "Emotional responses, particularly in stressful or high-pressure situations, might feel difficult to control, leading to impulsive reactions or miscommunication.\n\n" +
        "In addition, recognizing and responding to the emotions of others may also be a struggle.\n\n" + 
        "You may find it hard to interpret emotional cues or empathize with what others are feeling, which can impact your relationships and interactions.\n\n" +
        " However, this is a natural part of the growth process, and with continued learning and self-reflection, you can make significant improvements.\n\n" +
        "By focusing on emotional awareness, practicing empathy, and learning strategies for emotional regulation, you can gradually strengthen your emotional intelligence.\n\n" +
         "As you continue to grow, you'll become more adept at managing your emotions and building stronger, more empathetic connections with others.",
    },
  ];
  

   // Function to create and download the PDF
   const generatePDF = () => {
    const doc = new jsPDF();

    const category = getCategory(score); // Get the category based on the score

    // Set document title
    doc.setFontSize(20);
    doc.setFont("Helvetica", "bold");
    doc.text("Emotional Intelligence Assessment Report", 10, 10);
    
    // Add a line break
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text("-----------------------------------------------------------", 10, 20);
    
    // Add score and category
    doc.setFontSize(14);
    doc.text(`Your Score: ${score}`, 10, 30);
    doc.text(`Your Category: ${category.name}`, 10, 40);

    // Add category description with better formatting
    doc.setFontSize(12);
    doc.text("Details:", 10, 50);
    doc.text(category.description, 10, 60, { maxWidth: 190, lineHeightFactor: 1.5 });
    
    // Add a footer
    doc.setFontSize(10);
    doc.text("Thank you for completing the assessment!", 10, doc.internal.pageSize.height - 10);
    
    // Download the PDF
    doc.save("Assessment_Report.pdf");
};

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
    setPreviousAnswers([]);
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
            <button onClick={generatePDF} className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
              Download Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testpage;