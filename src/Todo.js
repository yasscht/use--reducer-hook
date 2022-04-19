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
      <button>delete</button>
    </div>
  );
};

export default Todo;
