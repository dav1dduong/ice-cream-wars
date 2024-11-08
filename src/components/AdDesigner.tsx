import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Trump");
  const [darkTheme, setDarkTheme] = useState(false);
  const [fontSize, setFontSize] = useState(50);
  const width = fontSize * 5;
  return (
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h2>Ad Designer</h2>
      <div
        className={`vote ${darkTheme === true ? "dark-theme" : "light-theme"}`}
        style={{ width: width + "px" }}
      >
        <p>Vote for</p>
        <p style={{ fontSize: fontSize + "px" }}>{flavor}</p>
      </div>
      <p>What to Support:</p>
      <button
        className={`${flavor === "Chocolate" ? "disabled" : "active"} `}
        disabled={flavor === "Chocolate" ? true : false}
        onClick={() => {
          setFlavor("Chocolate");
        }}
      >
        Chocolate
      </button>
      <button
        className={`${flavor === "Strawberry" ? "disabled" : "active"}`}
        disabled={flavor === "Strawberry" ? true : false}
        onClick={() => {
          setFlavor("Strawberry");
        }}
      >
        Strawberry
      </button>
      <button
        className={`${flavor === "Vanilla" ? "disabled" : "active"}`}
        disabled={flavor === "Vanilla" ? true : false}
        onClick={() => {
          setFlavor("Vanilla");
        }}
      >
        Vanilla
      </button>
      <p>Color Theme</p>
      <button
        disabled={!darkTheme}
        onClick={() => {
          setDarkTheme(false);
        }}
      >
        Light
      </button>
      <button
        disabled={darkTheme === true ? true : false}
        onClick={() => {
          setDarkTheme(true);
        }}
      >
        Dark
      </button>
      <p>Font Size</p>
      <div className="fontSize">
        <button
          onClick={() => {
            setFontSize(fontSize - 1);
          }}
        >
          Down
        </button>
        <p>{fontSize}</p>
        <button
          onClick={() => {
            setFontSize(fontSize + 1);
          }}
        >
          Up
        </button>
      </div>
    </div>
  );
};

export default AdDesigner;
