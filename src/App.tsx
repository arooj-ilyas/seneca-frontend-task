import React from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";

function App() {
  const handleToggleChange = (value: string) => {
    console.log("Selected option:", value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>An animal cell contains:</h1>
        <ToggleSwitch onChange={handleToggleChange} />
      </header>
    </div>
  );
}

export default App;
