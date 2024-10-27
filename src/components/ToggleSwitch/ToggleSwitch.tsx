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
  almostCorrect: boolean;
  onChange: (name: string, value: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  options,
  name,
  selectedValue,
  isCorrect,
  almostCorrect,
  onChange,
}) => {
  const containerClass = isCorrect
    ? "toggle-container correct"
    : almostCorrect
    ? "toggle-container almost"
    : "toggle-container incorrect";

  const selectedLabelClass = isCorrect
    ? "selected correct"
    : almostCorrect
    ? "selected almost"
    : "selected incorrect";

  return (
    <div>
      <div className={containerClass}>
        <div
          className={`selected ${
            selectedValue === options[0].value ? "left" : "right"
          } ${selectedLabelClass}`}
        ></div>

        {options.map((option) => (
          <label
            key={option.value}
            className="toggle-labels"
            onClick={() => onChange(name, option.value)}
          >
            <span
              className={`selected-text ${
                selectedValue === option.value && "active"
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
