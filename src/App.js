import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";
const ACTIONS = {
  ADD_TODO: "add-todo",
};
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
  }
};
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo(name) });
  };
  const newTodo = (name) => ({ id: Date.now(), name: name, isComplet: false });
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
    </div>
  );
}

export default App;
