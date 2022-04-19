import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import { useReducer, useState } from "react";
import { act } from "react-dom/test-utils";
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isComplet: !todo.isComplet };
        }
        return todo;
      });
    default:
      return todos;
  }
};
const newTodo = (name) => {
  return { id: Date.now(), name: name, isComplet: false };
};
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();

    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };
  console.log(todos);
  return (
    <div className="App">
      <h1>React reducer demo</h1>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo?.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default App;
