import React from 'react';
import "./button.css"
import "../../../public/cssLibrary/allStyles.css";

const Button = (props) => {
    const { className } = props;
    return (
    <button className={`button ${className}`}>Кнопка</button>
    );
};

export default Button;