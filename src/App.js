import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [newCounter, setNewCounter] = useState(0);

  const Increase = () => {
    setNewCounter((newCounter) => newCounter + 1);
  };
  const Decrease = () => {
    if (newCounter > 0) {
      setNewCounter((newCounter) => newCounter - 1);
    }
  };

  return (
    <div className="App">
      <h1>{newCounter}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
}

export default App;
