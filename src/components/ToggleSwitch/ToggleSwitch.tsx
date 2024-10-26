import React, { useState } from "react";
import "./ToggleSwitch.css";

interface PlaceholderProps {
  onChange?: (value: string) => void;
}

const ToggleSwitch: React.FC<PlaceholderProps> = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState("answer1");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="toggle-switch">
      <input
        type="radio"
        id="switch_left"
        name="switch_2"
        value="answer1"
        checked={selectedValue === "answer1"}
        onChange={handleChange}
      />
      <label htmlFor="switch_left">Answer1</label>
      <input
        type="radio"
        id="switch_right"
        name="switch_2"
        value="answer2"
        checked={selectedValue === "answer2"}
        onChange={handleChange}
      />
      <label htmlFor="switch_right">Answer2</label>
    </div>
  );
};

export default ToggleSwitch;
