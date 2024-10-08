import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Button from './components/Buttons/Button';
import buttonsData from './data/buttonsData';
import Header from './components/Header/Header';

const App = () => {
  const [loadedButtonsData, setLoadedButtonsData] = useState([]);

  useEffect(() => {
    const loadCssContent = async () => {
      const updatedButtonsData = await Promise.all(
        buttonsData.map(async button => {
          if (button.code instanceof Promise) {
            const cssContent = await button.code;
            return { ...button, code: cssContent };
          }
          return button;
        })
      );
      setLoadedButtonsData(updatedButtonsData);
    };

    loadCssContent();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {loadedButtonsData.map(button => (
          <Card key={button.id} title={button.title} code={button.code}>
            <Button className={button.buttonClass} />
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default App;