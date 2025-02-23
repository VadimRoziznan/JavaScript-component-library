import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Button from "./components/Buttons/Button";
import buttonsData from "./data/buttonsData";
import Header from "./components/Header/Header";
import { AppearanceText1 } from "./components/AppearanceText/AppearanceText1";
import { AppearanceText2 } from "./components/AppearanceText/AppearanceText2";
import { AppearanceText3 } from "./components/AppearanceText/AppearanceText3";
import { MutatingFrame } from "./components/MutatingFrame/MutatingFrame";

const App = () => {
  const [loadedButtonsData, setLoadedButtonsData] = useState([]);

  useEffect(() => {
    const loadCssContent = async () => {
      const updatedButtonsData = await Promise.all(
        buttonsData.map(async (button) => {
          if (button.code instanceof Promise) {
            const cssContent = await button.code;
            return { ...button, code: cssContent };
          }
          return button;
        }),
      );
      setLoadedButtonsData(updatedButtonsData);
    };

    loadCssContent();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div>
        <p
          style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}
        >
          Простые hover эффекты
        </p>
        <p
          style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold" }}
        >
          Нажми на пустую область элемента
        </p>
        <div className="container">
          {loadedButtonsData.map((button) => (
            <Card key={button.id} title={button.title} code={button.code}>
              <Button className={button.buttonClass} />
            </Card>
          ))}
        </div>
      </div>
      <div>
        <p
          style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}
        >
          Сложные hover эффекты
        </p>
        <div
          className=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <AppearanceText1 />
          <AppearanceText2 />
          <AppearanceText3 />
        </div>
      </div>
      <div>
        <p
          style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}
        >
          Меняющиеся рамки
        </p>
        <div
          className=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <MutatingFrame />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
