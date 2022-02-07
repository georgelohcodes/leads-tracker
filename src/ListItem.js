import React from "react";
import "./ListItem.css";

export default function ListItem({ content, deleteListItem }) {
  return (
    <div className="list-item">
      <a href={content} target="_blank">
        {content}
      </a>
      <button onClick={deleteListItem} className="btn btn-warning">
        Delete
      </button>
    </div>
  );
}
