import React, { useState, useEffect } from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import {
  toggle1Options,
  toggle2Options,
  toggle3Options,
  toggle4Options,
} from "./data/toggleOptions";

function App() {
  const [toggleValues, setToggleValues] = useState({
    toggle_1: "cell_wall",
    toggle_2: "cytoplasm",
    toggle_3: "partially_permeable_membrane",
    toggle_4: "cellulose",
  });
  const [isCorrect, setIsCorrect] = useState(false);

  const handleToggleChange = (name: string, value: string) => {
    setToggleValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    setIsCorrect(
      toggleValues.toggle_1 === "ribosomes" &&
        toggleValues.toggle_2 === "cytoplasm" &&
        toggleValues.toggle_3 === "partially_permeable_membrane" &&
        toggleValues.toggle_4 === "mitochondria"
    );
  }, [toggleValues]);

  return (
    <>
      {isCorrect && <div className="overlay" />}

      <div
        className={
          isCorrect
            ? "App-container blue-gradient"
            : "App-container orange-gradient"
        }
      >
        <h2 className="App-heading">An animal cell contains:</h2>
        <ToggleSwitch
          name="toggle_1"
          options={toggle1Options}
          selectedValue={toggleValues.toggle_1}
          isCorrect={isCorrect}
          onChange={handleToggleChange}
        />
        <ToggleSwitch
          name="toggle_2"
          options={toggle2Options}
          selectedValue={toggleValues.toggle_2}
          isCorrect={isCorrect}
          onChange={handleToggleChange}
        />
        <ToggleSwitch
          name="toggle_3"
          options={toggle3Options}
          selectedValue={toggleValues.toggle_3}
          isCorrect={isCorrect}
          onChange={handleToggleChange}
        />
        <ToggleSwitch
          name="toggle_4"
          options={toggle4Options}
          selectedValue={toggleValues.toggle_4}
          isCorrect={isCorrect}
          onChange={handleToggleChange}
        />
        <h2 className="App-heading">
          {isCorrect ? "The answer is correct!" : "The answer is incorrect."}
        </h2>
      </div>
    </>
  );
}

export default App;
