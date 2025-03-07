import React, { useState, useEffect, useRef } from "react";
import "./card.css";

// Импортируем Prism.js
import Prism from "prismjs";
// Импортируем стили для подсветки
import "prismjs/themes/prism.css";

// Если вам нужна поддержка других языков, не забудьте их импортировать
// Например, для JSX или JavaScript
import "prismjs/components/prism-jsx";
// import 'prismjs/components/prism-javascript';

const Card = (props) => {
  const { title, children, code } = props;
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const cardBackRef = useRef(null);

  console.log("code", code);

  useEffect(() => {
    // Применяем подсветку синтаксиса
    Prism.highlightAll();
  }, [flipped, code]); // Подсветка применяется при изменении состояния или кода

  useEffect(() => {
    if (cardBackRef.current) {
      const cardBackHeight = cardBackRef.current.offsetHeight;
      cardRef.current.style.height = `${cardBackHeight}px`;
    }
  }, [flipped, code]);

  const handleFlip = (event) => {
    let currentElement = event.target;
    while (currentElement) {
      if (currentElement.classList.contains("no-flip")) {
        return;
      }
      currentElement = currentElement.parentElement;
    }
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          <h2>{title}</h2>
          <div className="no-flip">{children}</div>
        </div>
        <div className="card-back">
          <h2>Подробное описание</h2>
          <p>Описание структуры элемента</p>
          <pre>
            <code className="language-css no-flip">{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Card;
