import React from "react";

export default function ListItem({ content, deleteListItem }) {
  return (
    <li>
      <button onClick={deleteListItem}>Delete</button>
      {content}
    </li>
  );
}
