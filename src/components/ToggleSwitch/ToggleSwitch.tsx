import React from "react";

interface PlaceholderProps {
  text?: string;
  className?: string;
}

const ToggleSwitch: React.FC<PlaceholderProps> = ({
  text = "Loading...",
  className,
}) => {
  return <div className={`placeholder ${className}`}>{text}</div>;
};

export default ToggleSwitch;
