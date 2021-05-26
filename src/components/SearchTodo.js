import React from "react";
import { useForm } from "../components/hook/useForm";
import "./styles/SearchTodo.css";

export const SearchTodo = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().lenght <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAdd(newTodo);
    reset();
  };

  return (
    <div className="search-input">
      <h2>Add Todos</h2>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              name="description"
              value={description}
              onChange={handleInputChange}
              placeholder="Save something..."
              autoComplete="off"
            />
          </div>

          <div className="col-4">
            <button type="submit" className=" btn btn-success form-control">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
