import React from 'react';
import "./styles/TodoItems.css";

export const TodoItems = ({ index, todo, handleDelete }) => {

  return (
    <div>
      <div className="items-container">
        <li className="todo-items">
          <h4 className="ml-4">{index + 1}.  {todo.desc}</h4>
          <button
            className="btn btn-danger mr-4"
            onClick={ () => handleDelete(todo.id)} 
          >Delete</button>
        </li>
      </div>
    </div>
  );
  
};
