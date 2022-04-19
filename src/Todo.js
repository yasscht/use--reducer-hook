import React from "react";
import { ACTIONS } from "./App";
const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <p style={{ color: todo?.isComplet ? "#AAA" : "#EEE" }}>
        {" "}
        {todo?.name}
        {todo?.id}
      </p>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo?.id } })
        }
      >
        toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        delete
      </button>
    </div>
  );
};

export default Todo;
