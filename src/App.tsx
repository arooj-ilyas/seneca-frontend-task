import React from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";

function App() {
  const handleToggleChange = (value: string) => {
    console.log("Selected option:", value);
  };
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
        name="cell_toggle"
        initialValue="ribosomes"
        onChange={handleToggleChange}
      />
      <ToggleSwitch
        options={toggle2Options}
        name="cell_toggle"
        initialValue="cytoplasm"
        onChange={handleToggleChange}
      />
      <ToggleSwitch
        options={toggle3Options}
        name="cell_toggle"
        initialValue="partially_permeable_membrane"
        onChange={handleToggleChange}
      />
      <ToggleSwitch
        options={toggle4Options}
        name="cell_toggle"
        initialValue="cellulose"
        onChange={handleToggleChange}
      />
      <h2 className="App-heading">The answer is correct!</h2>
    </div>
  );
}

export default App;
