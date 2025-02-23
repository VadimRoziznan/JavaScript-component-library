import React from "react";
import "./button.css";
import "../cssLibrary/allStyles.css";

const Button = (props) => {
  const { className } = props;
  return <button className={`button ${className}`}>Наведи на меня</button>;
};

export default Button;
