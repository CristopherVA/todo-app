import React from "react";
import { v4 as uuidv4 } from "uuid";
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
      id: uuidv4(),
      desc: description,
      done: false,
    };

    handleAdd(newTodo);
    reset();
  };

  return (
    <div className="search-input">
     

      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder="Save something..."
          autoComplete="off"
        />

        <button type="submit" className=" btn btn-success form-control mt-3">
          Add
        </button>
      </form>
    </div>
  );
};
