import React, { useState } from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";

function App() {
  const [toggleValues, setToggleValues] = useState({
    toggle_1: "ribosomes",
    toggle_2: "cytoplasm",
    toggle_3: "partially_permeable_membrane",
    toggle_4: "cellulose",
  });

  const handleToggleChange = (name: string, value: string) => {
    setToggleValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const isCorrect =
    toggleValues.toggle_1 === "ribosomes" &&
    toggleValues.toggle_2 === "cytoplasm" &&
    toggleValues.toggle_3 === "partially_permeable_membrane" &&
    toggleValues.toggle_4 === "mitochondria";

  const toggle1Options = [
    { label: "Cell Wall", value: "cell_wall" },
    { label: "Ribosomes", value: "ribosomes" },
  ];
  const toggle2Options = [
    { label: "Cytoplasm", value: "cytoplasm" },
    { label: "Chloroplast", value: "chloroplast" },
  ];
  const toggle3Options = [
    {
      label: "Partially Permeable Membrane",
      value: "partially_permeable_membrane",
    },
    { label: "Impermeable Membrane", value: "impermeable_membrane" },
  ];
  const toggle4Options = [
    { label: "Cellulose", value: "cellulose" },
    { label: "Mitochondria", value: "mitochondria" },
  ];

  return (
    <div className="App-container">
      <h2 className="App-heading">An animal cell contains:</h2>
      <ToggleSwitch
        options={toggle1Options}
        name="toggle_1"
        selectedValue={toggleValues.toggle_1}
        onChange={handleToggleChange}
      />
      <ToggleSwitch
        options={toggle2Options}
        name="toggle_2"
        selectedValue={toggleValues.toggle_2}
        onChange={handleToggleChange}
      />
      <ToggleSwitch
        options={toggle3Options}
        name="toggle_3"
        selectedValue={toggleValues.toggle_3}
        onChange={handleToggleChange}
      />
      <ToggleSwitch
        options={toggle4Options}
        name="toggle_4"
        selectedValue={toggleValues.toggle_4}
        onChange={handleToggleChange}
      />
      <h2 className="App-heading">
        {isCorrect ? "The answer is correct!" : "The answer is incorrect."}
      </h2>
    </div>
  );
}

export default App;
