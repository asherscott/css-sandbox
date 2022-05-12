import "./App.css";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Home from "./Home";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="app">
      {isLoaded ? (
        <div>
          <Home />
        </div>
      ) : (
        <div>
          <span>{"<ProgressBar />"}</span>
          <ProgressBar />

          <button onClick={() => setIsLoaded(true)}>Load</button>
        </div>
      )}
    </div>
  );
}

export default App;
