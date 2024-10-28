import React, { useState, useEffect } from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import { questions } from "./data/toggleOptions";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const initialToggleValues = currentQuestion.toggleOptions.map(
    (option) => option[0].value
  );

  const [toggleValues, setToggleValues] =
    useState<string[]>(initialToggleValues);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [almostCorrect, setIsAlmostCorrect] = useState<boolean>(false);

  const handleToggleChange = (index: number, value: string) => {
    const updatedValues = [...toggleValues];
    updatedValues[index] = value;
    setToggleValues(updatedValues);
  };

  useEffect(() => {
    const selectedAnswers = toggleValues;
    const correctAnswers = currentQuestion.correctAnswers;
    const correctCount = selectedAnswers.filter(
      (selectedAnswer, index) => selectedAnswer === correctAnswers[index]
    );
    const correctCountLength = correctCount.length;
    setIsCorrect(correctCountLength === correctAnswers.length);
    setIsAlmostCorrect(correctCountLength === correctAnswers.length - 1);
  }, [toggleValues, currentQuestion]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setToggleValues(
        questions[currentQuestionIndex + 1].toggleOptions.map(
          (option) => option[0].value
        )
      );
      setIsCorrect(false);
      setIsAlmostCorrect(false);
    }
  };

  const containerClass = isCorrect
    ? "App-container blue-gradient"
    : almostCorrect
    ? "App-container red-gradient"
    : "App-container orange-gradient";

  const feedbackMessage = isCorrect
    ? "The answer is correct!"
    : almostCorrect
    ? "The answer is almost correct!"
    : "The answer is incorrect.";

  return (
    <div className={containerClass}>
      <h1 className="App-heading">Question {currentQuestionIndex + 1}</h1>
      <h2 className="App-subheading">{currentQuestion.questionText}</h2>
      {currentQuestion.toggleOptions.map((options, index) => (
        <ToggleSwitch
          key={index}
          options={options}
          name={`toggle_${index}`}
          selectedValue={toggleValues[index]}
          isCorrect={isCorrect}
          almostCorrect={almostCorrect}
          onChange={(name, value) => handleToggleChange(index, value)}
        />
      ))}
      <h1 className="App-subheading">{feedbackMessage}</h1>
      {isCorrect && currentQuestionIndex < questions.length - 1 && (
        <button className="next-question" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
}

export default App;
