import React from "react";
import react from '../src/assets/react.svg';
import './App.scss';
import {categories} from "./helpers/data"

import Card from "./card/Card"

function App() {
  return (
    <div className="App">
      <img src={react} className="App-logo" alt="logo" />
      <div className="container">
          <h1 className="header">Languages</h1>
          <div className="card">
            {categories.map((category, index) => {
              return <Card key={index} category={category} />
            })}
          </div>

      </div>
        
    </div>
  );
}

export default App;
