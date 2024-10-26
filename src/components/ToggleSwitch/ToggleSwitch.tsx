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
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="container">
      <div className="toggle-switch">
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleSwitch;
