import React, { useReducer, useEffect } from "react";
import { SearchTodo } from "./components/SearchTodo";
import { todoReducer } from "./components/reducer/todoReducer";
import { TodoGrid } from "./components/TodoGrid";
import "./todoapp.css";

const init = () => {
// return{
//   id: new Date().getTime(),
//   desc: 'Aprender react',
//   done: false
// }
return JSON.parse(localStorage.getItem("todos")) || [];
};

// const initialState = [
//   {
//     id: new Date().getTime(),
//     desc: "Aprender react",
//     done: false,
//   },
// ];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleDelete = (todoId) => {

    console.log('ID:', todoId)

    const action = {
      type: 'delete',
      payload: todoId,
    };

    dispatch(action);
  };

  const handleAdd = (newTodo) => {

  

    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">Todo App</h1>
      <hr />

      <SearchTodo handleAdd={handleAdd} />

      <TodoGrid handleDelete={handleDelete} todos={todos} />
    </div>
  );
};

export default TodoApp;
