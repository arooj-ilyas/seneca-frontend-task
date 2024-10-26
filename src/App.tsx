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

  return (
    <div className="App-container">
      <h2 className="App-heading">An animal cell contains:</h2>
      <ToggleSwitch
        options={toggle1Options}
        name="cell_toggle"
        initialValue="ribosomes"
        onChange={handleToggleChange}
      />
    </div>
  );
}

export default App;
