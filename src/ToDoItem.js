import React from "react";
function ToDoItem(props) {
  return (
    <li>
      {props.text}{" "}
      <button
        onClick={() => {
          props.onClick(props.id);
        }}
      >
        Delete Item
      </button>
    </li>
  );
}

export default ToDoItem;
