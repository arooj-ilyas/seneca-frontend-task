import React, { useState } from "react";
import "./ToggleSwitch.css";

interface ToggleSwitchOption {
  label: string;
  value: string;
}

interface ToggleSwitchProps {
  options: ToggleSwitchOption[];
  name: string;
  initialValue?: string;
  onChange?: (value: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  options,
  name,
  initialValue,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(
    initialValue || options[0].value
  );

  const handleChange = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      <div className="toggle-container">
        <div
          className={`selected ${
            selectedValue === options[0].value ? "left" : "right"
          }`}
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
