import React from "react";
import "./ToggleSwitch.css";

interface ToggleSwitchOption {
  label: string;
  value: string;
}

interface ToggleSwitchProps {
  options: ToggleSwitchOption[];
  name: string;
  selectedValue: string;
  isCorrect: boolean;
  onChange: (name: string, value: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  options,
  name,
  selectedValue,
  isCorrect,
  onChange,
}) => {
  const handleChange = (value: string) => {
    onChange(name, value);
  };

  return (
    <div>
      <div
        className={`toggle-container ${isCorrect ? "correct" : "incorrect"}`}
      >
        <div
          className={`selected ${
            selectedValue === options[0].value ? "left" : "right"
          } ${isCorrect ? "correct-selected" : "incorrect-selected"}`}
        ></div>

        {options.map((option) => (
          <label
            key={option.value}
            className="toggle-labels"
            onClick={() => handleChange(option.value)}
          >
            <span
              className={`selected-text ${
                selectedValue === option.value ? "active" : ""
              }`}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ToggleSwitch;
