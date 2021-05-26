import React from "react";

import "./styles/TodoItems.css";

export const TodoItems = ({ index, todos, handleDelete }) => {
  return (
    <div>
      <div className="items-container">
        <li className="todo-items">
          <h4 className="ml-4">{index + 1}.  {todos.desc}</h4>
          <button onClick={ () => handleDelete(todos.id)} className="btn btn-danger mr-4">Delete</button>
        </li>
      </div>
    </div>
  );
};
