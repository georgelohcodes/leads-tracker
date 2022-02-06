/*global chrome*/
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div id="buttons">
        <button className="btn btn-primary" onClick={saveInput}>
          Save Input
        </button>
        <button className="btn btn-success" onClick={saveTab}>
          Save Tab
        </button>
        <button className="btn btn-danger">Delete All</button>
      </div>
    </div>
  );
}

export default App;
