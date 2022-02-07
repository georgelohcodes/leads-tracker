/*global chrome*/
import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import useStickyState from "./Hooks/useStickyState";
import ListItem from "./ListItem";

function App() {
  const [leads, setLeads] = useStickyState([], "leads");
  const [input, setInput] = useState("");

  console.log(`leads: ${leads}`);

  function saveInput() {
    setLeads((prev) => [...prev, { url: input, id: nanoid() }]);
  }

  function saveTab() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      let tabURL = tabs[0].url;
      setLeads((prev) => [...prev, { url: tabURL, id: nanoid() }]);
    });
  }

  function deleteAll() {
    setLeads([]);
  }

  function deleteListItem(id) {
    setLeads((prev) => prev.filter((item) => item.id !== id));
  }

  function checkDeleteAll() {
    const result = window.confirm("Do you want to delete everything?");
    if (result) {
      deleteAll();
    }
  }

  return (
    <div className="App">
      <h1>Leads Tracker</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter URL or Input here"
      />

      <div id="buttons" className="mb-3">
        <button className="btn btn-primary" onClick={saveInput}>
          Save Input
        </button>
        <button className="btn btn-success" onClick={saveTab}>
          Save Tab
        </button>
        <button className="btn btn-danger" onClick={checkDeleteAll}>
          Delete All
        </button>
      </div>

      <div>
        {leads.length > 0 &&
          leads.map((lead) => (
            <ListItem
              key={lead.id}
              content={lead.url}
              deleteListItem={() => deleteListItem(lead.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
