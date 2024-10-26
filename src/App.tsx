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
    <div className="App">
      <header className="App-header">
        <h1>An animal cell contains:</h1>
        <ToggleSwitch
          options={toggle1Options}
          name="cell_toggle"
          initialValue="ribosomes"
          onChange={handleToggleChange}
        />
      </header>
    </div>
  );
}

export default App;
