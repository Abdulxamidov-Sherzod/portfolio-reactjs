import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Ax = () => {
  const [todo, newTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    newTodo(e.target.value);
    console.log(todo);
  };

  const submit = (e) => {
    e.preventDefault();
    setTodos([...todos]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3 text-center mt-5">
          <input
            name="todo"
            type="text"
            placeholder="Enter name ..."
            onChange={handleInput}
          />
          <button onClick={submit}>Add</button>
        </div>
      </div>
      <div className="row">
        {todos.map((todo) => (
          <ul key={todo.id}>
            <li>{todo.text}</li>
            <li>{todo.id}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Ax;
