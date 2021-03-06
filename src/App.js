import React from "react";

import react from "../src/assets/react.svg";
import "./App.scss";
import { categories } from "./helpers/data";
import Card from "./card/Card";

console.log(categories[0]);

function App() {
  return (
    <>
      <img src={react} className="App-logo" alt="logo" />
      <div className="container">
        <div className="bars"></div>
        <h1 className="header">Languages</h1>
        <div className="card">
          {categories.map((category, index) => {
            return <Card key={index} category={category} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
