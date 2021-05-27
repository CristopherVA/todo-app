import React from "react";
import { TodoItems } from "./TodoItems";
import "./styles/TodoGrid.css";

export const TodoGrid = ({ todos, handleDelete }) => {
  return (


    <div className="todo-grid mt-4">
      <ul>
        {
          todos.map((todo, i) => (
            <TodoItems key={todo.id} index={i} todo={todo} handleDelete={handleDelete} />
          ))
        }
      </ul>
    </div>
  );
};
