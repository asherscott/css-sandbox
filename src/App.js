import "./App.css";
import ProgressBar from "./ProgressBar";

function App() {
  return (
    <div className="app">
      <h1>css-sandbox</h1>

      <div>
        <span>{"<ProgressBar />"}</span>
        <ProgressBar />
      </div>
    </div>
  );
}

export default App;
