/*global chrome*/
import { useState } from "react";
import "./App.css";
import useStickyState from "./Hooks/useStickyState";

function App() {
  const [leads, setLeads] = useStickyState([], "leads");
  const [input, setInput] = useState("");

  console.log(`leads: ${leads}`);

  function saveInput() {
    setLeads((prev) => [...prev, input]);
  }

  function saveTab() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      let tabURL = tabs[0].url;
      setLeads((prev) => [...prev, tabURL]);
    });
  }

  function deleteAll() {
    setLeads([]);
  }

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
        <button className="btn btn-danger" onDoubleClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>
  );
}

export default App;
