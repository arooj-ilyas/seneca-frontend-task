import React, { useState, useEffect } from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import { questions } from "./data/toggleOptions";

const questionOne = questions[0].toggleOptions;
const initialToggleValues = questionOne.map((option) => option[0].value);

function App() {
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
    const selectedAnswers: string[] = toggleValues;
    const correctAnswers: string[] = questions[0].correctAnswers;

    const correctCount: number = selectedAnswers.filter(
      (selectedAnswer, index) => {
        return selectedAnswer === correctAnswers[index];
      }
    ).length;

    setIsCorrect(correctCount === correctAnswers.length);
    setIsAlmostCorrect(correctCount === correctAnswers.length - 1);
  }, [toggleValues]);

  const containerClass = isCorrect
    ? "App-container blue-gradient"
    : almostCorrect
    ? "App-container red-gradient"
    : "App-container orange-gradient";

  return (
    <>
      {isCorrect && <div className="overlay" />}

      <div className={containerClass}>
        <h1 className="App-heading">{questions[0].questionText}</h1>
        {questions[0].toggleOptions.map((options, index) => (
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
        <h1 className="App-heading">
          {isCorrect
            ? "The answer is correct!"
            : almostCorrect
            ? "The answer is almost correct!"
            : "The answer is incorrect."}
        </h1>
      </div>
    </>
  );
}

export default App;
