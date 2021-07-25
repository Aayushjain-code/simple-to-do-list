import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  //Use State
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  // Adding Items
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  //Delete Items
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          placeholder="To Do Items..."
        />
        <button onClick={addItem}>
          <span>Add Items</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onClick={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
